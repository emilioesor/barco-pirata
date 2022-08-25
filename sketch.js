const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var balas_m = []

var tower;

var matriz = [1,3,5]
console.log (matriz[2]);

var ground;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}


function setup() {
  canvas = createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;
   
  angle = -PI / 2;

  ground = new Ground(0, height - 1, width * 2, 1);

  cannon = new  Cannon (180,110,130,70,angle); 

  bala = new  Bala (cannon.x, cannon.y);

  torre = new Tower (150,350,160,310);
  torre2 = new Tower (800,270,120,230);

  barco = new Barco(width, height, 200, 200, -100);
  
 
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(189);
  image(backgroundImg, 0, 0, width, height);
  
  ground.display();

  for(var i = 0; i<balas_m.length; i++){
    showBalas (balas_m[i], i);
  }

  Matter.Body.setVelocity(barco.body,{
    x: -0.9,
    y: 0
  });

  torre.mostrar();
  torre2.mostrar();
   
  cannon.mostrar();
  //bala.mostrar();
 
  barco.mostrar();

  

  Engine.update(engine);
}

function keyReleased()
{
  
 if(keyCode === DOWN_ARROW){
  balas_m[balas_m.length -1].disparo();
 }

}

function keyPressed(){

  if(keyCode === DOWN_ARROW){
    var bala = new Bala(cannon.x, cannon.y);
    balas_m.push(bala);
  }
 
}

function showBalas(bala,index){
bala.mostrar();

if (bala.body.position.x >= width || bala.body.position.y >= height - 50) { 
  Matter.World.remove(world, bala.body);
  balas_m.splice(index, 1);
}

}