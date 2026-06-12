import { ArrowRight } from 'lucide-react';
import { links } from '../data/links';

export function FinalCTA() {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-brand-card border border-brand-border/50 p-8 md:p-14 rounded-3xl relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-accent/10 blur-[80px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5">
              Quer acompanhar tudo isso sendo criado na prática?
            </h2>
            <p className="text-brand-muted text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Entre na comunidade, acesse os materiais e acompanhe a construção dos próximos produtos e ferramentas.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={links.communityUrl}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-accent text-brand-bg px-8 py-4 rounded-xl font-semibold hover:bg-brand-accent-light transition-all"
              >
                Entrar na comunidade <ArrowRight size={20} />
              </a>
              <a
                href={links.kitUrl}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-brand-bg text-brand-text border border-brand-border px-8 py-4 rounded-xl font-medium hover:border-brand-accent/50 transition-all"
              >
                Ver Kit Primeira Oferta
              </a>
              <a
                href={links.contactUrl}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-brand-bg text-brand-text border border-brand-border px-8 py-4 rounded-xl font-medium hover:border-brand-accent/50 transition-all"
              >
                Falar comigo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
