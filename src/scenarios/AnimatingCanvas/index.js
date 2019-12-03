import React, { useEffect, useRef, useState } from 'react';
import { useAnimationFrame } from './utils';

const AnimatedCanvas = () => {
  const [count, setCount] = useState(0)
  const [wc,] = useState(600);
  const [hc,] = useState(600);
  const ref = useRef();
  const [direction, setDirection] = useState(1);
  const [angle, setAngle] = useState(0.2);
  useAnimationFrame(time => {
    setCount(prevCount => prevCount + time * angle * direction)
  });

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0,0, wc, hc);
    ctx.beginPath();
    ctx.arc(count,250, 50, 0, Math.PI * 2, false);
    ctx.strokeStyle = 'red';
    ctx.stroke();
  }, [count]);


  return (
    <div>
      <canvas ref={ref} width={wc} height={hc} />
    </div>
  );
}

export default AnimatedCanvas;
