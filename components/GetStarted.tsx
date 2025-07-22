
import { ImageSrc } from "@/constant"
import CTASection from "./Cta"
import TeamSection from "./TeamSection"

export default function GetStarted() {
  const teamMembers = [
 {
      name: "Edmil Amar",
      title: "CEO & Founder",
      avatar: ImageSrc.Team1,
    },
    {
      name: "Makinde Olaitan",
      title: "Chief Technology Officer",
      avatar: ImageSrc.Team1,
    },
    {
      name: "Dalya William",
      title: "Head of Product",
      avatar: ImageSrc.Team1,
    },
    {
      name: "Noah Carter",
      title: "Lead AI Researcher",
      avatar: ImageSrc.Team1,
    },
    {
      name: "Noah Carter",
      title: "Lead AI Researcher",
      avatar: ImageSrc.Team1,
    },
  ]

  const handleGetStartedClick = () => {
    console.log("Get started clicked!")
  }

  return (
    <div className="min-h-screen py-6  text-[#ffffff]">
      <main className="container mx-auto px-4  lg:py-32">
        <TeamSection teamMembers={teamMembers} />
        
        <CTASection 
          title="Get started with 360DMMC today"
          subtitle="Unlock Your Business Potential Through AI Technology Transformation"
          buttonText="Get started"
          onButtonClick={handleGetStartedClick}
        />
      </main>


    </div>
  )
}