;
function sum() {
	var a = document.getElementById('num1').value;
	a = parseInt(a);

	var b = document.getElementById('num2').value;
	b = parseInt(b);

	res = a + b;

	document.getElementById('res').innerHTML = res;
}

function min() {
	var a = document.getElementById('num1').value;
	a = parseInt(a);

	var b = document.getElementById('num2').value;
	b = parseInt(b);

	res = a - b;

	document.getElementById('res').innerHTML = res;
}

function mul() {
	var a = document.getElementById('num1').value;
	a = parseInt(a);

	var b = document.getElementById('num2').value;
	b = parseInt(b);

	res = a * b;

	document.getElementById('res').innerHTML = res;
}

function dev() {
	var a = document.getElementById('num1').value;
	a = parseInt(a);

	var b = document.getElementById('num2').value;
	b = parseInt(b);

	if(b === 0) {
		document.getElementById('res').innerHTML = 'Division by ZERO! Not correct!'
	} else {
		res = a / b;
		document.getElementById('res').innerHTML = res;
	}
}


