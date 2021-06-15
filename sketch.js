var sea,ship,ship1,sea1,edges
function preload(){
  ship1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  sea1=loadImage("sea.png");

  sea=createSprite()
sea.addImage(sea1);
ship = createSprite(300,250,20,50);
ship.scale =0.5
ship.addAnimation("running", ship1);
console.log(ship)
}
playSound()
function setup(){
  createCanvas(500,500);
   sea.velocityX=sea.velocityX +10;
   edges = createEdgeSprites();

  }

function draw() {
 background("sea ")
 
 if(sea.x<0)
 {
sea.X=sea.width/2;
 }

  drawSprites();
}