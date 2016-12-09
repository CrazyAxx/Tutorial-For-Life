function setup() {
  createCanvas( windowWidth , windowHeight);
  
  bakcground( 0 , 0 , 0 );
  
}

function draw() {
  fill( 255 , 0 , 0 );
  ellipse( mouseX , mouseY , 10 );
  fill( 255 , 157 , 0 );
  ellipse( mouseX , mouseY , 10 );
  fill( 255 , 255 , 0 );
  ellipse( mouseX , mouseY , 10 );
  fill( 0 , 255 , 0 );
  ellipse( mouseX , mouseY , 10 );
  fill( 0 , 0 , 255 );
  ellipse( mouseX , mouseY , 10 );
  fill( 255 , 0 , 255 );
  ellipse( mouseX , mouseY , 10 );
  
}
