
import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;

    if (title) title.style.opacity = '1';
    if (title) title.style.transform = 'translateY(0)';
    
    setTimeout(() => {
      if (subtitle) subtitle.style.opacity = '1';
      if (subtitle) subtitle.style.transform = 'translateY(0)';
    }, 400);
    
    setTimeout(() => {
      if (cta) cta.style.opacity = '1';
      if (cta) cta.style.transform = 'translateY(0)';
    }, 800);
  }, []);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent opacity-50 pointer-events-none" />
      
      {/* Background Circle */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-100/20 blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
        >
          <span className="block text-balance">Welcome to my Digital Portfolio</span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-2xl mx-auto text-balance opacity-0 transform translate-y-8 transition-all duration-1000 ease-out delay-100"
        >
          Discover my journey through projects, skills, and experiences, crafted with precision and passion.
        </p>
        
        <div 
          ref={ctaRef}
          className="opacity-0 transform translate-y-8 transition-all duration-1000 ease-out delay-200"
        >
          <a 
            href="#projects" 
            className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl hover:shadow-primary/20"
          >
            View Projects
          </a>
        </div>
      </div>  
    </section>
  );
}
