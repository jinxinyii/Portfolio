
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-background border-t">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold tracking-tighter">Xinyii</h3>
            <p className="text-foreground/70 mt-1">BSIT Student | Backend Developer | Tech Enthusiast</p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a 
              href="https://github.com/jinxinyii" 
              className="h-10 w-10 flex items-center justify-center rounded-full bg-foreground/5 text-foreground/70 hover:bg-primary/10 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/elmar-panganiban/"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-foreground/5 text-foreground/70 hover:bg-primary/10 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://x.com/maryoooovg" 
              className="h-10 w-10 flex items-center justify-center rounded-full bg-foreground/5 text-foreground/70 hover:bg-primary/10 hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a 
              href="mailto:pngnbn.elmar@gmail.com" 
              className="h-10 w-10 flex items-center justify-center rounded-full bg-foreground/5 text-foreground/70 hover:bg-primary/10 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/60 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm">
            © {currentYear} Elmar T. Panganiban. All Rights Reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
