class Drop{
    constructor(x,y){
        var options={
            friction: 0.1,
            isStatic:false
        }
        this.body=Matter.Bodies.circle(x,y,5,options)
    }
    display(){
        ellipseMode(RADIUS)
        ellipse(random(0,400),random(0,400),5,5)
    }
}