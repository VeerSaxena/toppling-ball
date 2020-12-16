// Making use of Modules/Class of Matter lib
// giving a short name is called namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground;
function setup() {
  createCanvas(800,400);

  // to create engine for our application
  engine = Engine.create();

  world = engine.world;

  // options can be gravity, restitution, density, friction any Physics properties

  var options = {
    'isStatic': true
  }

  ground = Bodies.rectangle(0, 380, 800, 20, options);
  // to add the ground body to the world
  World.add(world, ground);

  var ball_options = {
    restitution:0.1
  }

  ball = Bodies.circle(400, 300, 50,ball_options );
  // to add the ground body to the world
  World.add(world, ball);

}

function draw() {
  background(255,255,255); 
  Engine.update(engine);

  // to check what all properties of matter.js has been added to ground body
  console.log(ground)

  // width and height properties are not a part of Physics body so we need to provide/add it 
  fill ("brown");
  rect(ground.position.x, ground.position.y, 800, 20);

  fill ("red");
  ellipse(ball.position.x, ball.position.y, 50,50);
 
}