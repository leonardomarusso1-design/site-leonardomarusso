import { User } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="py-24 px-6 bg-brand-card/30">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Photo Area */}
        <div className="w-full lg:w-1/2 max-w-md">
          <div className="aspect-square bg-brand-card border border-brand-border rounded-[2rem] overflow-hidden flex items-center justify-center relative group">
            {/* 
              O src real da imagem vai aqui no futuro. 
              Por enquanto, fica o ícone placeholder.
              Exemplo: <img src="/leonardo.jpg" alt="Leonardo Marusso" className="w-full h-full object-cover" /> 
            */}
            <User className="text-brand-muted/30" size={120} />
            
            {/* Subtle overlay accent */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Quem é Leonardo Marusso</h2>
          
          <div className="space-y-6 text-lg text-brand-muted leading-relaxed">
            <p>
              Sou Leonardo Marusso, videomaker, editor e criador de conteúdo. Eu testo, documento e ensino formas práticas de criar produtos e serviços simples com IA, automação e ferramentas digitais.
            </p>
            <p>
              Hoje compartilho meus bastidores criando plaquinhas QR Code e NFC, bio sites, fotos com IA, prompts, ferramentas e processos para pessoas que querem sair da teoria e colocar uma primeira oferta na rua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
