import { ArrowRight, Check, CheckCircle2, ClipboardCheck, FileText, MailCheck, MessageCircle, Sparkles, Table2, Tag, Wand2 } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { links } from '../data/links';

const kitItems = [
  {
    title: '50 prompts premium',
    description: 'Prompts para estruturar ideias, ofertas, mensagens e materiais com mais velocidade.',
    icon: <Sparkles size={24} />,
  },
  {
    title: 'Checklist da primeira oferta',
    description: 'Um roteiro simples para sair da ideia solta e organizar a execução.',
    icon: <ClipboardCheck size={24} />,
  },
  {
    title: 'Modelo de oferta',
    description: 'Estrutura para definir público, problema, promessa, entrega e próximo passo.',
    icon: <FileText size={24} />,
  },
  {
    title: 'Mensagens prontas de WhatsApp',
    description: 'Modelos de abordagem para iniciar conversas reais com potenciais clientes.',
    icon: <MessageCircle size={24} />,
  },
  {
    title: 'Modelo de precificação',
    description: 'Base para pensar preço, pacote, entrega e valor percebido.',
    icon: <Tag size={24} />,
  },
  {
    title: 'Planilha de clientes',
    description: 'Organização simples para acompanhar contatos, propostas e retornos.',
    icon: <Table2 size={24} />,
  },
];

const audience = [
  'quem leu o ebook e quer aplicar mais rápido',
  'quem quer vender um micro serviço com IA',
  'quem precisa de mensagens prontas para abordar clientes',
  'quem quer organizar clientes, preço e oferta',
];

export function KitPage() {
  return (
    <div className="bg-brand-bg text-brand-text font-sans min-h-screen selection:bg-brand-accent/30">
      <Header />
      <main>
        <section className="pt-32 pb-20 md:pt-44 md:pb-28 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 text-brand-accent text-sm font-semibold uppercase tracking-[0.18em] mb-5">
                <Wand2 size={16} /> Complemento prático
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Kit de Execução da Primeira Oferta
              </h1>
              <p className="text-lg md:text-xl text-brand-muted leading-relaxed mb-8">
                Os materiais práticos para aplicar o ebook, montar sua primeira oferta e começar a vender com mais velocidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href={links.kitCheckoutUrl}
                  className="inline-flex items-center justify-center gap-2 bg-brand-accent text-brand-bg px-8 py-4 rounded-xl font-semibold hover:bg-brand-accent-light transition-colors text-lg"
                >
                  Comprar o Kit agora <ArrowRight size={20} />
                </a>
                <a
                  href="#conteudo-kit"
                  className="inline-flex items-center justify-center bg-brand-card text-brand-text border border-brand-border px-8 py-4 rounded-xl font-medium hover:bg-brand-card-hover hover:border-brand-accent/50 transition-all text-lg"
                >
                  Ver o que recebe
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-8 bg-brand-accent/20 blur-[90px] rounded-full pointer-events-none" />
              <div className="relative bg-brand-card border border-brand-border rounded-[2rem] p-4 md:p-6 shadow-2xl overflow-hidden">
                <img
                  src="/images/mockup-kit-primeira-oferta.png"
                  alt="Mockup do Kit de Execução da Primeira Oferta"
                  width={900}
                  height={560}
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-auto rounded-2xl object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-brand-card/25 border-y border-brand-border/50">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Pare de travar na execução.</h2>
            <p className="text-brand-muted text-lg md:text-xl leading-relaxed">
              Use modelos prontos para transformar uma ideia em uma oferta simples, vendável e organizada.
            </p>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-5">Para quem é</h2>
              <p className="text-brand-muted text-lg leading-relaxed">
                O Kit foi criado para quem já entendeu a lógica da primeira oferta e precisa de materiais para executar.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {audience.map((item) => (
                <article key={item} className="bg-brand-card border border-brand-border rounded-2xl p-5 flex gap-3">
                  <Check size={20} className="text-brand-accent shrink-0 mt-0.5" />
                  <p className="text-brand-muted leading-relaxed">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="conteudo-kit" className="py-24 px-6 bg-brand-card/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-5">O que você recebe</h2>
              <p className="text-brand-muted text-lg max-w-2xl mx-auto leading-relaxed">
                Um conjunto de materiais para reduzir a distância entre aprender e colocar sua oferta na rua.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {kitItems.map((item) => (
                <article key={item.title} className="bg-brand-card border border-brand-border rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-bg border border-brand-border flex items-center justify-center text-brand-accent mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-brand-muted leading-relaxed">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-brand-card border border-brand-border rounded-[2rem] p-8 md:p-12 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 items-start">
              <div className="w-14 h-14 rounded-2xl bg-brand-bg border border-brand-border flex items-center justify-center text-brand-accent">
                <MailCheck size={26} />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-5">Como funciona a entrega</h2>
                <p className="text-brand-muted text-lg leading-relaxed mb-6">
                  Após a compra, o acesso é enviado por e-mail com um link individual e protegido. Esse link libera as instruções de acesso ao Kit de Execução da Primeira Oferta.
                </p>
                <div className="bg-brand-bg border border-brand-border rounded-2xl p-5 flex gap-3">
                  <CheckCircle2 size={22} className="text-brand-accent shrink-0 mt-0.5" />
                  <p className="text-brand-muted leading-relaxed">
                    Por segurança, esta página pública não exibe senha, link protegido ou acesso direto aos materiais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-28 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-brand-card border border-brand-border/50 p-10 md:p-16 rounded-[3rem] relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(245,197,66,0.16),transparent_42%)] pointer-events-none" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Monte sua primeira oferta com mais velocidade.</h2>
                <p className="text-brand-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                  Use prompts, modelos, mensagens e planilha para organizar a execução e começar suas primeiras conversas com clientes.
                </p>
                <a
                  href={links.kitCheckoutUrl}
                  className="inline-flex items-center justify-center gap-2 bg-brand-accent text-brand-bg px-10 py-5 rounded-2xl font-bold text-lg hover:bg-brand-accent-light transition-all hover:scale-105 active:scale-95"
                >
                  Comprar o Kit agora <ArrowRight size={20} />
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
