/*document.onkeypress = function (event) {
	console.log(event);
}*/

//вводим только числа
document.getElementById('in').onkeypress = function(event) {
	if(event.keyCode  < 48 || event.keyCode > 57) {
		console.log('not a number')
		return false;
	}
}


//поле ввода пароля
var str = ''; //наш пароль
document.getElementById('test').onkeypress = function (event){
	str = str + event.key;
	console.log(str);

	//97-122
	//65-90
	var s = String.fromCharCode(Math.floor(Math.random() * (122 - 65) + 65));
	this.value += s; //рандомные символы
	
	return false;
}

//двигаем блок влево - вправо
var block = document.getElementById('f1');
var left = 0;
var top1 = 0;

document.onkeydown = function (event) {
	if(event.key == 'ArrowRight') {
		block.style.left = left + 'px';
		left++;
	}
	else if(event.key == 'ArrowDown') {
		block.style.top = top1 + 'px';
		top1++;
	}
}

document.onkeyup = function(event) {
	console.log('Key up');
}


