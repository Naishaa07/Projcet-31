const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var particles = [];
var plinko = [];
var divisions = [];
var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);
  ground= new Ground(240,795,480,10)
  for(var k=0; k<=width; k= k+80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight))
  }
  for(var j = 40;j <=  width; j=j+50){
    plinko.push(new Plinko(j,75))
  }
  for(var j = 15;j <=  width-10; j=j+50){
    plinko.push(new Plinko(j,175))
  }
  for(var j = 40;j <=  width; j=j+50){
    plinko.push(new Plinko(j,275))
  }
  for(var j = 15;j <=  width; j=j+50){
    plinko.push(new Plinko(j,375))
  }
  

  Engine.run(engine)
  
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ground.display();
  for(var j=0; j<particles.length; j++ ){
    particles[j].display();
 }
 for(var k=0; k<divisions.length; k++ ){
    divisions[k].display();
}
for(var l=0; l<plinko.length; l++ ){
 plinko[l].display();
}
if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10, width/2+10),10,10))
 }


  //drawSprites();
}