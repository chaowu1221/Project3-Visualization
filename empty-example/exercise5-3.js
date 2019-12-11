var score;

function setup() {
  createCanvas(600, 600);
  textFont("Arial");
  score = 0;


}

function draw() {
  background(0);
  textSize(48);
  textAlign(CENTER);
  rectMode(CENTER);

  fill(255,0,0);
  rect(250,290,150,70);
  fill(255);

  text(score,400,300);
  text("Score",250,300);
}


function mousePressed(){
  if (mouseX>175 && mouseX<325 && mouseY>250 &&mouseY<330) {
    score++;
  }
}
