"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { ImageSrc } from "@/constant"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const heroImages = [ImageSrc.Ai,ImageSrc.Woman, ImageSrc.Robot,ImageSrc.Hero, ]

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1))
    }, 10000) 

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1))
    setIsAutoPlaying(false)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1))
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <div className="relative bg-white h-screen w-full overflow-hidden">

      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={heroImages[currentImageIndex] || "/placeholder.svg"} // Fallback for ImageSrc
            alt={`Hero image ${currentImageIndex + 1}`}
            fill
            style={{ objectFit: "cover" }}
            quality={100} 
            priority 
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/50 z-10" />

      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200 group"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <ChevronLeft className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200 group"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <ChevronRight className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
            }`}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          />
        ))}
      </div>

      <main className="relative z-15 flex flex-col max-w-6xl mx-auto items-center justify-center h-[calc(100vh-80px)] text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-4"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Unlock Your{" "}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 100 }}
            className="text-amber-400 inline-block"
          >
            Business Potential
          </motion.span>
        </motion.h1>

 
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="text-sm md:text-xl lg:text-2xl text-slate-300 mb-8 max-w-2xl"
        >
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.2 }}>
            Through AI Technology Transformation
          </motion.span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button className="bg-[#10b981] text-white hover:bg-emerald-600 px-8 py-6 text-lg rounded-md flex items-center space-x-2 shadow-lg">
              <span>Book a Call</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.div>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(148, 163, 184, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button
              variant="outline"
              className="border-slate-300 text-white hover:bg-slate-700 hover:text-white px-8 py-6 text-lg rounded-md bg-transparent backdrop-blur-sm shadow-lg"
            >
              Join Community
            </Button>
          </motion.div>
        </motion.div>

       
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-amber-400/30 rounded-full"
              initial={{ opacity: 0 }} 
              animate={{
                y: [0, -30, 0], 
                opacity: [0.3, 1, 0.3], 
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

