const $ = require('jquery');

function Population(canvas, options) {
	if (typeof options === 'undefined') {
		options = {};
	}
	this.canvas = canvas;

	// Range: 1 - 5000.
	this.size = options.size || 450;

	// Range: 0.0 - 1.0
	this.density = options.density || 0.5;

	this.onResize = function() {
		// Calculate the size of a square.
		const w = this.canvas.width;
		const h = this.canvas.height;

		// A density of 1.0 means that there is by average a distance of 2
		// radiuses horizontally and vertically between each person.  A
		// density of 0.0 corresponds to a radius of half a pixel.
		const maxGrid = (w * h / this.size) >> 2; // density 0.0
		const minGrid = 1.0;
		this.grid = Math.floor(minGrid + this.density * (maxGrid - minGrid));

		if (this.grid < 1) {
			// We do not bother to update the density form value.
			this.grid = 1.0;
			this.size = Math.floor((w * h) >> 2);
		}

	};
}

$(function () {
	const p = new Population(document.querySelector('#vss'));
	p.onResize();
	console.log(p);
});
