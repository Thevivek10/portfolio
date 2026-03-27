import { useEffect, useRef } from 'react';

const ParticleCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    let particles: any[] = [];

    const colors = ['255,255,255', '200,200,200', '150,150,150', '100,100,100'];

    class Particle {
      x: number = 0;
      y: number = 0;
      r: number = 0;
      vx: number = 0;
      vy: number = 0;
      color: string = '';
      life: number = 0;
      decay: number = 0;

      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.r = Math.random() * 3 + 1;
        this.vx = (Math.random() - 0.5) * 0.25;
        this.vy = (Math.random() - 0.5) * 0.25;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.life = 1;
        this.decay = Math.random() * 0.002 + 0.001;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= this.decay;
        if (this.life <= 0 || this.x < 0 || this.x > W || this.y < 0 || this.y > H) {
          this.reset();
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.life * 0.6})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < 80; i++) {
      particles.push(new Particle());
    }

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255,255,255,${0.08 * (1 - d / 120)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, W, H);
      drawConnections();
      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default ParticleCanvas;
