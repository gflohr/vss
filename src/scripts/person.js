export class Person {
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
		const ctx = this.ctx;

		ctx.beginPath();
		ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
		ctx.fillStyle = this.color;
		ctx.fill();

		ctx.lineWidth = 1;
		ctx.strokeStyle = this.color;
		ctx.stroke();
	}

	update() {
		this.draw();
	}

	colors(state) {
		return '#2222ff';
	}
}
