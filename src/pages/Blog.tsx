import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const featuredPost = {
    title: "The Future of AI in Enterprise: 2024 Trends and Predictions",
    excerpt: "As we move into 2024, artificial intelligence continues to revolutionize how enterprises operate. From generative AI to autonomous systems, discover the key trends that will shape the business landscape.",
    author: "Dr. Sarah Chen",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Industry Insights",
    image: "/api/placeholder/800/400"
  };

  const posts = [
    {
      title: "Implementing RAG Systems: A Complete Guide for Enterprises",
      excerpt: "Learn how Retrieval-Augmented Generation can transform your organization's knowledge management and decision-making processes.",
      author: "Marcus Rodriguez",
      date: "March 10, 2024",
      readTime: "12 min read",
      category: "Technical Guide"
    },
    {
      title: "ROI of AI: Measuring Success in Digital Transformation",
      excerpt: "A comprehensive framework for measuring and demonstrating the return on investment from AI initiatives.",
      author: "Dr. Priya Patel",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Business Strategy"
    },
    {
      title: "Computer Vision in Manufacturing: Real-World Applications",
      excerpt: "Explore how computer vision is revolutionizing quality control, predictive maintenance, and safety in manufacturing.",
      author: "Alex Thompson",
      date: "February 28, 2024",
      readTime: "10 min read",
      category: "Case Study"
    },
    {
      title: "Ethical AI: Building Responsible AI Systems",
      excerpt: "Best practices for ensuring your AI systems are fair, transparent, and aligned with your organization's values.",
      author: "Dr. Sarah Chen",
      date: "February 22, 2024",
      readTime: "7 min read",
      category: "AI Ethics"
    },
    {
      title: "Natural Language Processing: From Chatbots to Intelligent Agents",
      excerpt: "The evolution of NLP technology and how it's enabling more sophisticated human-AI interactions.",
      author: "Dr. Priya Patel",
      date: "February 15, 2024",
      readTime: "9 min read",
      category: "Technology"
    },
    {
      title: "MLOps Best Practices: Scaling AI in Production",
      excerpt: "Essential strategies for deploying, monitoring, and maintaining machine learning models at enterprise scale.",
      author: "Marcus Rodriguez",
      date: "February 8, 2024",
      readTime: "11 min read",
      category: "Technical Guide"
    }
  ];

  const categories = [
    "All Posts", "Industry Insights", "Technical Guide", "Business Strategy", 
    "Case Study", "AI Ethics", "Technology"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AI <span className="text-gradient">Insights</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay ahead of the curve with expert insights, industry trends, and practical 
            guidance on AI technology transformation.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Featured Article</h2>
            <Card className="bg-card shadow-elegant overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto bg-gradient-primary opacity-30" />
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge variant="secondary" className="w-fit mb-4">
                    {featuredPost.category}
                  </Badge>
                  <h3 className="text-2xl font-bold mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground mb-6 space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Button variant="default">
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="bg-card shadow-card hover:shadow-elegant transition-all duration-300 ai-glow">
                <div className="h-48 bg-gradient-primary/20 rounded-t-lg" />
                <CardHeader className="pb-4">
                  <Badge variant="outline" className="w-fit mb-2 text-xs">
                    {post.category}
                  </Badge>
                  <h3 className="text-lg font-semibold leading-tight line-clamp-2">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-xs text-muted-foreground mb-4 space-x-3">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    <Button variant="ghost" size="sm" className="p-0">
                      Read More <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Subscribe to our newsletter for the latest AI insights, industry trends, 
            and expert analysis delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground"
            />
            <Button variant="default" className="px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to <span className="text-gradient">Transform</span> Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our AI experts help you navigate your transformation journey. 
            Schedule a consultation to discuss your specific needs.
          </p>
          <Button variant="default" size="lg" asChild>
            <Link to="/contact">
              Schedule Consultation <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Blog;