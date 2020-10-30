var database;
var gamestate = 0;
var playercount;
var form,game,player;
var allplayers;
var distance=0;
var car1,car2,car3,car4;
var cars;

function setup(){
  database = firebase.database();
  createCanvas(displayWidth - 20,displayHeight - 20);
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  if(playercount === 4){
    game.update(1);
}
  if(gamestate === 1){
    clear();
    game.play();
  }
}