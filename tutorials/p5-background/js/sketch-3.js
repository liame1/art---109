// Patt Vira for-loop tutorial

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  
  for (let i=0; i<6; i++){
    strokeWeight(0);
    fill(255*(i/3), 255*(i/5), 255*(i/5));
    // fill(255*(i/5), 255*(i/5), 255*(i/5));
    ellipse(width/2, height/2, 300-(i*50), 300-(i*50));
  }
}