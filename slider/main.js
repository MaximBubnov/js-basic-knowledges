document.getElementById('slider-left').onclick = sliderLeft;
autoSlider();
var left = 0;
var timer;

function sliderLeft(){
	var polosa = document.getElementById('polosa');
	left = left - 48;
	if(left < -144) {
		left = 0;
		clearTimeout(timer);
	}
	polosa.style.left = left + 'px';

	autoSlider();
}

function autoSlider(){
	timer = setTimeout(sliderLeft, 1000);

}