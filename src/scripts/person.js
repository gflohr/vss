class Person {
	constructor(ctx, x, y, r) {
		this.ctx = ctx;
		this.x = x;
		this.y = y;
		this.r = r;
		this.state = 0;

		this.color = this.colors(this.state);
		this.update();
	}

	draw() {
		this.ctx.beginPath();
		this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
		this.ctx.lineWidth = 1;
		this.ctx.strokeStyle = this.color;
		this.ctx.stroke();
		this.ctx.fillStyle = this.color;
		//this.ctx.fill();
	}

	update() {
		this.draw();
	}

	colors(state) {
		return '#2222ff';
	}
}

module.exports = Person;
