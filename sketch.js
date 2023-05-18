
var trex ,trex_running;


function preload(){
  
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(600,200)
  
  //crear sprite del t-rex.
  trex=createSprite(50,160,20,50);
  trex.addAnimation("running",trex_running);
  edges=createEdgeSprites();
 
  //agregar scale
  trex.scale=0.5;
  trex.x=50;
}

function draw(){

 background("white");

if(keyDown("space")){

  trex.velocityY=-10;

}

//agregar gravedad al salto del Trex
trex.velocityY=trex.velocityY + 0.5;
trex.collide(edges[3]);



  
  drawSprites();

}
