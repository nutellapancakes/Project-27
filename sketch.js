
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(300,150,350,10);

	bobObject1 = new Bob(160,500,40);
	bobObject2 = new Bob(220,500,40);
	bobObject3 = new Bob(280,500,40);
	bobObject4 = new Bob(340,500,40);
	bobObject5 = new Bob(400,500,40);

	rope1 = new Rope(bobObject1.body, roof.body, -160, 0);
	rope2 = new Rope(bobObject2.body, roof.body, -80, 0);
	rope3 = new Rope(bobObject3.body, roof.body, 0, 0);
	rope4 = new Rope(bobObject4.body, roof.body, 80, 0);
	rope5 = new Rope(bobObject5.body, roof.body, 160, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  Engine.update(engine);

  roof.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-60});
	}
}



