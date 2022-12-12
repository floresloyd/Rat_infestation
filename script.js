// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions.
/* global createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, ellipse, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, 
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, windowWidth, windowHeight, noStroke, 
          noFill, keyCode, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize key collideRectRect noLoop
          Sprite Rat */

/* THIS IS THE MAIN FILE  */

//let backGround;
let sprite;
let spriteimg;
let ratimg;
let score;
let i;
let randomizer;
let speedi;

let rats = [];

var backGround;
var x1=0;
var x2;
var scrollSpeed = 2;


function setup(){
  //preloads
  createCanvas (720, 400)
  backGround = loadImage("https://cdn.glitch.com/6db47497-4a27-422d-b350-fd759ff3a5b5%2FBackground.png?v=1628011927836")
  spriteimg = loadImage("https://cdn.glitch.com/6db47497-4a27-422d-b350-fd759ff3a5b5%2FStatueofLiberty.png?v=1628012410018")
  ratimg = loadImage("https://cdn.glitch.com/6db47497-4a27-422d-b350-fd759ff3a5b5%2Fratta.png?v=1628015628663")
  
  sprite = new Sprite();
  
  x2 = width;
  
  
  score = 0;
  i = 2000;
  speedi = 3000;
  randomizer = 0.01;
} // ends setup function

function keyPressed(){
  if (key == " "){
    sprite.jump();
  }
} // ends keypressed function

function draw(){
  background(backGround);
  image(backGround,x1,0,width,height);
  image(backGround,x2,0,width,height);
  
  x1 -= scrollSpeed;
  x2 -= scrollSpeed;
  
  sprite.show();
  sprite.move();
  
  // RATS AND COLLISSION CHECK
  for (let r of rats){
    r.move();
    r.show();
      if (sprite.hits(r)){
     fill(0);
    textSize(50);
    text (`Game Over!`, height / 2, width / 2);
    noLoop();
  }
    
    else {
      score += 1;
    }
    
  }
  // chance of rats to appear
  if (random (1) < 0.00005){
    rats.push(new Rat());
  }
  

textSize(20);
  stroke(0);
  strokeWeight(1);
  fill(0);
  
  text(`Score : ` + score, 300, 25);
  
  if (score > i) {
    sprite.show();
    text("Score : " +score, 300,25);
  }
  
  if (score > i +1000) {
    background(backGround);
    i += 2000;
  }
  
  if (random(1.25) < randomizer) 
    rats.push(new Rat());
  
  if (sprite && rats.lenght >= 1)
    score +=1;
  for (let r of rats) {
    r.show();
    

 }
} // ends draw function