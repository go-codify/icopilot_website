import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const About = () => {
  useEffect(() => {
    document.title = "About Us | iCopilot";
  }, []);

  const values = [
    {
      title: "Code-First Philosophy",
      description: "We approach all operations with a code-first mindset, minimizing manual day-to-day efforts and focusing on automation to accelerate productivity for our clients."
    },
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, from code quality to customer service."
    },
    {
      title: "Innovation",
      description: "We embrace new technologies and approaches to solve complex problems."
    },
    {
      title: "Collaboration",
      description: "We work closely with our clients as partners in their success."
    },
    {
      title: "Transparency",
      description: "We believe in open, honest communication throughout the engagement."
    }
  ];

  const capabilities = [
    "Infrastructure as Code (Terraform, CloudFormation, Ansible)",
    "CI/CD Pipelines (GitHub Actions, Jenkins, GitLab CI)",
    "Containerization (Docker, Kubernetes)",
    "Cloud Platforms (AWS, Azure, GCP)",
    "DC DR Strategy Implementation (On-premises & Cloud)",
    "Code-First Operations Automation",
    "Cosmos - VMware Alternative (Proxmox-based)",
    "Monitoring and Observability (Prometheus, Grafana, ELK)",
    "Security and Compliance Automation"
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-6 text-center">About iCopilot</h1>
          
          <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-green-500/20 p-1 rounded-lg mb-12">
            <div className="bg-slate-900 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="text-lg text-slate-300 mb-4">
                iCopilot is a team of IT veterans with over 20 years of experience serving large enterprises. We understand DevOps at its core and bring together the best toolsets that work for all our clients.
              </p>
              <p className="text-lg text-slate-300 mb-4">
                We recognized the growing need for specialized expertise in infrastructure automation and cloud transformation as organizations struggle with the complexity of modern infrastructure, the rapid pace of technology change, and the challenges of maintaining security and compliance at scale.
              </p>
              <p className="text-lg text-slate-300 mb-4">
                Our mission is to empower organizations with automated, scalable, and secure infrastructure solutions that accelerate innovation and drive business growth.
              </p>
              <p className="text-lg text-slate-300 mb-4">
                Our Internal Developer Platform (IDP) is continuously developed with new features and blueprint items to cover the majority of operational use cases, ensuring our clients stay ahead of the curve.
              </p>
              <p className="text-lg text-slate-300">
                We've also developed "Cosmos," a cost-effective VMware alternative based on the Proxmox hypervisor. This solution includes enhanced self-service capabilities designed to streamline operations for client IT teams while minimizing errors that can occur with manual changes.
              </p>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-6 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {values.map((value, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-primary">{value.title}</h3>
                  <p className="text-slate-300">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <h2 className="text-3xl font-bold mb-6 text-center">Technical Capabilities</h2>
          <div className="bg-slate-800 rounded-lg p-8 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-slate-300">{capability}</span>
                </div>
              ))}
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-6 text-center">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Code First</h3>
                <p className="text-slate-300">
                  We take a code-first approach to operations, minimizing manual day-to-day efforts and freeing up time to advance and accelerate productivity.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Automation First</h3>
                <p className="text-slate-300">
                  We prioritize automation to eliminate manual errors, increase efficiency, and create repeatable processes.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Security by Design</h3>
                <p className="text-slate-300">
                  Security is integrated throughout our solutions, not bolted on as an afterthought.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Scalable Architecture</h3>
                <p className="text-slate-300">
                  Our solutions are designed to grow with your business, adapting to changing needs.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-lg text-slate-300 mb-8">
              Contact us today to discuss how we can help accelerate your cloud and DevOps journey.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
