/** @type {WebGLRenderingContext} */
const gl = canvas.getContext('webgl', { preserveDrawingBuffer: true });

// Vertex shader
const vshader = `
attribute vec4 position;
void main() {
  gl_Position = position;
}
`;

// Fragment shader
const fshader = `
precision mediump float;
uniform vec4 color;
void main() {
  gl_FragColor = color;
}
`;

const program = compile(gl, vshader, fshader);

// get position, size and color of the shader
const position = gl.getAttribLocation(program, 'position');
const color = gl.getUniformLocation(program, 'color');
gl.uniform4f(color, 1, 0, 0, 1);

// prettier-ignore
const vertices = new Float32Array([
  0, 0.5, 0, // point 1
  -0.5, -0.5, 0, // point 2
  0.5, -0.5, 0 // point 3
]);

const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

// Set the clear color (black)
gl.clearColor(0.0, 0.0, 0.0, 1.0);

// Clear the canvas
gl.clear(gl.COLOR_BUFFER_BIT);
