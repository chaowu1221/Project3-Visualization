var xArray =[];
var yArray =[];



function setup(){
  createCanvas(600,600);
  noStroke();
}


function draw(){
  for (var i = 0; i < 100; i++)
  {
    xArray[i]= random(width);
  }

  for (var i = 0; i < 100; i++)
{
  yArray[i]= random(height);
  }

  for (var i = 0; i < 100; i++)
  {
    fill(random(255),random(255),random(255));
    ellipse(xArray[i],yArray[i],20,20);
    }
}
