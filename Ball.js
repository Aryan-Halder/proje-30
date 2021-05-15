class Ball {
    constructor(x,y,radius){
            
            this.body = Bodies.circle(x,y,radius)
            World.add(world, this.body)
            this.img = loadImage("polygon.png")
            this.radius = radius
    }
    display(){
        var angle = this.body.angle
        var pos= this.body.position
        push()
        translate(pos.x, pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.img,0,0,this.radius*2,this.radius*2)
        pop()
    }
}