import { useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Server, Code, Package, Terminal, Cloud, Shield, ShieldCheck, Cog, Database } from "lucide-react";
import { Link } from "wouter";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  delay?: number;
}

const ServiceCard = ({ title, description, icon, color, delay = 0 }: ServiceCardProps) => {
  return (
    <div 
      className="bg-slate-900 rounded-lg p-6 border border-slate-700 transition-all duration-300 
                  hover:scale-105 hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50 
                  animate-in fade-in slide-in-from-bottom-5"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`w-12 h-12 mb-6 rounded-lg ${color} flex items-center justify-center`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-slate-300 mb-4">{description}</p>
      <Link href="/services" className="inline-flex items-center text-primary hover:text-primary-hover">
        Learn more
        <ChevronRight className="ml-1 w-4 h-4" />
      </Link>
    </div>
  );
};

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      title: "IT Infrastructure Automation",
      description: "Streamline and automate your infrastructure deployments with our Infrastructure as Code (IaC) solutions using Terraform, CloudFormation, and Ansible.",
      icon: <Server className="w-6 h-6 text-primary" />,
      color: "bg-primary/20",
    },
    {
      title: "DevOps as a Service (DaaS)",
      description: "Accelerate your development cycles with our full-spectrum DevOps services, from CI/CD pipeline setup to monitoring and optimizing your delivery workflow.",
      icon: <Code className="w-6 h-6 text-green-500" />,
      color: "bg-green-500/20",
    },
    {
      title: "Platform Engineering as a Service",
      description: "Build self-service developer platforms that boost productivity, standardize workflows, and ensure security across your organization.",
      icon: <Package className="w-6 h-6 text-purple-500" />,
      color: "bg-purple-500/20",
    },
    {
      title: "Cosmos - VMware Alternative",
      description: "Our cost-optimized virtualization platform based on Proxmox hypervisor with enhanced self-service capabilities to minimize manual errors for IT teams.",
      icon: <Database className="w-6 h-6 text-indigo-500" />,
      color: "bg-indigo-500/20",
    },
    {
      title: "Internal Developer Platforms",
      description: "Create customized platforms that abstract infrastructure complexity and provide self-service capabilities for your development teams.",
      icon: <Terminal className="w-6 h-6 text-primary" />,
      color: "bg-primary/20",
    },
    {
      title: "DC DR Strategy & Implementation",
      description: "Design and implement robust disaster recovery solutions for both on-premises and cloud infrastructures, ensuring business continuity and minimal downtime.",
      icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
      color: "bg-blue-500/20",
    },
    {
      title: "Operations Projects",
      description: "Take a code-first approach to IT operations, minimizing manual efforts and accelerating productivity by automating repetitive tasks for our clients.",
      icon: <Cog className="w-6 h-6 text-orange-500" />,
      color: "bg-orange-500/20",
    },
    {
      title: "Cloud Migrations & Onboarding",
      description: "Seamlessly migrate your applications and infrastructure to the cloud with our expert guidance and proven methodologies.",
      icon: <Cloud className="w-6 h-6 text-green-500" />,
      color: "bg-green-500/20",
    },
    {
      title: "Landing Zone Services",
      description: "Build secure, compliant, and optimized cloud foundations with network architecture, security guardrails, and cost optimization best practices.",
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      color: "bg-purple-500/20",
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-5">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-green-500/20 text-green-500 mb-4">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Comprehensive DevOps & Platform Engineering Services
          </h2>
          <p className="text-lg text-slate-300">
            We combine cutting-edge technologies with industry best practices to deliver scalable, efficient, and secure infrastructure solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
