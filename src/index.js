/** @type {WebGLRenderingContext} */
const gl = canvas.getContext('webgl');

// Vertex shader
const vshader = `
// make attributes accesible externally
attribute vec4 position;
attribute float size;
void main() {
  // set vertex position: vec4(x, y, z, 1.0)
  gl_Position = position;

  // point size in pixels: float
  gl_PointSize = size;
}
`;

// Fragment shader
const fshader = `
precision mediump float;
uniform vec4 color;

void main() {
  // set fragment color: vec4(r, g, b, alpha)
  gl_FragColor = color;
}
`;

const program = compile(gl, vshader, fshader);

// get position, size and color of the shader
const position = gl.getAttribLocation(program, 'position');
const size = gl.getAttribLocation(program, 'size');
const color = gl.getUniformLocation(program, 'color');

// Set the clear color (black)
gl.clearColor(0.0, 0.0, 0.0, 1.0);

// Clear the canvas
gl.clear(gl.COLOR_BUFFER_BIT);

setInterval(() => {
  const x = Math.random() * 2 - 1;
  const y = Math.random() * 2 - 1;

  const r = Math.random();
  const g = Math.random();
  const b = Math.random();

  gl.clear(gl.COLOR_BUFFER_BIT);

  gl.vertexAttrib3f(position, x, y, 0);
  gl.vertexAttrib1f(size, 10);
  gl.uniform4f(color, r, g, b, 1);

  gl.drawArrays(gl.POINTS, 0, 1);
}, 500);
