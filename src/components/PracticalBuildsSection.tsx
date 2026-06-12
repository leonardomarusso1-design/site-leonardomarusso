import { BookOpen, Camera, Link2, QrCode, Users } from 'lucide-react';

export function PracticalBuildsSection() {
  const builds = [
    {
      icon: <BookOpen size={24} className="text-brand-accent" />,
      title: "Kit Primeira Oferta",
      status: "disponível",
      description: "Materiais, prompts e modelos para transformar uma ideia simples em oferta vendável."
    },
    {
      icon: <Users size={24} className="text-brand-accent" />,
      title: "Comunidade",
      status: "fase inicial",
      description: "Bastidores, aulas, atualizações e ferramentas para acompanhar a construção em tempo real."
    },
    {
      icon: <QrCode size={24} className="text-brand-accent" />,
      title: "Plaquinhas QR Code e NFC",
      status: "serviço validado",
      description: "Oferta prática para negócios locais com QR Code, NFC, WhatsApp, Pix, Wi-Fi e avaliações."
    },
    {
      icon: <Camera size={24} className="text-brand-accent" />,
      title: "App de Fotos com IA",
      status: "em desenvolvimento",
      description: "Ferramenta para criar ensaios com IA e testar um serviço digital com entrega rápida."
    },
    {
      icon: <Link2 size={24} className="text-brand-accent" />,
      title: "Toqy",
      status: "em planejamento/desenvolvimento",
      description: "Sistema para facilitar bio sites, QR Code e NFC para serviços locais e produtos digitais."
    }
  ];

  return (
    <section className="py-20 px-6 border-y border-brand-border/50 bg-brand-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O que eu já estou construindo na prática</h2>
          <p className="text-brand-muted text-lg leading-relaxed">
            A ideia aqui é acompanhar serviços e produtos reais nascendo, sendo testados e vendidos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
          {builds.map((item) => (
            <article key={item.title} className="bg-brand-card border border-brand-border p-6 rounded-2xl flex flex-col gap-5">
              <div className="flex items-start justify-between gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-bg border border-brand-border flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="text-[11px] uppercase tracking-[0.16em] text-brand-accent font-semibold text-right">
                  {item.status}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
