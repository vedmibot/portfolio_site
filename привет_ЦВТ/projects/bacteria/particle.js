

function Particle(x, y) {
	this.x = x;
	this.y = y;
	this.history = [];

	this.update = function () {
		this.y += random(-10, 10);
		this.x += random(-10, 10);
		let v = createVector(this.x, this.y);
		this.history.push(v);

		if (this.history.length > 15) {
			this.history.shift();
		}
	}

	this.show = function () {
		fill(255);
		ellipse(this.x, this.y, 15, 15);

		for (let i = 0; i < this.history.length; i++) {
			fill(random(255));
			ellipse(this.history[i].x, this.history[i].y, i, i);
		}
	}

}