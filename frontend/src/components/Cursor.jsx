import { useEffect, useRef } from "react";

export const Cursor = () => {
  const dotRef = useRef(null);
  const glowRef = useRef(null);
  const particles = useRef([]);
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -100, y: -100 });
  const glowPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const palette = ["216,180,226", "180,210,226", "226,206,180", "190,226,190"];

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      for (let i = 0; i < 2; i++) {
        particles.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 1.6,
          vy: (Math.random() - 0.5) * 1.6 - 0.4,
          life: 1,
          size: Math.random() * 3.5 + 1.5,
          color: palette[(Math.random() * palette.length) | 0],
        });
      }
      if (particles.current.length > 120) particles.current.splice(0, particles.current.length - 120);
    };

    const onClick = (e) => {
      for (let i = 0; i < 24; i++) {
        const a = (Math.PI * 2 * i) / 24;
        particles.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(a) * (Math.random() * 4 + 2),
          vy: Math.sin(a) * (Math.random() * 4 + 2),
          life: 1,
          size: Math.random() * 4 + 2,
          color: palette[(Math.random() * palette.length) | 0],
        });
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("click", onClick);

    let raf;
    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current = particles.current.filter((p) => p.life > 0.02);
      for (const p of particles.current) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.02;
        p.life *= 0.94;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${p.life * 0.8})`;
        ctx.fill();
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.current.x - 4}px, ${mouse.current.y - 4}px)`;
      }
      glowPos.current.x += (mouse.current.x - glowPos.current.x) * 0.12;
      glowPos.current.y += (mouse.current.y - glowPos.current.y) * 0.12;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${glowPos.current.x - 110}px, ${glowPos.current.y - 110}px)`;
      }
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="fixed inset-0 z-[90] pointer-events-none" />
      <div
        ref={glowRef}
        className="fixed top-0 left-0 z-[89] pointer-events-none hidden md:block"
        style={{
          width: 220,
          height: 220,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(216,180,226,0.28) 0%, rgba(180,210,226,0.14) 45%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[95] pointer-events-none hidden md:block"
        style={{ width: 8, height: 8, borderRadius: "50%", background: "#1A1A1A" }}
      />
    </>
  );
};
