var fixedRectangle;
var movingRectangle;
function setup() {
  createCanvas(800,400);
  fixedRectangle = createSprite(400, 200, 80, 50);
  movingRectangle= createSprite(200, 200, 50, 40);
  movingRectangle.shapeColor = "white";
  fixedRectangle.shapeColor  = "white";
  fixedRectangle.velocityY   = 3;
}

function draw() {
  background(0);
  movingRectangle.y = mouseY;
  movingRectangle.x = mouseX;

  if(movingRectangle.x - fixedRectangle.x <= (movingRectangle.width + fixedRectangle.width)/2 
  && 
  fixedRectangle.x - movingRectangle.x <= (movingRectangle.width + fixedRectangle.width)/2){
    fixedRectangle.velocityX *= (-1);     
  }

  if(movingRectangle.y - fixedRectangle.y <= (movingRectangle.height + fixedRectangle.height)/2 
  && 
  fixedRectangle.y - movingRectangle.y <= (movingRectangle.height + fixedRectangle.height)/2){
  fixedRectangle.velocityY *= (-1);
  }
  console.log( (movingRectangle.width + fixedRectangle.width)/2 );

  console.log(movingRectangle.x - fixedRectangle.x);

  if(movingRectangle.x - fixedRectangle.x <= (movingRectangle.width + fixedRectangle.width)/2 
  && 
  fixedRectangle.x - movingRectangle.x <= (movingRectangle.width + fixedRectangle.width)/2
  && fixedRectangle.y - movingRectangle.y <= (movingRectangle.height + fixedRectangle.height)/2
  && movingRectangle.y - fixedRectangle.y <=  (movingRectangle.height + fixedRectangle.height)/2 ){
    movingRectangle.shapeColor = "Red";
    fixedRectangle.shapeColor  = "red";
    }else{
    movingRectangle.shapeColor = "white";
    fixedRectangle.shapeColor  = "white";
  }
  drawSprites();
}