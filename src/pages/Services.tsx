import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Bot, 
  BarChart3, 
  Eye, 
  MessageSquare, 
  Workflow, 
  ArrowRight,
  CheckCircle 
} from "lucide-react";
import Process from "@/components/Process";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Strategy & Consulting",
      description: "Comprehensive AI roadmaps and strategic planning to align technology with business objectives.",
      features: [
        "AI Readiness Assessment",
        "Technology Roadmap Development",
        "ROI Analysis & Business Case",
        "Change Management Strategy"
      ]
    },
    {
      icon: Bot,
      title: "Machine Learning Solutions",
      description: "Custom ML models and algorithms designed to solve your specific business challenges.",
      features: [
        "Predictive Analytics",
        "Classification & Clustering",
        "Deep Learning Models",
        "Model Deployment & Monitoring"
      ]
    },
    {
      icon: MessageSquare,
      title: "Natural Language Processing",
      description: "Advanced NLP solutions for text analysis, chatbots, and conversational AI.",
      features: [
        "Intelligent Chatbots",
        "Sentiment Analysis",
        "Document Processing",
        "Language Translation"
      ]
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Image and video analysis solutions for automation and quality control.",
      features: [
        "Object Detection & Recognition",
        "Quality Inspection",
        "Facial Recognition",
        "Medical Image Analysis"
      ]
    },
    {
      icon: Workflow,
      title: "Process Automation",
      description: "Intelligent automation solutions to streamline operations and reduce costs.",
      features: [
        "Robotic Process Automation",
        "Workflow Optimization",
        "Document Automation",
        "Decision Support Systems"
      ]
    },
    {
      icon: BarChart3,
      title: "Data Analytics & BI",
      description: "Transform raw data into actionable insights with advanced analytics platforms.",
      features: [
        "Real-time Dashboards",
        "Predictive Forecasting",
        "Data Visualization",
        "Business Intelligence"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AI <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive AI solutions designed to transform your business operations, 
            drive innovation, and create competitive advantages.
          </p>
          <Button variant="default" size="lg" asChild>
            <Link to="/contact">
              Get Custom Quote <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-card shadow-card hover:shadow-elegant transition-all duration-300 ai-glow">
                <CardHeader>
                  <div className="mb-4">
                    <div className="p-3 bg-gradient-primary rounded-full w-fit">
                      <service.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-3">{service.title}</CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

<Process/>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to <span className="text-gradient">Get Started</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how AI can transform your business. Schedule a free consultation 
            with our experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" asChild>
              <Link to="/contact">
                Schedule Consultation <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button variant="default" size="lg" asChild>
              <Link to="/case-studies">
                View Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;