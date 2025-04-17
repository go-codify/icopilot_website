import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Github } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us | iCopilot";
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
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
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-3">Contact Us</h1>
          <p className="text-xl text-slate-300 text-center mb-12">
            Get in touch with our team to discuss your DevOps and infrastructure needs.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-slate-300">vasanth@icopilot.in</p>
                <p className="text-slate-400 text-sm">We respond within 24 hours</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500 mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Office</h3>
                <p className="text-slate-300">
                  T2-301, Sattva Misty Charm, Off Holiday Village,<br />
                  Kanakapura Road, Bengaluru, Karnataka 560109
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your email"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your phone"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Provide details about your inquiry"
                        required
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
              <Card className="bg-slate-800 border-slate-700 mb-8">
                <CardContent className="p-6">
                  <p className="mb-6 text-slate-300">
                    Follow us on social media to stay updated with the latest news, insights, and best practices in DevOps and infrastructure automation.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="outline" size="icon" className="h-12 w-12 rounded-lg">
                      <Facebook className="h-6 w-6" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                    
                    <Button variant="outline" size="icon" className="h-12 w-12 rounded-lg">
                      <Twitter className="h-6 w-6" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                    
                    <Button variant="outline" size="icon" className="h-12 w-12 rounded-lg">
                      <Linkedin className="h-6 w-6" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                    
                    <Button variant="outline" size="icon" className="h-12 w-12 rounded-lg">
                      <Github className="h-6 w-6" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">What services does iCopilot offer?</h4>
                      <p className="text-slate-300 text-sm">
                        We offer IT infrastructure automation, DevOps as a Service, Platform Engineering, Internal Developer Platforms, Cloud Migration, and Landing Zone Services.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">How do I get started with iCopilot?</h4>
                      <p className="text-slate-300 text-sm">
                        Contact us through this form or email us to schedule an initial consultation. We'll discuss your needs and propose the right solution.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">What cloud platforms do you support?</h4>
                      <p className="text-slate-300 text-sm">
                        We support all major cloud platforms including AWS, Microsoft Azure, Google Cloud Platform, and multi-cloud environments.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
