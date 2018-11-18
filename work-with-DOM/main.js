//создание элементов
var p = document.createElement('p');

//добавление на страницу 
//перед document.querySelector('#out')
document.body.insertBefore(p, document.querySelector('#out'));

//манипуляции с элементом
p.innerHTML = 'Hello world';
p.classList.add('main', 'green');


var dir4 = document.getElementById('four4'); //1
var p = dir4.getElementsByTagName('p');// array

var div = document.getElementsByTagName('div');
div[2].style.background = 'red';
console.log(p);

//----------------------
//первый встреченный элемент на странице
//Like a CSS selectors
//<p>one p</p>
var d = document.querySelector('div p');

//<p>four p</p>
var d1 = document.querySelector('#four4 p');
console.log(d1);

//array
var div2 = document.querySelectorAll('div');
console.log(div2);

//--------------------------
//Тоже работает
four4.style.background = 'red';

//--------------------------

var dv = document.querySelector('div');

//получем вложенные элементы
//т.к есть пробелы, то кол-во элементов больше
//если все сделать в одну строку, то будет 4
var child = dv.childNodes;
//без учета всяких пробелов и етс
child = dv.children;
console.log(child);

//----------------------------
//Получим теперь родителя parentElement
var hype = document.querySelector('a');

//nextElementSibling слежующий элемент
console.log(hype.parentElement.nextElementSibling);

//previousElementSibling предыдущий элемент