import { randomBytes } from 'crypto';
import { createClient } from '@supabase/supabase-js';

type AccessProduct = 'ebook' | 'kit';

type CreateAccessBody = {
  product?: AccessProduct;
  order_id?: string;
  order_ref?: string;
  customer_email?: string;
  customer_name?: string;
};

const SITE_URL = 'https://www.leonardomarusso.com.br';
const TOKEN_TTL_DAYS = 30;

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const configuredSecret = process.env.ACCESS_API_SECRET;
  const receivedSecret = req.headers['x-access-secret'];

  if (!configuredSecret || receivedSecret !== configuredSecret) {
    return res.status(401).json({ ok: false, error: 'Unauthorized' });
  }

  const body = await readBody(req);

  if (!isValidBody(body)) {
    return res.status(400).json({ ok: false, error: 'Invalid request body' });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    return res.status(500).json({ ok: false, error: 'Internal server error' });
  }

  const token = randomBytes(32).toString('hex');
  const expiresAt = new Date(Date.now() + TOKEN_TTL_DAYS * 24 * 60 * 60 * 1000).toISOString();
  const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

  const { error } = await supabase.from('access_tokens').insert({
    token,
    product: body.product,
    order_id: body.order_id ?? null,
    order_ref: body.order_ref ?? null,
    customer_email: body.customer_email,
    customer_name: body.customer_name ?? null,
    status: 'active',
    max_uses: 3,
    used_count: 0,
    expires_at: expiresAt,
  });

  if (error) {
    return res.status(500).json({ ok: false, error: 'Internal server error' });
  }

  const accessPath = body.product === 'kit' ? '/acesso-kit' : '/acesso-ebook';

  return res.status(200).json({
    ok: true,
    token,
    access_url: `${SITE_URL}${accessPath}?token=${encodeURIComponent(token)}`,
  });
}

async function readBody(req: any): Promise<CreateAccessBody> {
  if (req.body && typeof req.body === 'object') {
    return req.body;
  }

  if (typeof req.body === 'string') {
    return parseJson(req.body);
  }

  const chunks: Buffer[] = [];

  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }

  return parseJson(Buffer.concat(chunks).toString('utf8'));
}

function parseJson(value: string): CreateAccessBody {
  try {
    return JSON.parse(value || '{}');
  } catch {
    return {};
  }
}

function isValidBody(body: CreateAccessBody): body is Required<Pick<CreateAccessBody, 'product' | 'customer_email'>> & CreateAccessBody {
  return (
    (body.product === 'ebook' || body.product === 'kit') &&
    typeof body.customer_email === 'string' &&
    body.customer_email.trim().length > 0
  );
}
