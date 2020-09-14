const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var maxDrops = 100;
var thunderImg, thunder;

var engine, world;
var drops = [];

function preload(){

    thunderImg = loadImage("thunderImage.jpg");
    
}

function setup(){
   
    var canvas = createCanvas(400,600);
    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(30,30,30);
    drop = new Drop(random(0,400),random(0,400));
    
}

function draw(){

    background("black");
    Engine.update(engine);

    for(var i = 0; i < maxDrops; i++){
        drops.push(new Drop(random(0,400), random(0,400)));
    }

    umbrella.display();
    drop.display();
    
}   

