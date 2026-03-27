import { useEffect, useRef } from 'react';

const Achievements = () => {
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

  return (
    <section
      ref={ref}
      id="achievements"
      style={{
        padding: '6rem 3rem',
        background: 'linear-gradient(180deg, #000000 0%, #121212 100%)',
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
            Wins
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
            Achieve<em style={{ fontFamily: 'Roboto, serif', fontStyle: 'italic', fontWeight: 300, color: '#ffffff' }}>ments</em>
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1.5rem',
            marginTop: '3rem',
          }}
        >
          <div
            className="reveal reveal-delay-1"
            style={{
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '20px',
              padding: '2rem',
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
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 800,
                fontSize: '2.5rem',
                background: 'linear-gradient(135deg, #a3a3a3, #ffffff)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1,
                flexShrink: 0,
              }}
            >
              30
            </div>
            <div
              style={{
                fontSize: '0.95rem',
                lineHeight: 1.6,
                color: '#9ca3af',
                paddingTop: '0.4rem',
              }}
            >
              <strong style={{ color: '#ffffff' }}>30-day achievement badge</strong> earned along with solving 50+ Data Structures and Algorithms problems, demonstrating consistent problem-solving practice.
            </div>
          </div>

          <div
            className="reveal reveal-delay-2"
            style={{
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '20px',
              padding: '2rem',
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
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 800,
                fontSize: '2.5rem',
                background: 'linear-gradient(135deg, #a3a3a3, #ffffff)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1,
                flexShrink: 0,
              }}
            >
              🏆
            </div>
            <div
              style={{
                fontSize: '0.95rem',
                lineHeight: 1.6,
                color: '#9ca3af',
                paddingTop: '0.4rem',
              }}
            >
              <strong style={{ color: '#ffffff' }}>Google Cloud Arcade 2025</strong> — Participated in The Arcade 2025 by Google Cloud, winning a Standard tier swag prize for completing cloud skill challenges.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
