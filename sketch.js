
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	tree = new Tree(500,400,100,200);
	stone = new Stone(200,600);


	Engine.run(engine);
  
}


function draw() {
 

  background(0);
  text(mouseX+","+mouseY,mouseX,mouseY);
  
  tree.display();
  stone.display();
 
}



