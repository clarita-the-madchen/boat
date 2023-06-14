var mar, marIMG
var barco, barcoIMG


function preload(){
marIMG = loadImage("sea.png")
barcoIMG = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  mar = createSprite(100,100);
  mar.velocityX = -2
  mar.addImage(marIMG)
  barco = createSprite(200,200);
  barco.addAnimation("boat",barcoIMG)
  barco.scale = 0.2
}

function draw() {
  background("blue");
    drawSprites();
if (mar.x < 0 ) {
 mar.x = mar.width/2
}
 
}
