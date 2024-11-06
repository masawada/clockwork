import { useEffect, useRef } from "react";

const resizeCanvas = (
  canvas: HTMLCanvasElement,
  container: HTMLDivElement,
): void => {
  canvas.width = container.clientWidth;
  canvas.height = container.clientHeight;
  canvas.style.width = `${container.clientWidth}px`;
  canvas.style.height = `${container.clientHeight}px`;
};

export default function Shader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvasNode = canvasRef.current;
    const containerNode = containerRef.current;

    if (!canvasNode || !containerNode) {
      return;
    }

    resizeCanvas(canvasNode, containerNode);

    const handler = () => {
      if (
        canvasNode.width !== containerNode.clientWidth ||
        canvasNode.height !== containerNode.clientHeight
      ) {
        resizeCanvas(canvasNode, containerNode);
      }
    };

    window.addEventListener("resize", handler);

    return () => {
      window.addEventListener("resize", handler);
    };
  });

  return (
    <div ref={containerRef} className="absolute top-0 left-0 z-0 h-full w-full">
      <canvas ref={canvasRef} />
    </div>
  );
}
