
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world,paper1,dustbin1,dustbin2,dustbin3,ground;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//paper1=new Paper(200,450,70);
	ground=new Ground(width/2,670,width,20);
	dustbin1=new Dustbin(1200,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);




  paper1.display();

  ground.display();

  dustbin1.display();
  
 


}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position ,{
			x:130,
			y:-145
		});
	}
}
