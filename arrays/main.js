var mass = [99, 199, 'Hello', 'Maxim'];

function massOut(){
	var p = document.getElementById('out');
	var str = '';

	for(var i = 0; i < mass.length; i++) {
		str += i + ' ----- ' + mass[i] + '</br>';
	}

	p.innerHTML = str;
}

massOut();

function p(){
	var c = document.getElementById("in1").value;
	mass.push(c);
	massOut();	
}

function d(){
	mass.pop();
	massOut();
}