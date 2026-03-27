import { useEffect, useRef } from 'react';

const Education = () => {
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

  const education = [
    {
      year: 'Aug 2023 — Present',
      degree: 'B.Tech — Computer Science & Engineering',
      school: 'Lovely Professional University, Phagwara, India',
      delay: 1,
    },
    {
      year: 'Apr 2021 — Mar 2023',
      degree: 'Intermediate (Class XII)',
      school: 'Lyceum International Secondary School, Muzaffarpur',
      score: '82.6%',
      delay: 2,
    },
    {
      year: 'Apr 2020 — Mar 2021',
      degree: 'Matriculation (Class X)',
      school: "St. Xavier's Sr/Jr School, Muzaffarpur",
      score: '77.4%',
      delay: 3,
    },
  ];

  return (
    <section
      ref={ref}
      id="education"
      style={{
        padding: '8rem 3rem',
        background: '#000000',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="reveal">
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
            Academic Journey
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
            Edu<em style={{ fontFamily: 'Roboto, serif', fontStyle: 'italic', fontWeight: 300, color: '#ffffff' }}>cation</em>
          </h2>
        </div>

        <div
          style={{
            position: 'relative',
            marginTop: '3rem',
            paddingLeft: '2rem',
          }}
        >
          {/* Timeline Line */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'linear-gradient(to bottom, #ffffff, #d4d4d4, transparent)',
            }}
          />

          {education.map((edu, idx) => (
            <div
              key={idx}
              className={`reveal reveal-delay-${edu.delay}`}
              style={{
                position: 'relative',
                padding: '0 0 3rem 2.5rem',
              }}
            >
              {/* Timeline Dot */}
              <div
                style={{
                  position: 'absolute',
                  left: '-0.45rem',
                  top: '0.35rem',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: '#000000',
                  border: '2.5px solid #ffffff',
                  boxShadow: '0 0 0 4px rgba(255,255,255,0.15)',
                }}
              />

              <div
                style={{
                  fontSize: '0.72rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#d4d4d4',
                  fontWeight: 600,
                  marginBottom: '0.5rem',
                }}
              >
                {edu.year}
              </div>
              <div
                style={{
                  fontFamily: 'Roboto, sans-serif',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  marginBottom: '0.25rem',
                  color: '#ffffff',
                }}
              >
                {edu.degree}
              </div>
              <div
                style={{
                  fontSize: '0.95rem',
                  color: '#9ca3af',
                }}
              >
                {edu.school}
              </div>
              {edu.score && (
                <div
                  style={{
                    fontSize: '0.82rem',
                    color: '#a3a3a3',
                    fontWeight: 600,
                    marginTop: '0.3rem',
                  }}
                >
                  {edu.score}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
