var radio = document.getElementsByName('prim');

for(var i = 0; i < radio.length; i++) {
	radio[i].onchange = f1;
}

function f1(){
	console.log(this.value);
}

var b = document.getElementById('one').onclick = checkRadio;

function checkRadio(){
	var n = document.getElementsByName('prim');
	for(var i = 0; i < n.length; i++) {
		if(n[i].checked) {
			alert(n[i].value);
			break;
		}
	}
}