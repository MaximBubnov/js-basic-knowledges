//вытащим из localStorage

if(localStorage.getItem('bdColor') !== null) {
	var colr = localStorage.getItem('bdColor');
	document.body.style.background = colr;

}

document.getElementById('green').onclick = function(){
	document.body.style.background = 'green';

	//кладем в localStorage 
	//ключ - сам придумал
	//значение - и есть значение (!строка!)
	//!!причем - это аналог Мапы
	//т.е при одинаковых ключах - значение
	//перезапишется на последнее
	localStorage.setItem('bdColor', 'green');
}

document.getElementById('red').onclick = function(){
	document.body.style.background = 'red';

	localStorage.setItem('bdColor', 'red');
}