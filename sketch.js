var bunny;
var carrot;
var edges;
var snakes;
function preload() {
  //load game assets
  bunnyImg = loadImage("images/bunnyImg.png");
  carrotImg = loadImage("images/carrot.png");
  bgImg = loadImage("images/bg.png");
  snakeImg = loadImage("images/snake.png");
}


function setup() {
  createCanvas(600,600);

  bg = createSprite(300,300);
  bg.scale = 4.5;
  bg.addImage(bgImg);
  
  edges = createEdgeSprites();
  bunny = createSprite(50,550,30,30);
  bunny.scale = 0.4;
  bunny.addImage(bunnyImg);

  carrot = createSprite(550,50,30,30);
  carrot.scale = 0.2;
  carrot.addImage(carrotImg);

  snakes = new Group();
}

function draw() {
  background("green");  
  
  bunny.bounceOff(edges[0]);
  bunny.bounceOff(edges[1]);
  bunny.bounceOff(edges[2]);
  bunny.bounceOff(edges[3]); 
  
  if(keyDown("up")){
    bunny.y = bunny.y-5;
  }
  if(keyDown("down")){
    bunny.y = bunny.y+5;
  }
  if(keyDown("left")){
    bunny.x = bunny.x-5;
  }
  if(keyDown("right")){
    bunny.x = bunny.x+5;
  }
  
  generateSnakes()
  
  for(var s = 0;s<(snakes).length;s++){
    var temp = (snakes).get(s);
    if(bunny.isTouching(temp)){
      bunny.x=50;
      bunny.y=550;
      temp=null;
    }
  }
  
  drawSprites();
  
  if(bunny.isTouching(carrot)){
    text("YOU WIN",250,250);
  }
}

function generateSnakes(){
  if(frameCount % 20===0){
    var snake = createSprite(random(30,500),random(100,500),80,10);
    snake.scale = random(0.2,0.3);
    snake.addImage(snakeImg);
    snake.velocityX = random(-2,2);
    snake.lifetime = 100;
    snakes.add(snake);
  }
}