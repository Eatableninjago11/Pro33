var bg;
var  snow1,snow2,snow3,snow4;



function preload(){
  bg = loadImage("snow2.jpg");
 

}

function setup() {
  createCanvas(1000,1000);
  


  snow1 = new Snow(200,10);
  snow2 = new Snow(500,10);
  snow3 = new Snow(800,10);
  snow4 = new Snow(400,10);
}

function draw() {
  background(bg);
  


  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  
}

