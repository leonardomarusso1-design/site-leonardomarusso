import { Code, Image as ImageIcon, LayoutTemplate, FileSpreadsheet } from 'lucide-react';
import { links } from '../data/links';

export function ToolsSection() {
  const tools = [
    {
      icon: <ImageIcon size={24} className="text-brand-accent" />,
      title: "App de Fotos com IA",
      description: "Geração de ensaios fotográficos com IA usando créditos. Criado para uso próprio, membros da comunidade e compradores externos.",
      link: links.photosAppUrl
    },
    {
      icon: <Code size={24} className="text-brand-accent" />,
      title: "Toqy",
      description: "SaaS para criar bio sites, QR Code e NFC automaticamente para plaquinhas, cartões digitais e negócios locais.",
      link: links.toqyUrl
    },
    {
      icon: <LayoutTemplate size={24} className="text-brand-muted" />,
      title: "Templates e prompts",
      description: "Prompts, mensagens, modelos de oferta, estruturas de página e materiais prontos para adaptar.",
      link: "#"
    },
    {
      icon: <FileSpreadsheet size={24} className="text-brand-muted" />,
      title: "Planilhas e modelos",
      description: "Materiais simples para organizar clientes, ofertas, precificação e execução.",
      link: "#"
    }
  ];

  return (
    <section id="ferramentas" className="py-24 px-6 bg-brand-bg">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:flex justify-between items-end">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ferramentas em desenvolvimento</h2>
            <p className="text-brand-muted text-lg">
              Soluções construídas na prática para facilitar a entrega dos serviços e execução da comunidade.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tools.map((tool, idx) => (
            <a
              key={idx}
              href={tool.link}
              className="group block bg-brand-card p-8 rounded-[2rem] border border-brand-border hover:border-brand-accent/30 transition-colors"
            >
              <div className="bg-brand-bg/50 w-14 h-14 rounded-full flex items-center justify-center border border-brand-border mb-6">
                {tool.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-brand-accent transition-colors">{tool.title}</h3>
              <p className="text-brand-muted leading-relaxed">
                {tool.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
