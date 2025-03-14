
import { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, MessageSquare, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (titleRef.current) titleRef.current.classList.add('animate-slide-down');
            if (formRef.current) formRef.current.classList.add('animate-fade-in');
            if (infoRef.current) infoRef.current.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-24 px-6 bg-secondary/50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div 
          ref={titleRef}
          className="mb-16 text-center opacity-0"
        >
          <span className="badge mb-2">Contact</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Interested in working together? Feel free to reach out. I'm always open to discussing new projects and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div 
            ref={formRef}
            className="opacity-0"
          >
            <form onSubmit={handleSubmit} className="glass-panel rounded-2xl p-8 bg-white/80">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <MessageSquare className="w-5 h-5 mr-2" />
                Send a Message
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="Your email address"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                    placeholder="Your message"
                    rows={5}
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-medium transition-all",
                    isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-primary/90 hover:shadow-lg active:scale-98"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
                
                {submitSuccess && (
                  <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-lg text-sm">
                    Your message has been sent successfully! I'll get back to you soon.
                  </div>
                )}
              </div>
            </form>
          </div>
          
          <div 
            ref={infoRef}
            className="opacity-0 lg:pl-8"
          >
            <div className="h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary mr-4 shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/70 mb-1">Email</p>
                      <a href="mailto:contact@example.com" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                        pngnbn.elmar@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary mr-4 shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/70 mb-1">Location</p>
                      <p className="text-lg font-medium">
                        Region IV-A, Philippines
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Availability Card */}
              <div className="mt-12 glass-panel rounded-2xl p-8 bg-primary/5 border border-primary/10">
                <h4 className="text-lg font-semibold mb-3">Current Availability</h4>
                <p className="text-foreground/80 mb-4">
                  I'm currently not available for freelance work and close to discussing new projects or opportunities.
                </p>
                <div className="inline-block rounded-full px-4 py-1 bg-red-100 text-red-800 text-sm font-medium">
                  Not available for Work
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
