"use client" 
import { Search, Lightbulb, Zap, Shield, ChevronDown, ArrowRight, Target } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { motion } from "framer-motion" 

export default function Process() {
  const phases = [
    {
      id: 1,
      icon: Search,
      color: "var(--v0-bright-green)",
      title: "Discovery & Alignment",
      description:
        "We begin by understanding your business from the inside out, identifying opportunities and ensuring perfect alignment between your needs and our capabilities.",
      fullDescription:
        "In this initial phase, we conduct in-depth workshops and interviews to thoroughly understand your current business processes, challenges, and strategic goals. We analyze your existing data infrastructure and identify key areas where AI can deliver significant value. Our team works closely with yours to define clear objectives and success metrics, ensuring that our AI solutions are perfectly aligned with your vision.",
    },
    {
      id: 2,
      icon: Lightbulb,
      color: "var(--v0-blue)",
      title: "System Design & Validation",
      description:
        "We create a clear, actionable blueprint for your AI systems, mapping workflows and designing the architecture that will drive your success.",
      fullDescription:
        "Building on the discovery phase, we design a detailed architecture for your AI systems, including data pipelines, model selection, and integration points. We develop prototypes and conduct rigorous testing to validate the design, ensuring it meets performance, scalability, and security requirements. User feedback is incorporated iteratively to refine the solution before full implementation.",
    },
    {
      id: 3,
      icon: Zap,
      color: "var(--v0-purple)", // Using CSS variable for consistency
      title: "Implementation & Integration",
      description:
        "Strategy becomes execution as we build and integrate your complete AI solution seamlessly into your existing operations and technology stack.",
      fullDescription:
        "This phase involves the development and deployment of the AI models and infrastructure. Our engineers work to integrate the new AI solution with your existing systems, ensuring minimal disruption to your operations. We focus on robust coding practices, thorough testing, and efficient deployment strategies to bring your AI vision to life.",
    },
    {
      id: 4,
      icon: Shield,
      color: "var(--v0-pink)", 
      title: "Continued Partnership",
      description:
        "Our relationship continues beyond implementation with ongoing monitoring, optimization, and evolution to ensure your systems grow with your business.",
      fullDescription:
        "Beyond deployment, we provide ongoing support, monitoring, and optimization services. We continuously track the performance of your AI systems, identify opportunities for improvement, and adapt the solution to evolving business needs and market conditions. Our partnership ensures your AI investment continues to deliver maximum value over time.",
    },
  ]

  return (
    <div className="min-h-screen bg-v0-black text-v0-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="mb-8 sm:mb-12 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full bg-v0-medium-dark-blue-gray px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-v0-bright-green border border-v0-bright-green mb-6 sm:mb-8">
          <Target className="w-3 h-3 sm:w-4 sm:h-4" />
          Our Methodology
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 px-2">Our Proven Process</h1>
        <p className="text-base sm:text-lg md:text-xl text-v0-light-gray max-w-2xl mx-auto px-2">
          A systematic approach to transforming your business operations with AI
        </p>
      </div>
      <div className="relative flex flex-col items-center w-full max-w-6xl">
        {phases.map((phase, index) => (
          <motion.div 
            key={phase.id}
            className="flex items-start w-full mb-8 sm:mb-12 last:mb-0"
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, amount: 0.5 }} 
            transition={{ duration: 0.6, delay: index * 0.1 }} 
          >
            <div className="relative hidden sm:flex flex-col items-center mr-6 lg:mr-8">
              <div
                className="w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center border-2 bg-v0-black z-10 shadow-lg"
                style={{ borderColor: phase.color }}
              >
                <phase.icon className="w-5 sm:w-6 h-5 sm:h-6" style={{ color: phase.color }} />
              </div>
              {index < phases.length - 1 && (
                <div
                  className="absolute top-10 sm:top-12 bottom-[-2rem] sm:bottom-[-3rem] w-0.5 opacity-60"
                  style={{
                    background: `linear-gradient(to bottom, ${phase.color}, ${phases[index + 1].color})`,
                  }}
                />
              )}
            </div>
            <div className="flex-1 bg-v0-dark-blue-gray rounded-xl p-4 sm:p-6 shadow-lg border border-v0-medium-dark-blue-gray">
              {/* Mobile timeline icon */}
              <div className="flex items-center mb-4 sm:hidden">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center border-2 bg-v0-black mr-3"
                  style={{ borderColor: phase.color }}
                >
                  <phase.icon className="w-4 h-4" style={{ color: phase.color }} />
                </div>
                <div
                  className="inline-block rounded-full px-2 py-1 text-xs font-medium text-v0-black"
                  style={{ backgroundColor: phase.color }}
                >
                  Phase {phase.id}
                </div>
              </div>
              {/* Desktop phase badge */}
              <div
                className="hidden sm:inline-block rounded-full px-3 py-1 text-sm font-medium text-v0-black mb-3"
                style={{ backgroundColor: phase.color }}
              >
                Phase {phase.id}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">{phase.title}</h3>
              <Collapsible className="group">
                <p className="text-v0-light-gray mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                  {phase.description}
                </p>
                <CollapsibleContent className="overflow-hidden transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
                  <div className="border-t border-v0-medium-dark-blue-gray pt-3 sm:pt-4 mt-3 sm:mt-4">
                    <p className="text-v0-light-gray text-sm sm:text-base leading-relaxed">{phase.fullDescription}</p>
                  </div>
                </CollapsibleContent>
                <CollapsibleTrigger asChild>
                  <button
                    className="inline-flex items-center font-medium hover:underline mt-2 sm:mt-3 text-sm sm:text-base transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-v0-dark-blue-gray rounded px-1"
                    style={{ color: phase.color }}
                  >
                    <span className="group-data-[state=open]:hidden">View Details</span>
                    <span className="hidden group-data-[state=open]:inline">Hide Details</span>
                    <ChevronDown className="w-4 h-4 ml-1 transition-transform group-data-[state=open]:rotate-180" />
                  </button>
                </CollapsibleTrigger>
              </Collapsible>
            </div>
          </motion.div>
        ))}
        <div className="mt-2 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border-2 border-v0-bright-green bg-v0-dark-blue-gray px-4 sm:px-6 py-3 text-v0-bright-green font-medium shadow-sm transition-all duration-200 hover:bg-v0-bright-green hover:text-v0-black hover:scale-105 focus:outline-none focus:ring-2 focus:ring-v0-bright-green focus:ring-offset-2 focus:ring-offset-v0-black text-sm sm:text-base">
            <Zap className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">Ready to Transform Your Business?</span>
            <span className="sm:hidden">Transform Your Business</span>
          </button>
          <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-v0-bright-green px-4 sm:px-6 py-3 text-v0-black font-medium shadow-sm transition-all duration-200 hover:bg-v0-green-accent hover:scale-105 focus:outline-none focus:ring-2 focus:ring-v0-bright-green focus:ring-offset-2 focus:ring-offset-v0-black text-sm sm:text-base">
            Start Your Journey
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  )
}
