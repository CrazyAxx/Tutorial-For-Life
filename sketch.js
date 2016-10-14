function setup() {
  createCanvas( windowWidth , windowHeight );
  background( 0 , 0 , 0 );
}

function draw() {
  ellipse( mouseX , 60 , 60 );
  fill( 255 , 0 , 0 );
  noStroke();
  
  ellipse( mouseX , 50 , 50 );
  fill( 255 , 165 , 0 );
  noStroke(); 
  
  ellipse( mouseX , 40 , 40 );
  fill( 255 , 255 , 0 );
  noStroke();
  
  ellipse( mouseX , 30 , 30);
  fill( 0 , 255 , 0 );
  noStroke();
  
  ellipse( mouseX , 20 , 20);
  fill( 0 , 0 , 255 );
  noStroke();
  
  ellipse( mouseX , 10 , 10 );
  fill( 255 , 0 , 255 );
  noStroke();
}
