import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { links } from '../data/links';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Ecossistema', href: '#ecossistema' },
    { label: 'Ferramentas', href: '#ferramentas' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-brand-bg/80 backdrop-blur-md border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#inicio" className="text-xl font-bold tracking-tight text-brand-text cursor-pointer hover:text-brand-accent transition-colors">
          Leonardo Marusso
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 text-sm font-medium text-brand-muted">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-brand-text transition-colors">
                {link.label}
              </a>
            ))}
          </div>
          <a
            href={links.communityUrl}
            className="bg-brand-accent text-brand-bg px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-accent-light transition-colors"
          >
            Entrar na comunidade
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-brand-text p-2 -mr-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-20 left-0 w-full bg-brand-card border-b border-brand-border p-6 flex flex-col gap-6"
          >
             {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-brand-text font-medium text-lg"
              >
                {link.label}
              </a>
            ))}
            <a
              href={links.communityUrl}
              className="bg-brand-accent text-brand-bg px-5 py-3 rounded-xl text-center font-semibold mt-2"
            >
              Entrar na comunidade
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
