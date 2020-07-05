class Paper {
    constructor(x, y) {
      var options = {
        "density" :   1.2,
        "friction" : 0.5,
        restitution : 0.3,
        isStatic:false
      }
  this.body = Bodies.rectangle(x,y,20,20,options);
  this.x = x;
  this.y = y;
  this.width = 20;
  this.height = 20;
  World.add(world,this.body);
};
  
display(){
  var pos = this.body.position;
  console.log(mouseX, mouseY);
  var angle = this.body.angle;
 // push();

  rectMode(LEFT);
  rotate(angle);

  fill("red");
  strokeWeight(4);
  stroke("green");


//	translate(pos.x,pos.y);
  console.log("Paper params");
  console.log(this.x, this.y, this.width, this.height);
  rect(this.x,this.y,this.width,this.height);
//  pop();

    };
  
};
  