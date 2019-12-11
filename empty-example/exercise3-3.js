function setup() {
  // put setup code here
  createCanvas(600,600)

}

function draw() {
  // put drawing code here
background(0);
if (mouseX>250 && mouseX<350 &&mouseY>250&&mouseY<350 && mouseIsPressed)
{
fill(250,0,0);
rect(250,250, 100, 100)
}else {
 fill(0,0,250);
  rect(250,250, 100, 100)

//monthod 2
}
}


//function mousePressed()
//{
  //background(0);

//  if (mouseX>250 && mouseX<350 &&mouseY>250&&mouseY<350{
  //  fill(250,0,0);
    //rect(250,250, 100, 100)

  //}else {
    //fill(0,0,255);
    //rect(250,250, 100, 100)
  //}
//}
