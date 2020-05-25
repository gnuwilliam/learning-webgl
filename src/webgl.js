// General method to compile basic shaders and return a program
compile = (gl, vshader, fshader) => {
  // Compile vertex shader
  const vs = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vs, vshader);
  gl.compileShader(vs);

  // Compile fragment shader
  const fs = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fs, fshader);
  gl.compileShader(fs);

  // Create WebGL program and use it
  const program = gl.createProgram();
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  gl.useProgram(program);

  // Log compilation errors, if any
  console.log('vertex shader ', gl.getShaderInfoLog(vs) || 'OK');
  console.log('fragment shader ', gl.getShaderInfoLog(fs) || 'OK');
  console.log('program ', gl.getProgramInfoLog(program) || 'OK');

  return program;
};
