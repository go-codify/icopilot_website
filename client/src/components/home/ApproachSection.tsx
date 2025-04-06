import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check } from "lucide-react";

const ApproachSection = () => {
  const approaches = [
    {
      title: "Operations Automation",
      description: "Minimize manual day-to-day operational efforts through code-first automation, freeing up time to advance and accelerate productivity."
    },
    {
      title: "Infrastructure as Code (IaC)",
      description: "Manage your infrastructure with version-controlled code, ensuring consistency and eliminating configuration drift."
    },
    {
      title: "Cosmos VMware Alternative",
      description: "Our cost-optimized platform based on Proxmox hypervisor provides self-service capabilities that minimize manual errors for IT teams."
    },
    {
      title: "DC DR Strategies",
      description: "Implement robust disaster recovery solutions for both on-premises and cloud infrastructures to ensure business continuity."
    },
    {
      title: "GitOps Workflows",
      description: "Implement GitOps practices that use Git as the single source of truth for infrastructure and application deployments."
    }
  ];

  return (
    <section id="approach" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          <div className="md:w-1/2 animate-in fade-in slide-in-from-left-5">
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/20 text-primary mb-4">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Code-First Strategy for Day 2 Operations
            </h2>
            <p className="text-lg text-slate-300 mb-6">
              Our code-first approach ensures consistent, repeatable, and automated operations that scale with your business needs and reduce manual intervention.
            </p>
            
            <div className="space-y-4 mb-8">
              {approaches.map((approach, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium mb-1">{approach.title}</h3>
                    <p className="text-slate-300">{approach.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button asChild size="lg">
              <Link href="/contact">
                Get Started with Code-First
              </Link>
            </Button>
          </div>
          
          <div className="md:w-1/2 animate-in fade-in slide-in-from-right-5 delay-300">
            <div className="relative rounded-lg overflow-hidden bg-slate-800 border border-slate-700">
              <div className="flex items-center p-4 bg-slate-900 border-b border-slate-700">
                <div className="flex space-x-2">
                  <span className="block w-3 h-3 rounded-full bg-red-500"></span>
                  <span className="block w-3 h-3 rounded-full bg-yellow-500"></span>
                  <span className="block w-3 h-3 rounded-full bg-green-500"></span>
                </div>
                <div className="ml-4 text-sm font-mono text-slate-400">vmware-automation.yml</div>
              </div>
              <pre className="text-sm p-4 rounded-md overflow-x-auto font-mono">
                <div className="text-slate-400"># VMware Automation & Configuration Management Workflow</div>
                <div>&nbsp;</div>
                <div><span className="text-blue-400">name:</span> vmware-cosmos-automation</div>
                <div>&nbsp;</div>
                <div><span className="text-blue-400">on:</span></div>
                <div>  <span className="text-purple-400">workflow_dispatch:</span></div>
                <div>    <span className="text-green-400">inputs:</span></div>
                <div>      <span className="text-purple-400">environment:</span></div>
                <div>        <span className="text-green-400">description:</span> <span className="text-slate-200">'Target environment'</span></div>
                <div>        <span className="text-green-400">required:</span> <span className="text-slate-200">true</span></div>
                <div>        <span className="text-green-400">default:</span> <span className="text-slate-200">'staging'</span></div>
                <div>&nbsp;</div>
                <div><span className="text-blue-400">jobs:</span></div>
                <div>  <span className="text-purple-400">vmware-automation:</span></div>
                <div>    <span className="text-green-400">runs-on:</span> <span className="text-slate-200">self-hosted</span></div>
                <div>    <span className="text-green-400">steps:</span></div>
                <div>      - <span className="text-green-400">name:</span> <span className="text-slate-200">Checkout code</span></div>
                <div>        <span className="text-green-400">uses:</span> <span className="text-slate-200">actions/checkout@v3</span></div>
                <div>&nbsp;</div>
                <div>      - <span className="text-green-400">name:</span> <span className="text-slate-200">Set up Python</span></div>
                <div>        <span className="text-green-400">uses:</span> <span className="text-slate-200">actions/setup-python@v4</span></div>
                <div>        <span className="text-green-400">with:</span></div>
                <div>          <span className="text-purple-400">python-version:</span> <span className="text-slate-200">'3.9'</span></div>
                <div>&nbsp;</div>
                <div>      - <span className="text-green-400">name:</span> <span className="text-slate-200">Install dependencies</span></div>
                <div>        <span className="text-green-400">run:</span> <span className="text-slate-200">pip install pyvmomi ansible</span></div>
                <div>&nbsp;</div>
                <div>      - <span className="text-green-400">name:</span> <span className="text-slate-200">VMware SDK - Provision VMs</span></div>
                <div>        <span className="text-green-400">run:</span> <span className="text-slate-200">python scripts/vmware_provision.py --env=staging</span></div>
                <div>&nbsp;</div>
                <div>      - <span className="text-green-400">name:</span> <span className="text-slate-200">Run Ansible Config Management</span></div>
                <div>        <span className="text-green-400">run:</span> <span className="text-slate-200">ansible-playbook -i inventories/staging playbooks/config-management.yml</span></div>
                <div>&nbsp;</div>
                <div>  <span className="text-purple-400">self-service-portal-deploy:</span></div>
                <div>    <span className="text-green-400">needs:</span> <span className="text-slate-200">vmware-automation</span></div>
                <div>    <span className="text-green-400">runs-on:</span> <span className="text-slate-200">self-hosted</span></div>
                <div>    <span className="text-green-400">steps:</span></div>
                <div>      - <span className="text-green-400">name:</span> <span className="text-slate-200">Deploy Cosmos Self-Service Portal</span></div>
                <div>        <span className="text-green-400">run:</span> <span className="text-slate-200">ansible-playbook playbooks/cosmos-portal.yml -e env=staging</span></div>
                <div>&nbsp;</div>
                <div>      - <span className="text-green-400">name:</span> <span className="text-slate-200">Configure User Access</span></div>
                <div>        <span className="text-green-400">run:</span> <span className="text-slate-200">ansible-playbook playbooks/user-access.yml</span></div>
                <div>&nbsp;</div>
                <div>      - <span className="text-green-400">name:</span> <span className="text-slate-200">Validate Deployment</span></div>
                <div>        <span className="text-green-400">run:</span> <span className="text-slate-200">python scripts/validate_cosmos.py</span></div>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
