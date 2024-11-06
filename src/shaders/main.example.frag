#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main() {
    float r = 0.7 + 0.1 * sin(u_time * 0.5 + 0.0);
    float g = 0.7 + 0.1 * sin(u_time * 0.5 + 2.0);
    float b = 0.7 + 0.1 * sin(u_time * 0.5 + 4.0);

    gl_FragColor = vec4(r, g, b, 1.0);
}
