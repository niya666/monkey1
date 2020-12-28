
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var SurvialTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(10,365,15,15);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  
  ground = createSprite(500,395,500,20);
  ground.velocityX = -4;
  
  
  FoodGroup = new Group();
  obstacleGroup = new Group();

  
}


function draw() {
  
 background("lightblue")
  
 if(keyDown("space")&& monkey.y >= 250) {
        monkey.velocityY = -12;
  
    }
  
   ground.x = ground.width/2;
  console.log(ground.x);
  
   monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide  (ground);
  
stroke("black");
textSize(20);
fill("black");
survialTime=Math.ceil(frameCount/frameRate());
text("Survial Time :"+ survialTime,100,50);
  
  obstacle1();
  food();
  
  drawSprites();
  
}

function food(){
  if (frameCount%80===0){
  banana = createSprite(0,150,10,10);
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.y=Math.round(random(250,200))
  banana.velocityX = 4;
  banana.lifetime = 300;}
}

function obstacle1(){
if(frameCount%80===0){
  obstacle = createSprite(400,375,10,10);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.1;
  obstacle.velocityX = -4;
  obstacle.lifetime = 300;
}
  
  
}
