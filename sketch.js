function setup() {
  createCanvas( windowWidth , windowHeight );
  background( 0 , 0 , 0 );
}

function draw() {
  ellipse( mouseX , mouseY , 20 , 20 );
  fill( 255 , 165 , 0 , 50 );
  noStroke(); 
  
  ellipse( mouseX , mouseY , 10 , 10 );
  fill( 255 , 0 , 0 , 50 );
  noStroke();
  

}
