
import { useEffect, useRef } from 'react';
import { Code, Layers, Palette, Sparkles, Terminal, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: Code,
    skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript'],
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    icon: Palette,
    skills: ['Figma', 'Wireframing', 'Prototyping', 'Design Systems', 'Responsive Design'],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: Terminal,
    skills: ['Node.js', 'Java', 'Python', 'PHP', 'C#', 'MySQL', 'MongoDB', 'PostgreSQL', 'MariaDB'],
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Libraries',
    icon: Layers,
    skills: ['Tailwind CSS', 'Spring Boot', 'Laravel', 'ASP.NET Core', 'Bootstrap'],
  },
  {
    id: 'tools',
    title: 'Tools & Workflow',
    icon: Zap,
    skills: ['Git', 'GitHub', 'VS Code', 'npm/yarn'],
  },
  {
    id: 'other',
    title: 'Other Skills',
    icon: Sparkles,
    skills: ['Responsive Design', 'Performance Optimization', 'Testing', 'Documentation', 'Hardware', 'Software'],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current && titleRef.current) {
              titleRef.current.classList.add('animate-slide-down');
            }
            
            // Animate each skill card with a delay
            if (entry.target !== sectionRef.current) {
              entry.target.classList.add('animate-fade-in');
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-1/3 h-1/3 bg-blue-50 rounded-full blur-3xl opacity-60 transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-blue-50 rounded-full blur-3xl opacity-60 transform translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto">
        <div 
          ref={titleRef}
          className="mb-16 text-center opacity-0"
        >
          <span className="badge mb-2">Skills</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            A comprehensive overview of my technical capabilities and areas of expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            
            return (
              <div 
                key={category.id}
                ref={el => cardRefs.current[index] = el}
                className="bg-background rounded-2xl overflow-hidden shadow p-6 opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-5">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary mr-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="badge bg-secondary/70 hover:bg-secondary transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
