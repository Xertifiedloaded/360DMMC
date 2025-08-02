import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Global Retail Chain: AI-Powered Inventory Optimization",
      industry: "Retail",
      challenge: "Inefficient inventory management leading to $50M annual losses",
      solution: "Machine learning models for demand forecasting and automated reordering",
      results: [
        "35% reduction in inventory costs",
        "98% stock availability",
        "$50M cost savings annually"
      ],
      technologies: ["Machine Learning", "Predictive Analytics", "Automation"],
      icon: TrendingUp
    },
    {
      title: "Healthcare Network: AI Diagnostic Assistant",
      industry: "Healthcare",
      challenge: "Delayed diagnoses and high error rates in medical imaging",
      solution: "Computer vision AI for medical image analysis and diagnostic support",
      results: [
        "40% faster diagnosis time",
        "95% accuracy improvement",
        "500+ lives saved annually"
      ],
      technologies: ["Computer Vision", "Deep Learning", "Medical AI"],
      icon: Users
    },
    {
      title: "Manufacturing Giant: Predictive Maintenance System",
      industry: "Manufacturing",
      challenge: "Unplanned downtime costing $2M monthly in lost production",
      solution: "IoT sensors and ML algorithms for equipment failure prediction",
      results: [
        "80% reduction in downtime",
        "$24M annual savings",
        "99.5% equipment uptime"
      ],
      technologies: ["IoT", "Predictive Analytics", "Industrial AI"],
      icon: Zap
    },
    {
      title: "Financial Services: Fraud Detection System",
      industry: "Financial Services",
      challenge: "Rising fraud losses of $100M annually with traditional systems",
      solution: "Real-time AI fraud detection using behavioral analysis",
      results: [
        "90% fraud detection rate",
        "$85M prevented losses",
        "0.1% false positive rate"
      ],
      technologies: ["Machine Learning", "Real-time Analytics", "Behavioral AI"],
      icon: TrendingUp
    },
    {
      title: "E-commerce Platform: Personalization Engine",
      industry: "E-commerce",
      challenge: "Low conversion rates and poor customer engagement",
      solution: "AI-driven personalization and recommendation system",
      results: [
        "150% increase in conversions",
        "300% higher engagement",
        "$200M revenue growth"
      ],
      technologies: ["Recommendation Systems", "NLP", "Customer Analytics"],
      icon: Users
    },
    {
      title: "Energy Company: Smart Grid Optimization",
      industry: "Energy",
      challenge: "Energy waste and grid inefficiencies costing $30M annually",
      solution: "AI-powered smart grid management and demand optimization",
      results: [
        "25% energy savings",
        "$30M cost reduction",
        "50% grid efficiency improvement"
      ],
      technologies: ["Smart Grid AI", "Optimization", "Energy Analytics"],
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Success <span className="text-gradient">Stories</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real transformations, measurable results. See how we've helped organizations 
            across industries unlock their potential with AI technology.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="bg-card shadow-card hover:shadow-elegant transition-all duration-300 ai-glow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-gradient-primary rounded-full">
                      <study.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <Badge variant="secondary">{study.industry}</Badge>
                  </div>
                  <CardTitle className="text-xl leading-tight">{study.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-2">CHALLENGE</h4>
                    <p className="text-sm">{study.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-2">SOLUTION</h4>
                    <p className="text-sm">{study.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">RESULTS</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="text-sm flex items-center">
                          <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">TECHNOLOGIES</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Proven Impact</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI solutions have delivered transformational results across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "$2.5B+", label: "Value Created" },
              { number: "500+", label: "Projects Delivered" },
              { number: "98%", label: "Success Rate" },
              { number: "50+", label: "Industries Served" }
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-gradient">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Write Your <span className="text-gradient">Success Story</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the organizations that have transformed their business with our AI solutions. 
            Let's discuss your project today.
          </p>
          <Button variant="default" size="lg" asChild>
            <Link to="/contact">
              Start Your Project <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;