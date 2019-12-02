import React, { useEffect, useRef, useState } from 'react';
import './styles.css';
const CanvasResize = () => {
  const [wc, setWc] = useState(600);
  const [hc, setHc] = useState(600);
  const ref = useRef();
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');

    // Line
    ctx.beginPath();
    ctx.moveTo(30, 300)
    ctx.lineTo(100, 200)
    ctx.strokeStyle = '#aaa';
    ctx.stroke()

    // arc/ circle
    ctx.beginPath();
    ctx.arc(250,250, 50, 0, Math.PI * 2, false)
    ctx.stroke()

  }, []);

  return (
    <div>
      <canvas ref={ref} width={wc} height={hc} />
    </div>
  );
}

export default CanvasResize;
