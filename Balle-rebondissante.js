//variable : modif au clic
let XA = 200;
let YA = 400;
let dim = 30.0;
let direction = true
// Mise en place du code
function setup() {
  createCanvas(500, 480);
  background(0);
}
function draw(){
  background(0);
  ellipse(XA,YA,dim,dim);
  if (mouseIsPressed) {
    if (direction === true) {
    XA +=5;
    YA -=3;
   } else {
      XA -=5;
    YA +=3;
   } if (XA >= 500) {
     console.log("J'ai dépassé")
     direction = false;
   }
    //J'ajoute mon grain de sel inutil
  }
  console.log(XA,YA);
}
/*On est Lundi, vivement Vendredi !!!*/
