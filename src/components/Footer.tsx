const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-10 md:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h3 className="font-serif font-bold text-2xl md:text-3xl mb-2">
            Noblestate Family Real Estate
          </h3>
          <p className="text-lg mb-3">Exclusive Family-Owned Properties in Portugal</p>
          <p className="text-base italic text-secondary-foreground/80 mb-6">
            "Direct from the owners. Transparent. Authentic. Exceptional."
          </p>
          
          <div className="border-t border-secondary-foreground/20 pt-6 mt-6">
            <p className="text-sm text-secondary-foreground/70">
              © {new Date().getFullYear()} Noblestate Family Real Estate. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
