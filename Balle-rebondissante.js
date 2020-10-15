//variable : modif au clic
  let XA= 200;
  let YA= 400;
  let dim= 30.0;
  let XA1= 150;
  let YA1= 300;
  let dim1= 60.0;
  let directionVerticale = true;
  let directionHorizontale = true;

// Mise en place du code
function setup() {
  createCanvas(500, 480);
  background(0);
}
function createBall(X, Y, D){
  ellipse(X,Y,D);
  fill(255, 204, 0);
  ellipse(X+20, Y+20, D);
  fill(131, 46, 242);
}
function draw(){
  createBall(200, 400, 30.0);
  if (mouseIsPressed) {
    createBall(XA, YA, 30);
    if (directionVerticale === true) {
      YA +=3;
    } else {
      YA -=3;
    }
    if (directionHorizontale === true) {
      XA +=3;
    } else {
      XA -=3;
    }
    if (XA >= 500) {
     console.log("J'ai dépassé")
     directionHorizontale = false;
    }
    if (YA >= 480) {
      console.log("J'ai dépassé")
      directionVerticale = false;
    }
    if (XA <= 0) {
     console.log("J'ai dépassé")
     directionHorizontale = true;
    }
    if (YA <= 0) {
      console.log("J'ai dépassé")
      directionVerticale = true;
    }
  }
}
