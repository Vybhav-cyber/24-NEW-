class DustbinB {
    constructor(x, y) {
      var options = {
        "density" :   1.2,
        "friction" : 0.5,
        restitution : 0.3,
        isStatic:false
      }
this.body = Bodies.rectangle(x,y,10, 100,options);

console.log("Dustbin bottom passed params");
console.log(x, y, width, height);

this.x = x;
this.y = y;
this.width = 100;
this.height = 10;
World.add(world,this.body);

};
  
    display(){
  var pos = this.body.position;
  var angle = this.body.angle;
/*  push();
  translate(pos.x,pos.y);*/
  rectMode(LEFT);
  rotate(angle);

  fill(255);
  strokeWeight(4);
  stroke("green");
  console.log("Dustbin bottom params");
  console.log(this.x, this.y, this.width, this.height);
  rect(this.x,this.y,this.width,this.height);
  // pop();

    };
  };
  