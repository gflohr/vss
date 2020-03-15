export class Person {
	constructor(x, y, radius) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.state = 0;
	}

	update() {
	}

	collision(other) {
		const dx = Math.abs(other.x - this.x);
		const dy = Math.abs(other.y - this.y);

		if (dx > this.radius + other.radius && dy > this.radius + other.radius) {
			return false;
		}

		const d = Math.sqrt(dx * dx + dy * dy);
		if (d < this.radius + other.radius) {
			return true;
		}

		return false;
	}
}
