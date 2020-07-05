const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var dustbin_left, dustbin_right, dustbin_bottom;

var setupflag = 0, dustbinsetup = 0, keyCode = 0;

function preload()
{
	
}

function setup() {
var canvas =	createCanvas(510, 510);


engine = Engine.create();
world = engine.world;

//Create the Bodies Here.

// paper
paper = new Paper(28,490);

//Ground
ground = new Ground(0,500,500,10);

//dustbin

dustbin_left = new Dustbin(200,400, 10 ,100);
dustbin_right = new Dustbin(300,400,10,100);
dustbin_bottom = new DustbinB(205,500,100,10);

Engine.run(engine);
  
console.log("Exit setup()");

}

function keyPressed(){
if(keyCode === UP_ARROW){
  console.log("Entered keyPressed()");
  Matter.Body.applyForce(paper.body,paper.body.position,{x:250, y:459});
  console.log("Exited keyPressed()");
	}
}

function draw() {
  if (setupflag === 0) {
    setupflag = 1;
    setup();
  } 

    background(0);
    ground.display();

    console.log("Creating dustbin_left");  
    dustbin_left.display(); 


    console.log("Creating dustbin_right");  
    dustbin_right.display();
    console.log("Creating dustbin_bottom");  
    dustbin_bottom.display();
    
    paper.display();

    if (keyCode === UP_ARROW){
      keyPressed();
    }
   
  drawSprites();
 
}



