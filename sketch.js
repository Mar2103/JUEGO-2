var canvas;
var backgroundImage;
var form, player;
var truenosImg;
var mundoImage;
var lbt;

function preload() {
  backgroundImage = loadImage("./assets/bosque 1.avif");
  truenosImg = loadImage("./assets/trueno 2.gif");
  mundoImage = loadImage("./assets/MUNDO.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  background(backgroundImage);
  form = new Form();
    form.display();
   // lab=new LBT 
} 

function draw() {
  drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
} 

