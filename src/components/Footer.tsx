import { links } from '../data/links';

export function Footer() {
  return (
    <footer className="bg-brand-card border-t border-brand-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
        <div className="text-center md:text-left">
          <h4 className="text-xl font-bold text-brand-text mb-2">Leonardo Marusso</h4>
          <p className="text-brand-muted text-sm">Criador de conteúdo, videomaker e editor.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-brand-muted">
          <a href={links.instagramUrl} className="hover:text-brand-accent transition-colors">Instagram</a>
          <a href={links.youtubeUrl} className="hover:text-brand-accent transition-colors">YouTube</a>
          <a href={links.communityUrl} className="hover:text-brand-accent transition-colors">Comunidade</a>
          <a href={links.kitUrl} className="hover:text-brand-accent transition-colors">Kit Primeira Oferta</a>
          <a href={links.ebookUrl} className="hover:text-brand-accent transition-colors">Ebook</a>
          <a href={links.toqyUrl} className="hover:text-brand-accent transition-colors">Toqy</a>
        </div>
      </div>
    </footer>
  );
}
