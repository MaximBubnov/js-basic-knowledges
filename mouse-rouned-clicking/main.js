document.onwheel = function(event) {
	if(event.deltaY > 0) {
		document.getElementById('line').innerHTML = 'down';
	} else{
		document.getElementById('line').innerHTML = 'up';	
	}

	var speed = event.deltaY;
	speed = Math.abs(speed);

	if(speed < 100 ) {
		document.getElementById('speed').innerHTML = 'low';
	} else if (speed < 150){
		document.getElementById('speed').innerHTML = 'avarage';
	} else if (speed < 250){
		document.getElementById('speed').innerHTML = 'high';
	} else {
		document.getElementById('speed').innerHTML = 'very high';
	}
}

var left = 290;

document.getElementById('test').onwheel = function(event) {
	var line = event.deltaY;
	left = left + 0.2 * line;
	
	document.getElementById('test2').style.left = left + 'px';
	return false;
}