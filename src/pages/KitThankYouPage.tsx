import { ArrowRight, CheckCircle2, MailCheck, MessageCircle, SearchCheck } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { links } from '../data/links';

export function KitThankYouPage() {
  return (
    <div className="bg-brand-bg text-brand-text font-sans min-h-screen selection:bg-brand-accent/30">
      <Header />
      <main>
        <section className="pt-32 pb-16 md:pt-44 md:pb-20 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-brand-accent text-sm font-semibold mb-6 px-4 py-2 rounded-full border border-brand-accent/30 bg-brand-accent/5">
                <CheckCircle2 size={18} />
                Compra confirmada
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Compra confirmada. Seu Kit está quase pronto.
              </h1>

              <p className="text-base md:text-lg text-brand-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                As instruções de acesso ao Kit de Execução da Primeira Oferta foram enviadas para o e-mail usado na compra.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-8 bg-brand-accent/20 blur-[90px] rounded-full pointer-events-none" />
              <div className="relative rounded-[2rem] overflow-hidden border border-brand-border bg-brand-card shadow-2xl">
                <img
                  src="/images/mockup-kit-primeira-oferta.png"
                  alt="Mockup do Kit de Execução da Primeira Oferta"
                  width={900}
                  height={560}
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-auto object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 px-6 bg-brand-card/30">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
            <article className="bg-brand-card border border-brand-border rounded-[2rem] p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-56 h-56 bg-brand-accent/10 blur-[80px] rounded-full pointer-events-none" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-brand-bg border border-brand-border flex items-center justify-center text-brand-accent mb-6">
                  <MailCheck size={24} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Verifique seu e-mail</h2>
                <p className="text-brand-muted text-base md:text-lg leading-relaxed">
                  Procure por uma mensagem com o acesso ao Kit. Caso não encontre, verifique também a caixa de spam, promoções ou lixo eletrônico.
                </p>
              </div>
            </article>

            <article className="bg-brand-card border border-brand-border rounded-[2rem] p-8 md:p-10">
              <div className="w-12 h-12 rounded-xl bg-brand-bg border border-brand-border flex items-center justify-center text-brand-accent mb-6">
                <SearchCheck size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Não recebeu?</h2>
              <p className="text-brand-muted text-base md:text-lg leading-relaxed mb-8">
                Se você comprou o Kit e não encontrou o e-mail de acesso, fale comigo pelo WhatsApp informando o e-mail usado na compra.
              </p>
              <a
                href={links.contactUrl}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-brand-accent text-brand-bg px-8 py-4 rounded-xl font-semibold hover:bg-brand-accent-light transition-colors"
              >
                Falar no WhatsApp <MessageCircle size={20} />
              </a>
            </article>
          </div>
        </section>

        <section className="py-20 md:py-28 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-brand-card border border-brand-border/50 p-8 md:p-14 rounded-3xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(245,197,66,0.14),transparent_42%)] pointer-events-none" />

              <div className="relative z-10">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-brand-bg border border-brand-border flex items-center justify-center text-brand-accent mb-6">
                  <MailCheck size={26} />
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5">A entrega acontece pelo seu e-mail.</h2>
                <p className="text-brand-muted text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                  O acesso ao Kit é enviado automaticamente para compradores do Kit e para quem adicionou o Kit como order bump no checkout do ebook.
                </p>

                <a
                  href={links.contactUrl}
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-brand-bg text-brand-text border border-brand-border px-8 py-4 rounded-xl font-semibold hover:border-brand-accent/50 hover:text-brand-accent transition-colors"
                >
                  Preciso de ajuda <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
