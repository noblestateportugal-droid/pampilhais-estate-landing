import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-secondary text-secondary-foreground py-10 md:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h3 className="font-serif font-bold text-2xl md:text-3xl mb-2">
            {t('footer.company')}
          </h3>
          <p className="text-base mb-3">{t('footer.nif')}</p>
          <p className="text-lg mb-3">{t('footer.tagline')}</p>
          <p className="text-base italic text-secondary-foreground/80 mb-6">
            {t('footer.quote')}
          </p>
          
          <div className="border-t border-secondary-foreground/20 pt-6 mt-6">
            <p className="text-sm text-secondary-foreground/70">
              © {new Date().getFullYear()} {t('footer.company')}. {t('footer.copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
