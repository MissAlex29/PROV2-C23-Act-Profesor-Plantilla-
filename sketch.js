const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world,ground;

var backgroundImg;
var ground; 
var tower,towerImg;

function preload() {
//Precargar imagen para fondo en una variable 


//Precargar imagen de la torre 

}

function setup() {
  canvas = createCanvas(1200, 600);
  
  //Motor físico 
  engine = Engine.create();
  
  //Se crea el nuevo mundo 
  world = engine.world;
  
  
}

function draw() {
  background(189);
  
  //Se actualiza motor físico
  Engine.update(engine);
  
  
}