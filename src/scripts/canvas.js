const canvas = document.querySelector('#vss');
const header = document.querySelector('#header');

initCanvas();

function initCanvas() {
	canvas.height = window.innerHeight - header.offsetHeight;
}
