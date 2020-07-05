class Ground {
    constructor(x, y) {
      var options = {
           isStatic:true
      }
this.body = Bodies.rectangle(x,y,width,height,options);
this.x = x;
this.y = y;
this.width = width;
this.height = height;
World.add(world,this.body);
  
};
  
    display(){
      console.log("Entering Ground.display()");
  var pos = this.body.position;
  rectMode(LEFT);
  fill("gray");
  
  console.log("Printing ground params")
  console.log(this.x, this.y, this.width, this.height);
  rect(this.x,this.y,this.width,this.height);
  
  console.log("Exiting Ground.display()");
    };
  };
  