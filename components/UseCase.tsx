import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Circle } from "lucide-react"
import { useState } from "react"

interface FeatureItemProps {
  text: string
}

function FeatureItem({ text }: FeatureItemProps) {
  return (
    <div className="flex items-start gap-3">
      <Circle className="mt-1 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 stroke-2 text-[#10b981]" />
      <p className="text-sm sm:text-base text-[#cbd5e1] leading-relaxed">{text}</p>
    </div>
  )
}

interface UseCaseCardProps {
  title: string
  features: string[]
}

function UseCaseCard({ title, features }: UseCaseCardProps) {
  return (
    <Card className="w-full h-full rounded-xl border border-[#475569] bg-[#334155] shadow-lg hover:shadow-xl transition-shadow duration-200">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl sm:text-2xl font-semibold text-[#ffffff]">{title}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3 sm:gap-4">
        {features.map((feature, index) => (
          <FeatureItem key={index} text={feature} />
        ))}
      </CardContent>
    </Card>
  )
}

export default function UseCasesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const useCases = [
    {
      title: "Human Resources",
      features: [
        "Automate job postings and manage applicant tracking systems (ATS)",
        "Screen resumes and rank candidates based on requirements",
        "Schedule interviews and coordinate with managers seamlessly",
        "Generate onboarding checklists for new employees",
        "Create and share employee engagement and retention strategies",
        "Conduct outbound candidate screening calls and schedule interviews efficiently",
      ],
    },
    {
      title: "Operations",
      features: [
        "Keep workflows and data processes running smoothly with automation",
        "Track project milestones and send real-time status updates",
        "Provide performance summaries for departments and teams",
        "Automate routine tasks like reporting and system backups",
        "Identify inefficiencies and recommend optimized workflows",
        "Handle operational inquiries and facilitate vendor communication",
      ],
    },
    {
      title: "Executive Support",
      features: [
        "Create daily schedules with tasks, deadlines, and meeting reminders",
        "Manage inboxes and ensure critical messages are prioritized",
        "Coordinate meeting schedules and handle follow-ups",
        "Automate report generation for key business performance metrics",
        "Retrieve and organize data for executive decision-making",
        "Manage high-priority calls and handle stakeholder communication",
      ],
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % useCases.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + useCases.length) % useCases.length)
  }

  return (
    <div className="flex min-h-screen items-center justify-center  p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-7xl space-y-8 sm:space-y-12">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#ffffff] mb-4">
            Use Cases We&apos;ve Supported
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#cbd5e1] max-w-3xl mx-auto">
            Our AI agents can transform every department in your organization
          </p>
        </div>

        <div className="hidden lg:block">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="flex">
                <UseCaseCard title={useCase.title} features={useCase.features} />
              </div>
            ))}
          </div>
        </div>


        <div className="lg:hidden">
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#334155] text-[#ffffff] hover:bg-[#475569] shadow-lg"
              aria-label="Previous use case"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#334155] text-[#ffffff] hover:bg-[#475569] shadow-lg"
              aria-label="Next use case"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>

            {/* Cards Container */}
            <div className="px-12 sm:px-16">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {useCases.map((useCase, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-2">
                      <UseCaseCard title={useCase.title} features={useCase.features} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {useCases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex 
                      ? 'bg-[#10b981]' 
                      : 'bg-[#475569] hover:bg-[#64748b]'
                  }`}
                  aria-label={`Go to ${useCases[index].title}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Medium Screen View - 2 Cards + Carousel */}
        <div className="hidden md:block lg:hidden">
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-[#334155] text-[#ffffff] hover:bg-[#475569] shadow-lg"
              aria-label="Previous use case"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-[#334155] text-[#ffffff] hover:bg-[#475569] shadow-lg"
              aria-label="Next use case"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            <div className="px-16">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-300 ease-in-out gap-6"
                  style={{ transform: `translateX(-${currentIndex * 50}%)` }}
                >
                  {useCases.map((useCase, index) => (
                    <div key={index} className="w-1/2 flex-shrink-0">
                      <UseCaseCard title={useCase.title} features={useCase.features} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-6 gap-2">
              {Array.from({ length: Math.ceil(useCases.length / 2) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 w-3 rounded-full transition-colors duration-200 ${
                    Math.floor(currentIndex / 2) === index 
                      ? 'bg-[#10b981]' 
                      : 'bg-[#475569] hover:bg-[#64748b]'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}