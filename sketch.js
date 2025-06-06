function setup() {
  createCanvas(800, 400);
  noLoop();
}

function draw() {
  background(135, 206, 235); // Céu azul

  // Sol
  fill(255, 204, 0);
  noStroke();
  ellipse(700, 80, 60, 60);

  // Prédios ao fundo
  fill(100);
  rect(50, 160, 60, 140);
  rect(130, 130, 50, 170);
  rect(200, 150, 70, 150);
  rect(290, 140, 60, 160);
  rect(370, 120, 50, 180);
  rect(440, 160, 60, 140);

  // Campo verde
  fill(34, 139, 34);
  rect(0, 300, width, 100);

  // Árvores no campo
  drawSimpleTree(100, 270);
  drawSimpleTree(200, 280);
  drawSimpleTree(600, 275);
  
}

function drawSimpleTree(x, y) {
  // Tronco
  fill(101, 67, 33);
  rect(x, y, 10, 30);

  // Copa da árvore
  fill(34, 139, 34);
  ellipse(x + 5, y, 30, 30);
}
function setup() {
  createCanvas(800, 400);
  noLoop();
}

function draw() {
  background(135, 206, 235); // Céu azul

  // Sol
  fill(255, 204, 0);
  noStroke();
  ellipse(700, 80, 60, 60);

  // Prédios ao fundo
  fill(100);
  rect(50, 160, 60, 140);
  rect(130, 130, 50, 170);
  rect(200, 150, 70, 150);
  rect(290, 140, 60, 160);
  rect(370, 120, 50, 180);
  rect(440, 160, 60, 140);

  // Campo verde
  fill(34, 139, 34);
  rect(0, 300, width, 100);

  // Árvores
  drawSimpleTree(100, 270);
  drawSimpleTree(200, 280);
  drawSimpleTree(600, 275);

  // Plantinhas (tufos de grama)
  drawPlant(150, 320);
  drawPlant(250, 330);
  drawPlant(350, 325);
  drawPlant(450, 315);
  drawPlant(550, 335);
  drawPlant(650, 310);
}

function drawSimpleTree(x, y) {
  fill(101, 67, 33); // Tronco
  rect(x, y, 10, 30);

  fill(34, 139, 34); // Copa
  ellipse(x + 5, y, 30, 30);
}

function drawPlant(x, y) {
  stroke(0, 100, 0);
  strokeWeight(2);
  line(x, y, x - 5, y - 10);
  line(x, y, x, y - 12);
  line(x, y, x + 5, y - 10);
  noStroke();
}