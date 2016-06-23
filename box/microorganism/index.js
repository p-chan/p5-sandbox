// Num
const pointNum = 300;

// Size
const pointSizeMax = 10;
const pointSizeMin = 5;

// Store
let pointStore = [];

var x = 0;
var y = 0;

function setup() {
  // canvas
  createCanvas(windowWidth, windowHeight);

  // init point
  for (var i = 0; i < pointNum; i++) {
    const point = {
      x: random(0, windowWidth),
      y: random(0, windowHeight),
      size: random(pointSizeMin, pointSizeMax)
    }
    pointStore.push(point);
  }
}

function draw() {
  // re-rendering
  background('#27ae60');

  // start
  for (var i = 0; i < pointNum; i++) {
    const p = pointStore[i];
    ellipse(p.x, p.y, p.size, p.size);
  }

  // move
  for (var i = 0; i < pointNum; i++) {
    const moveX = random(-1, 1);
    const moveY = random(-1, 1);

    pointStore[i].x += moveX;
    pointStore[i].y += moveY;
  }
}
