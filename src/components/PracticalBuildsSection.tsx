import { ArrowRight } from 'lucide-react';
import { links } from '../data/links';

export function PracticalBuildsSection() {
  const projects = [
    {
      image: '/images/mockup-comunidade-discord.png',
      alt: 'Mockup da Comunidade do Léo no Discord com canais e recursos',
      title: 'Comunidade do Léo',
      description:
        'O centro do ecossistema. Conteúdos, recursos gratuitos, prompts, atualizações e bastidores dos projetos.',
      button: 'Entrar na comunidade',
      link: links.communityUrl,
      primary: true,
    },
    {
      image: '/images/mockup-kit-primeira-oferta.png',
      alt: 'Mockup do Kit de Execução da Primeira Oferta com modelos e planilhas',
      title: 'Kit de Execução da Primeira Oferta',
      description:
        'Modelos, prompts e ferramentas práticas para criar, precificar e vender um serviço com mais rapidez.',
      button: 'Ver Kit',
      link: links.kitUrl,
      primary: false,
    },
    {
      image: '/images/mockup-ebook-primeira-oferta.png',
      alt: 'Mockup do ebook Do Zero à Primeira Oferta',
      title: 'Ebook Do Zero à Primeira Oferta',
      description:
        'Guia prático para entender como montar uma oferta simples usando IA, WhatsApp, internet e execução.',
      button: 'Ver Ebook',
      link: links.ebookUrl,
      primary: false,
    },
    {
      image: '/images/mockup-photoforge-dashboard.png',
      alt: 'Dashboard do aplicativo PhotoForge AI para ensaios fotográficos com IA',
      title: 'PhotoForge AI',
      description:
        'Aplicativo em desenvolvimento para vender ensaios fotográficos com IA em um fluxo guiado e organizado.',
      button: 'Ver App',
      link: links.photosAppUrl,
      primary: false,
    },
    {
      image: '/images/mockup-biosite-andrian.png',
      alt: 'Mockup de biosite profissional para clientes de plaquinhas QR Code e NFC',
      title: 'Biosites para QR Code e NFC',
      description:
        'Sistema em desenvolvimento para criar páginas profissionais para clientes de plaquinhas, com links, Pix, Wi-Fi e agendamento.',
      button: 'Ver solução',
      link: links.biositeUrl,
      primary: false,
    },
  ];

  return (
    <section id="projetos" className="py-20 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16 max-w-3xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Projetos em destaque</h2>
          <p className="text-brand-muted text-base md:text-lg leading-relaxed">
            Materiais, serviços e ferramentas que fazem parte do ecossistema — cada um com um papel diferente na execução.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group bg-brand-card border border-brand-border rounded-2xl overflow-hidden hover:border-brand-accent/30 transition-all"
            >
              <div className="aspect-[16/10] overflow-hidden bg-brand-bg border-b border-brand-border">
                <img
                  src={project.image}
                  alt={project.alt}
                  width={800}
                  height={500}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-brand-muted text-sm md:text-base leading-relaxed mb-6">{project.description}</p>
                <a
                  href={project.link}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                    project.primary
                      ? 'bg-brand-accent text-brand-bg hover:bg-brand-accent-light'
                      : 'bg-brand-bg text-brand-text border border-brand-border hover:border-brand-accent/50'
                  }`}
                >
                  {project.button} <ArrowRight size={18} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
