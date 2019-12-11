var xArray =[];
var yArray =[];



function setup(){
  createCanvas(600,600);
  noStroke();
  for (var i = 0; i < 100; i++)
  {
    xArray[i]= random(width);
  }

  for (var i = 0; i < 100; i++)
{
  yArray[i]= random(height);
  }
}


function draw(){

  for (var i = 0; i < 100; i++)
  {
    fill(random(255),random(255),random(255));
    ellipse(xArray[i],yArray[i],20,20);
    xArray[i] += random(5);
    yArray[i] += random(2);
    }
}
