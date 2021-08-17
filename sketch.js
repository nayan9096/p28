
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

	Ground= new ground(400,700,800,5)
    Dustbin= new dustbin(650,700,40,500);
    Paper= new paper(200,390,50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  Ground.display();
  Dustbin.display();
  Paper.display()
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(Paper.body,Paper.body.position,{x:300,y:-300})
	}
}




