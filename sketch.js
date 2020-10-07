
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var side1,side2,bottom;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(1350, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	
	ground = new Ground(675,380,1350,20);
	ball = new Paper(100,200,50);
	side1 = new Dustbin(1110, 320, 20, 100);
	side2 = new Dustbin(1290, 320, 20, 100);
	bottom = new Dustbin(1200,360, 200,20);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  //Engine.update(engine);
  ground.display();
 side1.display();
 side2.display();
 bottom.display();
 ball.display();
 
}
function keyPressed() {
	if(keyCode === UP_ARROW) {
	  Matter.Body.applyForce(ball.body, ball.body.position,{x:60, y:-60});
	}
  }


