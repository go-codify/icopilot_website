import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-5">
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-purple-500/20 text-purple-500 mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet iCopilot: Your DevOps & Cloud Partner
            </h2>
            <p className="text-lg text-slate-300">
              We are a group of veterans in IT with over 20 years of experience serving large enterprises. We understand DevOps at its core and bring together the best toolsets that work for all our clients.
            </p>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-8 border border-slate-700 mb-12 animate-in fade-in slide-in-from-bottom-5 delay-150">
            <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
            <p className="text-lg text-slate-300 mb-6">
              To empower organizations with automated, scalable, and secure infrastructure solutions that accelerate innovation and drive business growth.
            </p>
            <p className="text-lg text-slate-300 mb-6">
              Our Internal Developer Platform (IDP) is continuously developed with new features and blueprint items to cover the majority of operational use cases.
            </p>
            
            <h3 className="text-2xl font-bold mb-6">Our Approach</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-900 p-6 rounded-lg border border-slate-700">
                <h4 className="text-xl font-semibold mb-3">Automation First</h4>
                <p className="text-slate-300">
                  We prioritize automation to eliminate manual errors, increase efficiency, and create repeatable processes.
                </p>
              </div>
              
              <div className="bg-slate-900 p-6 rounded-lg border border-slate-700">
                <h4 className="text-xl font-semibold mb-3">Security by Design</h4>
                <p className="text-slate-300">
                  Security is integrated throughout our solutions, not bolted on as an afterthought.
                </p>
              </div>
              
              <div className="bg-slate-900 p-6 rounded-lg border border-slate-700">
                <h4 className="text-xl font-semibold mb-3">Scalable Architecture</h4>
                <p className="text-slate-300">
                  Our solutions are designed to grow with your business, adapting to changing needs.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center animate-in fade-in slide-in-from-bottom-5 delay-300">
            <Button asChild size="lg" variant="secondary" className="group">
              <Link href="/contact">
                Work With Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
