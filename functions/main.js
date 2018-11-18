//function with name
function one() {
	alert( "Привет" ); // Привет
}
//one();

function two() {
	var years = prompt('Сколько вам лет?', 100);
	alert('Вам ' + years + ' лет!') // Вам N лет
}
//two();

function three(){
	var isAdmin = confirm("Вы - администратор?");
	alert( isAdmin ); //true
}
//three();

function f1() {
	return 9;
}
console.log( 5 + f1() );  // 14

//function with parametres
function sum(a, b) {
	a = a || 10; //если забыли передать a, то будет 10
	b = b || 20; //если забыли передать b, то будет 20
	return a + b;
}
console.log(sum(11, 2)); // 13
console.log(sum(11)); // 31
console.log(sum()); // 30

//for button with parametres we need anon-function!
document.getElementById('out').onclick = function () {
	alert(5 + 6); //11
};

var c = () => {
	alert('Work!!!');
}
c(); //Work!!