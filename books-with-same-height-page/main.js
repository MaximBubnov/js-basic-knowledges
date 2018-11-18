var lt = document.querySelector('.left');
var rt = document.querySelector('.right');

function equalHeight() {
	lt.style.height = 'auto';
	rt.style.height = 'auto';

	var ltH = lt.offsetHeight;
	var rtH = rt.offsetHeight;

	var maxH = Math.max(ltH, rtH);

	lt.style.height = maxH + 'px';
	rt.style.height = maxH + 'px';

}

equalHeight();

window.onresize = equalHeight();