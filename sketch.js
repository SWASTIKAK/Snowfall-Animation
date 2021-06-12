const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var bgImg,backgroundImg;
var kid,kidImg;
var group,groupImg,group2,groupImg2;
var kid2,kidImg2,kidImg22;
var kid3,kidIm32;
var pole1,pole2,ground;
var ball,ballImg;
var snows = [];



function preload(){

 getBackgroundImg();
  kidImg = loadImage("kid1.png");
  kidImg22 = loadImage("kid2.2.png");
  groupImg = loadImage("group1.png");
  kidImg2 = loadImage("kid2.png");
  groupImg2 = loadImage("group2.png");
  kidImg3 = loadImage("kid3.png");
  ballImg = loadImage("ball.png");

}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

    kid = createSprite(560,280);
    kid.addImage(kidImg);
    kid.scale = 0.32;

    kid2 = createSprite(520,280);
    kid2.addImage(kidImg2);
    kid2.scale = 0.27;

    group = createSprite(450,280);
    group.addImage(groupImg);
    group.scale = 0.2;

    group2 = createSprite(360,280);
    group2.addImage(groupImg2);
    group2.scale = 0.29;

    kid3 = createSprite(450,280);
    kid3.addImage(kidImg3);
    kid3.scale = 0.23;

    group.depth = kid2.depth;
    kid2.depth = kid2.depth + 1;

    pole1 = createSprite(366,200,10,400);
    pole1.visible = false;

    pole2 = createSprite(566,200,10,400);
    pole2.visible = false;

   
}
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}


function draw() {
 
if(backgroundImg){
  background(backgroundImg);
  }

  Engine.update(engine);
  
  kid2.bounceOff(pole1);
  kid2.bounceOff(pole2);

  
  if (frameCount%10 === 0){
    snows.push(new Snow(getRndInteger(1,200),10,10))
  }
  if (frameCount%20 === 0){
    snows.push(new Snow(getRndInteger(201,400),10,10))
  }
  if (frameCount%10 === 0){
    snows.push(new Snow(getRndInteger(401,600),10,10))
  }
  if (frameCount%20 === 0){
    snows.push(new Snow(getRndInteger(601,800),10,10))
  }
  
 

  for (var i = 0; i < snows.length; i++){
    
    snows[i].display();

  }

  
  drawSprites();
}

function keyPressed() {

	if (keyCode === LEFT_ARROW) {
		kid2.x = kid2.x - 20 
    kid2.scale = kid2.scale - 0.009;
    kid2.addImage(kidImg22);
 }

 if (keyCode === RIGHT_ARROW) {
  kid2.x = kid2.x + 20 
  kid2.scale = kid2.scale + 0.009;
  kid2.addImage(kidImg2);
}

if(keyCode === LEFT_ARROW && kid2.isTouching(pole1)){
  kid2.scale = 0.220;

}

if(keyCode === RIGHT_ARROW && kid2.isTouching(pole2)){
  kid2.scale = 0.27;

}

	
}
async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
 
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);


  if(hour>=04 && hour<=17){
      bg = "snow1.jpg";
  }else{ bg = "snow2.jpg";
  }


backgroundImg = loadImage(bg);

}
