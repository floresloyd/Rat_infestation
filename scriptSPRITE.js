// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions.
/* global createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, ellipse, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, 
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, windowWidth, windowHeight, noStroke, 
          noFill, keyCode, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize constrain collideRectRect
          spriteimg ellipseMode CORNER */

/* THIS FILE IS EXCLUSIVELY FOR THE CONSTRUCTION AND MOVEMENTS OF THE SPRITE */


class Sprite {
    constructor (){
      this.r = 50;
      this.x = 10;
      this.y = height - this.r;
      this.vy = 0;
      this.gravity = 2;
     } // Ends constructor
  
    jump(){
      if ( this.y ==  height - this.r){
      this.vy = -25;
      }
    }
  
    move(){
      this.y += this.vy;
      this.vy += this.gravity;
      this.y = constrain(this.y, 0 , height - this.r);
    }
  
    hits(rat){
    return collideRectRect(this.x, this.y, this.r, this.r, rat.x, rat.y, rat.r, rat.r);
    }  
    show(){
      image (spriteimg, this.x, this.y, this.r, this.r);
    }
  
  
} // ends sprite class2


