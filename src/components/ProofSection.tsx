export function ProofSection() {
  const proofs = [
    {
      image: '/images/mockup-plaquinhas-modelos.png',
      alt: 'Modelos reais de plaquinhas QR Code e NFC para negócios locais',
      title: 'Plaquinhas reais para negócios locais',
      description:
        'Exemplos reais de plaquinhas criadas para clientes, com QR Code, NFC, Pix, Instagram, biosite e identidade visual personalizada.',
    },
    {
      image: '/images/case-fotos-ia-cliente-real.png',
      alt: 'Case real de cliente com fotos enviadas e resultado final gerado por IA',
      title: 'Resultado real com fotos geradas por IA',
      description:
        'Exemplo real de cliente mostrando fotos enviadas e o resultado final das transformações com IA.',
    },
  ];

  return (
    <section id="provas" className="py-20 md:py-24 px-6 bg-brand-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16 max-w-3xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Provas reais</h2>
          <p className="text-brand-muted text-base md:text-lg leading-relaxed">
            Serviços aplicados na prática, com entregas reais para clientes e resultados documentados.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {proofs.map((proof) => (
            <article
              key={proof.title}
              className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden bg-brand-bg">
                <img
                  src={proof.image}
                  alt={proof.alt}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-3">{proof.title}</h3>
                <p className="text-brand-muted text-sm md:text-base leading-relaxed">{proof.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
