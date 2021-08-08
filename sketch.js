const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;
var con;
function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;
	
	var bob_options = {
		restitution: 0.8,
  
	}
	  bob1 = Bodies.circle(10,30,30,bob_options);
	  World.add(world,bob1);

	  bob2 = Bodies.circle(360,100,30,bob_options);
	  World.add(world,bob2);

	  bob3 = Bodies.circle(360,100,30,bob_options);
	  World.add(world,bob3);

	  bob4 = Bodies.circle(360,100,30,bob_options);
	  World.add(world,bob4);

	  bob5 = Bodies.circle(360,100,30,bob_options);
	  World.add(world,bob5);




	  var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	con = Matter.Constraint.create({
		pointA: {x:320, y:100},
		bodyB:bob1,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.5
	  });

	World.add(world,con);
	
	con = Matter.Constraint.create({
		pointA: {x:370, y:100},
		bodyB:bob2,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.5
	  });
	  World.add(world,con);

	  con = Matter.Constraint.create({
		pointA: {x:420, y:100},
		bodyB:bob3,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.5
	  });

	World.add(world,con);
	
	
	con = Matter.Constraint.create({
		pointA: {x:470, y:100},
		bodyB:bob4,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.5
	  });

	World.add(world,con);
	
	con = Matter.Constraint.create({
		pointA: {x:520, y:100},
		bodyB:bob5,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.5
	  });

	World.add(world,con);
	




	
	
	rectMode(CENTER);





	Engine.run(engine);
	
  
}

function draw() {
//  rectMode(CENTER);
  background("#99004d");
  Engine.update(engine); 
  ellipse(bob1.position.x,bob1.position.y,30);

  ellipse(bob2.position.x,bob2.position.y,30);

  ellipse(bob3.position.x,bob3.position.y,30);

  ellipse(bob4.position.x,bob4.position.y,30);

  ellipse(bob5.position.x,bob5.position.y,30);

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  push();
  strokeWeight(2);
  stroke(255);
  line(320,roof.position.y,bob1.position.x,bob1.position.y);
  

  strokeWeight(2);
  stroke(255);
  line(370,roof.position.y,bob2.position.x,bob2.position.y);

  strokeWeight(2);
  stroke(255);
  line(420,roof.position.y,bob3.position.x,bob3.position.y);

  strokeWeight(2);
  stroke(255);
  line(470,roof.position.y,bob5.position.x,bob5.position.y);
  
  strokeWeight(2);
  stroke(255);
  line(520,roof.position.y,bob4.position.x,bob4.position.y);
   
  pop();

  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed()
{
  if(keyCode==UP_ARROW)
    {
      Matter.Body.applyForce(bob1,{x:0,y:0},{x:0.5,y:-0.5});
    }
}
