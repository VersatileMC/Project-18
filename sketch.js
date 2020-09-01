var banana,bananaIMG;

var obstacle,obstacleIMG;

var obstacleGroup

var scene,sceneIMG;

var score;

var player,player_running;

var groundINV;

var score;
function preload() { 
sceneIMG = loadImage ("jungle.jpg");
  
player_running = loadAnimation ("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
bananaIMG = loadImage ("banana.png");
obstacleIMG = loadImage ("stone.png");
  
} 
  
function setup() {
  createCanvas(400, 400);
  
  scene = createSprite(200,200,10,10);
  scene.addImage(sceneIMG);
  scene.velocityX = -6;
  
  groundINV = createSprite(200,390,400,10);
  groundINV.visible = false;
  
  player = createSprite(50,380,20,50);
  player.addAnimation("run",player_running);
  player.scale = 0.1;
  player.velocityY = 1;
  
  obstacleGroup = new Group();
  bananaGroup = new Group();
  
  score = 0;
}

function draw() {
  background(220);
  player.collide(groundINV);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score: "+ score, 500,50);
  
  if(bananaGroup.isTouching(player)) {
   score = score+2;
    bananaGroup.destroyEach();
  }
     
  switch(score){
    case 10: player.scale = 0.12;break;
    
    case 20: player.scale = 0.14;break;
    
    case 30: player.scale = 0.16;break;
    
    case 40: player.scale = 0.18;break;
    default: break;
  }  
      
  if(obstacleGroup.isTouching(player)) {
   player.scale = 0.1;
    obstacleGroup.destroyEach();
  }
  
  if(keyDown("space") && player.y === player.y){
      player.velocityY = -10;
    }
  
     
      
  console.log(player.y);
  
  if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  Food();
  obstacles();
  drawSprites();
}

function Food() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(200,200);
    banana.y = random(120,200);
    banana.addImage(bananaIMG);
    banana.scale = 0.05;
    banana.velocityX = -3;
    banana.lifetime = 134;
    
    bananaGroup.add(banana);
  }
}

function obstacles() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(400,365,10,40);
    obstacle.velocityX = -6;
    obstacle.addImage(obstacleIMG);
    obstacle.scale = 0.15;
    obstacle.lifetime = 70;
   
    obstacleGroup.add(obstacle);
  }

}
