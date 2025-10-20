import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const translations = {
      en: {
        // Navbar
        'nav.highlights': 'Highlights',
        'nav.description': 'Description',
        'nav.gallery': 'Gallery',
        'nav.vantage': '360° View',
        'nav.map': 'Map',
        'nav.investment': 'Investment',
        'nav.contact': 'Get in Touch',
        
        // Hero
        'hero.title': '40.7 Hectares of Opportunity',
        'hero.subtitle': 'in Portugal\'s Blue Coast',
        'hero.description': 'Direct Sale • No Agents • Exclusive Investment Opportunity',
        'hero.cta': 'Download Investor Brochure',
        
        // Property Highlights
        'highlights.price': 'Price',
        'highlights.location': 'Location',
        'highlights.locationValue': 'Grândola / Santa Margarida da Serra',
        'highlights.locationSub': 'Alentejo, Portugal',
        'highlights.area': 'Total Area',
        'highlights.areaValue': '40.7 hectares',
        'highlights.areaSub': '(407,000 m²)',
        'highlights.access': 'Access',
        'highlights.accessValue': 'Strategic Position',
        'highlights.accessSub': 'Grândola 12 min • Melides Beach 20 min',
        
        // Vantage View
        'vantage.title': '360° Vantage — Homesite In Approval',
        'vantage.subtitle': '(500 m²)',
        'vantage.description': 'This 360° video was captured exactly at the location where the 500 m² private residence project has been submitted to Grândola City Council for approval. On clear days, visibility extends up to',
        'vantage.whyTitle': 'Why This Spot Matters',
        'vantage.feature1.title': 'Pre-approved Homesite',
        'vantage.feature1.desc': 'Fast-track path to a 500 m² signature residence — project already submitted to Grândola City Council.',
        'vantage.feature2.title': 'Commanding Outlook',
        'vantage.feature2.desc': 'Uninterrupted panoramic views stretching up to 80 km on clear days — ideal for a landmark residence or resort masterplan.',
        'vantage.feature3.title': 'Build-ready Terrain',
        'vantage.feature3.desc': 'No protected trees or environmental restrictions. Gently sloped, accessible topography simplifies construction and infrastructure setup.',
        'vantage.feature4.title': 'Investment Asset',
        'vantage.feature4.desc': 'Prime, versatile plot positioned between Comporta and Melides — offering strong appreciation potential and multiple use cases',
        
        // Footer
        'footer.company': 'Noblestate - Investimentos Imobiliários Lda',
        'footer.nif': 'NIF 514745517',
        'footer.tagline': 'Exclusive Family-Owned Properties in Portugal',
        'footer.quote': '"Direct from the owners. Transparent. Authentic. Exceptional."',
        'footer.copyright': 'All rights reserved.',
      },
      pt: {
        // Navbar
        'nav.highlights': 'Destaques',
        'nav.description': 'Descrição',
        'nav.gallery': 'Galeria',
        'nav.vantage': 'Vista 360°',
        'nav.map': 'Mapa',
        'nav.investment': 'Investimento',
        'nav.contact': 'Contacto',
        
        // Hero
        'hero.title': '40,7 Hectares de Oportunidade',
        'hero.subtitle': 'na Costa Azul de Portugal',
        'hero.description': 'Venda Direta • Sem Agentes • Oportunidade de Investimento Exclusiva',
        'hero.cta': 'Descarregar Brochura do Investidor',
        
        // Property Highlights
        'highlights.price': 'Preço',
        'highlights.location': 'Localização',
        'highlights.locationValue': 'Grândola / Santa Margarida da Serra',
        'highlights.locationSub': 'Alentejo, Portugal',
        'highlights.area': 'Área Total',
        'highlights.areaValue': '40,7 hectares',
        'highlights.areaSub': '(407.000 m²)',
        'highlights.access': 'Acesso',
        'highlights.accessValue': 'Posição Estratégica',
        'highlights.accessSub': 'Grândola 12 min • Praia de Melides 20 min',
        
        // Vantage View
        'vantage.title': 'Vista 360° — Casa em Aprovação',
        'vantage.subtitle': '(500 m²)',
        'vantage.description': 'Este vídeo 360° foi capturado exatamente no local onde o projeto de residência privada de 500 m² foi submetido à Câmara Municipal de Grândola para aprovação. Em dias claros, a visibilidade estende-se até',
        'vantage.whyTitle': 'Porquê Este Local',
        'vantage.feature1.title': 'Casa Pré-aprovada',
        'vantage.feature1.desc': 'Caminho rápido para uma residência exclusiva de 500 m² — projeto já submetido à Câmara Municipal de Grândola.',
        'vantage.feature2.title': 'Vista Dominante',
        'vantage.feature2.desc': 'Vistas panorâmicas ininterruptas que se estendem até 80 km em dias claros — ideal para uma residência emblemática ou masterplan de resort.',
        'vantage.feature3.title': 'Terreno Pronto a Construir',
        'vantage.feature3.desc': 'Sem árvores protegidas ou restrições ambientais. Topografia suavemente inclinada e acessível simplifica a construção e infraestrutura.',
        'vantage.feature4.title': 'Ativo de Investimento',
        'vantage.feature4.desc': 'Terreno versátil e privilegiado posicionado entre Comporta e Melides — oferecendo forte potencial de valorização e múltiplos casos de uso',
        
        // Footer
        'footer.company': 'Noblestate - Investimentos Imobiliários Lda',
        'footer.nif': 'NIF 514745517',
        'footer.tagline': 'Propriedades Exclusivas de Família em Portugal',
        'footer.quote': '"Diretamente dos proprietários. Transparente. Autêntico. Excecional."',
        'footer.copyright': 'Todos os direitos reservados.',
      },
    };

    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
