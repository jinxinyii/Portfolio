
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Determine which section is currently in view
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          if (activeSection !== section) {
            setActiveSection(section);
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 py-4',
        isScrolled ? 'bg-background/80 backdrop-blur-xl shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold tracking-tighter">
          Xinyii
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-all duration-300 ease-in-out relative',
                activeSection === link.href.substring(1) 
                  ? 'text-primary' 
                  : 'text-foreground/80 hover:text-foreground'
              )}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full animate-fade-in" />
              )}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground focus:outline-none" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          'fixed inset-x-0 top-[4rem] p-4 md:hidden transition-all duration-300 ease-in-out overflow-hidden',
          mobileMenuOpen 
            ? 'opacity-100 translate-y-0 h-auto bg-background/90 backdrop-blur-xl border-b' 
            : 'opacity-0 -translate-y-4 h-0 pointer-events-none'
        )}
      >
        <div className="flex flex-col space-y-4 px-2 py-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                'px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ease-in-out',
                activeSection === link.href.substring(1) 
                  ? 'bg-primary/10 text-primary' 
                  : 'text-foreground/80 hover:bg-secondary hover:text-foreground'
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
