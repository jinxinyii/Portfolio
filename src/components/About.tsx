
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (titleRef.current) titleRef.current.classList.add('animate-slide-down');
            if (contentRef.current) contentRef.current.classList.add('animate-slide-up');
            if (imageRef.current) imageRef.current.classList.add('animate-fade-in');
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

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 rounded-full blur-3xl opacity-60 transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50 rounded-full blur-3xl opacity-60 transform -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto">
        <div 
          ref={titleRef}
          className="mb-12 opacity-0"
        >
          <div className="flex justify-center">
            <span className="badge mb-2">About</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
            Crafting meaningful digital experiences
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div 
            ref={contentRef}
            className="opacity-0 order-2 lg:order-1"
          >
            <div className="glass-panel rounded-2xl p-8 backdrop-blur-lg bg-white/50 shadow-xl" style={{ aspectRatio: '1/1' }}>
              <p className="text-lg mb-6 leading-relaxed text-justify">
                Hi, I'm Elmar T. Panganiban, a passionate tech enthusiast from Tanza, Cavite. I graduated Senior High School from Holy Nazarene Christian School in Mulawin, Tanza, and I'm currently pursuing a Bachelor of Science in Information Technology (BSIT) at STI College Rosario.
              </p>
              <p className="text-lg mb-6 leading-relaxed text-justify">
                At 24 years old, I enjoy immersing myself in the world of technology, from coding for fun to building custom PCs. I'm also an avid gamer, a manga and manhwa reader, and love exploring the latest tech trends.
              </p>
              <p className="text-lg leading-relaxed text-justify">
                While I have a strong preference for backend development, I’m also capable of handling frontend tasks. I’m always eager to learn new technologies, especially those that help me grow as a developer and bring my ideas to life.
              </p>
            </div>
          </div>

          <div 
            ref={imageRef}
            className="opacity-0 order-1 lg:order-2"
          >
            <div className="relative mx-auto max-w-sm lg:max-w-full">
              {/* Portrait Image with Frame */}
              <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-all duration-500">
                <img 
                  src="/public/me.jpg" 
                  alt="Professional portrait" 
                  className="w-full h-auto object-cover"
                  style={{ aspectRatio: '1/1' }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
