//список дел
var todo = [];

//если у меня есть что-то в localStorage
//то выводим сразу же
if(localStorage.getItem('todo')  !== undefined) {
	todo = JSON.parse(localStorage.getItem('todo'));
	outToDo();
}

document.getElementById('add').onclick = function(){
	var d = document.getElementById('in').value;

	// {TODO: Какое-то дело, CHECK: false}
	var temp = {};
	temp.todo = d;
	temp.check = false;

	var i = todo.length;

	//добавляем в конец
	todo[i] = temp;

	console.log(todo);

	outToDo();

	localStorage.setItem('todo', JSON.stringify(todo));

	document.getElementById('in').value = '';
}

function outToDo() {
	var str = '';

	for(var key in todo) {

		if(todo[key].check == true) {
			str += '<input type="checkbox" checked>';
		} else {
			str += '<input type="checkbox">';
			
		}

		str += todo[key].todo + '</br>';
		
	}

	document.getElementById('out').innerHTML = str;
}