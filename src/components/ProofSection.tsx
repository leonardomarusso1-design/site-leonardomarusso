import { Image, Monitor, QrCode, User } from 'lucide-react';

export function ProofSection() {
  const proofs = [
    {
      title: "Print do Kit",
      label: "Kit Primeira Oferta",
      icon: <Monitor size={34} className="text-brand-accent" />,
      className: "md:col-span-2"
    },
    {
      title: "Print da comunidade",
      label: "Bastidores e prompts",
      icon: <Image size={34} className="text-brand-accent" />,
      className: ""
    },
    {
      title: "Foto de plaquinhas",
      label: "QR Code e NFC",
      icon: <QrCode size={34} className="text-brand-accent" />,
      className: ""
    },
    {
      title: "Foto do Leonardo",
      label: "Criador e bastidores",
      icon: <User size={34} className="text-brand-accent" />,
      className: "md:col-span-2"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Provas reais do que está sendo criado</h2>
          <p className="text-brand-muted text-lg leading-relaxed">
            Espaços preparados para mostrar o Kit, a comunidade, as plaquinhas e os bastidores com o Leonardo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {proofs.map((proof) => (
            <article key={proof.title} className={`min-h-72 rounded-2xl border border-brand-border bg-brand-card overflow-hidden relative ${proof.className}`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,197,66,0.18),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_45%)]"></div>
              <div className="relative h-full min-h-72 p-6 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.18em] text-brand-muted">{proof.title}</span>
                  <div className="w-12 h-12 rounded-xl bg-brand-bg/80 border border-brand-border flex items-center justify-center">
                    {proof.icon}
                  </div>
                </div>
                <div>
                  <div className="h-24 rounded-xl border border-brand-border bg-brand-bg/60 mb-5 overflow-hidden">
                    <div className="h-full w-full bg-[linear-gradient(90deg,transparent,rgba(245,197,66,0.12),transparent)]"></div>
                  </div>
                  <h3 className="text-xl font-bold">{proof.label}</h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
