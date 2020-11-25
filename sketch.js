
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var bg;
var ground,tree,stone,sling;
var boy,boyImage;

function preload()
{
	bg = loadImage ("bg.png")
	boyImage = loadImage ("boy.png")
}

function setup() {
	createCanvas(900, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground (width/2,495,900,10)
	tree = new Tree (700,300,1,1)

	stone = new Stone (99,350,10,10)
	mango1 = new Mango (700,150,10,10)
	mango2  = new Mango (600,180,10,10)
	mango3  = new Mango (800,180,10,10)
	mango4  = new Mango (650,220,10,10)
	mango5  = new Mango (750,220,10,10)
	sling = new SlingShot (stone.body,{x:99,y:350})


	Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  background(bg);
	
  image (boyImage,65, 300, 170,200)
detectollision(stone,mango1)
detectollision(stone,mango2)
detectollision(stone,mango3)
detectollision(stone,mango4)
detectollision(stone,mango5)
  sling.display()

  ground.display()

  tree.display()
  stone.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()


  drawSprites();

}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    sling.fly();
}

function keyPressed (){
	if(keyCode === 32){
	Matter.Body.setPosition(stone.body,{x:99,y:350}) 
	sling = new SlingShot (stone.body,{x:99,y:350})
}
}
function detectollision (lstone,lmango){
mangoBodyPosition = lmango.body.position
stoneBodyPosition = lstone.body.position


var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r)
{
	Matter.Body.setStatic(lmango.body,false)
}



}