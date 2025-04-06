import { useRef, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!particlesRef.current) return;

    const createParticle = () => {
      const particle = document.createElement("div");
      particle.style.position = "absolute";
      particle.style.width = `${Math.random() * 5 + 1}px`;
      particle.style.height = particle.style.width;
      particle.style.background = `rgba(255, 255, 255, ${Math.random() * 0.2 + 0.1})`;
      particle.style.borderRadius = "50%";
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.transform = "translate(-50%, -50%)";
      
      const duration = Math.random() * 20 + 10;
      particle.style.animation = `float ${duration}s linear infinite`;
      particle.style.opacity = "0";
      
      particlesRef.current?.appendChild(particle);
      
      setTimeout(() => {
        particle.remove();
      }, duration * 1000);
    };
    
    // Create initial particles
    for (let i = 0; i < 50; i++) {
      createParticle();
    }
    
    // Add new particles occasionally
    const interval = setInterval(createParticle, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-20 flex items-center overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-green-500 bg-size-200 animate-gradient-xy">
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes float {
          0% { opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { opacity: 0; transform: translate(-50%, -50%) translateY(-100px); }
        }
        
        @keyframes gradient-xy {
          0% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }
        
        .bg-size-200 {
          background-size: 400% 400%;
        }
        
        .animate-gradient-xy {
          animation: gradient-xy 15s ease infinite;
        }
        `
      }} />
      
      <div ref={particlesRef} className="particles absolute inset-0 overflow-hidden z-0"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <div className="animate-in fade-in slide-in-from-bottom-5 duration-700">
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/20 text-primary mb-4">
              Infrastructure Automation Experts
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Modernize Your IT Infrastructure with <span className="text-primary">iCopilot</span>
            </h1>
            <p className="text-xl text-slate-100 leading-relaxed mb-8">
              Accelerate your digital transformation with our DevOps as a Service, Platform Engineering, and cloud migration expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-300">
          <div className="relative p-5 md:p-8 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <span className="block w-3 h-3 rounded-full bg-red-500"></span>
                <span className="block w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="block w-3 h-3 rounded-full bg-green-500"></span>
              </div>
              <div className="ml-4 text-sm font-mono text-slate-400">infrastructure-as-code.yml</div>
            </div>
            <pre className="bg-slate-800/50 text-sm p-4 rounded-md overflow-x-auto font-mono">
              <div className="text-slate-400"># iCopilot Infrastructure as Code Example</div>
              <div>
                <span className="text-blue-400">resource</span> <span className="text-purple-400">"aws_ecs_cluster"</span> <span className="text-slate-200">"main"</span> {'{'}
              </div>
              <div>
                <span className="text-green-400 ml-2">name</span> = <span className="text-slate-200">"app-cluster"</span>
              </div>
              <div>
                <span className="text-green-400 ml-2">capacity_providers</span> = [<span className="text-slate-200">"FARGATE"</span>, <span className="text-slate-200">"FARGATE_SPOT"</span>]
              </div>
              <div>
                <span className="text-green-400 ml-2">default_capacity_provider_strategy</span> {'{'}
              </div>
              <div>
                <span className="text-green-400 ml-4">capacity_provider</span> = <span className="text-slate-200">"FARGATE"</span>
              </div>
              <div>
                <span className="text-green-400 ml-4">weight</span> = <span className="text-slate-200">1</span>
              </div>
              <div>
                <span className="ml-2">{'}'}</span>
              </div>
              <div>
                <span className="text-green-400 ml-2">setting</span> {'{'}
              </div>
              <div>
                <span className="text-green-400 ml-4">name</span> = <span className="text-slate-200">"containerInsights"</span>
              </div>
              <div>
                <span className="text-green-400 ml-4">value</span> = <span className="text-slate-200">"enabled"</span>
              </div>
              <div>
                <span className="ml-2">{'}'}</span>
              </div>
              <div>
                <span className="text-green-400 ml-2">tags</span> = {'{'}
              </div>
              <div>
                <span className="text-green-400 ml-4">Environment</span> = <span className="text-slate-200">"production"</span>
              </div>
              <div>
                <span className="text-green-400 ml-4">Terraform</span> = <span className="text-slate-200">"true"</span>
              </div>
              <div>
                <span className="ml-2">{'}'}</span>
              </div>
              <div>{'}'}</div>
            </pre>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a href="#services" aria-label="Scroll to services">
          <ChevronDown className="h-8 w-8 text-white" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
