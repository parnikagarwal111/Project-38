var PLAY = 1;
var END = 0;
var gameState = PLAY;
var man,manImage;
var bgImage;
var score;

function preload(){
  manImage=loadImage("walkingman1.png");
  bgImage=loadImage("ground.png");
  coinImage=loadImage("coin.png");

 
}

function setup() {
  createCanvas(displayWidth, displayHeight);

  man=createSprite(displayWidth/2,displayHeight-100,20,100);
  man.addImage(manImage);
  man.scale=0.2;

}

function draw() {
  
  background(bgImage);
  //displaying score
 
  drawSprites();
}

