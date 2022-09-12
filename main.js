function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("experimental-webgl");
  

    var vertexShaderCode = "void main () {" + "}";
  
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);
  
    
    var fragmentShaderCode = `
          void main () {
          }
    `;
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);
  
  
    var shaderProgram = gl.createProgram(); 
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

          // coloring
    gl.clearColor(0, 0.56, 0.48, 0.0); 
  
    gl.clear(gl.COLOR_BUFFER_BIT);
  }