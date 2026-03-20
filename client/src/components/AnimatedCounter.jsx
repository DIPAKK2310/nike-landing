import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const parseValue = (valueStr) => {
  const number = parseFloat(valueStr.replace(/[^0-9.]/g, ''));
  if (valueStr.includes('k')) return number * 1000;
  if (valueStr.includes('M')) return number * 1000000;
  return number;
};

const formatValue = (value, original) => {
  if (original.includes('k')) return `${Math.round(value / 1000)}k+`;
  if (original.includes('M')) return `${Math.round(value / 1000000)}M+`;
  return `${Math.round(value)}+`;
};

const AnimatedCounter = ({ value }) => {
  const [count, setCount] = useState(0);
  // Ref to observe
  const ref = useRef(null)

  // Obseve if the element is in view(only once)
  const isInView = useInView(ref, {once: true});

  // New state to track has the animation started
  const [hasAnimated, sethasAnimated] = useState(false)


  useEffect(() => {
    if (isInView && !hasAnimated) {
    const target = parseValue(value);
    const duration = 2000;
    const fps = 30;
    const totalFrames = Math.round(duration / (1000 / fps));
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const current = Math.round(target * progress);
      setCount(current);
      if (frame === totalFrames) 
        clearInterval(counter);
      // Mark as animated to prevent from re-running
      sethasAnimated(true);
    }, 1000 / fps);
  }
  }, [value,isInView, hasAnimated]);

  return (
    <p ref={ref} className="text-4xl font-palanquin font-bold">
      {formatValue(count, value)}
    </p>
  );
};

export default AnimatedCounter;
