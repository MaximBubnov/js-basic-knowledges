var sdvig = 0;
var test = document.getElementById('test');
var time;

//move();

function move() {
	test.style.marginLeft = sdvig + 'px';
	sdvig += 3;
    time = setTimeout(move, 50)
}

/*//запуск функции каждые 50 милисекунд
//в timer кладется интервал
var timer = setInterval(move, 50);*/

//останавливаем интервал
document.getElementById('stop').onclick = function(){
	//clearInterval(timer);
	clearTimeout(time);
}

//единократное выполнение фун-ции через 5 сек
//setTimeout(move, 5000);

var a = 10;
obr();

function obr() {
	document.getElementById('out').innerHTML = a;
	a--;
	if(a < 0) {
		clearTimeout(time);
		alert('Timer turn off')
	} else {
		time = setTimeout(obr, 1000);
	}
	
}
