"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqSection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1e293b] px-4 py-12 sm:px-6 sm:px-8">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="sm:text-4xl text-2xl font-bold text-[#ffffff] mb-4">Frequently Asked Questions</h2>
        <p className="text-sm text-[#cbd5e1]">Get answers to common questions about our AI solutions</p>
      </div>
      <div className="w-full max-w-5xl">
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="rounded-sm bg-[#334155] border-none">
            <AccordionTrigger className="p-6 text-sm font-medium text-[#ffffff] hover:no-underline">
              Do you work on one-off projects?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-[#cbd5e1]">
              Yes, we do! We are happy to take on one-off projects to help you with specific AI needs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="rounded-sm bg-[#334155] border-none">
            <AccordionTrigger className="px-6 py-4 text-sm font-medium text-[#ffffff] hover:no-underline">
              How do you price your services?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-[#cbd5e1]">
              Our pricing is tailored to the scope and complexity of each project. We offer competitive rates and can
              provide a detailed quote after an initial consultation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="rounded-sm bg-[#334155] border-none">
            <AccordionTrigger className="px-6 py-4 text-sm font-medium text-[#ffffff] hover:no-underline">
              How long does it take to create an AI solution?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-[#cbd5e1]">
              The timeline for creating an AI solution varies depending on the project&apos;s complexity and specific
              requirements. We work efficiently to deliver high-quality solutions in a timely manner.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="rounded-sm bg-[#334155] border-none">
            <AccordionTrigger className="px-6 py-4 text-sm font-medium text-[#ffffff] hover:no-underline">
              I&apos;m not sure where to start—what do you recommend?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-[#cbd5e1]">
              We recommend starting with a consultation to discuss your business needs and goals. Our experts can help
              identify the best AI solutions for you.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5" className="rounded-sm bg-[#334155] border-none">
            <AccordionTrigger className="px-6 py-4 text-sm font-medium text-[#ffffff] hover:no-underline">
              How do your solutions improve business operations?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-[#cbd5e1]">
              Our AI solutions are designed to automate tasks, optimize processes, provide data-driven insights, and
              enhance decision-making, leading to improved efficiency and productivity.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6" className="rounded-sm bg-[#334155] border-none">
            <AccordionTrigger className="px-6 py-4 text-sm font-medium text-[#ffffff] hover:no-underline">
              What happens if I&apos;m not satisfied with the results?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-[#cbd5e1]">
              Client satisfaction is our top priority. We work closely with you throughout the project to ensure the
              solution meets your expectations. If you&apos;re not satisfied, we&apos;ll collaborate to address your concerns and
              make necessary adjustments.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
