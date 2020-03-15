import { Population } from './population';

const $ = require('jquery');
const canvas = document.querySelector('#vss');
const options = {};
let p;

$(function () {
	canvas.width = canvas.offsetWidth;
	canvas.height = Math.floor(canvas.width / 2);
	p = new Population(canvas);

	$('input').on('change', () => updateValues(p));
	updateValues(p);
});

function updateValues(p) {
	$('input').each((index, el) => {
		const id = el.id;
		if (el.hasAttribute('vss-static')) {
			options[id] = el.value;
			p = new Population(canvas, options);
		} else {
			p[id] = el.value;
		}

		const displaySelector = `#${id}-value`;
		const displayElement = $(displaySelector);
		displayElement.text(el.value);
	});
}
