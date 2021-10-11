const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var box;
var ball;
var ground;

function setup() {
  createCanvas(600,400)
  engine = Engine.create();
  world = engine.world;
  var option = {isStatic:false, restitution : 1};
  box = Bodies.rectangle(200,200,50,50,option);
  var option_ba = {isStatic:false, restitution : 1};
  ball = Bodies.circle(100,150,25,option_ba);
  var option_gr = {isStatic:true};
  ground = Bodies.rectangle(50,370,500,30,option_gr);

  World.add(world,ground);
  World.add(world,box);
  World.add(world,ball);

  console.log(box);
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  rectMode(CENTER);

  rect(ground.position.x,ground.position.y,500,30); 
  rect(box.position.x,box.position.y,50,50);  

  ellipseMode(RADIUS);

  ellipse(ball.position.x,ball.position.y,25);
}