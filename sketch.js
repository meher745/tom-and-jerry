var bgimage;
var tom,jerry,cati1,cati2,cati3,mousei1,mousei2,mousei3;

function preload() {
    //load the images here
    bgimage=loadImage("images/garden.png");
    //tom images
    cati1=loadImage("images/tomOne.png");
    cati2=loadAnimation("images/tomTwo.png","images/tomThree.png");
    cati3=loadImage("images/tomFour.png");
    //jerry images
    mousei1=loadImage("images/jerryOne.png");
    mousei2=loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    mousei3=loadImage("images/jerryFour.png");


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(800,680,10,10);
    tom.addAnimation("tom sleeping",cati1);
    tom.scale=0.2

    jerry=createSprite(200,675,10,10);
    jerry.addAnimation("jerry sleeping",mousei1);
    jerry.scale=0.15;

}

function draw() {

    background(bgimage);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<((tom.width-jerry.width)/2)){

        tom.velocityX=0;
        tom.addAnimation("tom_last",cati3);
        tom.scale=0.2;
        tom.x=350;
        tom.changeAnimation("tom_last");
        jerry.addAnimation("jerry_last",mousei3);
        jerry.scale=0.15;
        jerry.changeAnimation("jerry_last");
        

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode  === LEFT_ARROW){
      tom.velocityX=-5;
      tom.addAnimation("tom_running",cati2);
      tom.changeAnimation("tom_running");

      jerry.addAnimation("jerry_t",mousei2);
      jerry.frameDelay = 25;
      jerry.changeAnimation("jerry_t");

  }


}