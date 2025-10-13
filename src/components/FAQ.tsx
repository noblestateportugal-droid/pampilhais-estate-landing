import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Is construction allowed, or is it only rustic land?",
      answer: (
        <>
          <p className="mb-3">Yes—development is possible under municipal rules:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Private residence:</strong> a 500 m² home project has been submitted to Grândola City Council.</li>
            <li><strong>Tourism use:</strong> (see zoning note below).</li>
            <li><strong>Agricultural support buildings:</strong> (see zoning note below).</li>
          </ul>
          <p className="mt-3">You can also renovate the existing houses for short-term letting (requires the appropriate local license).</p>
        </>
      )
    },
    {
      question: "Is there a public road crossing the property?",
      answer: "A public passage (~400 m) runs along the eastern boundary and nicks a corner (~50 m) as access for neighboring lands. All other internal roads (≈5 km) are exclusive to Pampilhais."
    },
    {
      question: "Do neighboring plots require access across this land?",
      answer: "Only the public passage described above is used; otherwise, no additional easements are granted through the property."
    },
    {
      question: "Do you have a topographic survey?",
      answer: "Yes—topography is available and can be shared in the data room."
    },
    {
      question: "Are there municipal or government projects planned for this area?",
      answer: "No. The municipality and central government currently have no projects slated for this area."
    },
    {
      question: "Have you offered the land to neighbors (right of first refusal)?",
      answer: "Neighbors will be formally notified after a sale value is agreed with the purchaser, per local rules."
    },
    {
      question: "Water resources?",
      answer: "Two independent sources: a well and a spring-fed lake/dam. The lake can potentially be enlarged and treated to become a natural swimming lake, subject to technical and environmental approvals."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-center mb-3">
            Investor FAQ
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Find answers to the most frequently asked questions about Pampilhais Estate
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
