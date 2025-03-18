let canvas;
let angle = 0;
let x = 0;
let y = 0;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(0, 0);
  canvas.style("z-index", -2);

  angleMode(DEGREES);
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    clear();
  
  orbitControl();
  
  fill(200, 100, 40);
  strokeWeight(0.8);
  
  x += 3;
  y += 3;
  angle += 1;
  
  
  sinX = sin(x);
  cosY = cos(y);
  
  x2 = map(sinX, 0, 1, 0, 220);
  y2 = map(cosY, 0, 1, 0, 220);
  
  // Sphere-1
  push();
  // translate x, y, z
  translate(x2, x2/2, y2);
  sphere(40, 20, 20);
  pop();
  
  push();
  // translate x, y, z
  translate(-x2, -x2/2, -y2);
  sphere(60, 20, 20);
  pop();
  
  // Torus-1
  push();
  rotateZ(120);
  rotateX(angle);
  torus(100, 10, 20);
  pop();
  
  // Torus-2
  push();
  rotateZ(70);
  rotateX(angle);
  torus(330, 15, 20);
  pop();
  
  // Torus-3
  push();
  rotateZ(70);
  rotateX(angle);
  torus(390, 15, 20);
  pop();
  
//     // Torus-2
//   push();
//   translate(x2/2, 0, y2-20);
//   rotateZ(80);
//   torus(350, 15, 20);
//   pop();
  
//   // Torus-3
//   push();
//   translate(x2/2, 0, y2+20);
//   torus(350, 15, 20);
//   pop();
  
  
  
  
  //original ellipse below
  // ellipse(x2, y2, 50, 50);
  // sphere(x2, y2, height);
}