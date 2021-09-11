var canvas, backgroundImage;
var PLAY=1;
var END=0;
var gameState = 0;
var start;
var girlImg, corona;

var bg1_img, bg2_img, bg3_img, bg4_img;

var bg1, bg2, bg3, bg4, displaybg;

var player, zombie;

function preload(){
  displaybg=loadImage("images/gamebg.jpg");
  //begin_img=loadImage("images/startbutton.png");
  bg1_img = loadImage("images/gameimg1.jpg");
  /*bg2_img = loadImage("images/gameimg2.jpg");
  bg3_img = loadImage("images/gameimg3.jpg");
  bg4_img = loadImage("images/gameimg4.jpg");
  girlImg=loadAnimation("images/girl1.png", "images/girl2.png","images/girl3.png","images/girl5.png", "images/girl6.png", "images/girl7.png","images/girl8.png")
  zombie= loadImage("images/zombie.png")*/
}


function setup(){
  createCanvas(displayWidth - 20, displayHeight-120);

  bg0=createSprite(width/2, height/2, displayWidth-20, displayHeight-120)
  bg0.addImage(displaybg)
  bg0.scale=1;

  bg1=createSprite(width/2, height/2, displayWidth, displayHeight)
  bg1.addImage(bg1_img)
  bg1.scale=0.8;
  bg1.visible=false;

  /*bg2=createSprite(width/2, height/2, displayWidth, displayHeight)
  bg2.addImage(bg2_img)
 
  bg3=createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight)
  bg3.addImage(bg3_img)

  bg4=createSprite(width/2, height/2, displayWidth, displayHeight)
  bg4.addImage(bg4_img)

  player=createSprite(350, displayHeight-250)
  player.addAnimation("girlmg", girlImg);
  player.scale= 2.3;

  virus= createSprite(120, displayHeight-250)
  virus.addImage(zombie)*/

  //create start button
  start=createButton("Click here to start the game");
  start.position(600, 500);
}  



function draw(){

  if(mousePressedOver(start)){
    //gameState=1;
    //backgroungImage.changeImage(bg1);
    bg1.visible=true;
  }

  drawSprites()
}

