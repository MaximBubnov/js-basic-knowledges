var obj = {
	"name": "maxim",
	"age": 21
}

for (key in obj) {
	document.getElementById('out').innerHTML += key + " : " + obj[key] + '</br>';
}

/*Задание 1. Создайте ассоциативный массив содержащий 
описание человека. Задайте поля: имя, возраст, пол, 
индивидуальный номер. Заполните массив. 
Выведите его в консоли.*/

var task1 = {
	"name": "Maxim",
	age: 21,
	gender: "M",
	phone: "887755"
}

for(var key in task1){
	console.log(key + " : " + task1[key]);
}

/*Добавьте в массив метод, который будет рассчитывать 
год рождения человека исходя из его 
возраста и возвращать его.*/

var task2 = {
	"name": "Maxim",
	age: 21,
	gender: "M",
	phone: "887755",
	dateBirth: function() {
		return 2018 - this.age;
	}
}

console.log(task2.dateBirth());

/*Задание 3. Создайте ассоциативный массив свойство mas 
которое содержит массив чисел (любого количества), 
добавьте метод, который выводит сумму чисел содержащихся 
в mas.*/

var task3 = {
	"mas" : [5, 6, 34, 12, 45],
	sum : function(){
		var sum = 0;
		for(var key in this.mas) {
			sum += this.mas[key];
		}
		return sum;
	}
}

console.log(task3.sum());

/*Задание 4. Создайте массив, ключами которого служат артикулы 
товара (любое пятизначное число), а 
значениями – ассоциативный массив, который содержит 
название товара, стоимость, вес единицы товара, 
ссылку на изображение, отметку о доступности товара 
на складе.
Выведите массив в консоль. Выведите на страницу HTML 
описание первого товара.*/

var task4 = {
	"555" : {
		"name" : "Apple",
		"price" : "999",
		"wieght" : "101"
	},
	"444" : {
		"name" : "Grape",
		"price" : "150",
		"wieght" : "50"
	}
}

for(var key in task4) {
	console.log(task4[key]);
	if(key === '444') {
		for(var keyIn in task4[key]) {
			document.getElementById('task4').innerHTML += keyIn + " : " + task4[key][keyIn] + "</br>";
		}
	}
	for(var keyIn in task4[key]){
		console.log(keyIn + " : " + task4[key][keyIn]);
	}
}

var cut = '';
for(var key in task4) {
	cut += 'Name: ' + task4[key].name + '</br>';
	cut += 'Price: ' + task4[key].price + '</br>';
	cut += 'Weight: ' + task4[key].wieght + '</br>';
	cut += '<hr>';
}

document.getElementById('goods').innerHTML = cut;

/*Задание 5. Дан ассоциативный массив. Выведите его на 
страницу html в формате ключ — значение. 
Каждый элемент с новой строки.*/

var task5 = {
	"d1" : "Понедельник",
	"d2" : "Вторник",
	"d3" : "Среда",
	"d4" : "Четверг"
}

for(var key in task5) {
	document.getElementById('task5').innerHTML += key + " : " + task5[key] + "</br>";
}

/*Задание 8. Дан массив товаров, выведите товары на 
страницу цены которых больше 20*/

var goods = {
	"dd" : {
		"name": "Яблоки",
		"cost": 13
	},
	"dc" : {
		"name": "Груши",
		"cost": 23
	},
	"cd" : {
		"name": "Абрикосы",
		"cost": 33
	},
	"dee" : {
		"name": "Сливы",
		"cost": 43
	},
	"dd2" : {
		"name": "Вишни",
		"cost": 19
	},
};

document.getElementById('task8').innerHTML = "It`s price more then 20: " + "</br>";

for(var key in goods){
	if(goods[key].cost > 20) {
		document.getElementById('task8').innerHTML += goods[key].name + "</br>";
	}
}

