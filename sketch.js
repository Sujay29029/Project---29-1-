const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var strikerImg;
var base;

function preload(){
    strikerImg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200, 800);

    engine = Engine.create();
    world = engine.world;

    base = new Ground(400, 650, 1200, 20);

}

function draw(){
    background(black);
    Engine.update(engine);

    base.display();

}