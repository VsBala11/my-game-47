const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var Ob1Image,Ob1
var Ob2Image,Ob2
var Ob3Image,Ob3
var Ob4Image,Ob4
var Ob5Image,Ob5
var Ob6Image,Ob6
var Platform1Image,Platform1
var Platform2Image,Platform2
var catSitImage,catSit
var catStandImage,catStand
var catTailMoveImage,catTailMove
var cat
var background,backgroundImage
var coin1,coin2,coin3,coin4,coinImage
var coinsCollected=0

function preload(){

Ob1Image= loadImage("../assets/Ob1.png");
Ob2Image= loadImage("../assets/Ob2.png");
Ob3Image= loadImage("../assets/Ob3.png");
Ob4Image= loadImage("../assets/Ob4.png");
Ob5Image= loadImage("../assets/Ob5.png");
Ob6Image= loadImage("../assets/Ob6.png");
Platform1Image= loadImage("../assets/Platform_1.png");
Platform2Image= loadImage("../assets/Platform_2.png");
catSitImage= loadImage("../assets/Cat_Sit.png");
catStandImage= loadImage("../assets/Cat_Stand.png");
catTailMoveImage= loadAnimation("../assets/Cat_Fly1.png","../assets/Cat_Fly2.png");
coinImage= loadImage("../assets/coin.png");


catSitImage.playing=true;
catStandImage.playing=true;
catTailMoveImage.playing=true;


}


function setup() 
{
  
  createCanvas(500,700);
  

  

 /* var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  if(isMobile){
    canH=displayHeight;
    canW=displayWidth;
    createCanvas(displayWidth+80,displayHeight);
  }
  
  else{
    canW=windowWidth;
    canH=windowHeight;
    createCanvas(windowWidth,windowHeight);
  }
*/
  engine = Engine.create();
  world = engine.world;

  cat = createSprite(250,670,100,100);
  cat.addAnimation("catTailMove",catTailMoveImage); 
  cat.scale = 0.4;


 
  
  Ob1 = createSprite(0,100,100,100);
  Ob1.addImage(Ob1Image);
  Ob1.velocity.x=4
  Ob1.scale=0.3
    
  Ob2 = createSprite(500,490,100,100);
  Ob2.addImage(Ob2Image);
  Ob2.velocity.x=-2
  Ob2.scale=0.3

  Ob3 = createSprite(0,440,100,100);
  Ob3.addImage(Ob3Image);
  Ob3.velocity.x=3
  Ob3.scale=0.3

  Ob4 = createSprite(500,340,100,100);
  Ob4.addImage(Ob4Image);
  Ob4.velocity.x=-1.5
  Ob4.scale=0.3

  Ob5 = createSprite(500,260,100,100);
  Ob5.addImage(Ob5Image);
  Ob5.velocity.x=-4
  Ob5.scale=0.5


  Ob6 = createSprite(0,60,100,100);
  Ob6.addImage(Ob6Image);
  Ob6.velocity.x=2
  Ob6.scale=0.2

  coin1 = createSprite(460,540,100,100);
  coin1.addImage(coinImage);
  coin1.scale=0.1

  coin2 = createSprite(340,140,100,100);
  coin2.addImage(coinImage);
  coin2.scale=0.1

  coin3 = createSprite(130,210,100,100);
  coin3.addImage(coinImage);
  coin3.scale=0.1

  coin4 = createSprite(90,440,100,100);
  coin4.addImage(coinImage);
  coin4.scale=0.1


  cat.setCollider("circle",0,0,40);
  cat.debug = true

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
 

}


function draw (){
    background("#130642") 
    textSize(15)  
    textAlign(CENTER,CENTER)
    textshow=true
    text("collect at least 3 coins and make the cat exit the canvas to win,click to start",250,100);
     

    drawSprites();


   


    Engine.update(engine);

    World.add(engine.world,cat);

//movement for cat
    if(keyDown(37)){
      cat.x-=2
    }
    

    if(keyDown(38)){
      cat.y-=2
    }
    

    if(keyDown(39)){
      cat.x+=2
    }
    
    if(keyDown(40)){
      cat.y+=2
    }
    //Code for obstacles going out of canvas

    //code for Ob1(right)
   if(Ob1.position.x>520){
     Ob1.position.x=-15
     Ob1.position.y=random(0,500)
     }

     if(Ob1.isTouching(Ob2)||Ob1.isTouching(Ob3)||Ob1.isTouching(Ob4)||Ob1.isTouching(Ob5)||Ob1.isTouching(Ob6)){
      if(Ob1.position.x>=440){
      Ob1.position.x=-15
      Ob1.position.y=random(0,500)
      }
     }
// code for Ob2(left)
     if(Ob2.position.x<0){
      Ob2.position.x=515
      Ob2.position.y=random(0,500)
      }
 
      if(Ob2.isTouching(Ob1)||Ob2.isTouching(Ob3)||Ob2.isTouching(Ob4)||Ob2.isTouching(Ob5)||Ob2.isTouching(Ob6)){
        if(Ob2.position.x<60){
       Ob2.position.x=-15
       Ob2.position.y=random(0,500)
        }
      }
// code for Ob3(right)
      if(Ob3.position.x>520){
        Ob3.position.x=-15
        Ob3.position.y=random(0,500)
        }
   
        if(Ob3.isTouching(Ob1)||Ob3.isTouching(Ob2)||Ob3.isTouching(Ob4)||Ob3.isTouching(Ob5)||Ob3.isTouching(Ob6)){
          if(Ob3.position.x>=440){
         Ob3.position.x=-15
         Ob3.position.y=random(0,500)
          }
        }

        // code for Ob4(left)
        if(Ob4.position.x<0){
          Ob4.position.x=515
          Ob4.position.y=random(0,500)
          }
     
          if(Ob4.isTouching(Ob1)||Ob4.isTouching(Ob3)||Ob4.isTouching(Ob2)||Ob4.isTouching(Ob5)||Ob4.isTouching(Ob6)){
            if(Ob4.position.x<60){
           Ob4.position.x=-15
           Ob4.position.y=random(0,500)
            }
          }


          //code for Ob5(left)
          if(Ob5.position.x<0){
            
            Ob5.position.x=515
            Ob5.position.y=random(0,500)
            
          }
       
            if(Ob5.isTouching(Ob1)||Ob5.isTouching(Ob3)||Ob5.isTouching(Ob4)||Ob5.isTouching(Ob2)||Ob5.isTouching(Ob6)){
              if(Ob5.position.x<60){
             Ob5.position.x=-15
             Ob5.position.y=random(0,500)
              }
            }

            // code for Ob6(right)
            if(Ob6.position.x<0){
              
              Ob6.position.x=515
              Ob6.position.y=random(0,500)
              }
         
              if(Ob6.isTouching(Ob1)||Ob6.isTouching(Ob3)||Ob6.isTouching(Ob4)||Ob6.isTouching(Ob5)||Ob6.isTouching(Ob2)){
                if(Ob6.position.x>=440){
                
               Ob6.position.x=-15
               Ob6.position.y=random(0,500)
                }
                
              }

              if (cat.isTouching(Ob1)||cat.isTouching(Ob2)||cat.isTouching(Ob3)||cat.isTouching(Ob4)||cat.isTouching(Ob5)||cat.isTouching(Ob6)){
                cat.position.x=250
                cat.position.y=670

                coin1.position.x=460
                coin1.position.y=540

                coin2.position.x=340
                coin2.position.y=140

                coin3.position.x=130
                coin3.position.y=210

                coin4.position.x=90
                coin4.position.y=440
                
              
                
              }
              

              if(cat.isTouching(coin1)){
                coin1.remove()
                coinsCollected+=1
              }

             
              if(cat.isTouching(coin2)){
                coin2.remove()
                coinsCollected+=1
              }


              if(cat.isTouching(coin3)){
                coin3.remove()
                coinsCollected+=1
              }

              if(cat.isTouching(coin4)){
                coin4.remove()
                coinsCollected+=1
              }

              if (cat.position.y<0 & coinsCollected>3){
                Ob1.remove()
                Ob2.remove()
                Ob3.remove()
                Ob4.remove()
                Ob5.remove()
                Ob6.remove()
                cat.remove()
                coin1.remove()
                coin2.remove()
                coin3.remove()
                coin4.remove()
                textSize(20)
                textAlign(CENTER,CENTER)
                text("Good Job, You cleared this level")
              }

              fill("#6d4c41");
              textSize(20);
              text(`coinsCollected:${coinsCollected}`, width - 150, 50);
              textAlign(CENTER, CENTER);

         
}

document.getElementById("test2").onload=
function test1(){
  swal({
    title: `Game Over`,
    text: "Oops you lost the race....!!!",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
    imageSize: "100x100",
    confirmButtonText: "Thanks For Playing"
  });
  }
