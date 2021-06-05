class rope{
    constructor(bodyA,bodyB,offsetX,offsetY)
    {
this.offsetX = offsetX;
this.offsetY = offsetY;
  var options= {
  bodyA : body1,
  bodyB : body2,
  pointB:{x:this.offsetX, y:this.offsetY}
  }
  this.rope = (constraint.create(options));
 World.add(world,this.rope); 
}
  show(){
     var pointA = this.sling.bodyA.position;
     var pointB = this.sling.bodyB.position;
                   
    strokeWeight(7);
    line(pointA.x , pointA.y, pointB.x , pointB.y);
    }
      }
    
