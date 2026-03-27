import { useEffect, useRef } from 'react';

const Certifications = () => {
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

  const certs = [
    { icon: '🍃', name: 'MongoDB Skill Set', issuer: 'MongoDB', date: 'August 2025' },
    { icon: '☁️', name: 'Cloud Computing', issuer: 'NPTEL', date: 'June 2025' },
    { icon: '🔵', name: 'Meta Back-end Development', issuer: 'Coursera · Meta', date: 'April 2024' },
  ];

  return (
    <section
      ref={ref}
      id="certs"
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
            Credentials
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
            Certifi<em style={{ fontFamily: 'Roboto, serif', fontStyle: 'italic', fontWeight: 300, color: '#ffffff' }}>cations</em>
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
            gap: '1.2rem',
            marginTop: '3rem',
          }}
        >
          {certs.map((cert, idx) => (
            <div
              key={idx}
              className={`reveal reveal-delay-${idx + 1}`}
              style={{
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(15px)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '20px',
                padding: '1.8rem',
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start',
                transition: 'transform 0.3s, box-shadow 0.3s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 35px rgba(255,255,255,0.05)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg,#111827,#111827)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontSize: '1.2rem',
                }}
              >
                {cert.icon}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'Roboto, sans-serif',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    marginBottom: '0.25rem',
                    color: '#ffffff',
                  }}
                >
                  {cert.name}
                </div>
                <div
                  style={{
                    fontSize: '0.78rem',
                    color: '#d4d4d4',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}
                >
                  {cert.issuer}
                </div>
                <div
                  style={{
                    fontSize: '0.72rem',
                    color: '#9ca3af',
                    marginTop: '0.2rem',
                  }}
                >
                  {cert.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
