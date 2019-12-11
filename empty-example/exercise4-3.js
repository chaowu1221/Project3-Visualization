var x1;
var direction;

function setup() {
  // put setup code here
  createCanvas(600,600);
x1 = 50;
direction = 5;
}

function draw() {
  // put drawing code here
background(255);
fill(128);
ellipse(x1,300,50,50);
x1 += direction;
if (x1>550 || x1<50) {
direction = -direction;
}

}
