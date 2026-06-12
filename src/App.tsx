import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { EcosystemCards } from './components/EcosystemCards';
import { PracticalBuildsSection } from './components/PracticalBuildsSection';
import { ProofSection } from './components/ProofSection';
import { PathSection } from './components/PathSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-brand-bg text-brand-text font-sans min-h-screen selection:bg-brand-accent/30">
      <Header />
      <main>
        <Hero />
        <EcosystemCards />
        <PracticalBuildsSection />
        <ProofSection />
        <PathSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
