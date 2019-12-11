var balloon1,balloon2,balloon3;
var locX1, locX2,locX3;
var locY1, locY2,locY3;
var vY1,vY2,vY3;
var myString;
var myArray;
var myFileName;


function setup() {
    createCanvas(600, 600);
  //   myString =nf(int(random(1,9)));
  //   myArray =["assets/",myString,".png"];
  //   myFileName =join(myArray,"");
  // balloon1 = loadImage(myFileName);
  balloon2 = loadImage("assets/2.png");
  balloon3 = loadImage("assets/3.png");
  locX1=random(width);
  locX2=random(width);
  locX3=random(width);
    locY1=601;
    locY2=601;
    locY3=601;
  vY1=random(4,12);
  vY2=random(4,12);
  vY3=random(4,12);

}

function draw() {
  background(255);
image(balloon1,locX1,locY1);
image(balloon2,locX2,locY2);
image(balloon3,locX2,locY3);
  locY1 -= vY1;
  locY2 -= vY2;
  locY3 -= vY3;

  if(locY1<0){
    locY1=0
  }
    if(locY2<0){
    locY2=0
  }
    if(locY3<0){
    locY3=0
  }

}

function mousePressed(){
  // myString =nf(int(random(1,9)));
  // myArray =["assets/",myString,".png"];
  // myFileName =join(myArray,"");
  // balloon1 = loadImage(myFileName);
  balloon2 = loadImage("assets/2.png");
  balloon2 = loadImage("assets/3.png");

  locX1 = random(width);
  locX2 = random(width);
  locX3 = random(width);
  locY1 = 601;
  locY2 = 601;
  locY3 = 601;
  vY1 = random(4,12);
  vY2 = random(4,12);
  vY3 = random(4,12);




}
