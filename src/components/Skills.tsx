import { useEffect, useRef } from 'react';

const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reveals = ref.current?.querySelectorAll('.reveal');
    if (!reveals) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    reveals.forEach((el) => observer.observe(el));
    return () => reveals.forEach((el) => observer.unobserve(el));
  }, []);

  const skillCategories = [
    {
      icon: '💻',
      title: 'Languages',
      skills: ['JavaScript', 'Java', 'Python', 'C++', 'PHP', 'C', 'SQL'],
      delay: 1,
    },
    {
      icon: '🔧',
      title: 'Frameworks & Libraries',
      skills: ['React 18', 'Next.js', 'Node.js', 'Express.js', 'Tailwind CSS'],
      delay: 2,
    },
    {
      icon: '🛠️',
      title: 'Tools & Platforms',
      skills: ['MongoDB', 'MySQL', 'Supabase', 'Git / GitHub', 'Linux', 'Figma'],
      delay: 3,
    },
    {
      icon: '🧠',
      title: 'Soft Skills',
      skills: ['Autodidacticism', 'Adaptability', 'Resilience', 'Brevity'],
      delay: 4,
    },
  ];

  return (
    <section
      ref={ref}
      id="skills"
      style={{
        padding: '8rem 3rem',
        background: '#000000',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="reveal">
          <div
            style={{
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#d4d4d4',
              marginBottom: '1rem',
              textAlign: 'center',
            }}
          >
            Expertise
          </div>
          <h2
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: '#ffffff',
            }}
          >
            Tech <em style={{ fontFamily: 'Roboto, serif', fontStyle: 'italic', fontWeight: 300, color: '#ffffff' }}>Stack</em>
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
            gap: '1.5rem',
          }}
        >
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className={`reveal reveal-delay-${cat.delay}`}
              style={{
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '24px',
                padding: '2rem',
                transition: 'transform 0.4s cubic-bezier(.23,1,.32,1), box-shadow 0.4s',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 50px rgba(255,255,255,0.05)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.4rem',
                  marginBottom: '1rem',
                  background: 'rgba(255,255,255,0.12)',
                }}
              >
                {cat.icon}
              </div>
              <div
                style={{
                  fontFamily: 'Roboto, sans-serif',
                  fontWeight: 700,
                  fontSize: '1rem',
                  letterSpacing: '0.02em',
                  marginBottom: '1rem',
                  color: '#ffffff',
                }}
              >
                {cat.title}
              </div>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                }}
              >
                {cat.skills.map((skill, i) => (
                  <span
                    key={i}
                    style={{
                      padding: '0.35rem 0.85rem',
                      borderRadius: '100px',
                      fontSize: '0.78rem',
                      fontWeight: 500,
                      letterSpacing: '0.03em',
                      background: 'rgba(255,255,255,0.1)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      color: '#ffffff',
                      transition: 'all 0.3s',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.background = '#ffffff';
                      (e.target as HTMLElement).style.color = '#000';
                      (e.target as HTMLElement).style.borderColor = '#ffffff';
                      (e.target as HTMLElement).style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.1)';
                      (e.target as HTMLElement).style.color = '#ffffff';
                      (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)';
                      (e.target as HTMLElement).style.transform = 'scale(1)';
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
