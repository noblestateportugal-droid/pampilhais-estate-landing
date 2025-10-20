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
        
        // Property Description
        'description.title1': 'A Rare Land Investment in Portugal\'s',
        'description.title2': 'Fastest-Growing Luxury Corridor',
        'description.para1': 'Discover <strong>Pampilhais</strong> — a 40.7-hectare estate located on the border between Grândola and Santa Margarida da Serra, in the heart of the Alentejo countryside. Just 30 minutes from Comporta and 20 minutes from Melides, this property combines natural beauty, development potential, and long-term appreciation.',
        'description.para2': 'The land includes over <strong>5 km of newly built internal roads</strong>, with sweeping panoramic views across cork oaks, holm oaks, and strawberry trees. A private dam with a natural spring and a well ensure sustainable water supply year-round — ideal for both agricultural and hospitality uses.',
        'description.zoningTitle': 'Zoning and Development Potential',
        'description.point1': '500 m² residential villa project submitted to CMG',
        'description.point2': '8,000 m² agricultural structures approved for rural operations',
        'description.point3': 'Tourism project potential: ~110 beds (subject to final municipal confirmation)',
        'description.exceptional': 'Exceptional for: <strong>boutique eco-resort/wellness retreat</strong> • <strong>private family estate</strong> • <strong>regenerative agriculture + tourism</strong>',
        'description.cta': 'Download the Investor Brochure',
        
        // Gallery
        'gallery.title': 'Property Gallery',
        
        // Map
        'map.title': 'Strategic Location',
        'map.subtitle': 'Pampilhais is perfectly positioned between Grândola, Melides, and Comporta — Portugal\'s most sought-after coastal destinations.',
        
        // Investment
        'investment.title1': 'Investment Snapshot:',
        'investment.title2': 'Alentejo\'s Growth Story',
        'investment.subtitle': 'The Alentejo region has seen explosive growth in luxury real estate and hospitality, with €1.3B+ invested in nearby developments.',
        'investment.appreciationTitle': 'Land Appreciation',
        'investment.appreciation1': 'Rural/agri land up ~33% (2021–2023); some regions doubled',
        'investment.appreciation2': 'Residential/tourism near Comporta & Melides: +28% annual growth',
        'investment.appreciation3': 'Some luxury segments tripled in value over two years',
        'investment.environmentTitle': 'Investment Environment',
        'investment.environmentSubtitle': '<strong>€1.3B+ invested</strong> in nearby luxury resorts and hospitality (Comporta, Melides, Carvalhal, Tróia).',
        'investment.project1Name': 'Six Senses Comporta',
        'investment.project1Desc': '€1.7B eco-resort & branded residences (Pinheirinho)',
        'investment.project2Name': 'Costa Terra Ocean & Golf Club',
        'investment.project2Desc': 'Private resort community by Discovery Land Company (Melides)',
        'investment.project3Name': 'Vermelho Hotel',
        'investment.project3Desc': 'Boutique hotel by Christian Louboutin (Melides)',
        'investment.whyTitle': 'Why Pampilhais?',
        'investment.why1': 'Strategic position between luxury destinations',
        'investment.why2': 'Sustainable natural resources (dam, well, cork forest)',
        'investment.why3': 'Clear zoning path (residential/agricultural/tourism)',
        'investment.why4': 'Private sale (no agent commissions)',
        'investment.why5': 'Eligible for direct investment or joint venture',
        'investment.cta': 'Download the Brochure',
        
        // Contact
        'contact.title': 'Get In Touch',
        'contact.subtitle': 'Interested in Pampilhais? Contact Caroline Pires to schedule a video call or private visit. We only conduct business directly with verified buyers or development partners.',
        'contact.formTitle': 'Contact Form',
        'contact.chatTitle': 'Chat with Caroline',
        'contact.chatDesc': 'Prefer to chat in real-time? Connect directly with Caroline Pires via WhatsApp or schedule a video call to discuss this exclusive investment opportunity.',
        'contact.chatButton': 'Speak to Caroline on WhatsApp',
        'contact.nameLabel': 'Name',
        'contact.namePlaceholder': 'Your full name',
        'contact.emailLabel': 'Email',
        'contact.emailPlaceholder': 'your@email.com',
        'contact.messageLabel': 'Message',
        'contact.messagePlaceholder': 'Tell us about your interest in Pampilhais...',
        'contact.submitButton': 'Send Message',
        'contact.nameRequired': 'Name is required',
        'contact.nameMax': 'Name must be less than 100 characters',
        'contact.emailInvalid': 'Invalid email address',
        'contact.emailMax': 'Email must be less than 255 characters',
        'contact.messageRequired': 'Message is required',
        'contact.messageMax': 'Message must be less than 1000 characters',
        'contact.toastTitle': 'Opening Email Client',
        'contact.toastDesc': 'Your default email client will open with the message pre-filled.',
        
        // FAQ
        'faq.title': 'Investor FAQ',
        'faq.subtitle': 'Find answers to the most frequently asked questions about Pampilhais Estate',
        'faq.q1': 'Is construction allowed, or is it only rustic land?',
        'faq.a1.intro': 'Yes—development is possible under municipal rules:',
        'faq.a1.point1': '<strong>Private residence:</strong> a 500 m² home project has been submitted to Grândola City Council.',
        'faq.a1.point2': '<strong>Tourism use:</strong> (see zoning note below).',
        'faq.a1.point3': '<strong>Agricultural support buildings:</strong> (see zoning note below).',
        'faq.a1.outro': 'You can also renovate the existing houses for short-term letting (requires the appropriate local license).',
        'faq.q2': 'Is there a public road crossing the property?',
        'faq.a2': 'A public passage (~400 m) runs along the eastern boundary and nicks a corner (~50 m) as access for neighboring lands. All other internal roads (≈5 km) are exclusive to Pampilhais.',
        'faq.q3': 'Do neighboring plots require access across this land?',
        'faq.a3': 'Only the public passage described above is used; otherwise, no additional easements are granted through the property.',
        'faq.q4': 'Do you have a topographic survey?',
        'faq.a4': 'Yes—topography is available and can be shared in the data room.',
        'faq.q5': 'Are there municipal or government projects planned for this area?',
        'faq.a5': 'No. The municipality and central government currently have no projects slated for this area.',
        'faq.q6': 'Have you offered the land to neighbors (right of first refusal)?',
        'faq.a6': 'Neighbors will be formally notified after a sale value is agreed with the purchaser, per local rules.',
        'faq.q7': 'Water resources?',
        'faq.a7': 'Two independent sources: a well and a spring-fed lake/dam. The lake can potentially be enlarged and treated to become a natural swimming lake, subject to technical and environmental approvals.',
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
        
        // Property Description
        'description.title1': 'Um Investimento Raro em Terreno no',
        'description.title2': 'Corredor de Luxo de Crescimento Mais Rápido de Portugal',
        'description.para1': 'Descubra <strong>Pampilhais</strong> — uma propriedade de 40,7 hectares localizada na fronteira entre Grândola e Santa Margarida da Serra, no coração do Alentejo. A apenas 30 minutos de Comporta e 20 minutos de Melides, esta propriedade combina beleza natural, potencial de desenvolvimento e valorização a longo prazo.',
        'description.para2': 'O terreno inclui mais de <strong>5 km de estradas internas recém-construídas</strong>, com vistas panorâmicas sobre sobreiros, azinheiras e medronheiros. Uma barragem privada com nascente natural e um poço garantem abastecimento de água sustentável durante todo o ano — ideal para usos agrícolas e de hospitalidade.',
        'description.zoningTitle': 'Zonamento e Potencial de Desenvolvimento',
        'description.point1': 'Projeto de moradia residencial de 500 m² submetido à CMG',
        'description.point2': '8.000 m² de estruturas agrícolas aprovadas para operações rurais',
        'description.point3': 'Potencial de projeto turístico: ~110 camas (sujeito a confirmação municipal final)',
        'description.exceptional': 'Excecional para: <strong>eco-resort boutique/retiro de bem-estar</strong> • <strong>propriedade familiar privada</strong> • <strong>agricultura regenerativa + turismo</strong>',
        'description.cta': 'Descarregar Brochura do Investidor',
        
        // Gallery
        'gallery.title': 'Galeria da Propriedade',
        
        // Map
        'map.title': 'Localização Estratégica',
        'map.subtitle': 'Pampilhais está perfeitamente posicionado entre Grândola, Melides e Comporta — os destinos costeiros mais procurados de Portugal.',
        
        // Investment
        'investment.title1': 'Panorama do Investimento:',
        'investment.title2': 'A História de Crescimento do Alentejo',
        'investment.subtitle': 'A região do Alentejo registou um crescimento explosivo no setor imobiliário de luxo e hotelaria, com mais de 1,3 mil milhões de euros investidos em empreendimentos próximos.',
        'investment.appreciationTitle': 'Valorização do Terreno',
        'investment.appreciation1': 'Terreno rústico/agrícola aumentou ~33% (2021–2023); algumas regiões duplicaram',
        'investment.appreciation2': 'Residencial/turismo perto de Comporta e Melides: +28% de crescimento anual',
        'investment.appreciation3': 'Alguns segmentos de luxo triplicaram de valor em dois anos',
        'investment.environmentTitle': 'Ambiente de Investimento',
        'investment.environmentSubtitle': '<strong>Mais de 1,3 mil milhões de euros investidos</strong> em resorts de luxo e hotelaria próximos (Comporta, Melides, Carvalhal, Tróia).',
        'investment.project1Name': 'Six Senses Comporta',
        'investment.project1Desc': 'Eco-resort de 1,7 mil milhões de euros e residências de marca (Pinheirinho)',
        'investment.project2Name': 'Costa Terra Ocean & Golf Club',
        'investment.project2Desc': 'Comunidade resort privada da Discovery Land Company (Melides)',
        'investment.project3Name': 'Vermelho Hotel',
        'investment.project3Desc': 'Hotel boutique de Christian Louboutin (Melides)',
        'investment.whyTitle': 'Porquê Pampilhais?',
        'investment.why1': 'Posição estratégica entre destinos de luxo',
        'investment.why2': 'Recursos naturais sustentáveis (barragem, poço, floresta de sobro)',
        'investment.why3': 'Caminho de zonamento claro (residencial/agrícola/turismo)',
        'investment.why4': 'Venda privada (sem comissões de agentes)',
        'investment.why5': 'Elegível para investimento direto ou joint venture',
        'investment.cta': 'Descarregar a Brochura',
        
        // Contact
        'contact.title': 'Entre em Contacto',
        'contact.subtitle': 'Interessado em Pampilhais? Contacte Caroline Pires para agendar uma videochamada ou visita privada. Apenas realizamos negócios diretamente com compradores verificados ou parceiros de desenvolvimento.',
        'contact.formTitle': 'Formulário de Contacto',
        'contact.chatTitle': 'Fale com a Caroline',
        'contact.chatDesc': 'Prefere conversar em tempo real? Conecte-se diretamente com Caroline Pires via WhatsApp ou agende uma videochamada para discutir esta oportunidade exclusiva de investimento.',
        'contact.chatButton': 'Falar com Caroline no WhatsApp',
        'contact.nameLabel': 'Nome',
        'contact.namePlaceholder': 'O seu nome completo',
        'contact.emailLabel': 'Email',
        'contact.emailPlaceholder': 'seu@email.com',
        'contact.messageLabel': 'Mensagem',
        'contact.messagePlaceholder': 'Fale-nos sobre o seu interesse em Pampilhais...',
        'contact.submitButton': 'Enviar Mensagem',
        'contact.nameRequired': 'Nome é obrigatório',
        'contact.nameMax': 'Nome deve ter menos de 100 caracteres',
        'contact.emailInvalid': 'Endereço de email inválido',
        'contact.emailMax': 'Email deve ter menos de 255 caracteres',
        'contact.messageRequired': 'Mensagem é obrigatória',
        'contact.messageMax': 'Mensagem deve ter menos de 1000 caracteres',
        'contact.toastTitle': 'A Abrir Cliente de Email',
        'contact.toastDesc': 'O seu cliente de email padrão abrirá com a mensagem pré-preenchida.',
        
        // FAQ
        'faq.title': 'FAQ do Investidor',
        'faq.subtitle': 'Encontre respostas às perguntas mais frequentes sobre a Propriedade Pampilhais',
        'faq.q1': 'É permitida construção, ou é apenas terreno rústico?',
        'faq.a1.intro': 'Sim — o desenvolvimento é possível sob as regras municipais:',
        'faq.a1.point1': '<strong>Residência privada:</strong> um projeto de casa de 500 m² foi submetido à Câmara Municipal de Grândola.',
        'faq.a1.point2': '<strong>Uso turístico:</strong> (ver nota de zonamento abaixo).',
        'faq.a1.point3': '<strong>Edifícios de apoio agrícola:</strong> (ver nota de zonamento abaixo).',
        'faq.a1.outro': 'Também pode renovar as casas existentes para alojamento local (requer a licença local apropriada).',
        'faq.q2': 'Existe uma estrada pública que atravessa a propriedade?',
        'faq.a2': 'Uma passagem pública (~400 m) corre ao longo da fronteira leste e toca um canto (~50 m) como acesso para terrenos vizinhos. Todas as outras estradas internas (≈5 km) são exclusivas de Pampilhais.',
        'faq.q3': 'Os terrenos vizinhos requerem acesso através deste terreno?',
        'faq.a3': 'Apenas a passagem pública descrita acima é usada; caso contrário, nenhuma servidão adicional é concedida através da propriedade.',
        'faq.q4': 'Tem levantamento topográfico?',
        'faq.a4': 'Sim — a topografia está disponível e pode ser partilhada na sala de dados.',
        'faq.q5': 'Existem projetos municipais ou governamentais planeados para esta área?',
        'faq.a5': 'Não. O município e o governo central atualmente não têm projetos previstos para esta área.',
        'faq.q6': 'Ofereceu o terreno aos vizinhos (direito de preferência)?',
        'faq.a6': 'Os vizinhos serão formalmente notificados após um valor de venda ser acordado com o comprador, conforme as regras locais.',
        'faq.q7': 'Recursos hídricos?',
        'faq.a7': 'Duas fontes independentes: um poço e uma barragem/lago alimentado por nascente. O lago pode potencialmente ser ampliado e tratado para se tornar uma piscina natural, sujeito a aprovações técnicas e ambientais.',
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
