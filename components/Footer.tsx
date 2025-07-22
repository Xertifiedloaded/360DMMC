import Image from "next/image"

import { Mail, MapPin, Phone, Facebook, Linkedin } from "lucide-react"
import { ImageSrc } from "@/constant"


export default function Footer() {
  return (
    <footer className=" py-12 border-t border-[#1e293b]">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <Image src={ImageSrc.Logo} alt="360DMMC Logo" width={250} height={40} className="mb-4" />
          <p className="text-[#94a3b8] text-sm max-w-xs">
            Unlock Your Business Potential Through AI Technology Transformation
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <div className="space-y-2 text-[#94a3b8]">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <MapPin className="w-4 h-4" />
              <span>Chicago, IL</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Mail className="w-4 h-4" />
              <span>consult@360dmmc.com</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Phone className="w-4 h-4" />
              <span>+17732005177</span>
            </div>
          </div>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow us</h3>
          <div className="space-y-2 text-[#94a3b8]">
            <a
              href="#"
              className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors"
            >
              <Facebook className="w-4 h-4" />
              <span>Facebook</span>
            </a>
            <a
              href="#"
              className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-[#94a3b8] text-sm mt-12">© 2025 360DMMC. All rights reserved.</div>
    </footer>
  )
}
