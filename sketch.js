var car , wall;
var speed,weight;



function setup() {
  createCanvas(2000,400);
  
  car =createSprite(200,200,40,40);
  car.shapeColor="white";
  wall=createSprite(1300,200,40,height/2);
  wall.shapeColor="white";
  speed=Math.round(random(55,90));
  weight=Math.round(random(400,1500))
  car.velocityX=speed;

}

function draw() {
  background("black");  

  if (wall.x-car.x < (car.width+wall.width)/2){

    car.velocityX = 0;

    var deformation= 0.5* speed* weight* speed/22500;

    if (deformation < 100){
      car.shapeColor="green";
    } 
    if(deformation <180&&deformation>100){
      car.shapeColor="yellow";
    } 
    if(deformation >180){
      car.shapeColor="red";
    }
  }

   console.log(wall.x-car.x);

   car.depth=wall.depth;
   car.depth=car.depth+1;






 









  
  
  drawSprites();
}