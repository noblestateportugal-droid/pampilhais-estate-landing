import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from '@/contexts/LanguageContext';

const FAQ = () => {
  const { t } = useLanguage();
  
  const faqs = [
    {
      question: t('faq.q1'),
      answer: (
        <>
          <p className="mb-3">{t('faq.a1.intro')}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li dangerouslySetInnerHTML={{ __html: t('faq.a1.point1') }} />
            <li dangerouslySetInnerHTML={{ __html: t('faq.a1.point2') }} />
            <li dangerouslySetInnerHTML={{ __html: t('faq.a1.point3') }} />
          </ul>
          <p className="mt-3">{t('faq.a1.outro')}</p>
        </>
      )
    },
    {
      question: t('faq.q2'),
      answer: t('faq.a2')
    },
    {
      question: t('faq.q3'),
      answer: t('faq.a3')
    },
    {
      question: t('faq.q4'),
      answer: t('faq.a4')
    },
    {
      question: t('faq.q5'),
      answer: t('faq.a5')
    },
    {
      question: t('faq.q6'),
      answer: t('faq.a6')
    },
    {
      question: t('faq.q7'),
      answer: t('faq.a7')
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-center mb-3">
            {t('faq.title')}
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            {t('faq.subtitle')}
          </p>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
