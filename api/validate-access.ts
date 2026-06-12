import { createClient } from '@supabase/supabase-js';

type AccessProduct = 'ebook' | 'kit';

type ValidateAccessBody = {
  token?: string;
  product?: AccessProduct;
};

type AccessTokenRow = {
  token: string;
  product: AccessProduct;
  status: string;
  used_count: number;
  max_uses: number;
  expires_at: string;
};

const SIGNED_URL_TTL_SECONDS = 10 * 60;
const SIGNED_URL_TTL_MINUTES = 10;

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const body = await readBody(req);

  if (!isValidBody(body)) {
    return res.status(400).json({ ok: false, error: 'Dados de acesso inválidos.' });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl) {
    console.error('Missing SUPABASE_URL');
    return res.status(500).json({ ok: false, error: 'Internal server error' });
  }

  if (!supabaseServiceRoleKey) {
    console.error('Missing SUPABASE_SERVICE_ROLE_KEY');
    return res.status(500).json({ ok: false, error: 'Internal server error' });
  }

  const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

  const { data, error: selectError } = await supabase
    .from('access_tokens')
    .select('token, product, status, used_count, max_uses, expires_at')
    .eq('token', body.token)
    .eq('product', body.product)
    .eq('status', 'active')
    .maybeSingle<AccessTokenRow>();

  if (selectError) {
    console.error('Supabase token lookup error', selectError);
    return res.status(500).json({ ok: false, error: 'Internal server error' });
  }

  if (!data) {
    return res.status(404).json({ ok: false, error: 'Acesso inválido ou expirado.' });
  }

  if (new Date(data.expires_at).getTime() < Date.now()) {
    const { error: expireError } = await supabase
      .from('access_tokens')
      .update({ status: 'expired' })
      .eq('token', body.token)
      .eq('product', body.product);

    if (expireError) {
      console.error('Supabase expire token error', expireError);
    }

    return res.status(403).json({ ok: false, error: 'Este acesso expirou.' });
  }

  if (data.used_count >= data.max_uses) {
    return res.status(403).json({ ok: false, error: 'Limite de acessos atingido.' });
  }

  if (body.product === 'kit') {
    return res.status(501).json({ ok: false, error: 'Acesso ao kit ainda não implementado.' });
  }

  const storageBucket = process.env.SUPABASE_STORAGE_BUCKET;
  const ebookFilePath = process.env.EBOOK_FILE_PATH;

  if (!storageBucket) {
    console.error('Missing SUPABASE_STORAGE_BUCKET');
    return res.status(500).json({ ok: false, error: 'Internal server error' });
  }

  if (!ebookFilePath) {
    console.error('Missing EBOOK_FILE_PATH');
    return res.status(500).json({ ok: false, error: 'Internal server error' });
  }

  const { data: signedUrlData, error: signedUrlError } = await supabase.storage
    .from(storageBucket)
    .createSignedUrl(ebookFilePath, SIGNED_URL_TTL_SECONDS);

  if (signedUrlError || !signedUrlData?.signedUrl) {
    console.error('Supabase signed URL error', signedUrlError);
    return res.status(500).json({ ok: false, error: 'Internal server error' });
  }

  const nextUsedCount = data.used_count + 1;
  const lastUsedAt = new Date().toISOString();
  const { error: updateError } = await supabase
    .from('access_tokens')
    .update({
      used_count: nextUsedCount,
      last_used_at: lastUsedAt,
    })
    .eq('token', body.token)
    .eq('product', body.product);

  if (updateError) {
    console.error('Supabase usage update error', updateError);
    return res.status(500).json({ ok: false, error: 'Internal server error' });
  }

  return res.status(200).json({
    ok: true,
    product: 'ebook',
    download_url: signedUrlData.signedUrl,
    expires_in_minutes: SIGNED_URL_TTL_MINUTES,
    remaining_uses: Math.max(data.max_uses - nextUsedCount, 0),
  });
}

async function readBody(req: any): Promise<ValidateAccessBody> {
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

function parseJson(value: string): ValidateAccessBody {
  try {
    return JSON.parse(value || '{}');
  } catch {
    return {};
  }
}

function isValidBody(body: ValidateAccessBody): body is Required<ValidateAccessBody> {
  return (
    typeof body.token === 'string' &&
    body.token.trim().length > 0 &&
    (body.product === 'ebook' || body.product === 'kit')
  );
}
