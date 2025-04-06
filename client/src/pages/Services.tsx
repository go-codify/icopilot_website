import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Server, Code, Package, Terminal, Cloud, Shield, ShieldCheck, Cog, Database } from "lucide-react";

const Services = () => {
  useEffect(() => {
    document.title = "Services | iCopilot";
  }, []);

  const services = [
    {
      title: "IT Infrastructure Automation",
      description: "Streamline and automate your infrastructure deployments with our Infrastructure as Code (IaC) solutions using Terraform, CloudFormation, and Ansible.",
      icon: <Server className="w-6 h-6 text-primary" />,
      color: "bg-primary/20",
      benefits: [
        "Reduce manual configuration errors",
        "Ensure consistent environments",
        "Enable rapid deployment and scaling",
        "Improve disaster recovery capabilities",
        "Facilitate compliance and audit trails"
      ]
    },
    {
      title: "DevOps as a Service (DaaS)",
      description: "Accelerate your development cycles with our full-spectrum DevOps services, from CI/CD pipeline setup to monitoring and optimizing your delivery workflow.",
      icon: <Code className="w-6 h-6 text-green-500" />,
      color: "bg-green-500/20",
      benefits: [
        "Accelerate software delivery cycles",
        "Improve collaboration between development and operations",
        "Implement robust CI/CD pipelines",
        "Enhance monitoring and observability",
        "Reduce mean time to recovery (MTTR)"
      ]
    },
    {
      title: "Platform Engineering as a Service",
      description: "Build self-service developer platforms that boost productivity, standardize workflows, and ensure security across your organization.",
      icon: <Package className="w-6 h-6 text-purple-500" />,
      color: "bg-purple-500/20",
      benefits: [
        "Create self-service developer portals",
        "Standardize infrastructure components",
        "Enforce security policies and governance",
        "Reduce cognitive load on development teams",
        "Enable innovation through abstraction"
      ]
    },
    {
      title: "Internal Developer Platforms",
      description: "Create customized platforms that abstract infrastructure complexity and provide self-service capabilities for your development teams.",
      icon: <Terminal className="w-6 h-6 text-primary" />,
      color: "bg-primary/20",
      benefits: [
        "Abstract away infrastructure complexity",
        "Enable developer self-service",
        "Standardize deployment patterns",
        "Improve developer experience and productivity",
        "Maintain central governance and control"
      ]
    },
    {
      title: "Cosmos - VMware Alternative",
      description: "Our cost-optimized virtualization platform based on Proxmox hypervisor with enhanced self-service capabilities to minimize manual errors for IT teams.",
      icon: <Database className="w-6 h-6 text-indigo-500" />,
      color: "bg-indigo-500/20",
      benefits: [
        "Significant cost savings compared to VMware",
        "Self-service portal for IT operations teams",
        "Minimize errors from manual changes",
        "Simplify infrastructure management",
        "Enhance operational efficiency through automation"
      ]
    },
    {
      title: "DC DR Strategy & Implementation",
      description: "Design and implement robust disaster recovery solutions for both on-premises and cloud infrastructures, ensuring business continuity and minimal downtime.",
      icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
      color: "bg-blue-500/20",
      benefits: [
        "Ensure business continuity during outages",
        "Implement robust recovery protocols",
        "Minimize data loss with proper replication strategies",
        "Create tailored DR solutions for hybrid environments",
        "Reduce recovery time objectives (RTO) and point objectives (RPO)"
      ]
    },
    {
      title: "Operations Projects",
      description: "Take a code-first approach to IT operations, minimizing manual efforts and accelerating productivity by automating repetitive tasks for our clients.",
      icon: <Cog className="w-6 h-6 text-orange-500" />,
      color: "bg-orange-500/20",
      benefits: [
        "Reduce manual day-to-day operations efforts",
        "Apply code-first philosophy to operations tasks",
        "Automate routine maintenance and monitoring",
        "Free up resources to focus on innovation",
        "Improve consistency and reduce human error"
      ]
    },
    {
      title: "Cloud Migrations & Onboarding",
      description: "Seamlessly migrate your applications and infrastructure to the cloud with our expert guidance and proven methodologies.",
      icon: <Cloud className="w-6 h-6 text-green-500" />,
      color: "bg-green-500/20",
      benefits: [
        "Reduce on-premise infrastructure costs",
        "Improve application scalability and reliability",
        "Modernize legacy applications",
        "Enable remote work capabilities",
        "Leverage cloud-native services"
      ]
    },
    {
      title: "Landing Zone Services",
      description: "Build secure, compliant, and optimized cloud foundations with network architecture, security guardrails, and cost optimization best practices.",
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      color: "bg-purple-500/20",
      benefits: [
        "Establish secure cloud foundations",
        "Implement network segmentation and security",
        "Set up identity and access management",
        "Enable compliance monitoring",
        "Optimize resource allocation and costs"
      ]
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-slate-300">
            Comprehensive DevOps and platform engineering services to accelerate your digital transformation
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
              <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                  {service.icon}
                </div>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-lg text-slate-300 mb-6">{service.description}</p>
                <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                <ul className="space-y-2 mb-8">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-primary mr-2">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild>
                  <Link href="/contact">Request a Consultation</Link>
                </Button>
              </div>
              <div className={`${service.color} p-8 rounded-lg ${index % 2 === 1 ? "md:order-1" : ""}`}>
                <div className="bg-slate-900/50 rounded-lg p-6 backdrop-blur-sm border border-slate-700">
                  <h3 className="text-xl font-bold mb-4">Our Approach</h3>
                  <p className="text-slate-300 mb-4">
                    We implement {service.title} with a focus on your specific business needs, ensuring seamless integration with your existing workflows and systems.
                  </p>
                  <p className="text-slate-300">
                    Our team of experts uses industry best practices and cutting-edge technologies to deliver solutions that are scalable, secure, and aligned with your business goals.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center mt-20">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-slate-300 mb-8">
            Contact us today to discuss how our services can help your organization achieve its infrastructure and DevOps goals.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
