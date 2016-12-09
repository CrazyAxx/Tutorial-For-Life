function setup() {
  createCanvas( windowWidth , windowHeight);
   background( 0 , 0 , 0 );
  
}

function draw() {
  fill( 255 , 0 , 255 );
  ellipse( mouseX , mouseY , 60 );
  fill( 0 , 0 , 255 );
  ellipse( mouseX , mouseY , 50 );
  fill( 0 , 255 , 0 );
  ellipse( mouseX , mouseY , 40 );
  fill( 255 , 255 , 0 );
  ellipse( mouseX , mouseY , 30 );
  fill( 255 , 157 , 0 );
  ellipse( mouseX , mouseY , 20 );
  fill( 255 , 0 , 0 );
  ellipse( mouseX , mouseY , 10 );
  
}
