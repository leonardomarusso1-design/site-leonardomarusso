import { ArrowRight, CheckCircle2, ClipboardCheck, FileText, MessageCircle, ShieldCheck, Sparkles, Table2, Tag } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { links } from '../data/links';

const kitPassword = 'kitdacomunidade0406';

const kitItems = [
  { title: '50 prompts premium', icon: <Sparkles size={24} /> },
  { title: 'Checklist da primeira oferta', icon: <ClipboardCheck size={24} /> },
  { title: 'Modelo de oferta', icon: <FileText size={24} /> },
  { title: 'Mensagens de WhatsApp', icon: <MessageCircle size={24} /> },
  { title: 'Modelo de precificação', icon: <Tag size={24} /> },
  { title: 'Planilha de clientes', icon: <Table2 size={24} /> },
];

const steps = [
  {
    number: '01',
    title: 'Comece pelo checklist.',
  },
  {
    number: '02',
    title: 'Use os prompts para estruturar sua ideia.',
  },
  {
    number: '03',
    title: 'Monte sua oferta e suas mensagens.',
  },
  {
    number: '04',
    title: 'Faça os primeiros contatos e acompanhe tudo na planilha.',
  },
];

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
                Acesso liberado
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Seu Kit de Execução está liberado.
              </h1>

              <p className="text-base md:text-lg text-brand-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Agora você tem acesso aos materiais práticos para aplicar o ebook Do Zero à Primeira Oferta com mais velocidade.
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
          <div className="max-w-5xl mx-auto">
            <div className="bg-brand-card border border-brand-border rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 blur-[80px] rounded-full pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 lg:gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-brand-bg border border-brand-border flex items-center justify-center text-brand-accent">
                      <ShieldCheck size={24} />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">Acesse o Kit Primeira Oferta</h2>
                  </div>

                  <p className="text-brand-muted text-base md:text-lg leading-relaxed mb-8">
                    Clique no botão abaixo e use a senha informada nesta página para acessar os materiais.
                  </p>

                  <a
                    href={links.kitAccessUrl}
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-brand-accent text-brand-bg px-8 py-4 rounded-xl font-semibold hover:bg-brand-accent-light transition-colors"
                  >
                    Acessar Kit agora <ArrowRight size={20} />
                  </a>
                </div>

                <div className="bg-brand-bg border border-brand-border rounded-2xl p-6">
                  <p className="text-brand-muted text-sm mb-3">Senha de acesso</p>
                  <div className="bg-brand-card border border-brand-accent/30 rounded-xl px-4 py-4 text-brand-accent font-bold text-lg break-all">
                    {kitPassword}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold">O que tem dentro</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {kitItems.map((item) => (
                <article key={item.title} className="bg-brand-card border border-brand-border rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-bg border border-brand-border flex items-center justify-center text-brand-accent mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 px-6 bg-brand-card/30">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold">Como usar</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {steps.map((step) => (
                <article key={step.number} className="bg-brand-card border border-brand-border rounded-2xl p-6">
                  <span className="text-brand-accent text-sm font-bold mb-4 block">{step.number}</span>
                  <h3 className="text-lg font-bold leading-snug">{step.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-brand-card border border-brand-border/50 p-8 md:p-14 rounded-3xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(245,197,66,0.14),transparent_42%)] pointer-events-none" />

              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5">Agora é execução.</h2>
                <p className="text-brand-muted text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                  O Kit foi criado para você sair da teoria e começar a aplicar o que aprendeu no ebook.
                </p>

                <a
                  href={links.kitAccessUrl}
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-brand-accent text-brand-bg px-8 py-4 rounded-xl font-semibold hover:bg-brand-accent-light transition-colors"
                >
                  Abrir Kit <ArrowRight size={20} />
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
