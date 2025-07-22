"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BarChart, Users, ShieldCheck, Calendar, Rocket, Globe, Award } from "lucide-react"
import { ImageSrc } from "@/constant"
import { motion } from "framer-motion"
import Head from "next/head"

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  const timelineItemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  }

  return (
<>
      <Head>
        <title>About Us | 360°DMMC</title>
        <meta
          name="description"
          content="Learn more about 360°DMMC — our mission, values, and how we harness AI-driven technology to transform digital experiences."
        />
        <meta property="og:title" content="About Us | 360°DMMC" />
        <meta
          property="og:description"
          content="Learn more about 360°DMMC — our mission, values, and how we harness AI-driven technology to transform digital experiences."
        />
        <meta property="og:url" content="https://360dmmc.com/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="About Us | 360°DMMC" />
        <meta
          name="twitter:description"
          content="Discover how 360°DMMC empowers growth through AI-powered transformation."
        />
      </Head>

    <div className="min-h-screen text-[#ffffff]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <Image
          src={ImageSrc.Hero || "/placeholder.svg"}
          alt="Office background"
          layout="fill"
          objectFit="cover"
          quality={100} // Quality set to 100 for high fidelity [^1][^3]
          className="z-0 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10" />
        {/* Hero Content */}
        <div className="relative z-15 space-y-6">
          <motion.h1
            className="text-6xl font-bold text-[#ffffff]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About 360DMMC
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Button className="bg-[#0d80f2] text-[#ffffff] rounded-full px-8 py-4 text-lg hover:bg-blue-700 transition-colors">
              Explore Our Services
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 text-[#ffffff]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            Our Mission
          </motion.h2>
          <motion.p
            className="lg:text-lg text-sm leading-relaxed mb-12 text-[#ffffff]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            At Innovatech Solutions, our mission is to be the catalyst for innovation in the tech industry. We strive to
            create solutions that not only meet the current needs of our clients but also anticipate future challenges.
            Our commitment to excellence and continuous improvement ensures that we remain at the forefront of
            technological advancements, delivering unparalleled value to our partners.
          </motion.p>
          <motion.div
            className="rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Image
              src={ImageSrc.Group || "/placeholder.svg"}
              alt="People in a meeting"
              width={1000}
              height={500}
              layout="responsive"
              objectFit="cover"
              className="rounded-lg object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 text-[#ffffff]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            Our Values
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="bg-[#1e293b] p-6 rounded-lg flex flex-col items-center text-center space-y-3"
              variants={itemVariants}
            >
              <BarChart className="w-10 h-10 text-[#0d80f2]" />
              <h3 className="text-xl font-semibold">Innovation</h3>
            </motion.div>
            <motion.div
              className="bg-[#1e293b] p-6 rounded-lg flex flex-col items-center text-center space-y-3"
              variants={itemVariants}
            >
              <Users className="w-10 h-10 text-[#0d80f2]" />
              <h3 className="text-xl font-semibold">Collaboration</h3>
            </motion.div>
            <motion.div
              className="bg-[#1e293b] p-6 rounded-lg flex flex-col items-center text-center space-y-3"
              variants={itemVariants}
            >
              <ShieldCheck className="w-10 h-10 text-[#0d80f2]" />
              <h3 className="text-xl font-semibold">Integrity</h3>
            </motion.div>
            <motion.div
              className="bg-[#1e293b] p-6 rounded-lg flex flex-col items-center text-center space-y-3"
              variants={itemVariants}
            >
              <ShieldCheck className="w-10 h-10 text-[#0d80f2]" /> {/* Assuming duplicate or similar icon */}
              <h3 className="text-xl font-semibold">Integrity</h3>
            </motion.div>
          </motion.div>
          <motion.p
            className="lg:text-lg text-sm leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Our core values guide every decision we make and every project we undertake. We believe in fostering a
            culture of innovation, where creativity and forward-thinking are encouraged. Collaboration is at the heart
            of our approach, as we work closely with our clients and partners to achieve shared goals. Above all, we
            uphold the highest standards of integrity, ensuring transparency and ethical practices in all our
            interactions.
          </motion.p>
        </div>
      </section>

      {/* Our History Section */}
      <section className="py-10 px-4 md:px-8 lg:px-16 text-[#ffffff]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            Our History
          </motion.h2>
          <div className="relative pl-8">
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#1e293b]"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div className="mb-10 relative" variants={timelineItemVariants}>
                <div className="absolute -left-3 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#0d80f2] text-[#ffffff]">
                  <Calendar className="w-4 h-4" />
                </div>
                <h3 className="text-2xl font-semibold mb-2 ml-4">Founded in 2010</h3>
                <p className="text-sm ml-4 text-[#ffffff]">
                  Innovatech Solutions was established with a vision to revolutionize the tech landscape.
                </p>
              </motion.div>
              <motion.div className="mb-10 relative" variants={timelineItemVariants}>
                <div className="absolute -left-3 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#0d80f2] text-[#ffffff]">
                  <Rocket className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-semibold mb-2 ml-4">Launched First Major Product</h3>
                <p className="text-sm ml-4 text-[#ffffff]">
                  Our first major product, &apos;TechBoost&apos;, set new industry standards.
                </p>
              </motion.div>
              <motion.div className="mb-10 relative" variants={timelineItemVariants}>
                <div className="absolute -left-3 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#0d80f2] text-[#ffffff]">
                  <Globe className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-semibold mb-2 ml-4">Expanded Globally</h3>
                <p className="text-sm ml-4 text-[#ffffff]">
                  We extended our operations to serve clients across North America and Europe.
                </p>
              </motion.div>
              <motion.div className="mb-10 relative" variants={timelineItemVariants}>
                <div className="absolute -left-3 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#0d80f2] text-[#ffffff]">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-semibold mb-2 ml-4">Celebrated 10 Years</h3>
                <p className="text-sm ml-4 text-[#ffffff]">
                  Marked a decade of innovation and growth with our team and partners.
                </p>
              </motion.div>
            </motion.div>
          </div>
          <motion.p
            className="lg:text-lg text-sm leading-relaxed mt-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From our humble beginnings in 2010, 360DMMC has grown into a global leader in technology solutions. Our
            journey has been marked by significant milestones, including the launch of our flagship product, TechBoost,
            and our expansion into international markets. As we celebrated our 10th anniversary, we reflected on our
            achievements and reaffirmed our commitment to driving innovation for the next decade and beyond.
          </motion.p>
        </div>
      </section>
    </div>
</>
  )
}
