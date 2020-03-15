import { Person } from './person';

export class Population {
	constructor(canvas, options) {
		if (typeof options === 'undefined') {
			options = {};
		}
		this.canvas = canvas;
		this.ctx = this.canvas.getContext('2d');
		this.ctx.clearRect(0, 0, canvas.width, canvas.height);

		// Range: 1 - 5000.
		this.size = options.size || 2000;

		// Range: 0.0 - 1.0
		this.density = options.density || 0.5;

		// Calculate basic parameters.
		this.onResize();

		this.persons = [];
		// These are net widths and heights.
		const w = this.canvas.width - this.grid;
		const h = this.canvas.height - this.grid;
		const r = this.grid >> 1;
		while (this.persons.length < this.size) {
			const x = r + Math.random() * w;
			const y = r + Math.random() * h;
			const p = new Person(x, y, r);
			if (this.collision(p)) {
				continue;
			}
			this.persons.push(p);
			this.drawPerson(p);
		}
	}

	drawPerson(p) {
		const ctx = this.ctx;
		const color = this.personColor(p);

		ctx.beginPath();
		ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false);
		ctx.fillStyle = color;
		ctx.fill();

		ctx.lineWidth = 1;
		ctx.strokeStyle = color;
		ctx.stroke();
	}

	personColor(p) {
		return 'rgb(128, 147, 232)';
	}

	onResize() {
		// Calculate the size of a square.
		const w = this.canvas.width;
		const h = this.canvas.height;

		// A density of 1.0 means that there is by average a distance of 6
		// radiuses horizontally and vertically between each person.  A
		// density of 0.0 corresponds to a radius of half a pixel.
		const maxGrid = Math.sqrt((w * h) / this.size) / 2; // density 1.0
		const minGrid = 1.0;
		this.grid = minGrid + this.density * (maxGrid - minGrid);

		if (this.grid < minGrid) {
			// We do not bother to update the density form value.
			this.grid = minGrid;
			this.size = Math.floor((w * h) / (4 * minGrid * minGrid));
		}
	}

	collision(person) {
		for (let i = 0; i < this.persons.length; ++i) {
			const other = this.persons[i];

			if (person === other) {
				continue;
			}

			if (!person.collision(other)) {
				continue;
			}

			return true;
		}

		return false;
	}
};
