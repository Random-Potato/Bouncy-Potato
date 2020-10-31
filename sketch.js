var fixedR, movingR, object2;

function setup() {
  createCanvas(800,400);

  fixedR = createSprite(200,400,50,80)
  //object2 = createSprite(200,400,50,80)
  movingR = createSprite(200,200,80,30)

  movingR.velocityY = 5;
  fixedR.velocityY = -5;

  fixedR.shapeColor = "red";
  movingR.shapeColor = "orange";

  fixedR.debug = true;
  movingR.debug = true;
}

function draw() {
  console.log(movingR.x-fixedR.x)
  
  if(movingR.x-fixedR.x<fixedR.width/2+movingR.width/2&&fixedR.x-movingR.x<fixedR.width/2+movingR.width/2&&movingR.y-fixedR.y<fixedR.height/2+movingR.height/2&&fixedR.y-movingR.y<fixedR.height/2+movingR.height/2){
    movingR.shapeColor = "red";
  }
  else{
    movingR.shapeColor="orange";
  }
  if(movingR.x-fixedR.x<fixedR.width/2+movingR.width/2&&fixedR.x-movingR.x<fixedR.width/2+movingR.width/2){
      movingR.velocityX *= -1;
      fixedR.velocityX *= -1;
  }

  if(movingR.y-fixedR.y<fixedR.height/2+movingR.height/2&&fixedR.y-movingR.y<fixedR.height/2+movingR.height/2){
    movingR.velocityY *= -1;
    fixedR.velocityY *= -1;
  }

  background(0,255,0);  
  //movingR.x = mouseX;
  //movingR.y = mouseY;

  drawSprites();
}