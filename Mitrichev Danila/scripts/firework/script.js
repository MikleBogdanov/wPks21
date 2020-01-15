var fireworks = [];
var gravity;
var firework = 0;

function setup() {
  createCanvas(document.documentElement.clientWidth, document.documentElement.clientHeight);
  colorMode(HSB);
  gravity = createVector(0, 0.2);
  stroke(255);
  strokeWeight(4);
  colorMode(RGB);
  background(236, 236, 236, 25);

  frameRate(0);
}

function draw() {
	colorMode(RGB);
	background(236, 236, 236, 25);
	
	if (random(1) < 0.3) {
		fireworks.push(new Firework());
	}
  
	for (var i = fireworks.length - 1; i >= 0; i--) {
		fireworks[i].update();
		fireworks[i].show();
	
		if (fireworks[i].done()) {
			fireworks.splice(i, 1);
		}
  }
}

var checker = setInterval(function(){
	if(firework == 1){
		frameRate(999);
	}
},200);