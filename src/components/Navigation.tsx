import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/360.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Who We Are", href: "/about" },
    { name: "What We Do", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Team", href: "/team" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.img
              src={Logo}
              className="w-[140px] h-10  sm:w-[140px] object-cover sm:h-[37px] md:w-[250px]"
              alt="Logo"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.href}
                  className={`text-sm font-medium line-clamp-1 transition-colors duration-200 relative group ${
                    isActive(item.href)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                  <motion.span 
                    className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                  {isActive(item.href) && (
                    <motion.span 
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"
                      layoutId="activeTab"
                    />
                  )}
                </Link>
              </motion.div>
            ))}

          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative z-50 p-2"
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                ) : (
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                )}
              </motion.div>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden fixed inset-x-0 top-16 bg-background backdrop-blur-xl border-b border-border/20 shadow-lg"
          >
            <motion.div 
              className="px-4 py-6 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <Link
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-3 px-2 text-base font-medium transition-colors duration-200 rounded-md hover:bg-accent/50 ${
                      isActive(item.href)
                        ? "text-primary bg-accent/30"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div 
                className="pt-4 px-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <Button 
                  variant="default" 
                  className="w-full hover:scale-105 transition-transform duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;