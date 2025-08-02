import { Link } from "react-router-dom";
import {  Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import Logo from "../assets/360.png";
const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
            <img
              src={Logo}
              className="w-[140px] h-10  sm:w-[140px] object-cover sm:h-[37px] md:w-[250px]"
              alt="Logo"
            />
            </Link>
            <p className="text-muted-foreground text-sm">
              Unlock Your Business Potential Through AI Technology Transformation
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Services</Link></li>
              <li><Link to="/case-studies" className="text-muted-foreground hover:text-primary transition-colors text-sm">Case Studies</Link></li>
              <li><Link to="/team" className="text-muted-foreground hover:text-primary transition-colors text-sm">Our Team</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-muted-foreground text-sm">AI Strategy Consulting</span></li>
              <li><span className="text-muted-foreground text-sm">Machine Learning</span></li>
              <li><span className="text-muted-foreground text-sm">Process Automation</span></li>
              <li><span className="text-muted-foreground text-sm">Data Analytics</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">hello@aitransform.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} AI Transform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;