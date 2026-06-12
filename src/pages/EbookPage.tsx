import { AlertTriangle, ArrowRight, Check, CheckCircle2, FileText, Lightbulb, MessageCircle, Sparkles, Target } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { links } from '../data/links';

const contentItems = [
  'A lógica da primeira oferta',
  'Como escolher um serviço simples',
  'Como montar uma promessa clara',
  'Como usar IA para acelerar a criação',
  'Como organizar uma oferta vendável',
  'Como começar sem audiência',
  'Como abordar pessoas no WhatsApp ou Instagram',
  'Como sair da teoria e colocar algo na rua',
];

const fitItems = [
  'Você quer começar a vender algo simples na internet',
  'Você quer usar IA de forma prática para criar ofertas',
  'Você ainda não sabe qual produto ou serviço vender',
  'Você quer um caminho simples antes de criar curso, app ou negócio maior',
  'Você prefere execução real em vez de teoria complicada',
];

const notFitItems = [
  'Você procura promessa milagrosa de dinheiro fácil',
  'Você não quer colocar nenhuma oferta na rua',
  'Você quer apenas consumir conteúdo sem executar',
  'Você espera que a IA faça tudo sozinha sem estratégia',
];

const faqItems = [
  {
    question: 'Esse ebook é um curso?',
    answer: 'Não. É um ebook prático para te ajudar a organizar sua primeira oferta. O curso completo Micro Serviços com IA será um produto separado no futuro.',
  },
  {
    question: 'Preciso já ter audiência?',
    answer: 'Não. A proposta do ebook é justamente te ajudar a começar com uma oferta simples, mesmo sem audiência.',
  },
  {
    question: 'O ebook fala só sobre IA?',
    answer: 'Não. A IA é uma ferramenta. O foco principal é montar uma oferta simples e colocar em prática com WhatsApp, internet e execução.',
  },
  {
    question: 'Como recebo o ebook?',
    answer: 'Depois da compra, você será direcionado para uma página de obrigado com as instruções de acesso.',
  },
  {
    question: 'Posso começar mesmo sem produto pronto?',
    answer: 'Sim. O ebook ajuda a sair da ideia e montar uma primeira oferta simples para validar.',
  },
];

export function EbookPage() {
  return (
    <div className="bg-brand-bg text-brand-text font-sans min-h-screen selection:bg-brand-accent/30">
      <Header />
      <main>
        <section className="pt-32 pb-20 md:pt-44 md:pb-28 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 text-brand-accent text-sm font-semibold uppercase tracking-[0.18em] mb-5">
                <FileText size={16} /> Ebook digital
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Do Zero à Primeira Oferta
              </h1>
              <p className="text-lg md:text-xl text-brand-muted leading-relaxed mb-8">
                Aprenda a montar uma oferta simples usando IA, WhatsApp e internet, mesmo começando sem audiência, sem estrutura perfeita e sem saber exatamente por onde começar.
              </p>
              <div className="inline-flex items-center gap-3 bg-brand-card border border-brand-border px-5 py-3 rounded-2xl mb-10">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-accent shadow-[0_0_18px_rgba(245,197,66,0.55)]" />
                <span className="font-semibold">Ebook completo por R$26,97</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={links.ebookCheckoutUrl} className="inline-flex items-center justify-center gap-2 bg-brand-accent text-brand-bg px-8 py-4 rounded-xl font-semibold hover:bg-brand-accent-light transition-colors text-lg">
                  Comprar agora <ArrowRight size={20} />
                </a>
                <a href="#conteudo" className="inline-flex items-center justify-center bg-brand-card text-brand-text border border-brand-border px-8 py-4 rounded-xl font-medium hover:bg-brand-card-hover hover:border-brand-accent/50 transition-all text-lg">
                  Ver o que tem dentro
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-8 bg-brand-accent/20 blur-[90px] rounded-full pointer-events-none" />
              <div className="relative bg-brand-card border border-brand-border rounded-[2rem] p-4 md:p-6 shadow-2xl">
                <img
                  src="/images/mockup-ebook-primeira-oferta.png"
                  alt="Mockup do ebook Do Zero à Primeira Oferta"
                  className="w-full h-auto rounded-2xl object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-brand-card/25 border-y border-brand-border/50">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-5">Você não precisa de uma grande ideia. Precisa de uma primeira oferta clara.</h2>
              <p className="text-brand-muted text-lg leading-relaxed">
                Muita gente trava porque quer criar algo perfeito, grande ou complexo. O problema é que a primeira renda geralmente vem de uma oferta simples, bem explicada e colocada na frente das pessoas certas.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                'Tenho ideias, mas não sei transformar em produto',
                'Quero usar IA, mas não sei como vender algo com isso',
                'Não tenho audiência, estrutura ou clareza para começar',
              ].map((text) => (
                <article key={text} className="bg-brand-card border border-brand-border rounded-2xl p-6">
                  <AlertTriangle size={24} className="text-brand-accent mb-5" />
                  <h3 className="text-lg font-bold leading-snug">{text}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">O que este ebook te ajuda a fazer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              <PromiseCard icon={<Lightbulb size={24} />} title="Escolher uma oportunidade simples" text="Entender quais tipos de serviços podem ser vendidos com IA, WhatsApp e execução prática." />
              <PromiseCard icon={<Target size={24} />} title="Transformar ideia em oferta" text="Sair de uma ideia solta para uma proposta clara, com público, problema, solução e entrega." />
              <PromiseCard icon={<Sparkles size={24} />} title="Usar IA como ferramenta de execução" text="Usar IA para acelerar ideias, mensagens, estrutura de oferta e materiais, sem depender de perfeição." />
              <PromiseCard icon={<MessageCircle size={24} />} title="Fazer os primeiros contatos" text="Entender que vender começa com conversas reais, abordagem simples e validação rápida." />
            </div>
          </div>
        </section>

        <section id="conteudo" className="py-24 px-6 bg-brand-card/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">O que você vai encontrar no ebook</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {contentItems.map((item) => (
                <div key={item} className="bg-brand-card border border-brand-border rounded-2xl p-5 flex gap-3">
                  <CheckCircle2 size={20} className="text-brand-accent shrink-0 mt-0.5" />
                  <span className="text-brand-muted leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <FitList title="Esse ebook é para você se..." items={fitItems} />
            <FitList title="Esse ebook não é para você se..." items={notFitItems} alert />
          </div>
        </section>

        <section className="py-24 px-6 bg-brand-card/25 border-y border-brand-border/50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-5">Por que começar pelo ebook?</h2>
              <p className="text-brand-muted text-lg leading-relaxed max-w-3xl">
                O ebook é a porta de entrada do ecossistema. Ele organiza a base: como pensar em uma oferta, escolher um serviço simples e começar a executar. Depois disso, você pode avançar para o Kit, a comunidade e futuramente o curso completo.
              </p>
            </div>
            <aside className="bg-brand-card border border-brand-border rounded-[2rem] p-8">
              <div className="text-sm uppercase tracking-[0.18em] text-brand-accent font-semibold mb-4">Oferta de entrada</div>
              <h3 className="text-2xl font-bold mb-6">Do Zero à Primeira Oferta</h3>
              <div className="space-y-4 text-brand-muted mb-8">
                <PriceRow label="Formato" value="Ebook digital" />
                <PriceRow label="Preço" value="R$26,97" strong />
                <p className="leading-relaxed">Após a compra, você será direcionado para a página de obrigado com as instruções de acesso.</p>
              </div>
              <a href={links.ebookCheckoutUrl} className="w-full inline-flex items-center justify-center gap-2 bg-brand-accent text-brand-bg px-6 py-4 rounded-xl font-bold hover:bg-brand-accent-light transition-colors">
                Comprar ebook agora <ArrowRight size={18} />
              </a>
            </aside>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Próximo passo no ecossistema</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <NextStepCard title="Kit Primeira Oferta" text="Modelos, prompts, checklist, mensagens, precificação e planilha para aplicar o que o ebook ensina com mais velocidade." image="/images/mockup-kit-primeira-oferta.png" alt="Mockup do Kit Primeira Oferta" button="Conhecer o Kit" href={links.kitUrl} />
              <NextStepCard title="Comunidade do Léo" text="Bastidores, materiais, prompts, ferramentas e evolução junto com outros membros." image="/images/mockup-comunidade-discord.png" alt="Mockup da Comunidade do Léo no Discord" button="Entrar na comunidade" href={links.communityUrl} />
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-brand-card/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">Perguntas frequentes</h2>
            <div className="space-y-4">
              {faqItems.map((faq) => (
                <article key={faq.question} className="bg-brand-card border border-brand-border rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                  <p className="text-brand-muted leading-relaxed">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-brand-card border border-brand-border/50 p-10 md:p-16 rounded-[3rem] relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(245,197,66,0.16),transparent_42%)]" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Comece pela primeira oferta. Não pela estrutura perfeita.</h2>
                <p className="text-brand-muted text-lg md:text-xl max-w-2xl mx-auto mb-10">
                  Antes de criar um curso, app, comunidade ou negócio complexo, você precisa aprender a transformar uma ideia simples em algo que alguém entenda e possa comprar.
                </p>
                <a href={links.ebookCheckoutUrl} className="inline-flex items-center justify-center gap-2 bg-brand-accent text-brand-bg px-10 py-5 rounded-2xl font-bold text-lg hover:bg-brand-accent-light transition-all hover:scale-105 active:scale-95">
                  Comprar agora por R$26,97 <ArrowRight size={20} />
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

function PromiseCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <article className="bg-brand-card border border-brand-border rounded-2xl p-6">
      <div className="w-12 h-12 rounded-xl bg-brand-bg border border-brand-border flex items-center justify-center mb-6 text-brand-accent">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-3">{title}</h3>
      <p className="text-brand-muted text-sm leading-relaxed">{text}</p>
    </article>
  );
}

function FitList({ title, items, alert = false }: { title: string; items: string[]; alert?: boolean }) {
  return (
    <article className={`p-8 md:p-10 rounded-[2rem] border ${alert ? 'bg-brand-bg border-brand-border/30' : 'bg-brand-card border-brand-border'}`}>
      <h2 className="text-2xl font-bold mb-8">{title}</h2>
      <ul className="space-y-5">
        {items.map((item) => (
          <li key={item} className="flex gap-4">
            <div className={`shrink-0 mt-1 w-6 h-6 rounded-full flex items-center justify-center ${alert ? 'bg-red-500/10' : 'bg-brand-accent/10'}`}>
              {alert ? <AlertTriangle size={13} className="text-red-500" /> : <Check size={14} className="text-brand-accent" />}
            </div>
            <span className="text-brand-muted leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function PriceRow({ label, value, strong = false }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-brand-border pb-4">
      <span>{label}</span>
      <span className={strong ? 'text-brand-accent text-2xl font-bold' : 'text-brand-text font-semibold'}>{value}</span>
    </div>
  );
}

function NextStepCard({ title, text, image, alt, button, href }: { title: string; text: string; image: string; alt: string; button: string; href: string }) {
  return (
    <article className="bg-brand-card border border-brand-border rounded-[2rem] overflow-hidden">
      <div className="aspect-[16/9] bg-brand-bg">
        <img src={image} alt={alt} className="w-full h-full object-cover object-top" />
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-brand-muted leading-relaxed mb-7">{text}</p>
        <a href={href} className="inline-flex items-center justify-center gap-2 bg-brand-bg border border-brand-border px-5 py-3 rounded-xl font-semibold hover:border-brand-accent/50 hover:text-brand-accent transition-colors">
          {button} <ArrowRight size={17} />
        </a>
      </div>
    </article>
  );
}
