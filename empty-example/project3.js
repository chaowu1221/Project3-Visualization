var table;
var tilesSize =900;
var now = 1;

function preload() {
  table = loadTable("https://raw.githubusercontent.com/chaowu1221/visualization-data/master/astro.csv","header")
}

function setup() {
  createCanvas(800, 800);
  stroke(255);
}


function draw(){
  background(0);
  fill(255);
  stroke(5);

  ellipse(50,80,20,20);
  ellipse(150,80,30,30);
  ellipse(250,80,40,40);
  ellipse(350,80,30,30);
  ellipse(450,80,90,90);
  ellipse(550,80,80,80);
  ellipse(650,80,50,50);
  ellipse(750,80,60,60);
  fill(255,56,123);
  textSize(35);


  translate(-25,0);
  for (var i =  1; i < 9; i++) {

    var n = table.getString(now-1,i);
    console.log(n);
    var w =n;
    textSize(12);
    noStroke();
    text(n,i*95-40,600-w);
    rect(i*95-40,600-w,55,w);
}

translate(25,0);
noStroke();
fill(255);
textSize(15);
textAlign(CENTER);
text("Mercury",50,140);
text("Venu",150,140);
text("Earth",250,140);
text("Mars",350,140);
text("Jupiter",450,140);
text("Saturn",550,140);
text("Uranus",650,140);
text("Neptune",750,140);


textSize(12);
text("Equator(km)",40,640);
text("Oblateness",140,640);
text("Mass",240,640);
text("Density",340,640);
text("Escape Velocity",440,640);
text("Rotation period",540,640);
text("Yellow red angle",640,640);
text("Albedo",730,640);

fill(255,56,123);
ellipse(50+(now-1)*100,165,18,18);


textSize(32);
fill(255,255,255);

text('Planet Information',405,720);

}

function mousePressed(){
  now++;
  if(now>8)
  now=1;
}
