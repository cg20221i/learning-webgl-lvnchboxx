function main() {
  //get the element
  //get context is for adding the library webgl into outcode
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("experimental-webgl");
  // vertecies

    var vertices = `
    [1.0, 1.0, 0.5, 0.5, 0.0, 0.0, -0.5, -0.5 ];

      // create a linkedlist for storingthe vertecies in gpu
      var buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertecies), gl.STATIC_DRAW); // allocation
      `;
      
// vertex shader
    var vertexShaderCode = `
    attribute vec2 aPosition; 
    void main  (){
    gl_PointSize = 30.0;
    gl_Position = vec4(aPosition, 0.0, 1.0);
    }
    `;


    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);
    
    var fragmentShaderCode = `
          precision mediump float;
          void main () {
            gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);
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

    //teach how to       

    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);  
    
    gl.enableVertexAttribArray(aPosition);

          // coloring the canvas
    gl.clearColor(1.0, 0.56, 0.64, 1.0); 
  
    gl.clear(gl.COLOR_BUFFER_BIT);
    //drawing dot
      gl.drawArrays(gl.TRIANGLES_FAN, 0, 4);




  }