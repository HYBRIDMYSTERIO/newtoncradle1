class Rope {
    constructor(body1, body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            
            bodyA: body1,
            bodyB: body2,
            pointB: {x:this.offsetX , y:this.offsetY}
            
        }
        console.log(options);
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var positionA = this.rope.bodyA.position;
        var positionB = this.rope.bodyB.position;
        strokeWeight(2);
        line(positionA.x,positionA.y,positionB.x,positionB.y);
    }
    
    
}