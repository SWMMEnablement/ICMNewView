import { useEffect, useRef } from "react";
import p5 from "p5";

interface P5SketchProps {
  sketch: (p: p5) => void;
  className?: string;
  "data-testid"?: string;
}

export default function P5Sketch({ sketch, className, "data-testid": testId }: P5SketchProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const instance = new p5(sketch, containerRef.current);
    return () => instance.remove();
  }, [sketch]);

  return <div ref={containerRef} className={className} data-testid={testId} />;
}
