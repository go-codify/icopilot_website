import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { useTheme } from "@/components/ui/theme-provider";
import { Button } from "@/components/ui/button";
import { 
  Moon, Sun, Menu, X, ChevronDown, Server, Code, 
  Package, Terminal, Cloud, Shield, ShieldCheck, 
  Cog, Database, Briefcase, Headphones
} from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();
  const [location] = useLocation();
  
  const services = [
    {
      title: "IT Infrastructure Automation",
      description: "Infrastructure as Code (IaC) solutions",
      icon: <Server className="w-5 h-5" />,
      path: "/services"
    },
    {
      title: "DevOps as a Service",
      description: "CI/CD pipelines and delivery workflow",
      icon: <Code className="w-5 h-5" />,
      path: "/services"
    },
    {
      title: "Platform Engineering",
      description: "Self-service internal developer portals",
      icon: <Package className="w-5 h-5" />,
      path: "/services"
    },
    {
      title: "Kubernetes Virtualization",
      description: "VMware alternative with Kubernetes",
      icon: <Database className="w-5 h-5" />,
      path: "/services"
    },
    {
      title: "Internal Developer Platforms",
      description: "Self-service capabilities for teams",
      icon: <Terminal className="w-5 h-5" />,
      path: "/services"
    },
    {
      title: "Cloudera & Datalake",
      description: "Big data platform implementation & consulting",
      icon: <Database className="w-5 h-5" />,
      path: "/services"
    },
    {
      title: "Database Migrations",
      description: "Cross-platform database migration services",
      icon: <Database className="w-5 h-5" />,
      path: "/services"
    },
    {
      title: "Cloud Cost Optimization",
      description: "Reduce cloud spend and improve efficiency",
      icon: <Cloud className="w-5 h-5" />,
      path: "/services"
    },
    {
      title: "DC DR Strategy",
      description: "On-prem and cloud disaster recovery",
      icon: <ShieldCheck className="w-5 h-5" />,
      path: "/services"
    },
    {
      title: "Cloud Migrations",
      description: "Seamless cloud transition services",
      icon: <Cloud className="w-5 h-5" />,
      path: "/services"
    },
    {
      title: "IT Consulting & Advisory",
      description: "Expert IT infrastructure guidance",
      icon: <Briefcase className="w-5 h-5" />,
      path: "/services"
    },
    {
      title: "Professional Services",
      description: "Specialized implementation support",
      icon: <Headphones className="w-5 h-5" />,
      path: "/services"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { title: "Home", path: "/" },
    { title: "Services", path: "/services" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-900/90 backdrop-blur-sm shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
            {/* Triangle as the base shape */}
            <polygon points="12,2 2,20 22,20" fill="none" stroke="currentColor" strokeWidth="2" />
            
            {/* Steering wheel representing the "copilot" concept */}
            <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.8" fill="none" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
            
            {/* Steering wheel spokes */}
            <line x1="12" y1="7" x2="12" y2="9" stroke="currentColor" strokeWidth="1.8" />
            <line x1="12" y1="15" x2="12" y2="17" stroke="currentColor" strokeWidth="1.8" />
            <line x1="7" y1="12" x2="9" y2="12" stroke="currentColor" strokeWidth="1.8" />
            <line x1="15" y1="12" x2="17" y2="12" stroke="currentColor" strokeWidth="1.8" />
            
            {/* Diagonal spokes */}
            <line x1="9" y1="9" x2="10" y2="10" stroke="currentColor" strokeWidth="1.8" />
            <line x1="14" y1="14" x2="15" y2="15" stroke="currentColor" strokeWidth="1.8" />
            <line x1="9" y1="15" x2="10" y2="14" stroke="currentColor" strokeWidth="1.8" />
            <line x1="14" y1="10" x2="15" y2="9" stroke="currentColor" strokeWidth="1.8" />
          </svg>
          <span className="text-xl font-bold tracking-tight">iCopilot</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {/* Home Link */}
          <Link
            href="/"
            className={`text-slate-200 hover:text-primary transition-colors ${
              location === "/" ? "text-primary font-medium" : ""
            }`}
          >
            Home
          </Link>
          
          {/* Services Dropdown */}
          <div className="relative" ref={servicesDropdownRef}>
            <button
              className={`flex items-center space-x-1 text-slate-200 hover:text-primary transition-colors ${
                location === "/services" ? "text-primary font-medium" : ""
              }`}
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              onMouseEnter={() => setIsServicesOpen(true)}
            >
              <span>Services</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 max-h-[70vh] overflow-y-auto bg-slate-800 border border-slate-700 rounded-lg shadow-lg z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="p-2 grid grid-cols-1 gap-1">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.path}
                      className="flex items-start space-x-2 p-2 rounded-md hover:bg-slate-700 transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <span className="mt-0.5 text-primary">{service.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm">{service.title}</div>
                        <div className="text-xs text-slate-400 truncate">{service.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* About Link */}
          <Link
            href="/about"
            className={`text-slate-200 hover:text-primary transition-colors ${
              location === "/about" ? "text-primary font-medium" : ""
            }`}
          >
            About
          </Link>
          
          {/* Contact Link */}
          <Link
            href="/contact"
            className={`text-slate-200 hover:text-primary transition-colors ${
              location === "/contact" ? "text-primary font-medium" : ""
            }`}
          >
            Contact
          </Link>
          
          {/* Dark Mode Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-800 pb-4 animate-in fade-in slide-in-from-top-5 duration-300">
          <div className="container mx-auto px-4 py-2 space-y-3">
            {/* Main nav links */}
            <Link
              href="/"
              className={`block text-slate-200 hover:text-primary py-2 transition-colors ${
                location === "/" ? "text-primary font-medium" : ""
              }`}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            
            <Link
              href="/services"
              className={`block text-slate-200 hover:text-primary py-2 transition-colors ${
                location === "/services" ? "text-primary font-medium" : ""
              }`}
              onClick={closeMobileMenu}
            >
              Services
            </Link>
            
            {/* Services submenu - create a more compact grid layout */}
            <div className="pl-4 border-l border-slate-700 py-1">
              <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    href={service.path}
                    className="flex items-center space-x-1.5 p-1 text-xs text-slate-300 hover:text-primary transition-colors"
                    onClick={closeMobileMenu}
                  >
                    <span className="flex-shrink-0 text-primary">{service.icon}</span>
                    <span className="truncate">{service.title}</span>
                  </Link>
                ))}
              </div>
            </div>
            
            <Link
              href="/about"
              className={`block text-slate-200 hover:text-primary py-2 transition-colors ${
                location === "/about" ? "text-primary font-medium" : ""
              }`}
              onClick={closeMobileMenu}
            >
              About
            </Link>
            
            <Link
              href="/contact"
              className={`block text-slate-200 hover:text-primary py-2 transition-colors ${
                location === "/contact" ? "text-primary font-medium" : ""
              }`}
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
            
            {/* Dark Mode Toggle */}
            <div className="flex items-center justify-between py-2 mt-2 border-t border-slate-700">
              <span>Theme</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
