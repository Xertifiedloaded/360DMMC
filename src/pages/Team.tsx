import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Twitter, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import teamImage from "../assets/ai-services.svg";

const Team = () => {
  const leadership = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Founder",
      bio: "Former Google Brain researcher with 15+ years in AI. PhD from Stanford, author of 50+ papers.",
      expertise: ["Deep Learning", "AI Strategy", "Research"]
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO",
      bio: "Ex-Tesla AI Director. Led autonomous driving initiatives and scaled ML systems to millions of users.",
      expertise: ["Computer Vision", "MLOps", "Autonomous Systems"]
    },
    {
      name: "Dr. Priya Patel",
      role: "Chief Data Scientist",
      bio: "Former Microsoft Research scientist. Expert in NLP and conversational AI with 200+ publications.",
      expertise: ["NLP", "Conversational AI", "Research"]
    },
    {
      name: "Alex Thompson",
      role: "VP of Engineering",
      bio: "Former Amazon ML Engineer. Built recommendation systems serving 500M+ users globally.",
      expertise: ["ML Engineering", "Distributed Systems", "Recommendations"]
    }
  ];

  const stats = [
    { number: "150+", label: "AI Experts" },
    { number: "50+", label: "PhD Researchers" },
    { number: "25+", label: "Years Combined Experience" },
    { number: "100+", label: "Patents & Publications" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Meet Our <span className="text-gradient">Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            World-class AI researchers, engineers, and strategists united by a passion 
            for transforming businesses through artificial intelligence.
          </p>
        </div>
      </section>

      {/* Team Photo & Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <img 
                src={teamImage} 
                alt="AI Transform Team" 
                className="rounded-lg shadow-elegant" 
              />
              <div className="absolute inset-0 bg-gradient-primary/10 rounded-lg" />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Expertise That Drives Results</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our diverse team combines cutting-edge research with practical business experience. 
                We've worked at leading technology companies and published groundbreaking research 
                that shapes the future of AI.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
                    <div className="text-muted-foreground text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Visionary leaders with proven track records in AI research, engineering, and business transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((member, index) => (
              <Card key={index} className="bg-background/50 backdrop-blur-sm shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary-foreground">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 text-center">
                    {member.bio}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-sm mb-3 text-center">EXPERTISE</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.expertise.map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center space-x-3">
                    <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
                      <Twitter className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
                      <Mail className="h-4 w-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Culture</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We foster an environment of innovation, collaboration, and continuous learning 
              where brilliant minds come together to solve complex challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation First",
                description: "We push the boundaries of what's possible, always seeking new ways to apply AI technology."
              },
              {
                title: "Collaborative Spirit",
                description: "Our diverse team works together, combining different perspectives to create breakthrough solutions."
              },
              {
                title: "Continuous Learning",
                description: "In the fast-evolving field of AI, we invest heavily in our team's growth and development."
              }
            ].map((value, index) => (
              <Card key={index} className="bg-card shadow-card hover:shadow-elegant transition-all duration-300 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl text-primary-foreground">★</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join Our <span className="text-gradient">Mission</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking for exceptional talent to join our team. 
            Be part of the AI revolution and help shape the future of technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg">
              View Open Positions <ArrowRight className="ml-2" />
            </Button>
            <Button variant="default" size="lg" asChild>
              <Link to="/contact">
                Get In Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;