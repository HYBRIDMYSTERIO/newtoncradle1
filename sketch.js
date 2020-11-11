
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5, ground1 ,ground2, rope1, rope2,rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(405,200,305,30);
	ground2 = new Ground(300,200,30,30);
	
	ground3 = new Ground(350,200,30,30);
	ground4 = new Ground(450,200,30,30);
	ground5 = new Ground(500,200,30,30);
	ground6 = new Ground(400,200,30,30);
	

	bobObject1 = new Paper(300,400,25);
	bobObject2 = new Paper(350,400,25);
	bobObject3 = new Paper(400,400,25);
	bobObject4 = new Paper(450,400,25);
	bobObject5 = new Paper(500,400,25);

	rope1= new Rope(bobObject1.body,ground2.body,-5*2,0);
	rope2 = new Rope(bobObject2.body,ground3.body,-5*2,0);
	rope3 = new Rope(bobObject3.body,ground6.body,-5*2,0);
	rope4 = new Rope(bobObject4.body,ground4.body,-5*2,0);
	rope5 = new Rope(bobObject5.body,ground5.body,-5*2,0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(255);
  ground1.displayground();
  ground2.displayground();
  bobObject1.displaypapers();
  bobObject2.displaypapers();
  bobObject3.displaypapers();
  bobObject4.displaypapers();
  bobObject5.displaypapers();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  
  
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position, {x:3,y:3});
		
		
		
	}
}

