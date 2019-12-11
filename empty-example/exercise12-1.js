var bartData;
var train1min,train2min,train3min;
var url;

function setup(){
  createCanvas(600,600);
  url = "http://api.bart.gov/api/etd.aspx?cmd=etd&orig=HAYW&key=MW9S-E7SL-26DU-VV8V&json=y";
  getBart();
  textSize(12)
  }
function getBart(){
  loadJSON(url,gotData)
}
function gotData(data){
  bartData=data
}

function draw(){
background(0);
fill(255);
if(bartData){
  train1min = bartData.root.station[0].etd[0].estimate[0].minutes;
  if(train1min<10)
  {
    fill(255,0,0)
  }
  if(train1min<20&&train1min>10)
  {
    fill(255,255,0)
  }
  if(train1min<60&&train1min>20)
  {
    fill(0,255,0)
  }
  text(train1min,100,50);

  rect(100,300,50,train1min*10);



train2min = bartData.root.station[0].etd[0].estimate[1].minutes;
if(train2min<10)
{
  fill(255,0,0)
}
if(train2min<20&&train2min>10)
{
  fill(255,255,0)
}
if(train2min<60&&train2min>20)
{
  fill(0,255,0)
}

text(train1min,100,50);

rect(100,300,50,train2min*10);


train3min = bartData.root.station[0].etd[0].estimate[2].minutes;
if(train3min<10)
{
  fill(255,0,0)
}
if(train3min<20&&train3min>10)
{
  fill(255,255,0)
}
if(train3min<60&&train3min>20)
{
  fill(0,255,0)
}
text(train3min,100,50);
rect(100,300,50,train3min*10);
}
}

function mousePressed(){

}
