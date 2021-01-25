var maxDrops=100
var drops = []

function preload(){
   batman=loadAnimation("Walking Frame/walking_1.png","Walking Frame/walking_2.png","Walking Frame/walking_3.png","Walking Frame/walking_4.png","Walking Frame/walking_5.png","Walking Frame/walking_6.png","Walking Frame/walking_7.png","Walking Frame/walking_8.png")
   img = loadImage("Walking Frame/walking_1.png")
   thunder = loadImage("thunderbolt/2.png")
}

function setup(){
   createCanvas(400,800)
   child=new Umbrella (200,600)
   for(var i=0; i<maxDrops; i++){
      fill("blue")
      drops.push(rain=new Drop(random(0,400),random(0,400)))
   }
}

function draw(){
   background("black") 
   rain.display()
   child.display()
   image(img,200,600)
   if(frameCount%60===0){
      box = createSprite(200,400,50,50)
      box.addImage(thunder)
      box.lifetime=10
   }

    drawSprites()
}   

function updatePosition(){
      if(this.rain.position.y = height){
         Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
      }
}