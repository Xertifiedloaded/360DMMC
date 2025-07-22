import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import { ImageSrc } from "@/constant";

interface HeaderProps {
  logoSrc?: string;
  className?: string;
}

export default function Header({ className = "" }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Who We Serve", href: "#services" },
    { label: "What We Do", href: "/what-we-do" },
    { label: "Who We Are", href: "/about-us" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Prevent scrolling
      document.body.style.overflow = 'hidden';
      // Prevent scrolling on iOS Safari
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Re-enable scrolling
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      // Restore scroll position
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={`relative z-20 w-full ${className}`}>
      <div className="flex items-center justify-between p-4 sm:p-6 md:px-8 lg:px-12 xl:px-20">
        <Link href="/" className="flex items-center space-x-2 z-30">
          <Image
            src={ImageSrc.Logo}
            alt="360DMMC Logo"
            width={150}
            height={40}
            className="sm:w-[140px] object-cover sm:h-[37px] md:w-[250px]"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-white">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-gray-300 transition-colors duration-200 font-medium"
            >
              {item.label}
            </Link>
          ))}
          <Button
            variant="outline"
            className="border-slate-600 text-white hover:bg-slate-700 hover:text-white rounded-md px-4 py-2 flex items-center space-x-2 bg-transparent transition-all duration-200 hover:scale-105"
          >
            <span>Get In Touch</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          className="lg:hidden text-white hover:bg-white/10 p-2 z-30 relative"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="relative w-6 h-6">
            {/* Animated Hamburger to X */}
            <div 
              className={`absolute top-1 left-0 w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? 'rotate-45 top-2.5' : 'rotate-0'
              }`}
            />
            <div 
              className={`absolute top-2.5 left-0 w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <div 
              className={`absolute top-4 left-0 w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? '-rotate-45 top-2.5' : 'rotate-0'
              }`}
            />
          </div>
        </Button>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div
          className={`
            fixed inset-0 bg-black/50 backdrop-blur-sm z-20 lg:hidden
            animate-in fade-in duration-300
          `}
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Navigation Menu */}
      <div
        className={`
          fixed top-0 right-0 h-full w-64 sm:w-80 bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-md 
          transform transition-all duration-500 ease-out z-25 lg:hidden shadow-2xl
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex flex-col h-full pt-20 pb-6 px-6 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-0 w-24 h-24 bg-gradient-to-tr from-green-500/10 to-blue-500/10 rounded-full blur-2xl"></div>

          {/* Mobile Navigation Links */}
          <nav className="flex flex-col space-y-2 relative z-10">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMobileMenu}
                className={`
                  text-white hover:text-gray-300 transition-all duration-300 
                  text-sm font-medium py-3 px-4 border-b border-slate-700/30
                  hover:bg-white/5 rounded-lg hover:border-slate-600/50
                  transform hover:translate-x-2 hover:scale-105
                  ${isMobileMenuOpen 
                    ? `animate-in slide-in-from-right duration-500 delay-${index * 100}` 
                    : ''
                  }
                `}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <span className="flex items-center justify-between">
                  {item.label}
                  <ArrowRight className="w-4 h-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </span>
              </Link>
            ))}
          </nav>

          {/* Mobile CTA Buttons */}
          <div className={`
            mt-8 space-y-4 relative z-10
            ${isMobileMenuOpen 
              ? 'animate-in slide-in-from-bottom duration-600 delay-500' 
              : ''
            }
          `}>
            <Button
              className="
                w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white 
                hover:from-emerald-600 hover:to-green-700 px-6 py-3 text-sm rounded-lg 
                flex items-center justify-center space-x-2 transition-all duration-300
                hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25
                transform active:scale-95
              "
              onClick={closeMobileMenu}
            >
              <span>Get In Touch</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              className="
                w-full border-slate-600 text-white hover:bg-slate-700 hover:text-white 
                px-6 py-3 text-sm rounded-lg bg-transparent transition-all duration-300
                hover:scale-105 hover:border-slate-500 hover:shadow-lg
                transform active:scale-95
              "
              onClick={closeMobileMenu}
            >
              Join Community
            </Button>
          </div>

          {/* Animated Footer */}
          <div className={`
            mt-auto pt-6 border-t border-slate-700/50 relative z-10
            ${isMobileMenuOpen 
              ? 'animate-in fade-in slide-in-from-bottom duration-700 delay-700' 
              : ''
            }
          `}>
            <p className="text-slate-400 text-xs text-center animate-pulse">
              Ready to transform your business?
            </p>
            <div className="flex justify-center mt-2">
              <div className="flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-bounce`}
                    style={{
                      animationDelay: `${i * 200}ms`,
                      animationDuration: '1s'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet Navigation */}
      <div className="hidden md:flex lg:hidden">
        <div
          className={`
            absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md 
            transform transition-all duration-500 ease-out
            ${
              isMobileMenuOpen
                ? "opacity-100 visible translate-y-0 scale-100"
                : "opacity-0 invisible -translate-y-4 scale-95"
            }
          `}
        >
          <div className="flex flex-col items-center py-6 px-8 space-y-4">
            <nav className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 text-white">
              {navItems.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`
                    hover:text-gray-300 transition-all duration-300 font-medium
                    hover:scale-105 transform
                    ${isMobileMenuOpen 
                      ? `animate-in fade-in slide-in-from-top duration-400 delay-${index * 100}` 
                      : ''
                    }
                  `}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Button
              variant="outline"
              className={`
                border-slate-600 text-white hover:bg-slate-700 hover:text-white rounded-md 
                px-4 py-2 flex items-center space-x-2 bg-transparent transition-all duration-300
                hover:scale-105 transform
                ${isMobileMenuOpen 
                  ? 'animate-in fade-in slide-in-from-bottom duration-500 delay-300' 
                  : ''
                }
              `}
              onClick={closeMobileMenu}
            >
              <span>Get In Touch</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}