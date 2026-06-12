import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { links } from '../data/links';

const steps = [
  {
    number: '01',
    title: 'Leia com foco em execução',
    description: 'Não leia como teoria. Use o ebook para escolher uma oferta e partir para ação.',
  },
  {
    number: '02',
    title: 'Escolha um serviço simples',
    description: 'Plaquinhas, biosites, fotos com IA ou outro serviço que você consiga oferecer rápido.',
  },
  {
    number: '03',
    title: 'Monte sua oferta',
    description: 'Use a estrutura do ebook para definir público, problema, solução e próximo passo.',
  },
  {
    number: '04',
    title: 'Faça os primeiros contatos',
    description: 'O resultado vem da conversa com clientes reais, não de deixar tudo perfeito.',
  },
];

export function EbookThankYouPage() {
  return (
    <div className="bg-brand-bg text-brand-text font-sans min-h-screen selection:bg-brand-accent/30">
      <Header />
      <main>
        {/* Hero de confirmação */}
        <section className="pt-32 pb-16 md:pt-44 md:pb-20 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 text-brand-accent text-sm font-semibold mb-6 px-4 py-2 rounded-full border border-brand-accent/30 bg-brand-accent/5"
            >
              <CheckCircle2 size={18} />
              Compra confirmada
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
            >
              Compra confirmada. Bem-vindo ao{' '}
              <span className="text-brand-accent">Do Zero à Primeira Oferta.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg text-brand-muted max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Agora você tem acesso ao guia prático para montar sua primeira oferta simples usando IA,
              WhatsApp, internet e execução.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 }}
              className="max-w-md mx-auto mb-10 rounded-2xl overflow-hidden border border-brand-border bg-brand-card shadow-xl"
            >
              <img
                src="/images/mockup-ebook-primeira-oferta.png"
                alt="Mockup do ebook Do Zero à Primeira Oferta"
                width={640}
                height={400}
                loading="eager"
                fetchPriority="high"
                className="w-full h-auto object-cover"
              />
            </motion.div>

            <motion.a
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              href={links.ebookAccessUrl}
              className="inline-flex items-center justify-center gap-2 bg-brand-accent text-brand-bg px-8 py-4 rounded-xl font-semibold hover:bg-brand-accent-light transition-colors text-lg"
            >
              Baixar / Acessar Ebook <ArrowRight size={20} />
            </motion.a>
          </div>
        </section>

        {/* Como usar o ebook */}
        <section className="py-16 md:py-20 px-6 bg-brand-card/30">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 md:mb-14">
              <h2 className="text-2xl md:text-3xl font-bold">Como usar o ebook</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="bg-brand-card p-6 md:p-7 rounded-2xl border border-brand-border"
                >
                  <span className="text-brand-accent text-sm font-bold mb-3 block">{step.number}</span>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Próximo passo — Kit */}
        <section className="py-16 md:py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden lg:flex lg:items-stretch">
              <div className="lg:w-1/2 aspect-[16/10] lg:aspect-auto overflow-hidden bg-brand-bg border-b lg:border-b-0 lg:border-r border-brand-border">
                <img
                  src="/images/mockup-kit-primeira-oferta.png"
                  alt="Mockup do Kit de Execução da Primeira Oferta"
                  width={800}
                  height={500}
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="lg:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Quer aplicar mais rápido?</h2>
                <p className="text-brand-muted text-base leading-relaxed mb-8">
                  O ebook mostra o caminho. O Kit Primeira Oferta entrega modelos, prompts, mensagens,
                  checklist, precificação e planilha para você aplicar com mais velocidade.
                </p>
                <a
                  href={links.kitUrl}
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-brand-accent text-brand-bg px-8 py-4 rounded-xl font-semibold hover:bg-brand-accent-light transition-colors"
                >
                  Conhecer o Kit <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Comunidade */}
        <section className="py-16 md:py-20 px-6 bg-brand-card/30">
          <div className="max-w-6xl mx-auto">
            <div className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden lg:flex lg:flex-row-reverse lg:items-stretch">
              <div className="lg:w-1/2 aspect-[16/10] lg:aspect-auto overflow-hidden bg-brand-bg border-b lg:border-b-0 lg:border-l border-brand-border">
                <img
                  src="/images/mockup-comunidade-discord.png"
                  alt="Mockup da Comunidade do Léo no Discord"
                  width={800}
                  height={500}
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="lg:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Quer acompanhar os bastidores e evoluir junto?
                </h2>
                <p className="text-brand-muted text-base leading-relaxed mb-8">
                  Na comunidade eu compartilho materiais, prompts, atualizações dos projetos, ferramentas
                  e bastidores reais da construção desse ecossistema.
                </p>
                <a
                  href={links.communityUrl}
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-brand-bg text-brand-text border border-brand-border px-8 py-4 rounded-xl font-semibold hover:border-brand-accent/50 transition-all"
                >
                  Entrar na comunidade <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-20 md:py-28 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-brand-card border border-brand-border/50 p-8 md:p-14 rounded-3xl relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-accent/10 blur-[80px] rounded-full pointer-events-none" />

              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5">Agora é execução.</h2>
                <p className="text-brand-muted text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                  Leia o ebook, escolha um serviço simples e comece com o que você já tem. O objetivo
                  não é perfeição, é colocar uma oferta na rua.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={links.ebookAccessUrl}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-accent text-brand-bg px-8 py-4 rounded-xl font-semibold hover:bg-brand-accent-light transition-all"
                  >
                    Acessar Ebook <ArrowRight size={20} />
                  </a>
                  <a
                    href={links.kitUrl}
                    className="w-full sm:w-auto inline-flex items-center justify-center bg-brand-bg text-brand-text border border-brand-border px-8 py-4 rounded-xl font-medium hover:border-brand-accent/50 transition-all"
                  >
                    Conhecer o Kit
                  </a>
                  <a
                    href={links.communityUrl}
                    className="w-full sm:w-auto inline-flex items-center justify-center bg-brand-bg text-brand-text border border-brand-border px-8 py-4 rounded-xl font-medium hover:border-brand-accent/50 transition-all"
                  >
                    Entrar na comunidade
                  </a>
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
