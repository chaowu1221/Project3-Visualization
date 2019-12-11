// var dice1;
// var dice2;
// var dice3;
// var dice4;
// var dice5;
// var dice6;


var dice1;
var dice2;

var allDices=[];

var locX1;
var locX2;
var locY1;
var locY2;

var count=[];



function preload(){
   // dice1 =loadImage('assets/die1.png');
   // dice2 =loadImage('assets/die2.png');
   // dice3 =loadImage('assets/die3.png');
   // dice4 =loadImage('assets/die4.png');
   // dice5 =loadImage('assets/die5.png');
   // dice6 =loadImage('assets/die6.png');

  allDices =[loadImage("assets/die1.png"),loadImage("assets/die2.png"),loadImage("assets/die3.png"),loadImage("assets/die4.png"),loadImage("assets/die5.png"),loadImage("assets/die6.png")]
 }






 function setup() {
   createCanvas(800, 500);
   dice1 = allDices[int(random(6))];
   dice2 = allDices[int(random(6))];

   locX1=400;
   locX2=650;

   locY1=60;
   locY2=60;

}


function draw() {
  background(220);

  image(dice1,locX1,locY1,100);
  image(dice2,locX2,locY2,100);

  // image(dice1,400,60,100,100);
  // image(dice2,400,60,100,100);
  // image(dice3,400,60,100,100);
  // image(dice4,400,60,100,100);
  // image(dice5,400,60,100,100);
  // image(dice6,400,60,100,100);
  //
  // image(dice1,650,60,100,100);
  // image(dice2,650,60,100,100);
  // image(dice3,650,60,100,100);
  // image(dice4,650,60,100,100);
  // image(dice5,650,60,100,100);
  // image(dice6,650,60,100,100);

  fill(40, 252, 3);

   ellipse(180,110,100,100);

   fill(0);
   textSize(35);
   text('Roll',150,120);


   textSize(25);
   text('2',100,250);
   text('3',150,250);
   text('4',200,250);
   text('5',250,250);
   text('6',300,250);
   text('7',350,250);
   text('8',400,250);
   text('9',450,250);
   text('10',500,250);
   text('11',550,250);
   text('12',600,250);


fill(0);
rect(100,280,15,3);
rect(150,280,15,3);
rect(200,280,15,3);
rect(250,280,15,3);
rect(300,280,15,3);
rect(350,280,15,3);
rect(400,280,15,3);
rect(450,280,15,3);
rect(500,280,15,3);
rect(550,280,15,3);
rect(600,280,15,3);


}

// no enough time to finish count function

function mouseClicked(){

  let d = dist(mouseX,mouseY,180,110);

  if(d<50 ){

    dice1 = allDices[int(random(6))];
    dice2 = allDices[int(random(6))];

  }



  // dice1 =loadImage('assets/die1.png');
  // dice2 =loadImage('assets/die2.png');
  // dice3 =loadImage('assets/die3.png');
  // dice4 =loadImage('assets/die4.png');
  // dice5 =loadImage('assets/die5.png');
  // dice6 =loadImage('assets/die6.png');
}
