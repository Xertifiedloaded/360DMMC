"use client";

import ServiceCard from "@/components/SerciceCard";
import { ImageSrc } from "@/constant";
import { motion } from "framer-motion";
import Head from "next/head";

export default function WhatWeDoPage() {
  const services = [
    {
      iconQuery: ImageSrc.frame,
      title: "AI-Driven Digital Revolution (Digital Solutions)",
      description:
        "Comprehensive security strategies to protect your digital assets.",
    },
    {
      iconQuery: ImageSrc.frame,
      title: "Strategic Media Content Creation",
      description: "Secure and scalable cloud infrastructure and management.",
    },
    {
      iconQuery: ImageSrc.frame,
      title: "Strategic Marketing Strategies",
      description:
        "Custom software solutions designed for scalability and performance.",
    },
    {
      iconQuery: ImageSrc.frame,
      title: "Elevated Customer Experience (CX)",
      description:
        "Comprehensive security strategies to protect your digital assets.",
    },
    {
      iconQuery: ImageSrc.frame,
      title: "Intelligent Workflow Automation & Efficiency Boosters",
      description: "Secure and scalable cloud infrastructure and management.",
    },
    {
      iconQuery: ImageSrc.frame,
      title: "AI Strategy & Implementation Roadmapping",
      description:
        "Custom software solutions designed for scalability and performance.",
    },
    {
      iconQuery: ImageSrc.frame,
      title: "Cybersecurity",
      description:
        "Comprehensive security strategies to protect your digital assets.",
    },
    {
      iconQuery: ImageSrc.frame,
      title: "Cloud Solutions",
      description: "Secure and scalable cloud infrastructure and management.",
    },
    {
      iconQuery: ImageSrc.frame,
      title: "Software Development",
      description:
        "Custom software solutions designed for scalability and performance.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div>
      <Head>
        <title>What We Do | 360°DMMC</title>
        <meta
          name="description"
          content="Explore our core services at 360°DMMC — from digital transformation to AI-powered portfolio building and strategic consulting."
        />
        <meta property="og:title" content="What We Do | 360°DMMC" />
        <meta
          property="og:description"
          content="Explore our core services — from digital transformation to AI-powered portfolio building and strategic consulting."
        />
        <meta property="og:url" content="https://360dmmc.com/what-we-do" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="What We Do | 360°DMMC" />
        <meta
          name="twitter:description"
          content="Discover the AI-driven services 360°DMMC offers to empower individuals and businesses for success."
        />
      </Head>
      <motion.div
        className="min-h-screen bg-dark-bg text-white flex flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <main className="flex-1 py-12 px-8">
          <div className="container mx-auto">
            <section className="mb-16">
              <motion.h1
                className="lg:text-5xl text-3xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                What We Do
              </motion.h1>
              <motion.p
                className="text-sm leading-relaxed text-light-grey-text max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                At 360DMMC, We offer a suite of high-impact AI services designed
                to address your most pressing business challenges and unlock new
                opportunities.
              </motion.p>
            </section>
            <section>
              <motion.h2
                className="text-4xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Core Services
              </motion.h2>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {services.map((service, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <ServiceCard
                      iconQuery={service.iconQuery}
                      title={service.title}
                      description={service.description}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </section>
          </div>
        </main>
      </motion.div>
    </div>
  );
}
