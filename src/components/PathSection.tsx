export function PathSection() {
  const steps = [
    {
      number: '01',
      title: 'Entre na comunidade',
      description: 'Acompanhe os bastidores, materiais e atualizações.',
    },
    {
      number: '02',
      title: 'Use o ebook e o kit',
      description: 'Entenda o caminho e aplique com os modelos prontos.',
    },
    {
      number: '03',
      title: 'Aprenda os serviços',
      description: 'Plaquinhas, fotos com IA, biosites e ofertas simples para negócios locais.',
    },
    {
      number: '04',
      title: 'Evolua para as ferramentas',
      description: 'Use os apps e SaaS que estão sendo construídos para acelerar a execução.',
    },
  ];

  return (
    <section id="caminho" className="py-20 md:py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Como entrar no ecossistema</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-brand-card p-6 md:p-8 rounded-2xl border border-brand-border relative"
            >
              <span className="text-brand-accent text-sm font-bold mb-4 block">{step.number}</span>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-brand-muted text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
