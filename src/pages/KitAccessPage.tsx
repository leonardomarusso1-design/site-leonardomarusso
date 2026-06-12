import { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, KeyRound, Loader2, ShieldAlert } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

type AccessState =
  | { status: 'loading' }
  | { status: 'missing-token' }
  | { status: 'error'; message: string }
  | {
      status: 'success';
      kitUrl: string;
      kitPassword: string;
      remainingUses?: number;
    };

type ValidateAccessResponse = {
  ok: boolean;
  error?: string;
  kit_url?: string;
  kit_password?: string;
  remaining_uses?: number;
};

export function KitAccessPage() {
  const token = useMemo(() => new URLSearchParams(window.location.search).get('token'), []);
  const [state, setState] = useState<AccessState>(() => (token ? { status: 'loading' } : { status: 'missing-token' }));

  useEffect(() => {
    if (!token) {
      return;
    }

    let isMounted = true;

    async function validateAccess() {
      try {
        const response = await fetch('/api/validate-access', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            token,
            product: 'kit',
          }),
        });

        const data = (await response.json()) as ValidateAccessResponse;

        if (!isMounted) {
          return;
        }

        if (!response.ok || !data.ok || !data.kit_url || !data.kit_password) {
          setState({
            status: 'error',
            message: data.error || 'Não foi possível validar este acesso.',
          });
          return;
        }

        setState({
          status: 'success',
          kitUrl: data.kit_url,
          kitPassword: data.kit_password,
          remainingUses: data.remaining_uses,
        });
      } catch {
        if (isMounted) {
          setState({
            status: 'error',
            message: 'Não foi possível validar este acesso.',
          });
        }
      }
    }

    validateAccess();

    return () => {
      isMounted = false;
    };
  }, [token]);

  return (
    <div className="bg-brand-bg text-brand-text font-sans min-h-screen selection:bg-brand-accent/30">
      <Header />
      <main className="pt-32 pb-20 md:pt-44 md:pb-28 px-6">
        <section className="max-w-4xl mx-auto">
          <div className="bg-brand-card border border-brand-border/50 p-8 md:p-14 rounded-[2rem] relative overflow-hidden text-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(245,197,66,0.14),transparent_42%)] pointer-events-none" />

            <div className="relative z-10">
              {state.status === 'loading' && <LoadingState />}
              {state.status === 'missing-token' && (
                <ErrorState title="Link de acesso inválido." message="Use o link recebido por e-mail para liberar o acesso ao Kit." />
              )}
              {state.status === 'error' && (
                <ErrorState title="Não foi possível liberar seu acesso" message={state.message} />
              )}
              {state.status === 'success' && (
                <SuccessState
                  kitUrl={state.kitUrl}
                  kitPassword={state.kitPassword}
                  remainingUses={state.remainingUses}
                />
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function LoadingState() {
  return (
    <>
      <div className="w-14 h-14 mx-auto rounded-2xl bg-brand-bg border border-brand-border flex items-center justify-center text-brand-accent mb-6">
        <Loader2 size={26} className="animate-spin" />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Validando seu acesso...</h1>
      <p className="text-brand-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
        Estamos conferindo seu token para liberar o Kit com segurança.
      </p>
    </>
  );
}

function ErrorState({ title, message }: { title: string; message: string }) {
  return (
    <>
      <div className="w-14 h-14 mx-auto rounded-2xl bg-brand-bg border border-brand-border flex items-center justify-center text-brand-accent mb-6">
        <ShieldAlert size={26} />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
      <p className="text-brand-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
        {message}
      </p>
      <a
        href="/ebook"
        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-brand-bg text-brand-text border border-brand-border px-8 py-4 rounded-xl font-semibold hover:border-brand-accent/50 hover:text-brand-accent transition-colors"
      >
        <ArrowLeft size={20} /> Voltar para o ebook
      </a>
    </>
  );
}

function SuccessState({
  kitUrl,
  kitPassword,
  remainingUses,
}: {
  kitUrl: string;
  kitPassword: string;
  remainingUses?: number;
}) {
  return (
    <>
      <div className="w-14 h-14 mx-auto rounded-2xl bg-brand-bg border border-brand-border flex items-center justify-center text-brand-accent mb-6">
        <CheckCircle2 size={26} />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Seu Kit está liberado</h1>
      <p className="text-brand-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
        Use o link e a senha abaixo para acessar o Kit de Execução.
      </p>

      <div className="max-w-xl mx-auto bg-brand-bg border border-brand-border rounded-2xl p-6 mb-8 text-left">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-brand-card border border-brand-border flex items-center justify-center text-brand-accent">
            <KeyRound size={20} />
          </div>
          <div>
            <p className="text-brand-muted text-sm">Senha de acesso</p>
            <p className="text-brand-accent font-bold text-lg break-all">{kitPassword}</p>
          </div>
        </div>
        <p className="text-brand-muted text-sm leading-relaxed">
          Copie a senha antes de abrir o Kit.
        </p>
      </div>

      {typeof remainingUses === 'number' && (
        <div className="inline-flex items-center justify-center bg-brand-bg border border-brand-border rounded-xl px-5 py-3 text-brand-muted mb-8">
          Usos restantes: <span className="text-brand-accent font-bold ml-2">{remainingUses}</span>
        </div>
      )}

      <a
        href={kitUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-brand-accent text-brand-bg px-8 py-4 rounded-xl font-semibold hover:bg-brand-accent-light transition-colors"
      >
        Acessar Kit <ExternalLink size={20} /> <ArrowRight size={20} />
      </a>
    </>
  );
}
