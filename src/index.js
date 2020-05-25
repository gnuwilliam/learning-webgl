/** @type {WebGLRenderingContext} */
const gl = canvas.getContext('webgl');

// Vertex shader
const vshader = `
void main() {
  // set vertex position: vec4(x, y, z, 1.0)
  gl_Position = vec4(0.0, 0.0, 0.0, 1.0);

  // point size in pixels: float
  gl_PointSize = 10.0;
}
`;

// Fragment shader
const fshader = `
precision mediump float;

void main() {
  // set fragment color: vec4(r, g, b, alpha)
  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}
`;

const program = compile(gl, vshader, fshader);

// Set the clear color (black)
gl.clearColor(0.0, 0.0, 0.0, 1.0);

// Clear the canvas
gl.clear(gl.COLOR_BUFFER_BIT);

// Draw points
gl.drawArrays(
  gl.POINTS, // mode
  0, // starting point
  1 // number of points to draw
);
