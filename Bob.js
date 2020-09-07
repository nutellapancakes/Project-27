class Bob{
    constructor(x,y,radius){
        var options ={
            restitution:1,
            friction:0.75,
            density:0.4,
            isStatic: false,
            frictionAir: 0
        }
        this.body = Matter.Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        fill("lavender");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,80,80);
    }
}