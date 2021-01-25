class Umbrella{
    constructor(x,y){
        var options={
            friction: 0.1,
            isStatic:true
        }
        this.body=Matter.Bodies.circle(x,y,50,options)
    }
    display(){
        imageMode(CENTER)
        image(img,200,600)
    }
}