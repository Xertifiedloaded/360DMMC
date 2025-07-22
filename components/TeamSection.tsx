import { ImageSrc } from "@/constant"
import Image from "next/image"

interface TeamMember {
  name: string
  title: string
  avatar: string
}

interface TeamSectionProps {
  teamMembers?: TeamMember[]
}

export default function TeamSection({ teamMembers }: TeamSectionProps) {
  const defaultTeamMembers: TeamMember[] = [
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
      avatar: ImageSrc,
    },
    {
      name: "Noah Carter",
      title: "Lead AI Researcher",
      avatar: ImageSrc.Team1,
    },
  ]

  const members = teamMembers || defaultTeamMembers

  return (
    <section className="text-center mb-20">
      <h2 className="text-2xl md:text-5xl font-bold mb-12 text-[#ffffff]">Meet the Team</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {members.map((member, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-[#d9e8f5] flex items-center justify-center mb-4">
              <Image
                src={member.avatar || "/placeholder.svg"}
                alt={member.name}
                width={160}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-sm font-semibold text-[#ffffff]">{member.name}</h3>
            <small className="text-[#94a3b8] ">{member.title}</small>
          </div>
        ))}
      </div>
    </section>
  )
}