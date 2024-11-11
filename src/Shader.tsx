import GlslCanvas from "glslCanvas";
import { useEffect, useRef } from "react";
import { config } from "./config.ts";
import fragString from "./shaders/main.frag?raw";

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

  useEffect(() => {
    const canvasNode = canvasRef.current;

    if (!canvasNode) {
      return;
    }

    const glslCanvas = new GlslCanvas(canvasNode);
    glslCanvas.load(fragString);

    const {
      shader: { images },
    } = config;
    for (const key of Object.keys(images)) {
      const src = `./shader_assets/${images[key]}`;
      glslCanvas.setUniform(`u_${key}`, src);
    }

    if (import.meta.hot) {
      import.meta.hot.accept("./shaders/main.frag", (newModule) => {
        glslCanvas.load(newModule?.default);
      });
    }

    return () => {
      glslCanvas.destroy();
    };
  });

  return (
    <div ref={containerRef} className="absolute top-0 left-0 z-0 h-full w-full">
      <canvas ref={canvasRef} />
    </div>
  );
}
