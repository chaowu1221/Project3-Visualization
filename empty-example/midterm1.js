
var balloon1;
var balloon2;
var balloon3;

var x;
var y;
var x2;
var y2;
var x3;
var y3;
var direction;

function preload(){
  balloon1 =loadImage('assets/2.png');
  balloon2 =loadImage('assets/3.png');
  balloon3 =loadImage('assets/4.png');

}


function setup() {
  // put setup code here
  createCanvas(600,600);
y1 = random(400);
y2 = random(400);
y3 = random(400);

x1 = random(400);
x2 = random(400);
x3 = random(400);


direction = 3;
}

function draw() {
  // put drawing code here
  background(220);

image(balloon1,x1,y1,80,100);
image(balloon2,x2,y2,80,100);
image(balloon3,x3,y3,80,100);


y1 += direction;
if (y1>580 || x1<50) {
  direction = -10;
}

y2 += direction;
if (y2>380 || y2<50) {
  direction = -10;
}

y3 += direction;
if (y3>380 || y3<50) {
  direction = -10;
}
}
