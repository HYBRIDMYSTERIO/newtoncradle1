class Paper {
    constructor(x,y,radius){
        var option = {
            isStatic:false,
            restitution:0.6
        }
        this.body = Bodies.circle(x,y,radius,option);
        this.radius = radius;
        

        World.add(world,this.body);

    }
 displaypapers(){
     var position = this.body.position;
     ellipseMode(CENTER);
     fill("pink");
     
     
     ellipse(position.x,position.y,this.radius);
 }
}
