var table;
var now = 1;
// let img1;
// let img2;

let input,button;


function preload() {
  // img1 =loadImage('assets/weight.png');
  // img2 =loadImage('assets/bmi.png');

  table = loadTable("https://raw.githubusercontent.com/chaowu1221/visualization-data/master/fitness%20traker.csv","header")
}

function setup() {
  createCanvas(1200, 800);
  stroke(255);
  saveTable(table, 'https://raw.githubusercontent.com/chaowu1221/visualization-data/master/fitness%20traker.csv');

}


function draw(){
  background(137, 178, 224);
  fill(255);
  stroke(5);

  ellipse(50,80,50,50);
  ellipse(150,80,50,50);
  ellipse(250,80,50,50);
  ellipse(350,80,50,50);
  ellipse(450,80,50,50);
  ellipse(550,80,50,50);
  ellipse(650,80,50,50);

  noStroke();

  ellipse(1000,60,40,40);
  textSize();

  text("Hello,Chao",1080,60);



  // rect(25,730,45,20);
  // rect(135,730,45,20);
  // rect(255,730,45,20);
  // rect(375,730,45,20);
  // rect(505,730,45,20);
  // rect(630,730,45,20);
  // rect(745,730,45,20);
  // rect(865,730,45,20);

  fill(0, 102, 153, 51);
  textSize(40);

  stroke(5);

  text("Click mouse to switch daily measurement",400,345);

  // image(img1,35,700,20,20);
  // image(img2,135,700,20,20);


noStroke();

fill(177, 181, 174);

// rect(900,170,200,200);



  // fill(0);
  // textSize(15);
  // text("Add",45,745);
  // text("Add",155,745);
  // text("Add",275,745);
  // text("Add",395,745);
  // text("Add",525,745);
  // text("Add",650,745);
  // text("Add",765,745);
  // text("Add",885,745);

  textSize(12);


//
// text("Type your current weight number",1000,200);
//
// input = createInput();
//   input.position(920, 255);
//
//   button = createButton('confirm');
//   button.position(input.x + input.height, 295);
//

//
//   textSize(15);
// text("cm",1070,270);




  fill(255,56,123);
  textSize(35);


  translate(-25,0);
  for (var i =  1; i < 9; i++) {


    var n = table.getString(now-1,i);
    console.log(n);
    var w =n;
    textSize(15);
    noStroke();
    text(n,i*125-60,550-w);
    rect(i*120-60,580-w,35,w*2);


}

translate(25,0);
noStroke();
fill(255);
textSize(15);
textAlign(CENTER);
text("Monday",50,140);
text("Tuesday",150,140);
text("Wednesday",250,140);
text("Thusday",350,140);
text("Friday",450,140);
text("Saturday",550,140);
text("Sunday",650,140);


textSize(16);
text("Weight(kg)",50,660);
text("BMI",165,660);
text("Body Fat(%)",280,660);
text("Skeletal Muscle",410,660);
text("Body Water(%)",540,660);
text("Muscle Mass(kg)",660,660);
text("Protein(%)",770,660);
text("Bone Mass(kg)",880,660);

fill(255,56,123);
ellipse(50+(now-1)*100,165,12,12);

stroke(255);
for (var i = 0; i < 90; i++) {
  point(random(900),random(700));
}
fill(255,255,255);

text('Body Scale Tracker',405,790);

}

function mousePressed(){
  now++;
  if(now>7)
  now=1;

}
