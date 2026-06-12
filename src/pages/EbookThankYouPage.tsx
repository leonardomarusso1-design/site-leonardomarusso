import { CheckCircle2, MailCheck, MessageCircle, ShieldCheck } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { links } from '../data/links';

const instructions = [
  'Verifique sua caixa de entrada no e-mail usado na compra.',
  'Confira também spam, promoções ou lixo eletrônico.',
  'O link enviado por e-mail é individual e protegido.',
  'Se tiver problema, responda o e-mail recebido ou entre em contato com Leonardo Marusso.',
];

export function EbookThankYouPage() {
  return (
    <div className="bg-brand-bg text-brand-text font-sans min-h-screen selection:bg-brand-accent/30">
      <Header />
      <main>
        <section className="pt-32 pb-20 md:pt-44 md:pb-28 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-brand-card border border-brand-border/50 p-8 md:p-14 rounded-[2rem] relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(245,197,66,0.16),transparent_42%)] pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 text-brand-accent text-sm font-semibold mb-6 px-4 py-2 rounded-full border border-brand-accent/30 bg-brand-accent/5">
                  <CheckCircle2 size={18} />
                  Pagamento aprovado
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                  Compra confirmada!
                </h1>

                <p className="text-base md:text-lg text-brand-muted max-w-2xl mx-auto leading-relaxed mb-10">
                  Seu acesso ao ebook foi enviado para o e-mail usado na compra.
                </p>

                <div className="max-w-md mx-auto mb-10 rounded-2xl overflow-hidden border border-brand-border bg-brand-bg shadow-xl">
                  <img
                    src="/images/mockup-ebook-primeira-oferta.png"
                    alt="Mockup do ebook Do Zero à Primeira Oferta"
                    width={640}
                    height={400}
                    loading="eager"
                    fetchPriority="high"
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  {instructions.map((item, index) => (
                    <article key={item} className="bg-brand-bg border border-brand-border rounded-2xl p-5 flex gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-xl bg-brand-card border border-brand-border flex items-center justify-center text-brand-accent">
                        {index === 0 ? <MailCheck size={20} /> : index === 2 ? <ShieldCheck size={20} /> : <CheckCircle2 size={20} />}
                      </div>
                      <p className="text-brand-muted leading-relaxed">{item}</p>
                    </article>
                  ))}
                </div>

                <div className="mt-10 bg-brand-bg border border-brand-border rounded-2xl p-6 text-left">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                    <div>
                      <h2 className="text-xl font-bold mb-2">Precisa de ajuda?</h2>
                      <p className="text-brand-muted leading-relaxed">
                        Fale comigo informando o e-mail usado na compra para localizar seu acesso.
                      </p>
                    </div>
                    <a
                      href={links.contactUrl}
                      className="inline-flex items-center justify-center gap-2 bg-brand-accent text-brand-bg px-6 py-3 rounded-xl font-semibold hover:bg-brand-accent-light transition-colors"
                    >
                      Entrar em contato <MessageCircle size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
