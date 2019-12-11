// Art356-Project2
// By Chao Wu

var video;
var yolo;
var status;
var objects=[];


function preload(){
  bar =loadImage('project2 assets/status bar.png');
  logo=loadImage('project2 assets/icon.png');
  font=loadImage('project2 assets/logo_font.png');
  scan=loadImage('project2 assets/scan.png');
  tip=loadImage('project2 assets/tips.png');
  log=loadImage('project2 assets/log.png');
  scanbutton=loadImage('project2 assets/scanbutton.png');
  album=loadImage('project2 assets/image.png');
  historybutton=loadImage('project2 assets/history.png');
  backbutton=loadImage('project2 assets/back.png');

}


function setup() {
  // put setup code here
  createCanvas(375,700);
  background(52, 138, 61);
  // video = createCapture(VIDEO);
  // video.size(200,200);
  // yolo=ml5.YOLO(video);
  // video.hide();

  image(bar,0,0,375,20);
  image(logo,80,80,200,200);
  image(font,10,280,350,200);
  image(scan,50,560,60,60);
  image(tip,150,560,60,60);
  image(log,260,560,50,50);

  fill(255);
  textSize(15);
  text('Scan',62,640);
  text('Tips',168,640);
  text('Log',268,640);

}
// function changePG(){
//
// }
function draw() {
  // put drawing code here

}

function mousePressed(){
  let s = dist(mouseX,mouseY,50,560);
  // let b = dist(mouseX,mouseY,10,560);
  // let c = dist(mouseX,mouseY,120,560);
  let t = dist(mouseX,mouseY,150,560);
  let l = dist(mouseX,mouseY,260,560);


  if(s<50){
    // if(mouseX,mouseY,50,560){
    // createCanvas(375,700);

    background(181, 207, 184);
    image(bar,0,0,375,20);
    image(scanbutton,120,560,100,100);
    image(album,30,600,40,40);
    image(historybutton,260,595,50,50);
    image(backbutton,10,40,50,50);
}
// }if (c<100) {
//   image(video,100,120);
// }
// if (b<80) {
//   // createCanvas(375,700);
//   background(52, 138, 61);
//   image(bar,0,0,375,20);
//   image(logo,80,80,200,200);
//   image(font,10,280,350,200);
//   image(scan,50,560,60,60);
//   image(tip,150,560,60,60);
//   image(log,260,560,50,50);
//
//   fill(255);
//   textSize(15);
//   text('Scan',62,640);
//   text('Tips',168,640);
//   text('Log',268,640);
//
// }
if (t<50) {
  background(181, 207, 184);
  image(bar,0,0,375,20);

  fill(32,122,41);
  rect(0,30,375,70);
  fill(255);
  textSize(30);
  text('Did You Know?',90,75);
  image(backbutton,10,40,50,50);

  fill(232, 250, 234);
  rect(15,190,335,200);
  fill(0);
  textSize(25);
  text('Recycle At Home',75,220);
  textSize(20);
  text('Recycling Tip #13',95,260);
  textSize(15);
  text('Glass can be recycled endlessly',45,300);

}
else if (l<50) {
  background(181, 207, 184);
  image(bar,0,0,375,20);
  image(backbutton,10,40,50,50);

  fill(32,122,41);
  rect(0,30,375,60);
  fill(255);
  textSize(35);
  text('Logbook',62,140);
  fill(0);
  textSize(15);
  text('Click the "+" button to add your recycling log',62,80);
  fill(32,122,41);
  rect(0,30,375,30);
  fill(52,138,61);
  textSize(25);
  text('October 2019',112,140);
}

}
