
var man,man1;
var ground;
var bg1;
var m,m1;
var f,f1;
var w,w1;

function preload(){ 
    //man1 = loadAnimation("IMAGES/soldier.png","IMAGES/soldier1.png");
    man1 = loadImage("IMAGES/soldier.png");

    bg1 = loadImage("IMAGES/bg2.jpg");

    m= loadImage("IMAGES/mon1.png");

    f = loadImage("IMAGES/fireball.png");

    w = loadImage("IMAGES/waterball.png");
}    

function setup(){
    createCanvas(800, 400);

    man = createSprite(50,400);
    man.addImage(man1);
    man.scale = 0.3;

    ground = createSprite(400,400,800,5);
    ground.visible = true;

    f1group = new Group();

    w1g = new Group();
}

function draw(){
    background(bg1);

    man.collide(ground);

    if (keyWentDown("space")){
      w1 = createSprite(man.x,man.y);
      w1.addImage(w);
      w1.scale = 0.1;
      w1.velocityX = 5;
      w1g.add(w1);
        }

    if(w1g.isTouching(f1group)){
      f1.destroy();
    }

    if (keyDown("UP_ARROW")){
      if(man.y>25){
        man.y = man.y-10;
      }
        }

    if (keyDown("DOWN_ARROW")){
        man.y = man.y+10;
     }

    if (keyDown("LEFT_ARROW")){
      man.x = man.x-10;
    }        

    if (keyDown("RIGHT_ARROW")){
      man.x = man.x+10;
      }        

    if(frameCount % 120 === 0){

    m1 = createSprite(800,random(0,400));
    m1.addImage(m);
    m1.scale = 0.1;
    m1.velocityX = -5;
    
     }

     if(frameCount % 180 === 0){
      f1 = createSprite(800,random(0,400));
      f1.addImage(f);
      f1.scale = 0.2;
      f1.velocityX = -5;
      f1group.add(f1);
     }
    drawSprites();
      
}