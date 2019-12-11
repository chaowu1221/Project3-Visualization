var xArray= [];
var yArray= [];
var cArray= [];
var newRed,newGreen,newBlue;


function setup(){
  createCanvas(600,600);
  noStroke();
  for (var i = 0; i < 100; i++) {
    xArray[i]= random(width)
  }

  for (var i = 0; i < 100; i++) {
    yArray[i]= random(height)
  }
  for (var i = 0; i < 100; i++) {
    cArray[i]=color(random(255),random(255),random(255))
   }
}

function draw(){
 background(255);
  for(var i=0; i<100;i++){
    fill(cArray[i]);
    ellipse(xArray[i],yArray[i],20,20);
    xArray[i] += random(-3,3);
    yArray[i] += random(-1,1);
    newRed =red(cArray[i])+random(-13,13);
    newGreen =green(cArray[i])+random(-13,13);
    newBlue =blue(cArray[i])+random(-13,13);
    cArray[i] = color(newRed,newGreen,newBlue);

  }
}
