import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Award, Users, Target, Lightbulb, ArrowRight } from "lucide-react";
import teamImage from "../assets/ai-services.svg";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-gradient">AI Transform</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are pioneers in AI technology transformation, helping businesses unlock their full potential 
              through intelligent automation and data-driven solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-8">
                To democratize AI technology and make it accessible to businesses of all sizes, 
                enabling them to compete and thrive in the digital economy. We believe that every 
                organization deserves the opportunity to harness the power of artificial intelligence.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">500+</div>
                  <div className="text-muted-foreground">AI Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">10+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={teamImage} 
                alt="Our Team" 
                className="rounded-lg shadow-elegant" 
              />
              <div className="absolute inset-0 bg-gradient-primary/10 rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do and define how we work with our clients and each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "We push the boundaries of what's possible with AI technology."
              },
              {
                icon: Users,
                title: "Collaboration",
                description: "We work closely with our clients as partners in transformation."
              },
              {
                icon: Target,
                title: "Results-Driven",
                description: "We focus on delivering measurable business outcomes."
              },
              {
                icon: Award,
                title: "Excellence",
                description: "We maintain the highest standards in everything we deliver."
              }
            ].map((value, index) => (
              <Card key={index} className="bg-background/50 backdrop-blur-sm shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-gradient-primary rounded-full">
                      <value.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Our Story</h2>
            <div className="prose prose-lg text-muted-foreground mx-auto">
              <p className="mb-6">
                Founded in 2014 by a team of AI researchers and business strategists, AI Transform 
                emerged from a simple yet powerful vision: to bridge the gap between cutting-edge 
                AI research and practical business applications.
              </p>
              <p className="mb-6">
                What started as a small consulting firm has grown into a leading AI transformation 
                company, serving Fortune 500 companies and innovative startups alike. Our journey 
                has been marked by breakthrough projects that have redefined entire industries.
              </p>
              <p className="mb-8">
                Today, we continue to push the boundaries of what's possible with AI, helping our 
                clients not just adapt to change, but lead it. Every project we undertake is an 
                opportunity to create something extraordinary.
              </p>
            </div>
            <Button variant="default" size="lg" asChild>
              <Link to="/contact">
                Join Our Journey <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;