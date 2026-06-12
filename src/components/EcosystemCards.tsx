import { Users, Book, Layers, MonitorSmartphone, Camera, Link2 } from 'lucide-react';

export function EcosystemCards() {
  const cards = [
    {
      icon: <Users className="text-brand-accent" size={32} />,
      title: "Comunidade do Léo",
      description: "Bastidores, aulas, prompts, atualizações e acompanhamento prático para sair da teoria."
    },
    {
      icon: <Book className="text-brand-accent" size={32} />,
      title: "Ebook Do Zero à Primeira Oferta",
      description: "Um guia direto para montar sua primeira oferta sem depender de audiência ou estrutura perfeita."
    },
    {
      icon: <Layers className="text-brand-accent" size={32} />,
      title: "Kit Primeira Oferta",
      description: "Modelos, prompts, scripts e materiais prontos para sair da ideia e aplicar hoje mesmo."
    },
    {
      icon: <MonitorSmartphone className="text-brand-accent" size={32} />,
      title: "Plaquinhas QR Code e NFC",
      description: "Aprenda a vender soluções simples para negócios locais usando códigos, Pix, Wi-Fi e avaliações."
    },
    {
      icon: <Camera className="text-brand-accent" size={32} />,
      title: "Fotos com IA",
      description: "Criação de ensaios fotográficos com inteligência artificial para vender como serviço digital."
    },
    {
      icon: <Link2 className="text-brand-accent" size={32} />,
      title: "Toqy",
      description: "Ferramenta em desenvolvimento para criar bio sites, QR Code e NFC de forma automatizada."
    }
  ];

  return (
    <section id="ecossistema" className="py-24 px-6 bg-brand-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O que você encontra aqui</h2>
          <p className="text-brand-muted max-w-3xl mx-auto text-lg leading-relaxed">
            Não é só um curso. É um ecossistema em construção.
            Aqui você encontra materiais para começar, uma comunidade para acompanhar os bastidores e ferramentas criadas para facilitar a execução.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div key={index} className="bg-brand-card border border-brand-border p-8 rounded-3xl hover:border-brand-accent/30 transition-all hover:-translate-y-1">
              <div className="bg-brand-bg w-16 h-16 rounded-2xl flex items-center justify-center border border-brand-border/50 mb-6">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-brand-muted leading-relaxed text-sm">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
