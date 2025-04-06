import { Card, CardContent } from "@/components/ui/card";
import { Lock, Scale, ArrowLeftRight } from "lucide-react";

const CloudMigrationSection = () => {
  const steps = [
    {
      number: 1,
      title: "Assessment & Planning",
      description: "Comprehensive evaluation of your current infrastructure and applications to create a tailored migration roadmap.",
      items: ["Application portfolio analysis", "Dependency mapping", "Risk assessment"]
    },
    {
      number: 2,
      title: "Foundation Building",
      description: "Establish a secure and scalable cloud foundation with proper architecture and governance.",
      items: ["Landing zone setup", "Security configurations", "Networking architecture"]
    },
    {
      number: 3,
      title: "Migration Execution",
      description: "Systematic migration of applications and data with minimal disruption to business operations.",
      items: ["Phased migration approach", "Data transfer and validation", "Testing and verification"]
    },
    {
      number: 4,
      title: "Optimization & Management",
      description: "Continuous improvement of your cloud environment to maximize performance and cost efficiency.",
      items: ["Cost optimization", "Performance monitoring", "Security assessment"]
    }
  ];

  return (
    <section className="py-20 bg-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-in fade-in slide-in-from-bottom-5">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-green-500/20 text-green-500 mb-4">
            Cloud Transformation
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Seamless Cloud Migration & Public Cloud Experience
          </h2>
          <p className="text-lg text-slate-300">
            Transform your on-premise environment to have a public cloud-like consumption experience with our expert cloud migration services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-in fade-in slide-in-from-left-5">
            <div className="bg-slate-900 rounded-lg p-8 border border-slate-700">
              <h3 className="text-2xl font-bold mb-6">Migration & Onboarding Process</h3>
              
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white text-lg font-bold">
                        {step.number}
                      </div>
                      {index < steps.length - 1 && (
                        <div className="h-full w-0.5 bg-primary/30 mx-auto mt-2"></div>
                      )}
                    </div>
                    <div className="ml-6">
                      <h4 className="text-xl font-semibold mb-3">{step.title}</h4>
                      <p className="text-slate-300 mb-2">{step.description}</p>
                      <ul className="list-disc list-inside text-slate-400 space-y-1">
                        {step.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-in fade-in slide-in-from-right-5 delay-300">
            <div className="space-y-6">
              <Card className="bg-slate-900 border-slate-700 transition-all duration-300 hover:border-purple-500/50">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-500 mr-4">
                      <Lock className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-semibold">Security Guardrails</h4>
                  </div>
                  <p className="text-slate-300">
                    Implement comprehensive security controls and compliance frameworks to protect your cloud environment from threats and ensure regulatory compliance.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-900 border-slate-700 transition-all duration-300 hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mr-4">
                      <Scale className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-semibold">Cost Optimization</h4>
                  </div>
                  <p className="text-slate-300">
                    Maximize the value of your cloud investment with continuous cost monitoring, rightsizing recommendations, and automated scaling solutions.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-900 border-slate-700 transition-all duration-300 hover:border-green-500/50">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center text-green-500 mr-4">
                      <ArrowLeftRight className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-semibold">Hybrid Cloud Solutions</h4>
                  </div>
                  <p className="text-slate-300">
                    Bridge your on-premise and cloud environments with seamless connectivity, unified management, and consistent security policies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudMigrationSection;
