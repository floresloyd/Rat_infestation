// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions.
/* global createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, ellipse, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, 
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, windowWidth, windowHeight, noStroke, 
          noFill, keyCode, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize 
          ratimg ellipseMode CORNER */

/* THIS FILE IS EXCLUSIVELY FOR THE CONSTRUCTION OF OBSTACLES*/

class Rat {
  constructor(){
    this.r = 25;
    this.x = width;
    this.y = height - this.r; 
  }
  
  move(){
    this.x -= 8.5;
  }
  
  show (){
    image(ratimg, this.x, this.y, this.r, this.r);
  }
  
}