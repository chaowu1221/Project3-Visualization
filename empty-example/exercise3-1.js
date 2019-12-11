function setup() {
  // put setup code here
  createCanvas(600,600)

}

function draw() {
  // put drawing code here
background(255,40);
noStroke();
noCursor();
fill(random(255),random(255),random(255));
rect(mouseX, mouseY, 50, 50)

}
