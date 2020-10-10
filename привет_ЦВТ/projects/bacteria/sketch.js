let particles = [];

function setup() {
	createCanvas(1000, 800);
	particle = new Particle(200, 200);



	//   for (let i = 0; i < 50; i++) {
	//     particles.push(new Particle(random(0, width), random(0, height)));
	//   }
}

function mousePressed() {
	particles.push(new Particle(mouseX, mouseY));
}

function draw() {
	background(50, 100, 150);

	for (let el of particles) {
		el.update();
		el.show();
	}
	particle.update();
	particle.show();
}