const $ = require('jquery');
import { Population } from './population';

$(function () {
	const canvas = document.querySelector('#vss');
	canvas.width = canvas.offsetWidth;
	canvas.height = Math.floor(canvas.width / 2);
	const p = new Population(canvas);
	console.log(p);
});
