import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L1 12h3v9h5v-6h6v6h5v-9h3L12 2zm0 2.5L19.8 12H18v8h-3v-6H9v6H6v-8H4.2L12 4.5z"></path>
              </svg>
              <span className="text-xl font-bold tracking-tight">iCopilot</span>
            </div>
            <p className="text-slate-400 mb-6">
              Accelerate your infrastructure automation and cloud journey with expert DevOps and platform engineering services.
            </p>
            <p className="text-slate-500">&copy; {new Date().getFullYear()} iCopilot. All rights reserved.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-slate-400 hover:text-primary transition-colors">IT Infrastructure Automation</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-primary transition-colors">DevOps as a Service</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-primary transition-colors">Platform Engineering</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-primary transition-colors">Cloud Migration</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-primary transition-colors">Landing Zone Services</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-slate-400 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/about" className="text-slate-400 hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-slate-400 hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
