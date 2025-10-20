import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t('nav.highlights'), href: '#highlights' },
    { label: t('nav.description'), href: '#description' },
    { label: t('nav.gallery'), href: '#gallery' },
    { label: t('nav.vantage'), href: '#vantage' },
    { label: t('nav.map'), href: '#map' },
    { label: t('nav.investment'), href: '#investment' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-secondary/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#hero"
            className="font-serif font-bold text-xl md:text-2xl text-white hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
          >
            Pampilhais Estate
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-sm font-medium text-white hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <LanguageSwitcher />
            <Button
              variant="default"
              size="sm"
              onClick={() => scrollToSection('#contact')}
              className="bg-primary hover:bg-primary/90"
            >
              {t('nav.contact')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <div className="py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="block px-4 py-2 text-base font-medium text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-2 space-y-3">
                <div className="flex justify-center">
                  <LanguageSwitcher />
                </div>
                <Button
                  variant="default"
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={() => scrollToSection('#contact')}
                >
                  {t('nav.contact')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
