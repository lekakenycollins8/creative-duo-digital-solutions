"use client"

import React from "react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ChevronDown } from 'lucide-react'

const FAQs = [
  {
    question: "How much do you charge for a project?",
    answer: "Our pricing varies based on the project's scope and requirements. Contact me for a customized quote."
  },
  {
    question: "Are there additional costs beyond the quoted price?",
    answer: "Additional costs may arise if the project scope changes significantly or requires third-party services."
  },
  {
    question: "Do you provide progress updates during the project?",
    answer: "Yes, We provide regular updates and share milestones to ensure transparency throughout the process."
  },
  {
    question: "Do you provide maintenance after project completion?",
    answer: "Yes, We offer post-launch maintenance and support plans for all my projects."
  },
  {
    question: "Do you handle hosting and domain setup?",
    answer: "Yes, We can assist with hosting, domain setup, and website deployment."
  },
]

const FAQAccordion = () => {
  return (
    <div className="w-full max-w-3xl mx-auto p-6 rounded-xl bg-gradient-to-br from-white to-sky-200 shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6 text-sky-800">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {FAQs.map((faq, index) => (
          <AccordionItem 
            key={index} 
            value={`faq-${index}`} 
            className="bg-white bg-opacity-60 backdrop-blur-sm rounded-lg overflow-hidden"
          >
            <AccordionTrigger className="flex justify-between items-center w-full px-6 py-4 text-left text-lg font-medium text-sky-900 hover:bg-sky-100 transition-colors duration-200">
              {faq.question}
              <ChevronDown className="h-5 w-5 text-sky-600 transition-transform duration-200" />
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 text-sky-800">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

export default FAQAccordion;