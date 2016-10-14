function setup() {
  createCanvas( windowWidth , windowHeight );
}

function draw() {
  ellipse( mouseX , mouseY , 20 , 20 );
  fill( 255 , 165 , 0 );
  noStroke(); 
  
  ellipse( mouseX , mouseY , 10 , 10 );
  fill( 255 , 0 , 0 );
  noStroke();
  

}
