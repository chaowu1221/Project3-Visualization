var wordData;

function preload() {
  wordData = loadJSON("https://raw.githubusercontent.com/dariusk/corpora/master/data/words/strange_words.json");
}

function setup() {
  //first put the bit we care about in an array of its own
  var words = wordData.words;

  //look at each word in turn
  for (var i = 0; i < words.length; i++) {
    var firstLetter = words[i].substring(0, 1);
    if (firstLetter == "s") {
      createDiv(words[i])

    }
  }
}



function draw() {}
