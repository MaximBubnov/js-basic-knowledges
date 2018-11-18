var num = Math.floor(Math.random() * (10 - 1) + 1);
console.log(num);
var count = 3;


document.getElementById('check').onclick = function(){
    if(count > 0) {
    	var p = document.getElementById('out');
		var mynum = document.getElementById('mynum').value;

    	if(mynum == num) {
    		p.innerHTML = 'Successfull! You are win!';
    	} else if(mynum > num){
    		p.innerHTML = 'Your num is more';
   	 	} else if (mynum < num){
    		p.innerHTML = 'You num is less';
    	}
    	document.getElementById('count').innerHTML = 'Попыток: ' + count;
    	count = count - 1;
    } else {
    	alert('You are lose!');
    	location.reload();
    }
}