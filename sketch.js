var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1600, 400);
  speed = random(50, 100);
  weight = random(1000, 1500);

  car  = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 60, height/2)

  car.velocityX = speed;
  wall.shapeColor = "white";
  deformation = 0.5*weight*speed*speed/22500;
}

function draw() {
  background("black");  
  if(car.isTouching(wall)){
    deformation;
  
  
  if(deformation <= 100){
    car.shapeColor = "green";
  }
  else if(deformation >= 100 && deformation <= 180){
    car.shapeColor = "yellow";
  }
  else {
    car.shapeColor = "red";
  }
}
car.collide(wall);
  drawSprites();

}