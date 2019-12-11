var tempNum;


function setup(){
  createCanvas(600,600);

}

function draw(){
  var myCube =cubeIt(2);
  // tempNum =random(10);
  // myRanNum(tempNum);
text(myCube,300,300)


}

function cubeIt(myNum){
  var daCube =myNum*myNum*myNum;
  return(daCube);
}
