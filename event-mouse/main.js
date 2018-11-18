var block = document.getElementById('one');

//Mouse click
block.onclick = () => {
	block.style.background = 'green';
	block.onclick = null;
}

var doubleCkickBlock = document.getElementById('two');
//Double mouse click
doubleCkickBlock.ondblclick = () => {
	doubleCkickBlock.style.background = 'red';
}

var rigthButtonClick = document.getElementById('t3');
//Rigth button click = context menu
rigthButtonClick.oncontextmenu = function () {
	this.style.background = 'black';
	return false;
}
//Turn off rigth button click on all web-page
document.oncontextmenu = () => {
	return false;
}

//Наведение мыши
var t4 = document.getElementById('t4');
t4.onmouseenter = () => {
	t4.style.background = 'blue';
}
//Мышь уходит с элемента
t4.onmouseleave = () => {
	t4.style.background = 'black';
}

//Движение мыши внутри блока | Расширим блок в длину по движению
var a = 0;
var t5 = document.getElementById('t5');
t5.onmousemove = () => {
	a++;
	t5.style.width = 100 + a + 'px';
}

//Нажатие мышки и держим кнопку (любую)
var t5 = document.getElementById('t5');
t5.onmousedown = (event) => {
	t5.style.background = 'black';
	console.log(event); // какую кнопку мы нажали вся инфа о ней
}
//отпустили кнопку
t5.onmouseup = (event) => {
	t5.style.background = 'green';
	console.log(event); // какую кнопку мы нажали вся инфа о ней
}