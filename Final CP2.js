let inconsolata;
let A = 30;
let B = 10;
let C = 1;
let mouseNotpressed = true;
let SL;

function preload() {
  inconsolata = loadFont('CP2.TTF');
}


function setup() {
  angleMode(DEGREES);
  createCanvas(800, 800,WEBGL);
  textFont(inconsolata);
  textAlign(CENTER, CENTER);
  noFill();
}



function draw() {
  
  background(220);
  noStroke();
  rotate(-90);
  
  
  push();
  rotate(90);
  let h = hour();
  fill(100);
  textSize(20);
  text(h, 0, 60);
  stroke(100);
  
  let m = minute();
  fill(100);
  textSize(35);
  text(m, 0, 130);
  stroke(100);
  
  let s = second();
  fill(100);
  textSize(50);
  stroke(60);
  text(s, 0, 230);
  pop();
  
  push();
  strokeWeight (8);
  stroke (255,100,150)
  let sr = map (s,0,59,0,360);
  arc (0,0,360,360,0,sr);
  
  strokeWeight (1);
  stroke(255);
  // rotateY(millis() / 200);
  rotateZ(millis() / 80);
  torus(180, 30,20,4);
  pop();
  

  push();
  
  strokeWeight (1);
  stroke(130);
  rotateZ(millis() / 160);
  rotateX(millis() / 200);
  sphere(100,10,10);
  // torus(100,20,8,4);
  
  noFill();
  strokeWeight (6);
  stroke (0,220,170);
  let mr = map (m,0,59,0,360);
  arc (0,0,250,250,0,mr);

  pop();
  
  push();
  strokeWeight (1);
  rotateY(millis() / 400);
  rotateZ(millis() / 500);
  stroke(100);
  sphere(40,8,8);
  
  strokeWeight (4);
  stroke (150,220,70);
  let hr = map (h % 12, 0, 12, 0, 360);
  arc (0,0,100,100,0,hr);
  pop();
  
  push();
  
//   fill('rgba(200,200,200, C)');
//   plane(800, 800);
  
  noFill();
  let X = 400-mouseX;
  strokeWeight (1);
  stroke(255);
  // rotateY(millis() / 200);
  rotateZ(millis() / X);
  SL = torus(A, B,20,4);
  pop();
  
}

function mousePressed() {
  if (A === 30) {
    A = 180;
  } else {
    A = 30;
  }
  if (B === 10) {
    B = 30;
  } else {
    B = 10;
  }
  if (C === 1) {
    C = 0;
  } else {
    C = 1;
  }
//    if (mouseNotpressed) {
//       SL.loop();

//       mouseNotpressed = false;
      
//     } else {

//       SL.stop();
//       mouseNotpressed = true;
//     }
}
