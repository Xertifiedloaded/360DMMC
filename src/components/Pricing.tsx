"use client"
import { Check } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useState } from "react"

interface FeatureProps {
  title: string
  description: string
}

interface PricingCardProps {
  title: string
  price: string
  setupFee: string
  features: FeatureProps[]
  index: number
  isPopular?: boolean
}

export function PricingCard({ title, price, setupFee, features, index, isPopular }: PricingCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut"
      }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ 
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
    >
      {/* Popular badge */}
      {isPopular && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.2 + 0.5 }}
          className="absolute -top-4 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="bg-gradient-to-r from-[#10b981] to-[#34d399] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
            Most Popular
          </div>
        </motion.div>
      )}

      <Card className={`w-full max-w-sm rounded-xl border transition-all duration-300 shadow-lg relative overflow-hidden ${
        isPopular 
          ? 'border-[#10b981] bg-[#1a2e35] text-white shadow-[#10b981]/30' 
          : 'border-[#34d399] bg-[#1a2e35] text-white shadow-[#10b981]/20'
      }`}>
        
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#10b981]/5 via-transparent to-[#34d399]/5"
          animate={{
            background: isHovered 
              ? "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(52, 211, 153, 0.1) 100%)"
              : "linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(52, 211, 153, 0.05) 100%)"
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Floating orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-10 -right-10 w-20 h-20 bg-[#10b981]/10 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.5,
            }}
          />
          <motion.div
            className="absolute -bottom-10 -left-10 w-16 h-16 bg-[#34d399]/10 rounded-full blur-xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: index * 0.3,
            }}
          />
        </div>

        <CardHeader className="space-y-2 p-6 relative z-10">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
            className="text-lg font-semibold text-[#10b981]"
          >
            {title}
          </motion.h3>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
            className="text-4xl font-bold"
          >
            {price}
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
            className="text-sm text-[#94a3b8]"
          >
            {setupFee}
          </motion.p>
        </CardHeader>

        <CardContent className="space-y-4 p-6 pt-0 relative z-10">
          {features.map((feature, featureIndex) => (
            <motion.div
              key={featureIndex}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.2 + 0.6 + featureIndex * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ x: 5 }}
              className="flex items-start space-x-3 group"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.2 + 0.7 + featureIndex * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ scale: 1.1 }}
              >
                <Check className="h-5 w-5 flex-shrink-0 text-[#10b981] transition-all duration-200 group-hover:text-[#34d399]" />
              </motion.div>
              <div className="transition-all duration-200 group-hover:translate-x-1">
                <h4 className="font-semibold group-hover:text-[#10b981] transition-colors duration-200">
                  {feature.title}
                </h4>
                <p className="text-sm text-[#94a3b8] group-hover:text-[#cbd5e1] transition-colors duration-200">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </CardContent>

        <CardFooter className="p-6 pt-0 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2 + 1,
              ease: "easeOut"
            }}
            className="w-full"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button className="w-full rounded-full bg-gradient-to-r from-[#10b981] to-[#34d399] py-6 text-lg font-semibold text-white hover:from-[#10b981]/90 hover:to-[#34d399]/90 transition-all duration-300 shadow-lg hover:shadow-[#10b981]/50 relative overflow-hidden group">
              {/* Button shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full"
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">Explore Omni</span>
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export default function Pricing() {
  const features = [
    {
      title: "24/7 AI Sales Agent",
      description: "Qualifies and nurtures leads automatically",
    },
    {
      title: "Multi-Channel Communication",
      description: "Email, SMS, chat, and more",
    },
    {
      title: "Calendar Integration",
      description: "Automated appointment booking",
    },
    {
      title: "Performance Analytics",
      description: "Track and optimize your results",
    },
  ]

  // Different pricing tiers for variety
  const pricingTiers = [
    {
      title: "Omni Starter",
      price: "$499/m",
      setupFee: "+ one-time setup fee",
      features: features.slice(0, 2),
      isPopular: false,
    },
    {
      title: "Omni Pro",
      price: "$700/m",
      setupFee: "+ one-time setup fee",
      features: features,
      isPopular: true,
    },
    {
      title: "Omni Enterprise",
      price: "$999/m",
      setupFee: "Setup included",
      features: [...features, {
        title: "Priority Support",
        description: "24/7 dedicated support team"
      }],
      isPopular: false,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0f172a] px-4 py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#10b981]/20 rounded-full"
            animate={{
              x: [0, 100, -50, 50],
              y: [0, -100, 50, -30],
              opacity: [0, 1, 0.5, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Animated heading */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-12 text-center text-3xl max-w-3xl mx-auto font-bold text-white md:text-4xl lg:text-6xl"
      >
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-block"
        >
          Partner with Us and{" "}
        </motion.span>
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.6,
            type: "spring",
            stiffness: 100
          }}
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#34d399] inline-block"
        >
          Invest in Your Business
        </motion.span>
      </motion.h1>

      {/* Animated pricing cards grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {pricingTiers.map((tier, index) => (
          <PricingCard
            key={index}
            title={tier.title}
            price={tier.price}
            setupFee={tier.setupFee}
            features={tier.features}
            index={index}
            isPopular={tier.isPopular}
          />
        ))}
      </motion.div>
    </div>
  )
}