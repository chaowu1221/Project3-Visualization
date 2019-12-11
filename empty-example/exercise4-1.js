var x1;

function setup() {
  // put setup code here
  createCanvas(400,400);
x1=-50;
}

function draw() {
  // put drawing code here
background(255);
fill(128);
ellipse(x1,300,50,50);
x1++;
if (x1>600) {
  x1=-50;
}

}
