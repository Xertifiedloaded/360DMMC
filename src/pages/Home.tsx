import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Bot,
  Brain,
  Zap,
  Target,
  Users,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "../assets/ai-new.jpeg";
import aiServicesImage from "../assets/ai-services.svg";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import FaqSection from "@/components/Accordion";

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const floatingAnimation = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="AI Technology Hero"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-70" />
        </div>

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <motion.h1
              className="text-3xl  md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              variants={fadeInUp}
            >
              <span className="text-gradient">Unlock Your Business</span>
              <br />
              <span className="text-foreground">Potential Through</span>
              <br />
              <span className="text-gradient">AI Innovation</span>
            </motion.h1>
            <motion.p
              className="text-sm md:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto px-4"
              variants={fadeInUp}
            >
              Transform your organization with cutting-edge AI solutions that
              drive sustainable growth, operational efficiency, and breakthrough
              innovation in today's digital landscape.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
              variants={fadeInUp}
            >
              <Button
                variant="default"
                size="lg"
                className="w-full sm:w-auto text-sm md:text-lg px-6 md:px-8 py-4 md:py-6"
                asChild
              >
                <Link to="/contact">
                  Start Your AI Journey{" "}
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </Button>
              <Button
                variant="default"
                size="lg"
                className="w-full sm:w-auto text-sm md:text-lg px-6 md:px-8 py-4 md:py-6"
                asChild
              >
                <Link to="/services">Explore Services</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating AI Icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4"
            animate={floatingAnimation}
            style={{ animationDelay: "0s" }}
          >
            <Bot className="h-6 w-6 md:h-8 md:w-8 text-primary/30" />
          </motion.div>
          <motion.div
            className="absolute top-1/3 right-1/4"
            animate={floatingAnimation}
            style={{ animationDelay: "1s" }}
          >
            <Brain className="h-5 w-5 md:h-6 md:w-6 text-secondary/30" />
          </motion.div>
          <motion.div
            className="absolute bottom-1/3 left-1/3"
            animate={floatingAnimation}
            style={{ animationDelay: "2s" }}
          >
            <Zap className="h-6 w-6 md:h-7 md:w-7 text-accent/30" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section
        className="py-16 md:py-20 bg-card"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center"
            variants={staggerContainer}
          >
            {[
              { number: "500+", label: "Projects Delivered" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "150+", label: "AI Specialists" },
              { number: "50+", label: "Industries Transformed" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="space-y-2 p-4"
                variants={fadeInUp}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="py-16 md:py-20 bg-gradient-subtle"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 md:mb-16"
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              Why Choose <span className="text-gradient">AI Transform</span>?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto px-4">
              We combine deep technical expertise with strategic business
              insight to deliver AI solutions that create measurable,
              transformative impact for your organization.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
            variants={staggerContainer}
          >
            {[
              {
                icon: Target,
                title: "Strategic AI Implementation",
                description:
                  "Custom AI strategies perfectly aligned with your business objectives and industry-specific requirements.",
              },
              {
                icon: Users,
                title: "World-Class Expertise",
                description:
                  "Elite AI researchers and engineers with demonstrated success across diverse industries and applications.",
              },
              {
                icon: TrendingUp,
                title: "Measurable Results",
                description:
                  "Deliver quantifiable ROI through our data-driven methodology and performance-focused AI implementations.",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full bg-card/50 backdrop-blur-sm shadow-card hover:shadow-elegant transition-all duration-300 ai-glow">
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 bg-gradient-primary rounded-full">
                        <feature.icon className="h-6 w-6 md:h-8 md:w-8 text-primary-foreground" />
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground flex-grow">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Services Preview */}
      <motion.section
        className="py-16 md:py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div variants={fadeInLeft}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">AI-Powered</span> Solutions
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                From intelligent automation to advanced predictive analytics, we
                deliver comprehensive AI solutions that fundamentally transform
                how your business operates and competes.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Machine Learning & Deep Learning Systems",
                  "Advanced Natural Language Processing",
                  "Computer Vision & Image Recognition",
                  "Intelligent Process Automation",
                  "Predictive Analytics & Business Forecasting",
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-gradient-primary rounded-full flex-shrink-0" />
                    <span className="text-sm md:text-base text-foreground">
                      {service}
                    </span>
                  </motion.div>
                ))}
              </div>
              <Button
                variant="default"
                size="lg"
                className="w-full sm:w-auto"
                asChild
              >
                <Link to="/services">
                  View All Services{" "}
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              className="relative order-first lg:order-last"
              variants={fadeInRight}
            >
              <img
                src={aiServicesImage}
                alt="AI Services"
                className="rounded-lg shadow-elegant w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-primary/10 rounded-lg" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <Process />
      <Pricing />
      <FaqSection />

      {/* CTA Section */}
      <motion.section
        className="py-16 md:py-20 bg-gradient-hero"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            variants={fadeInUp}
          >
            Ready to <span className="text-gradient">Transform</span> Your
            Business?
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto px-4"
            variants={fadeInUp}
          >
            Join hundreds of forward-thinking companies that have revolutionized
            their operations and accelerated growth with our cutting-edge AI
            solutions.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Button
              variant="default"
              size="lg"
              className="w-full sm:w-auto text-base md:text-lg px-6 md:px-8 py-4 md:py-6"
              asChild
            >
              <Link to="/contact">
                Get Started Today{" "}
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
