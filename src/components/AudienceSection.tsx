import { Check, X } from 'lucide-react';

export function AudienceSection() {
  const goodFit = [
    "Para quem quer criar uma renda extra com serviços simples.",
    "Para quem quer usar IA de forma prática.",
    "Para quem prefere executar em vez de só assistir aula.",
    "Para quem quer vender para negócios locais ou pela internet.",
    "Para quem quer acompanhar ferramentas e prompts sendo criados na prática."
  ];

  const badFit = [
    "Não é para quem procura dinheiro fácil.",
    "Não é para quem quer fórmula mágica.",
    "Não é para quem compra curso e não aplica.",
    "Não é para quem acha que IA faz tudo sozinha.",
    "Não é para quem não quer testar, errar e ajustar."
  ];

  return (
    <section className="py-24 px-6 border-b border-brand-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          
          {/* Para quem é */}
          <div className="bg-brand-card/50 p-8 md:p-12 rounded-[2rem] border border-brand-border">
            <h2 className="text-2xl font-bold mb-8">Para quem é</h2>
            <ul className="space-y-5">
              {goodFit.map((text, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="shrink-0 mt-1 w-6 h-6 rounded-full bg-brand-accent/10 flex items-center justify-center">
                    <Check size={14} className="text-brand-accent" />
                  </div>
                  <span className="text-brand-muted text-base leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Para quem não é */}
          <div className="bg-brand-bg p-8 md:p-12 rounded-[2rem] border border-brand-border/30 grayscale">
            <h2 className="text-2xl font-bold mb-8 text-brand-text/80">Para quem não é</h2>
            <ul className="space-y-5">
              {badFit.map((text, idx) => (
                <li key={idx} className="flex gap-4 opacity-70">
                  <div className="shrink-0 mt-1 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                    <X size={14} className="text-red-500" />
                  </div>
                  <span className="text-brand-muted text-base leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
