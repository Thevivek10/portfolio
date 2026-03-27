import { useEffect, useRef } from 'react';
import hireflowImg from '../assets/Screenshot 2026-03-27 004021.png';
import petcareImg from '../assets/Screenshot 2026-03-27 004156.png';
import navigatorImg from '../assets/Screenshot 2025-04-24 134319.png';

const Projects = () => {
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

  const projects = [
    {
      image: hireflowImg,
      date: 'Feb 2026',
      name: 'HireFlow — AI Job Platform',
      desc: 'Full-stack AI-powered job application platform with dual roles (employer/applicant). Features job posting, application tracking, and an AI CV Builder using Google Gemini API to generate ATS-optimized, job-tailored CVs instantly. Includes a Recharts analytics dashboard powered by MongoDB aggregation pipelines with AI compatibility scoring and candidate ranking.',
      tech: ['React 18', 'Node.js', 'MongoDB', 'Express', 'Gemini API', 'JWT'],
      links: [
        { text: '↗ Live Demo', href: 'https://github.com/Thevivek10', type: 'demo' },
        { text: '⌥ Repo', href: 'https://github.com/Thevivek10', type: 'repo' },
      ],
      delay: 1,
    },
    {
      image: petcareImg,
      date: 'Dec 2025',
      name: 'PetCare — Adoption Platform',
      desc: 'Full-stack Pet Adoption and Care System enabling users to browse pets, submit adoption requests, and access categorized care guides. Built RESTful APIs with Node.js, Express, and MongoDB with schema validation, dynamic filtering by species, size, and status, and an end-to-end adoption workflow with status tracking.',
      tech: ['React 18', 'Vite', 'Node.js', 'MongoDB', 'Mongoose', 'Axios', 'Tailwind'],
      links: [{ text: '⌥ Repo', href: 'https://github.com/Thevivek10', type: 'repo' }],
      delay: 2,
    },
    {
      image: navigatorImg,
      date: 'May 2025',
      name: 'AI City Navigator',
      desc: 'Location-aware AI chatbot with real-time navigation, route planning, and landmark discovery. Integrates multi-API intelligence using OpenRouter (DeepSeek) for conversations and Google Gemini for advanced geolocation analysis. Features a responsive animated UI with a custom Web Speech API voice interface and dynamic typing effects.',
      tech: ['JavaScript', 'Node.js', 'Express', 'OpenRouter', 'Gemini API', 'Maps API', 'Web Speech'],
      links: [
        { text: '↗ Live Demo', href: 'https://github.com/Thevivek10', type: 'demo' },
        { text: '⌥ Repo', href: 'https://github.com/Thevivek10', type: 'repo' },
      ],
      delay: 3,
    },
  ];

  return (
    <section
      ref={ref}
      id="projects"
      style={{
        padding: '8rem 3rem',
        background: 'linear-gradient(180deg, #121212 0%, #000000 100%)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="reveal" style={{ marginBottom: '4rem' }}>
          <div
            style={{
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#d4d4d4',
              marginBottom: '1rem',
            }}
          >
            Work
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
            Featured <em style={{ fontFamily: 'Roboto, serif', fontStyle: 'italic', fontWeight: 300, color: '#ffffff' }}>Projects</em>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className={`reveal reveal-delay-${proj.delay}`}
              style={{
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '28px',
                padding: '2.5rem',
                display: 'grid',
                gridTemplateColumns: '300px 1fr auto',
                gap: '2rem',
                alignItems: 'start',
                transition: 'transform 0.4s cubic-bezier(.23,1,.32,1), box-shadow 0.4s',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateX(6px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '-8px 20px 50px rgba(255,255,255,0.05)';
                const img = (e.currentTarget as HTMLElement).querySelector('img') as HTMLImageElement;
                if (img) img.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateX(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                const img = (e.currentTarget as HTMLElement).querySelector('img') as HTMLImageElement;
                if (img) img.style.transform = 'scale(1)';
              }}
            >
              {/* Screenshot */}
              <img
                src={proj.image}
                alt={proj.name}
                style={{
                  width: '100%',
                  height: '200px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.3s ease',
                }}
              />

              {/* Content */}
              <div>
                <div
                  style={{
                    fontSize: '0.72rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#d4d4d4',
                    fontWeight: 600,
                    marginBottom: '0.75rem',
                  }}
                >
                  {proj.date}
                </div>
                <div
                  style={{
                    fontFamily: 'Roboto, sans-serif',
                    fontWeight: 700,
                    fontSize: '1.5rem',
                    letterSpacing: '-0.02em',
                    marginBottom: '1rem',
                    color: '#ffffff',
                  }}
                >
                  {proj.name}
                </div>
                <p
                  style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                    color: '#9ca3af',
                    marginBottom: '1.2rem',
                  }}
                >
                  {proj.desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {proj.tech.map((tag, i) => (
                    <span
                      key={i}
                      style={{
                        padding: '0.25rem 0.7rem',
                        borderRadius: '6px',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        letterSpacing: '0.04em',
                        background: 'rgba(255,255,255,0.15)',
                        color: '#ffffff',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', flexShrink: 0 }}>
                {proj.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.5rem 1rem',
                      borderRadius: '100px',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      letterSpacing: '0.04em',
                      textDecoration: 'none',
                      transition: 'all 0.3s',
                      whiteSpace: 'nowrap',
                      background: link.type === 'demo' ? 'linear-gradient(135deg,#ffffff,#d4d4d4)' : 'rgba(0,0,0,0.06)',
                      color: link.type === 'demo' ? '#000' : '#ffffff',
                      border: link.type === 'demo' ? 'none' : '1px solid rgba(0,0,0,0.1)',
                      boxShadow: link.type === 'demo' ? '0 4px 15px rgba(255,255,255,0.15)' : 'none',
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.transform = 'scale(1.04)';
                      if (link.type === 'demo') {
                        (e.target as HTMLElement).style.boxShadow = '0 8px 25px rgba(255,255,255,0.2)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.transform = 'scale(1)';
                      if (link.type === 'demo') {
                        (e.target as HTMLElement).style.boxShadow = '0 4px 15px rgba(255,255,255,0.15)';
                      }
                    }}
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
