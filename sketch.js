var wall,thickness;
var bullet,speed,weight;
var bulletImage;

function preload(){
  bulletImage = loadImage("bullet.png")
}
function setup(){
createCanvas(1200,400)

thickness = random(22,83);
speed = random(223,201);
weight = random(30,52);

wall = createSprite(1000,200,thickness,height/2)
bullet = createSprite(50,200,50,50);
bullet.addImage(bulletImage)
bullet.scale = 0.1;
bullet.velocityX = speed;

}
function draw(){
    background("white")
    if(hasCollided(bullet,wall)){
      bullet.velocityX = 0;
      var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
      if (damage>10){
        wall.shapeColor = color(255,0,0)
      }
      if(damage<10){
        wall.shapeColor = color(0,255,0)
      }
      if(damage>15){
        wall.shapeColor = color(214, 6, 207)
      }
    }
  drawSprites();    
}
function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x + bullet.width;
wallLeftEdge = wall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true;
}
return false;
}