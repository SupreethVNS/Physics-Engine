const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var ball
var engine,world
var ground
function setup() {
  createCanvas(400,400);
  
  engine=Engine.create();
  world=engine.world

  var options={
    isStatic: true,
    restitution:1
  }

  ground=Bodies.rectangle(200,390,400,20,options);
  World.add(world,ground)

var ball1 = {
  restitution : 1
}

  ball=Bodies.circle(200,100,20,ball1);
  World.add(world,ball)
  console.log(ground.type);
  console.log(ground.position.x);
  console.log(ground.position.y)
}

function draw() {
  background("black");  
  Engine.update(engine);
  const pos=ground.position

  rectMode(CENTER);
  rect(pos.x,pos.y,400,20);

ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20)
}