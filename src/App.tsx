import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PracticalBuildsSection } from './components/PracticalBuildsSection';
import { EcosystemCards } from './components/EcosystemCards';
import { PathSection } from './components/PathSection';
import { AboutSection } from './components/AboutSection';
import { ProofSection } from './components/ProofSection';
import { AudienceSection } from './components/AudienceSection';
import { ToolsSection } from './components/ToolsSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-brand-bg text-brand-text font-sans min-h-screen selection:bg-brand-accent/30">
      <Header />
      <main>
        <Hero />
        <PracticalBuildsSection />
        <EcosystemCards />
        <PathSection />
        <AboutSection />
        <ProofSection />
        <AudienceSection />
        <ToolsSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
