const Marquee = () => {
  const skills = [
    'React',
    '✦',
    'Node.js',
    '✦',
    'MongoDB',
    '✦',
    'Express',
    '✦',
    'Next.js',
    '✦',
    'Python',
    '✦',
    'JavaScript',
    '✦',
    'Supabase',
    '✦',
    'Tailwind',
    '✦',
    'AI / APIs',
  ];

  return (
    <div
      style={{
        overflow: 'hidden',
        margin: '4rem 0',
        zIndex: 1,
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '3rem',
          width: 'max-content',
          animation: 'marquee 20s linear infinite',
        }}
      >
        {/* First set */}
        {skills.map((item, i) => (
          <span
            key={`first-${i}`}
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: item === '✦' ? '#ffffff' : 'rgba(255,255,255,0.25)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}
          >
            {item}
          </span>
        ))}
        {/* Second set for seamless loop */}
        {skills.map((item, i) => (
          <span
            key={`second-${i}`}
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: item === '✦' ? '#ffffff' : 'rgba(255,255,255,0.25)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
