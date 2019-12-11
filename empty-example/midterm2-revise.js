var dice=[];
var ranNum1, ranNum2;
var rolls =[];
function preload(){
  dice =[loadImage("assets/die1.png"),loadImage("assets/die2.png"),loadImage("assets/die3.png"),loadImage("assets/die4.png"),loadImage("assets/die5.png"),loadImage("assets/die6.png")]
 }


 function setup() {
   createCanvas(600, 600);
   fill(0,255,0);
   ellipse(200,200,100,100);
   fill(0);
   textSize(35);
   text('Roll',165,210);
   image(dice[5],350,160);
   image(dice[5],500,160);
   textSize(16);


   for (var i = 2; i <= 12; i++) {
     text (i,i*50-50,350);
     rolls[i]=0;

}
}
function draw() {

}

function mouseClicked(){

  if(dist(mouseX,mouseY,200,200)<50 ){

    ranNum1 = int(random(6));
    ranNum2 = int(random(6));
    image(dice[ranNum1],350,160);
    image(dice[ranNum2],500,160);
    rolls[ranNum1+ranNum2+2]++;
  }


     for (var i = 2; i <= 12; i++) {
       rect(i * 50 -65, 400,50,rolls[i]*5);
  }


}
