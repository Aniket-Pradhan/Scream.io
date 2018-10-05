var mic;
var xPos;
var yPos;
var flag;

var sprite1;
var sprite2;
var sprite3;

function preload() {
  sprite1 = loadImage('1.png');
  sprite2 = loadImage('2.png');
  sprite3 = loadImage('3.png');
}

function setup() {
  createCanvas(500, 500);
  xPos = 0;
  yPos = height/2 - 25;
  flag = 1;

  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}

function draw() {
  background(100);

  // Get the overall volume (between 0 and 1.0)
  var vol = mic.getLevel();
  fill(127);
  stroke(0);

  // Draw an ellipse with height based on volume
  // var h = map(vol, 0, 1, height, 0);
  
  if(vol>0.1) {
    xPos+=vol*2;
  }
  
  if(xPos>width-50) {
    xPos = 0;
  }

  if(flag==1) {
    image(sprite1, xPos, yPos, 50, 50);
  }
  if(flag==2) {
    image(sprite2, xPos, yPos, 50, 50);
  }
  if(flag==3) {
    image(sprite3, xPos, yPos, 50, 50);
  }

  if(flag==1 && vol>0.1) {
    flag = 2;
  }
  else if(flag==2 && vol>0.1) {
    flag = 3;
  }
  else if(flag==3 && vol>0.1) {
    flag = 1;
  }
}
