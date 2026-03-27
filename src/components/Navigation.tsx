import { useEffect, useState } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '1.4rem 3rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backdropFilter: 'blur(20px)',
        background: 'rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        boxShadow: isScrolled ? '0 4px 40px rgba(255,255,255,0.05)' : 'none',
        transition: 'box-shadow 0.3s',
      }}
    >
      <div
        style={{
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 800,
          fontSize: '1.25rem',
          background: 'linear-gradient(135deg, #ffffff, #d4d4d4)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '-0.02em',
        }}
      >
        VK
      </div>
      <ul
        style={{
          display: 'flex',
          gap: '2.5rem',
          listStyle: 'none',
        }}
      >
        {['About', 'Skills', 'Projects', 'Certifications', 'Contact'].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              style={{
                fontSize: '0.875rem',
                fontWeight: 500,
                letterSpacing: '0.04em',
                color: '#9ca3af',
                textDecoration: 'none',
                textTransform: 'uppercase',
                position: 'relative',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = '#9ca3af';
              }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
