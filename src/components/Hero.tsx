import { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reveals = heroRef.current?.querySelectorAll('.reveal');
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
      ref={heroRef}
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 3rem 4rem',
        textAlign: 'center',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {/* Blobs */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '500px',
            height: '500px',
            background: '#111827',
            borderRadius: '50%',
            filter: 'blur(80px)',
            opacity: 0.5,
            top: '-100px',
            right: '-100px',
            animation: 'blobMove1 14s ease-in-out infinite alternate',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            background: '#111827',
            borderRadius: '50%',
            filter: 'blur(80px)',
            opacity: 0.5,
            bottom: '-80px',
            left: '-80px',
            animation: 'blobMove2 16s ease-in-out infinite alternate',
            animationDelay: '-4s',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            background: '#111827',
            borderRadius: '50%',
            filter: 'blur(80px)',
            opacity: 0.5,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            animation: 'blobMove 10s ease-in-out infinite alternate',
            animationDelay: '-2s',
          }}
        />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div
          className="reveal"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.78rem',
            fontWeight: 500,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#ffffff',
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.2)',
            padding: '0.45rem 1.1rem',
            borderRadius: '100px',
            marginBottom: '2rem',
            opacity: 0,
            animation: 'fadeUp 0.8s 0.3s forwards',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              background: '#d4d4d4',
              borderRadius: '50%',
              animation: 'pulse 2s infinite',
            }}
          />
          Available for opportunities
        </div>

        <h1
          className="reveal"
          style={{
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(3.5rem, 10vw, 8rem)',
            lineHeight: 0.9,
            letterSpacing: '-0.04em',
            color: '#ffffff',
            marginBottom: '1rem',
            opacity: 0,
            animation: 'fadeUp 0.9s 0.5s forwards',
          }}
        >
          Vivek <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #d4d4d4 50%, #a3a3a3 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundSize: '200% 200%',
              animation: 'gradShift 4s ease infinite',
            }}
          >
            Kumar
          </span>
        </h1>

        <p
          className="reveal"
          style={{
            fontFamily: 'Roboto, serif',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
            color: '#9ca3af',
            marginBottom: '2.5rem',
            opacity: 0,
            animation: 'fadeUp 0.9s 0.7s forwards',
          }}
        >
          Full Stack Developer
        </p>

        <p
          className="reveal"
          style={{
            maxWidth: '560px',
            fontSize: '1.05rem',
            lineHeight: 1.7,
            color: '#9ca3af',
            margin: '0 auto 3rem',
            opacity: 0,
            animation: 'fadeUp 0.9s 0.9s forwards',
          }}
        >
          Building intelligent, high-performance web applications that merge elegant UI with powerful backend
          architecture.
        </p>

        <div
          className="reveal"
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            opacity: 0,
            animation: 'fadeUp 0.9s 1.1s forwards',
          }}
        >
          <a
            href="#projects"
            style={{
              padding: '0.85rem 2.2rem',
              background: 'linear-gradient(135deg, #ffffff, #d4d4d4)',
              color: '#000',
              border: 'none',
              borderRadius: '100px',
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 600,
              fontSize: '0.9rem',
              letterSpacing: '0.04em',
              textDecoration: 'none',
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.3s, box-shadow 0.3s',
              boxShadow: '0 8px 30px rgba(255,255,255,0.15)',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.transform = 'translateY(-2px)';
              (e.target as HTMLElement).style.boxShadow = '0 16px 40px rgba(255,255,255,0.2)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.transform = 'translateY(0)';
              (e.target as HTMLElement).style.boxShadow = '0 8px 30px rgba(255,255,255,0.15)';
            }}
          >
            View Projects ↓
          </a>
          <a
            href="mailto:vivekkumar113x@gmail.com"
            style={{
              padding: '0.85rem 2.2rem',
              background: 'transparent',
              color: '#ffffff',
              border: '1.5px solid rgba(255,255,255,0.15)',
              borderRadius: '100px',
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 600,
              fontSize: '0.9rem',
              letterSpacing: '0.04em',
              textDecoration: 'none',
              transition: 'border-color 0.3s, background 0.3s, transform 0.3s',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.borderColor = '#ffffff';
              (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.06)';
              (e.target as HTMLElement).style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)';
              (e.target as HTMLElement).style.background = 'transparent';
              (e.target as HTMLElement).style.transform = 'translateY(0)';
            }}
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          opacity: 0,
          animation: 'fadeUp 1s 1.5s forwards',
        }}
      >
        <span
          style={{
            fontSize: '0.7rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#9ca3af',
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: '1.5px',
            height: '50px',
            background: 'linear-gradient(to bottom, #ffffff, transparent)',
            animation: 'scrollLine 2s ease infinite',
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
