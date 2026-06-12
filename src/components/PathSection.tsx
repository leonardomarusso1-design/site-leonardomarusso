export function PathSection() {
  const steps = [
    {
      number: "01",
      title: "Entenda o que vender",
      description: "Comece com uma oferta simples que alguém consiga entender rápido."
    },
    {
      number: "02",
      title: "Monte sua primeira oferta",
      description: "Transforme uma ideia solta em algo claro, com público, problema, solução e próximo passo."
    },
    {
      number: "03",
      title: "Use o Kit",
      description: "Aplique modelos, prompts e scripts para acelerar a execução."
    },
    {
      number: "04",
      title: "Entre na comunidade",
      description: "Receba bastidores, atualizações, aulas e acesso mais barato às ferramentas."
    },
    {
      number: "05",
      title: "Use as ferramentas",
      description: "Acesse apps e recursos criados para facilitar a entrega dos serviços."
    },
    {
      number: "06",
      title: "Venda serviços reais",
      description: "Aplique no WhatsApp, Instagram, negócios locais e internet."
    }
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comece pelo caminho certo</h2>
          <p className="text-brand-muted text-lg">
            Um passo a passo lógico para não se perder na quantidade de informações.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-brand-border -translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} md:mb-12`}>
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-brand-bg border border-brand-accent rounded-full items-center justify-center z-10 shadow-[0_0_15px_rgba(245,197,66,0.2)]">
                  <span className="text-brand-accent text-sm font-bold">{step.number}</span>
                </div>

                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                  <div className="bg-brand-card p-8 rounded-3xl border border-brand-border">
                    <div className="md:hidden text-brand-accent font-bold mb-2">{step.number}</div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-brand-muted">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
