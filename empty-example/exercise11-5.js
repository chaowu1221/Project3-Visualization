var birdData;

function setup() {
  createCanvas(600, 600);
  loadJSON("https://raw.githubusercontent.com/dariusk/corpora/master/data/words/strange_words.json", gotData)

}

function gotData(data) {
  birdData = data

}


function draw() {
if(!birdData){
  return;
}
var birds =birdData.birds;
for (var i = 0; i < birds.length; i++) {
  createElement('h1',birds[i].family);
  var members = birds[i].members;
  for (var m = 0; m < members.length; m++) {
    createDiv(members[m]);
  }
}


}
