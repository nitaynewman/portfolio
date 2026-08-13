import React, { useRef, useEffect } from "react";

const HEX_SIZE = 40;
const GAP = 2;
const GLOW_RADIUS = 200;
const BG = "#081b29";
const GLOW_RGB = "0, 171, 240";

export default function HexBackground() {
  const canvasRef = useRef(null);
  const targetRef = useRef({ x: -999, y: -999 });
  const currentRef = useRef({ x: -999, y: -999 });
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      targetRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const onMouseLeave = () => {
      targetRef.current = { x: -999, y: -999 };
    };

    const drawHex = (cx, cy, r) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i - Math.PI / 6;
        const x = cx + r * Math.cos(a);
        const y = cy + r * Math.sin(a);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.closePath();
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const draw = () => {
      const { width, height } = canvas;

      currentRef.current.x = lerp(
        currentRef.current.x,
        targetRef.current.x,
        0.09,
      );
      currentRef.current.y = lerp(
        currentRef.current.y,
        targetRef.current.y,
        0.09,
      );
      const { x: mx, y: my } = currentRef.current;

      // Base background
      ctx.fillStyle = BG;
      ctx.fillRect(0, 0, width, height);

      // Wide soft halo
      const halo = ctx.createRadialGradient(
        mx,
        my,
        0,
        mx,
        my,
        GLOW_RADIUS * 2.5,
      );
      halo.addColorStop(0, `rgba(${GLOW_RGB}, 0.12)`);
      halo.addColorStop(1, `rgba(${GLOW_RGB}, 0)`);
      ctx.fillStyle = halo;
      ctx.fillRect(0, 0, width, height);

      // Main sharp glow — this is what shows through the hex gaps
      const glow = ctx.createRadialGradient(mx, my, 0, mx, my, GLOW_RADIUS);
      glow.addColorStop(0, `rgba(${GLOW_RGB}, 0.92)`);
      glow.addColorStop(0.35, `rgba(${GLOW_RGB}, 0.45)`);
      glow.addColorStop(0.7, `rgba(${GLOW_RGB}, 0.12)`);
      glow.addColorStop(1, `rgba(${GLOW_RGB}, 0)`);
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      // Hex grid drawn in dark — gaps between hexes reveal the glow
      const hexW = HEX_SIZE * Math.sqrt(3);
      const rowH = HEX_SIZE * 1.5;
      const cols = Math.ceil(width / hexW) + 2;
      const rows = Math.ceil(height / rowH) + 2;

      ctx.fillStyle = BG;
      for (let row = -1; row < rows; row++) {
        const offset = row % 2 !== 0 ? hexW / 2 : 0;
        for (let col = -1; col < cols; col++) {
          const cx = col * hexW + offset;
          const cy = row * rowH;
          drawHex(cx, cy, HEX_SIZE - GAP);
          ctx.fill();
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("resize", resize);
    resize();
    draw();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
