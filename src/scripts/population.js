import { Person } from './person';

export class Population {
	constructor(canvas, options) {
		if (typeof options === 'undefined') {
			options = {};
		}
		this.canvas = canvas;
		this.ctx = this.canvas.getContext('2d');

		// Range: 1 - 5000.
		this.size = options.size || 10;

		// Range: 0.0 - 1.0
		this.density = options.density || 1.0;

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
			const p = new Person(this.ctx, x, y, r);
			this.persons.push(p);
		}
	}

	onResize() {
		// Calculate the size of a square.
		const w = this.canvas.width;
		const h = this.canvas.height;

		// A density of 1.0 means that there is by average a distance of 6
		// radiuses horizontally and vertically between each person.  A
		// density of 0.0 corresponds to a radius of half a pixel.
		const maxGrid = Math.sqrt((w * h) / this.size) / 2; // density 1.0
		const minGrid = 10.0;
		this.grid = minGrid + this.density * (maxGrid - minGrid);

		if (this.grid < minGrid) {
			// We do not bother to update the density form value.
			this.grid = 1.0;
			this.size = 2 * 2;
		}
	}
};
