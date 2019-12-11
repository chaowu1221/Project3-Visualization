var birdData;

function setup() {
  createCanvas(600, 600);
  // loadJSON("https://raw.githubnusercontent.com/dariusk/corpora/blob/master/data/animals/birds_antarctica.json", gotData)
  loadJSON("https://raw.githubusercontent.com/dariusk/corpora/master/data/animals/birds_antarctica.json", gotData)

  // var birds = birdData.birds;

  // for (var i = 0; i < birds.length; i++) {
  //   createElement('h1', birds[i].family);
  //   var members = birds[i].members;
  //   for (var j = 0; j < members.length; j++) {
  //     createDiv(members[j])
  //   }
  // }
}

function gotData(data) {
  birdData = data

}


function draw() {
background(0);
fill(255);
// ellipse(44,300,50,50);
if (birdData) {
  text(birdData.birds[5].members[4],200,300)
}
}
