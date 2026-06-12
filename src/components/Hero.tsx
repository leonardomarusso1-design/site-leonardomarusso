import { motion } from 'motion/react';
import { links } from '../data/links';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="inicio" className="pt-32 pb-20 md:pt-44 md:pb-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="flex-1 max-w-2xl z-10 text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-xs uppercase tracking-[0.18em] text-brand-accent font-semibold mb-6 px-4 py-2 rounded-full border border-brand-accent/30 bg-brand-accent/5"
          >
            Ecossistema digital em construção
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
          >
            Crie ofertas simples com{' '}
            <span className="text-brand-accent">IA, ferramentas digitais e execução real.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-brand-muted mb-10 leading-relaxed"
          >
            Eu testo, vendo e documento serviços reais usando IA, WhatsApp, QR Code, NFC e automação.
            Aqui você acompanha os projetos, materiais e ferramentas que estou criando na prática.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <a
              href={links.communityUrl}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-accent text-brand-bg px-8 py-4 rounded-xl font-semibold hover:bg-brand-accent-light transition-colors"
            >
              Entrar na comunidade <ArrowRight size={20} />
            </a>
            <a
              href="#projetos"
              className="w-full sm:w-auto flex items-center justify-center bg-brand-card text-brand-text border border-brand-border px-8 py-4 rounded-xl font-medium hover:bg-brand-card-hover hover:border-brand-accent/50 transition-all"
            >
              Ver projetos
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="flex-1 w-full max-w-md lg:max-w-lg relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-brand-accent/15 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 rounded-[2rem] overflow-hidden border border-brand-border bg-brand-card shadow-2xl">
            <img
              src="/images/leonardo-marusso-perfil.png"
              alt="Leonardo Marusso, criador do ecossistema de ofertas digitais com IA"
              width={640}
              height={640}
              className="w-full h-auto object-cover aspect-square"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
