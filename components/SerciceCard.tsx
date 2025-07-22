import { Card } from "@/components/ui/card"
import Image from "next/image"

interface ServiceCardProps {
  iconQuery: string
  title: string
  description: string
}

export default function ServiceCard({ iconQuery, title, description }: ServiceCardProps) {
  return (
    <Card className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start text-left">
      <div className="mb-2">
        <Image
          src={iconQuery}
          width={48}
          height={48}
          alt={`${title} icon`}
          className="rounded-md"
        />

      </div>
      <h3 className="text-lg font-bold text-black ">{title}</h3>
      <p className="text-sm text-secondary-text">{description}</p>
    </Card>
  )
}
