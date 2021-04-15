class Paper{
    constructor(x,y){
        var options={
            restitution:0.3,
            friction:0.5,
            density:1.2,
        }
        this.body=Bodies.circle(x,y,30,options);
        World.add(world,this.body);
        this.radius=30;
        this.image=loadImage("paper.png");
    }
    display(){        
        push();
        translate(this.body.position.x,this.body.position.y);
        strokeWeight(4);
        imageMode(CENTER);
        image(this.image,0,0,2*this.radius,2*this.radius)
        //ellipseMode(CENTER);
        //ellipse(0,0,2*this.radius,2*this.radius);
        pop();
    }
}