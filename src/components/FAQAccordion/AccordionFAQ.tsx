import React from "react"
import { Helmet } from "react-helmet-async"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { ChevronDown } from 'lucide-react'
import { faqSchema, generalFaqs } from "@/lib/seo"

const FAQAccordion = () => {
  return (
    <section id="faq" aria-label="Frequently Asked Questions" className="py-16 px-4">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema(generalFaqs))}
        </script>
      </Helmet>
      <div className="w-full max-w-3xl mx-auto p-6 rounded-xl bg-gradient-to-br from-background to-sky-50 dark:to-sky-950 shadow-lg border border-border">
        <h2 className="text-3xl font-bold text-center mb-2 gradient-text">Frequently Asked Questions</h2>
        <p className="text-center text-muted-foreground mb-8 text-sm">
          Everything you need to know about working with CreativeDuo Digital Solutions.
        </p>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {generalFaqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="bg-background/60 backdrop-blur-sm rounded-lg overflow-hidden border border-border/50"
            >
              <AccordionTrigger className="flex justify-between items-center w-full px-6 py-4 text-left text-base font-medium text-foreground hover:bg-muted transition-colors duration-200">
                {faq.question}
                <ChevronDown className="h-5 w-5 text-primary transition-transform duration-200 shrink-0 ml-2" />
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-foreground/80 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default FAQAccordion;