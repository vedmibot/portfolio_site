// Adapted from Dan Shiffman, natureofcode.com
var numBalls = 300;
var a = 0;
var Balls = [];

// BALL CONSTRUCTOR FUNCTION

var Ball = function (x, y) {
	this.pos = createVector(x, y);
	this.velocity = createVector(random(-10, 10), random(-10, 10));
	this.acceleration = createVector(0, 0);
	this.xm = createVector(0, 0);
	this.size = 2;
};

// BALL DRAW METHOD

Ball.prototype.draw = function () {
	noStroke();
	fill(255, 255, 255, 125);
	ellipse(this.pos.x, this.pos.y, this.size * 1.3, this.size * 1.3);
	fill(255, 255, 255);
	ellipse(this.pos.x, this.pos.y, this.size, this.size);
};

// BALL MOTION METHOD

Ball.prototype.move = function () {
	this.xm.set(mouseX, mouseY);
	this.xm.sub(this.pos);
	this.acceleration.set(this.xm.x, this.xm.y);
	this.acceleration.normalize();
	this.acceleration.mult(0.3);
	this.velocity.add(this.acceleration);
	this.velocity.limit(10);
	this.pos.add(this.velocity);
};

// FILL ARRAY "BALLS" FUNCTION

var AddNew = function () {
	for (var i = 0; i < numBalls; i++) {
		Balls.push(new Ball(mouseX, mouseY));
	}
};

//MOUSE CLICKED FUNCTION

mouseClicked = function () {
	AddNew();
};

// DRAW FUNCTION

function setup() {
	createCanvas(1000, 800);
}

draw = function () {
	background(0, 0, 0);
	for (var i = 0; i < Balls.length; i++) {
		Balls[i].move();
		Balls[i].draw();
	}
};