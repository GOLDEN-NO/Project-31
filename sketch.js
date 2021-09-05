const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World
var world, engine
var maxDrops = 100
var drops = []

function preload(){
    
}

function setup(){
   engine = Engine.create()
    world = engine.world
    createCanvas(1400,700)

    for(var i=0; i<maxDrops; i++){
        drops.push(new Drop(random(0,1200), random(0,800)))
    }
}

function draw(){
    Engine.update(engine)
    background("black")
    for(var i = 0; i<maxDrops; i++){
        drops[i].display()
        drops[i].reposition()
    }
}