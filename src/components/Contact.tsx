import { useEffect, useRef } from 'react';

const Contact = () => {
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
      id="contact"
      style={{
        padding: '8rem 3rem',
        background: 'linear-gradient(180deg, #121212 0%, #111827 100%)',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>
        <div
          className="reveal"
          style={{
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            letterSpacing: '-0.04em',
            lineHeight: 1,
            marginBottom: '1.5rem',
            color: '#ffffff',
          }}
        >
          Let's build something{' '}
          <em style={{ fontFamily: 'Roboto, serif', fontStyle: 'italic', fontWeight: 300, color: '#ffffff' }}>great</em>
        </div>

        <p
          className="reveal reveal-delay-1"
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.7,
            color: '#9ca3af',
            margin: '0 auto 2.5rem',
          }}
        >
          Open to internships, freelance projects, and full-time roles. Drop a message and let's talk!
        </p>

        <div
          className="reveal reveal-delay-2"
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '2.5rem',
          }}
        >
          <a
            href="mailto:vivekkumar113x@gmail.com"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.8rem 1.8rem',
              borderRadius: '100px',
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 600,
              fontSize: '0.88rem',
              textDecoration: 'none',
              transition: 'all 0.3s',
              background: 'linear-gradient(135deg, #ffffff, #d4d4d4)',
              color: '#000',
              boxShadow: '0 8px 25px rgba(255,255,255,0.15)',
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.transform = 'translateY(-3px) scale(1.03)';
              (e.target as HTMLElement).style.boxShadow = '0 15px 40px rgba(255,255,255,0.2)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.transform = 'translateY(0) scale(1)';
              (e.target as HTMLElement).style.boxShadow = '0 8px 25px rgba(255,255,255,0.15)';
            }}
          >
            ✉ vivekkumar113x@gmail.com
          </a>
          <a
            href="https://github.com/Thevivek10"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.8rem 1.8rem',
              borderRadius: '100px',
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 600,
              fontSize: '0.88rem',
              textDecoration: 'none',
              transition: 'all 0.3s',
              background: 'rgba(0,0,0,0.07)',
              color: '#ffffff',
              border: '1.5px solid rgba(0,0,0,0.12)',
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.transform = 'translateY(-3px) scale(1.03)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.transform = 'translateY(0) scale(1)';
            }}
          >
            ⌥ GitHub
          </a>
          <a
            href="https://linkedin.com/in/vivek-kumar-a43622265"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.8rem 1.8rem',
              borderRadius: '100px',
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 600,
              fontSize: '0.88rem',
              textDecoration: 'none',
              transition: 'all 0.3s',
              background: 'rgba(255,255,255,0.05)',
              color: '#d4d4d4',
              border: '1.5px solid rgba(255,255,255,0.15)',
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.transform = 'translateY(-3px) scale(1.03)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.transform = 'translateY(0) scale(1)';
            }}
          >
            in LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
