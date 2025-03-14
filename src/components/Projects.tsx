
import { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

const projects = [
  {
    id: 1,
    title: 'DISC-Assessment',
    description: 'A collaborative project to develop a comprehensive DISC Assessment tool that measures personality traits and behavioral styles to enhance team dynamics and individual performance. The tool provides personalized feedback and development plans based on assessment results.',
    technologies: ['PHP', 'HTML', 'Hack', 'Tailwind CSS', 'XAMMP', 'PHPMyAdmin'],
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    repoUrl: 'https://github.com/jinxinyii/DISC-Assessment',
  },
  {
    id: 2,
    title: 'Gentle-Hands-Py',
    description: 'A Django-based web application for managing user registration, authentication, and a homepage with PostgreSQL as the database. Designed to support a cloud-based orphanage management system.',
    technologies: ['Python', 'HTML', 'Tailwind CSS', 'Django', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    repoUrl: 'https://github.com/jinxinyii/Gentle-Hands-Py',
  },
  {
    id: 3,
    title: 'Inventory-Management-System',
    description: 'Inventory Management System (IMS) - Backend A backend system built with Python to manage inventory, track stock levels, manage suppliers, and generate sales reports. This project is designed for small businesses to streamline product management and improve efficiency.',
    technologies: ['Python', 'Django', 'PostgreSQL', 'JWT Authentication'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    repoUrl: 'https://github.com/jinxinyii/Inventory-Management-System',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current && titleRef.current) {
              titleRef.current.classList.add('animate-slide-down');
            } 
            
            // Animate each project card with a delay
            if (entry.target !== sectionRef.current) {
              entry.target.classList.add('animate-zoom-in');
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-24 px-6 bg-secondary/50"
    >
      <div className="max-w-7xl mx-auto">
        <div 
          ref={titleRef}
          className="mb-16 text-center opacity-0"
        >
          <span className="badge mb-2">Projects</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            GitHub
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            A selection of my most recent and impactful projects, 
            showcasing my skills development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              ref={el => projectRefs.current[index] = el}
              className="bg-background rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px] opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground/80 mb-4 text-justify">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="badge">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.repoUrl} 
                    className="inline-flex items-center text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
