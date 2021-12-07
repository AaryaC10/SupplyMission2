const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

function setup(){
var canvas=createCanvas(400,400);
engine=Engine.create();
world=engine.world;

ground = new Ground(200,height,400,20)
box = new Box(200,300,50,50)
box2 = new Box(250,100,50,100)
}

function draw(){
background(0);
Engine.update(engine);
ground.display
box.display
box2.display
}