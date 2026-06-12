import { ArrowRight } from 'lucide-react';
import { links } from '../data/links';

export function FinalCTA() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-brand-card border border-brand-border/50 p-10 md:p-16 rounded-[3rem] relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-accent/10 blur-[80px] rounded-full pointer-events-none"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Entre na comunidade e acompanhe tudo sendo criado na prática.
            </h2>
            <p className="text-brand-muted text-lg md:text-xl max-w-2xl mx-auto mb-10">
              A comunidade é onde eu compartilho bastidores, prompts, aulas, ferramentas, atualizações e processos reais enquanto construo e vendo esses produtos.
            </p>

            <a
              href={links.communityUrl}
              className="inline-flex items-center justify-center gap-2 bg-brand-accent text-brand-bg px-10 py-5 rounded-2xl font-bold text-lg hover:bg-brand-accent-light transition-all hover:scale-105 active:scale-95"
            >
              Entrar na comunidade <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
