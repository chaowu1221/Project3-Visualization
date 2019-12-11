var locY;
var velY;

function setup() {
  createCanvas(600, 600);
  textFont("Arial");
  locY =50;
  velY =5;


}

function draw() {
  background(0);
  fill(255);
  textSize(48);
  textAlign(CENTER);
  text("Design",300,locY);
  locY +=velY;
  if (locY>600 || locY <50) {
    velY = -velY;
  }


}
