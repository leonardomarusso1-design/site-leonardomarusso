import { motion } from 'motion/react';
import { links } from '../data/links';
import { ArrowRight, BookOpen, Camera, Link2, MonitorSmartphone, QrCode, Sparkles } from 'lucide-react';
import { ReactNode } from 'react';

export function Hero() {
  return (
    <section id="inicio" className="pt-32 pb-20 md:pt-44 md:pb-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 max-w-2xl z-10 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Aprenda a vender serviços simples com <span className="text-brand-accent">IA, QR Code, NFC e ferramentas digitais.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-brand-muted mb-10 leading-relaxed"
          >
            Eu testo, vendo e documento serviços reais como plaquinhas inteligentes, bio sites, fotos com IA e automações. Na comunidade, você acompanha os bastidores, recebe os prompts e acessa as ferramentas que estou criando.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <a
              href={links.communityUrl}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-accent text-brand-bg px-8 py-4 rounded-xl font-semibold hover:bg-brand-accent-light transition-colors text-lg"
            >
              Entrar na comunidade <ArrowRight size={20} />
            </a>
            <a
              href={links.kitUrl}
              className="w-full sm:w-auto flex items-center justify-center bg-brand-card text-brand-text border border-brand-border px-8 py-4 rounded-xl font-medium hover:bg-brand-card-hover hover:border-brand-accent/50 transition-all text-lg"
            >
              Ver o Kit Primeira Oferta
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex-1 w-full max-w-lg relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-brand-accent/20 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="grid grid-cols-2 gap-4 relative z-10">
            <VisualCard icon={<Sparkles className="text-brand-accent" size={24} />} title="Prompts" detail="Para aplicar" delay={0.4} />
            <VisualCard icon={<BookOpen className="text-brand-accent" size={24} />} title="Kit Oferta" detail="Disponível" delay={0.5} yOffset={20} />
            <VisualCard icon={<QrCode className="text-brand-accent" size={24} />} title="QR Code" detail="Serviço validado" delay={0.6} />
            <VisualCard icon={<Camera className="text-brand-accent" size={24} />} title="Fotos IA" detail="Em criação" delay={0.7} yOffset={20} />
            <VisualCard icon={<Link2 className="text-brand-accent" size={24} />} title="Toqy" detail="Em construção" delay={0.8} />
            <VisualCard icon={<MonitorSmartphone className="text-brand-accent" size={24} />} title="NFC" detail="Negócios locais" delay={0.9} yOffset={20} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function VisualCard({ icon, title, detail, delay, yOffset = 0 }: { icon: ReactNode, title: string, detail: string, delay: number, yOffset?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      style={{ marginTop: yOffset }}
      className="bg-brand-card border border-brand-border p-6 rounded-2xl flex flex-col items-center justify-center gap-3 text-center shadow-lg"
    >
      <div className="bg-brand-bg p-3 rounded-full border border-brand-border">
        {icon}
      </div>
      <div>
        <span className="block font-medium text-brand-text text-sm">{title}</span>
        <span className="block text-brand-muted text-xs mt-1">{detail}</span>
      </div>
    </motion.div>
  );
}
