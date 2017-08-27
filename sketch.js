function setup(){
  createCanvas(displayWidth, displayHeight);
  background(0);
}

var x = 0;
var y = 0;
var xCol;
var yCol;
var speed;
var col = 0;
var flag = true;

function draw(){
  y = sin(x);
  stroke(0,0,col);
  //stroke(255,0,0);
  for (var i = 1 ; i < 50 ; i=i+0.05) {
  	xCol = map(x,0,i,0,displayHeight);
  	yCol = map(y,0,i/50,displayWidth/2,0);
  	point(yCol,xCol);
  }
  //speed = map(mouseX,0,1500,0,0.01);
  x = x + 0.1;
  if (flag) {
  	col++;
  } else {
  	col--;
  }
  if (col === 0) {
  	flag = true;
  }
  if (col === 255) {
  	flag = false;
  }
  console.log(col);
}


