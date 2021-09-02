var bunny;
var food;
var edges;
var bricks;
function preload() {
  //load game assets
  
}


function setup() {
  createCanvas(600,600);
  
  edges = createEdgeSprites();
  bunny = createSprite(50,550,30,30);
  food = createSprite(550,50,30,30);
  obs1 = createSprite(300,180,100,20);
  obs1.velocityX = 5;
  obs2 = createSprite(300,360,100,20);
  obs2.velocityX = -5;
  food.shapeColor = "orange";
  obs1.shapeColor = "black";
  obs2.shapeColor = "black";
  bunny.shapeColor = "blue";
  bricks = new Group();
}

function draw() {
  background("green");  
  
  bunny.bounceOff(edges[0]);
  bunny.bounceOff(edges[1]);
  bunny.bounceOff(edges[2]);
  bunny.bounceOff(edges[3]);
  obs1.bounceOff(edges[0]);
  obs1.bounceOff(edges[1]);
  obs2.bounceOff(edges[0]);
  obs2.bounceOff(edges[1]);
  
  
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
  
  drawBricks()
  
  for(var s = 0;s<(bricks).length;s++){
    var temp = (bricks).get(s);
    if(bunny.isTouching(temp)){
      bunny.x=50;
      bunny.y=550;
      temp=null;
    }
  }
  
  if(bunny.isTouching(obs1)){
    bunny.x=50;
    bunny.y=550;
  }
  if(bunny.isTouching(obs2)){
    bunny.x=50;
    bunny.y=550;
  }
  
  drawSprites();
  
  if(bunny.isTouching(food)){
    text("YOU WIN",250,250);
  }
}

function drawBricks(){
  var brickLayer1 = createSprite(-120,300,100,20);
  var brickLayer2 = createSprite(720,240,100,20);
  if(frameCount % 20===0){
    for(var i = 0;i<(frameCount);i++){
      brickLayer1.x = brickLayer1.x+8;
      brickLayer2.x = brickLayer2.x-8;
      bricks.add(brickLayer1);
      bricks.add(brickLayer2);
    }
  }
  brickLayer1.shapeColor="red";
  brickLayer2.shapeColor="red";
}