var fungiData;


function setup(){
  createCanvas(600, 600);

loadJSON("http://raw.githubusercontent.com/grhabyt/final19/master/edible_fungi_1.json", gotData)

}

function gotData(data){
  fungiData = data
}


function draw(){
  background(255);
  fill(0);
  textSize(30);
  text("Tan Mashrooms are:",100,100);


if(fungiData){

  textSize(24);

  text(fungiData.members[3].common_name[3],200,100);
  text(fungiData.members[3].common_name[4],300,100);
  text(fungiData.members[5].common_name[4],400,100);
  text(fungiData.members[6].common_name[3],500,100)


}
}
