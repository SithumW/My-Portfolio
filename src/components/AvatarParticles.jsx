import { useEffect, useRef } from "react";

export default function AvatarParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle class
    class Particle {
      constructor(targetX, targetY) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 1250;
        
        this.x = targetX + Math.cos(angle) * radius;
        this.y = targetY + Math.sin(angle) * radius;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 1 + 0.5;
        this.color = "rgba(255, 107, 53, 0.7)";
        this.life = 1;
      }

      update(targetX, targetY) {
        const dx = targetX - this.x;
        const dy = targetY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 20) {
          this.life = 0;
          return;
        }

        const angle = Math.atan2(dy, dx);
        this.vx += Math.cos(angle) * 0.1;
        this.vy += Math.sin(angle) * 0.05;

        this.vx *= 0.98;
        this.vy *= 0.98;

        this.x += this.vx;
        this.y += this.vy;
      }

      draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.life;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      }
    }

    let particles = [];

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Find avatar video in Home section
      const homeSection = document.getElementById("home");
      const avatarElement = homeSection ? homeSection.querySelector("video") : null;
      
      if (avatarElement && homeSection) {
        const homeRect = homeSection.getBoundingClientRect();
        
        // Only render if Home section is visible
        if (homeRect.top < window.innerHeight && homeRect.bottom > 0) {
          const imgRect = avatarElement.getBoundingClientRect();
          
          // POSITION ADJUSTMENT - Modify these values to move the particle center:
          // avatarX controls horizontal position (left=0, right=1)
          // avatarY controls vertical position (top=0, bottom=1)
          // For gem center on chest, adjust the divisors:
          const avatarX = imgRect.left + imgRect.width / 1.9;      // Horizontal: width/2 = center
          const avatarY = imgRect.top + imgRect.height / 2.8;    // Vertical: Change 2.8 to adjust height (smaller = higher, larger = lower)

          // Spawn new particles
          if (Math.random() < 0.5) {
            for (let i = 0; i < 2; i++) {
              particles.push(new Particle(avatarX, avatarY));
            }
          }

          // Update and draw particles
          particles = particles.filter((p) => p.life > 0);
          particles.forEach((p) => {
            p.update(avatarX, avatarY);
            p.draw(ctx);
          });
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 20 }}
    />
  );
}
