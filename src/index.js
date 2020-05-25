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

// Get/Set the position value
const position = gl.getAttribLocation(program, 'position');
gl.vertexAttrib4f(position, 0, 0, 0, 1);

// Get/Set the size value
const size = gl.getAttribLocation(program, 'size');
gl.vertexAttrib1f(size, 10);

// Get/Set the color uniform
const color = gl.getUniformLocation(program, 'color');
gl.uniform4f(color, 1, 0, 0, 1);

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
