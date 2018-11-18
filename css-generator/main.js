document.getElementById('r1').oninput = cssGen;

function cssGen(){
	var div = document.getElementById('test');
	console.log(this.value);
	div.style.borderRadius = this.value + 'px';
	
	//border-radius: 30px;
	var out = document.getElementById('out');
	out.innerHTML = '-webkit-border-radius: ' + this.value + 'px;' +'\n';
	out.innerHTML += 'border-radius: ' + this.value + 'px;';
}