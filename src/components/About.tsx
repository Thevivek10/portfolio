import { useEffect, useRef } from 'react';

const About = () => {
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
      id="about"
      style={{
        padding: '8rem 3rem',
        background: 'linear-gradient(180deg, #000000 0%, #121212 100%)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '6rem',
          alignItems: 'center',
        }}
      >
        <div className="reveal">
          <div
            style={{
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#d4d4d4',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
            }}
          >
            <span
              style={{
                content: '""',
                width: '30px',
                height: '1.5px',
                background: '#d4d4d4',
              }}
            />
            Who I Am
          </div>
          <h2
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: '#ffffff',
              marginBottom: '1.5rem',
            }}
          >
            Crafting digital <br />
            experiences with <em style={{ fontFamily: 'Roboto, serif', fontStyle: 'italic', fontWeight: 300, color: '#ffffff' }}>purpose</em>
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: '#9ca3af',
              marginBottom: '1.5rem',
            }}
          >
            I'm a BTech Computer Science student at Lovely Professional University, passionate about building full-stack applications that solve real problems. I blend clean code with thoughtful design to create experiences that feel effortless.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: '#9ca3af',
              marginBottom: '1.5rem',
            }}
          >
            From AI-powered job platforms to location-aware chatbots, I love tackling complex challenges with elegant technical solutions.
          </p>

          {/* Stats */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem',
              marginTop: '2rem',
            }}
          >
            {[
              { num: '3+', label: 'Full-Stack Projects' },
              { num: '50+', label: 'DSA Problems' },
              { num: '3', label: 'Certifications' },
            ].map((stat, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1}`}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '16px',
                  padding: '1.2rem',
                  textAlign: 'center',
                  backdropFilter: 'blur(10px)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 30px rgba(255,255,255,0.05)';
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
                    fontSize: '1.8rem',
                    background: 'linear-gradient(135deg, #ffffff, #d4d4d4)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {stat.num}
                </div>
                <div
                  style={{
                    fontSize: '0.72rem',
                    color: '#9ca3af',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    marginTop: '0.25rem',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Visual */}
        <div
          className="reveal reveal-delay-2"
          style={{
            position: 'relative',
          }}
        >
          {/* Floating tags */}
          {[
            { text: '⚡ React 18', top: '8%', left: '-5%', delay: 0 },
            { text: '🍃 MongoDB', top: '15%', right: '-8%', delay: -1 },
            { text: '🤖 Gemini AI', bottom: '25%', left: '-10%', delay: -2 },
            { text: '🔐 JWT Auth', bottom: '15%', right: '-5%', delay: -3 },
            { text: '☁️ Cloud', top: '50%', left: '-15%', delay: -1.5 },
          ].map((tag, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '100px',
                padding: '0.4rem 0.9rem',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: '#ffffff',
                whiteSpace: 'nowrap',
                boxShadow: '0 4px 20px rgba(255,255,255,0.06)',
                animation: `floatTag 6s ease-in-out infinite`,
                animationDelay: `${tag.delay}s`,
                ...(tag.top && { top: tag.top }),
                ...(tag.bottom && { bottom: tag.bottom }),
                ...(tag.left && { left: tag.left }),
                ...(tag.right && { right: tag.right }),
              }}
            >
              {tag.text}
            </div>
          ))}

          {/* Skills Orb */}
          <div
            style={{
              width: '380px',
              height: '380px',
              background: 'radial-gradient(circle at 30% 40%, rgba(17, 24, 39, 0.4), rgba(17, 24, 39, 0.2), rgba(17, 24, 39, 0.1))',
              backdropFilter: 'blur(20px)',
              border: '1.5px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%',
              animation: 'morphOrb 8s ease-in-out infinite',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              margin: '0 auto',
              boxShadow: '0 30px 80px rgba(255,255,255,0.1), inset 0 0 30px rgba(255,255,255,0.05)',
            }}
          >
            <div
              style={{
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 800,
                fontSize: '1.1rem',
                color: '#ffffff',
                textAlign: 'center',
                lineHeight: 1.6,
              }}
            >
              Full Stack<br />
              Developer<br />
              <span style={{ color: '#d4d4d4', fontSize: '0.8em' }}>LPU · CSE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
