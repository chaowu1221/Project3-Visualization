  
  var myImg;
  var myFont;
  function preload(){
    myImg =loadImage('assets/bee.jpg');
    myFont = loadFont('assets/Honeybee.ttf');
  }`
function setup() {
  createCanvas(600, 600);
  noCursor();
  textFont(myFont);
  textSize(48);
  xloc =300;
  yloc =300;

}

function draw() {
  background(255);
  //image(myImg,mouseX,mouseY,40,40);
  image(myImg,xloc,yloc,40,40);
  text('I love bee', 250,500);
  xloc +=random(-2,2);
  yloc +=random(-2,2);


}
