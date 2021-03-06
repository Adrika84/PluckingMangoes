
  const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Body = Matter.Body;
  const Render = Matter.Render;
  const Constraint = Matter.Constraint;
  var treeObj, stoneObj,groundObject, launcher;
  var mango1;
  var world,boy;

  function preload(){
    boy=loadImage("images/boy.png");
    }

  function setup() {
    createCanvas(1300, 600);
    engine = Engine.create();
    world = engine.world;

	mango1 = new mango(1100,100,30);
	mango2 = new mango(1100, 200,30);
	mango3 = new mango(900, 200, 30);
	mango4 = new mango(1230, 250, 30);
	mango5 = new mango(1010, 80, 30);
	mango6 = new mango(1000, 180, 30);
	mango7 = new mango(1030, 260, 30);

	stoneObj = new Stone(240, 430);	
  launcher = new Launcher(stoneObj.body, {x: 240, y: 430});

	treeObj = new tree(1050,580);
	groundObject = new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  stoneObj.display();

  groundObject.display();

  launcher.display();

  detectcollision(stoneObj, mango1);
  detectcollision(stoneObj, mango2);
  detectcollision(stoneObj, mango3);
  detectcollision(stoneObj, mango4);
  detectcollision(stoneObj, mango5);
  detectcollision(stoneObj, mango6);
  detectcollision(stoneObj, mango7);  

}

function mouseDragged() {
    Matter.Body.setPosition(stoneObj.body, {x: mouseX, y: mouseY})
}

function mouseReleased() {
    launcher.fly();
}

function detectcollision(lstone, lmango) {
  mangoBodyPosition = lmango.body.position;
  stoneBodyPosition = lstone.body.position;

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
    if(distance <= lmango.r + lstone.r) {
      Matter.Body.setStatic(lmango.body, false);
    }
}