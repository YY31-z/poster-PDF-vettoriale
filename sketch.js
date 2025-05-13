let spacing = 100;
let ovals = [];
let myFont;

function preload() {

myFont = loadFont('HFSANTAMONICA-2.TTF'); 
}

function setup() {
  createCanvas(595,842,"svg");
  angleMode(DEGREES);
  noStroke();
  textFont(myFont);
  textAlign(CENTER, CENTER);
  textSize(20);
  fill(50); 

  for (let x = 100; x < width; x += spacing) {
    for (let y = 100; y < height; y += spacing) {
      ovals.push({
        x, y,angle: random(360),speed: random(-1, 1),
        color: lerpColor(color("LightSkyBlue"), color("pink"), random()),
        label: "YU" 
      });
    }
  }
}

function draw() {
  clear();
  background(250);
  addDownloadButton()

  for (let o of ovals) {
    push();
    translate(o.x, o.y);
    rotate(o.angle);
    fill(o.color);
    ellipse(0, 0, 100, 60);
    fill("yellow"); // 黑色文字
    text(o.label, 0, 0); // 在椭圆中心绘制文字
    pop();
    o.angle += o.speed;
  }
}