
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope;
var roofObject

function preload(){

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	bobObject1 = new bob(350,600,40);
	bobObject2 = new bob(450,600,40);
	bobObject3 = new bob(550,600,40);
	bobObject4 = new bob(650,600,40);
	bobObject5 = new bob(750,600,40);

	rope = new rope(bobObject1.body,roofObject.bodies,-bobDiameter*2);
	Engine.run(engine);
  
}


function draw(){
  rectMode(CENTER);
  background(0);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyWentDown(UP_ARROW)){
     
	}
}

