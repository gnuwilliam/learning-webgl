/** @type {WebGLRenderingContext} */
const gl = canvas.getContext('webgl');

// Vertex shader
const vshader = import('./shaders/simple_vshader.glsl');

// Fragment shader
const fshader = import('./shaders/simple_fshader.glsl');

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
