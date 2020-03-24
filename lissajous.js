let d = 80;
let width = 900;
// let n = width/d;
let height = 900;
let n= 8;

let array_x = [];
let array_y = [];

for (let i = 0; i < n; i++) {
  array_x.push([]);
  array_y.push([]);
};


function setup() {
  createCanvas(width, height);
  // canvas.parent("canvasContainer");
}
let angle = 0;

function draw() {
  background(0);

  for (let i=0; i<n;i++) {
    stroke(255);
    noFill();
    circle((i+1) * 100+50, 50, d);
    circle(50, (i + 1) * 100 + 50, d);
    push();
    strokeWeight(5)
    let x1 = (i + 1)* 100 + 50 + d / 2 * Math.cos((i + 1)*angle);
    let y1 = 50 + d / 2 * Math.sin((i + 1)*angle);
    let x2 = 50 + d / 2 * Math.cos((i + 1)*angle);
    let y2 = (i + 1) * 100 + 50 + d / 2 * Math.sin((i + 1)*angle);
    point(x1, y1);
    point(x2, y2);
    pop();
    push();
    strokeWeight(0.2);
    line(x1 , 0, x1 , height);
    line(0, y2, width, y2);
    pop();

    array_x[i].push(x1);

    // if (i===0){
    //   array_x.push(x1);
    // }
  }

  for (let i = 0; i < n; i++) {
    stroke(255);
    noFill();
    circle(50, (i + 1)* 100 + 50, d);
    push();
    strokeWeight(5)
    let x2 = 50 + d / 2 * Math.cos((i + 1) * angle);
    let y2 = (i + 1) * 100 + 50 + d / 2 * Math.sin((i + 1) * angle);
    point(x2, y2);
    pop();
    push();
    strokeWeight(0.2);
    line(0, y2, width, y2);
    pop();

    array_y[i].push(y2);

    // if (i === 0) {
    //   array_y.push(y2);
    // }
  }


  for (let i = 0; i < array_x.length; i++) {
    for (let j = 0; j < array_x.length; j++) {
      push();
      beginShape()
      for (k = 1; k < array_x[i].length; k++) {
        stroke(255);
        strokeWeight(2);
        noFill(255);
        vertex(array_x[i][k], array_y[j][k]);
      }
      endShape()
      pop();
    }
  }

  // push();
  // beginShape()
  //   for (let k = 1; k < array_x.length; k++) {
  //     stroke(255);
  //     strokeWeight(2);
  //     noFill(255);
  //     vertex(array_x[0][k], array_y[0][k]);
  //   }
  // endShape()
  // pop();

   angle += 0.01;
}
