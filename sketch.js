var maxDrops=100
var drops = []

function preload(){
   batman=loadAnimation("Walking Frame/walking_1.png","Walking Frame/walking_2.png","Walking Frame/walking_3.png","Walking Frame/walking_4.png","Walking Frame/walking_5.png","Walking Frame/walking_6.png","Walking Frame/walking_7.png","Walking Frame/walking_8.png")
   img = loadImage("Walking Frame/walking_1.png")
   thunder1 = loadImage("thunderbolt/1.png")
   thunder2 = loadImage("thunderbolt/2.png")
   thunder3 = loadImage("thunderbolt/3.png")
   thunder4 = loadImage("thunderbolt/4.png")
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
      box = createSprite(200,200,50,50)
      box.scale = 0.6
      if(Math.round(random(1,4))===1){
         box.addImage(thunder1)
      }else if (Math.round(random(1,4))===2){
         box.addImage(thunder2)
      }else if (Math.round(random(1,4))===3){
         box.addImage(thunder3)
      }else {
         box.addImage(thunder4)
      }
      box.lifetime=10
   }

    drawSprites()
}   

function updatePosition(){
      if(this.rain.position.y = height){
         Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
      }
}