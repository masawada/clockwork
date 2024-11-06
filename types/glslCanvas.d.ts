declare module 'glslCanvas' {
  export default class glslCanvas {
    constructor(canvas: HTMLCanvasElement, canvasOptions?: unknown, options?: unknown);
    load(fragString?: string, vertString?: string): void;
    destroy(): void;
  }
}
