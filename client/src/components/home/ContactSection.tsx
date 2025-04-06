import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would be implemented here
    console.log("Form data:", formData);
  };

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-5">
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/20 text-primary mb-4">
              Contact Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-lg text-slate-300">
              Get in touch with our experts and let's discuss how iCopilot can accelerate your cloud and DevOps journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-in fade-in slide-in-from-bottom-5 delay-150">
            <Card className="bg-slate-900 border-slate-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="bg-slate-800 border-slate-700"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      className="bg-slate-800 border-slate-700"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      className="bg-slate-800 border-slate-700"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="How can we help you?"
                      className="bg-slate-800 border-slate-700"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            <div className="space-y-8">
              <Card className="bg-slate-900 border-slate-700">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-500">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium mb-1">Email</h4>
                        <p className="text-slate-300">info@icopilot.in</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-500">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium mb-1">Location</h4>
                        <p className="text-slate-300">
                          123 Tech Park Drive<br />San Francisco, CA 94107
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-900 border-slate-700">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
                  
                  <div className="flex space-x-4">
                    <Button variant="outline" size="icon" className="rounded-lg h-10 w-10">
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                    
                    <Button variant="outline" size="icon" className="rounded-lg h-10 w-10">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                    
                    <Button variant="outline" size="icon" className="rounded-lg h-10 w-10">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                    
                    <Button variant="outline" size="icon" className="rounded-lg h-10 w-10">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
