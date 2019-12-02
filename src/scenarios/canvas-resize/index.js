import React, { useEffect, useRef, useState } from 'react';
import './styles.css';
const CanvasResize = () => {
  const [wc, setWc] = useState(600);
  const [hc, setHc] = useState(600);
  const ref = useRef();
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');

    ctx.fillRect(0,0, 100, 100);
    ctx.fillRect(100,100, 100, 100);
    ctx.fillRect(200,200, 100, 100);
    ctx.fillRect(300,300, 100, 100);
    ctx.fillRect(400,400, 100, 100);
    ctx.fillRect(500,500, 100, 100);


  }, []);

  return (
    <div>
      <canvas ref={ref} width={wc} height={hc} />
    </div>
  );
}

export default CanvasResize;
