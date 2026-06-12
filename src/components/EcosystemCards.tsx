import { Users, Book, Layers, MonitorSmartphone, Camera, AppWindow } from 'lucide-react';

export function EcosystemCards() {
  const cards = [
    {
      icon: <Users className="text-brand-accent" size={28} />,
      title: 'Comunidade',
      description: 'Bastidores, prompts, materiais, atualizações e suporte para quem quer executar.',
    },
    {
      icon: <Book className="text-brand-accent" size={28} />,
      title: 'Ebook',
      description: 'Um guia direto para entender como montar sua primeira oferta simples.',
    },
    {
      icon: <Layers className="text-brand-accent" size={28} />,
      title: 'Kit Primeira Oferta',
      description: 'Modelos, prompts, mensagens, checklist, precificação e planilha para aplicar rápido.',
    },
    {
      icon: <MonitorSmartphone className="text-brand-accent" size={28} />,
      title: 'Plaquinhas QR Code e NFC',
      description: 'Serviço físico e digital para negócios locais, com Pix, NFC, biosite e identidade visual.',
    },
    {
      icon: <Camera className="text-brand-accent" size={28} />,
      title: 'Fotos com IA',
      description: 'Processo para vender ensaios realistas com inteligência artificial.',
    },
    {
      icon: <AppWindow className="text-brand-accent" size={28} />,
      title: 'Apps e SaaS',
      description: 'Ferramentas próprias em desenvolvimento para facilitar criação, entrega e venda.',
    },
  ];

  return (
    <section id="ecossistema" className="py-20 md:py-24 px-6 bg-brand-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">O que você encontra aqui</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-brand-card border border-brand-border p-6 md:p-8 rounded-2xl hover:border-brand-accent/30 transition-all hover:-translate-y-0.5"
            >
              <div className="bg-brand-bg w-14 h-14 rounded-xl flex items-center justify-center border border-brand-border/50 mb-5">
                {card.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{card.title}</h3>
              <p className="text-brand-muted leading-relaxed text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
