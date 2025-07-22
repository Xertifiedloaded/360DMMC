import { Button } from "@/components/ui/button"

interface CTASectionProps {
  title?: string
  subtitle?: string
  buttonText?: string
  onButtonClick?: () => void
}

export default function CTASection({ 
  title = "Get started with 360DMMC today",
  subtitle = "Unlock Your Business Potential Through AI Technology Transformation",
  buttonText = "Get started",
  onButtonClick
}: CTASectionProps) {
  return (
    <>
      {/* Get Started Button */}
      <section className="text-center mb-10">
        <Button
          className="px-8 py-3 rounded-full text-lg font-medium bg-[#d9e8f5] text-[#121417] hover:bg-opacity-90 transition-colors"
          variant="ghost"
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </section>

      {/* Get Started with 360DMMC today Section */}
      <section className="text-center mb-20">
        <h2 className="text-3xl md:text-3xl font-bold mb-4 text-[#ffffff]">{title}</h2>
        <p className="text-sm md:text-2xl text-[#94a3b8]">
          {subtitle}
        </p>
      </section>
    </>
  )
}