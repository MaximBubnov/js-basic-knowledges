 var ourNumber = Math.floor(Math.random() * (100 - 1)) + 1;
 console.log(ourNumber);
 var count = 0;

function f(){
    var userNumber = document.getElementById('in1').value;
    userNumber = parseInt(userNumber);
    
    var out = document.getElementById('out');
    var c = document.getElementById('count');
 
    if(userNumber < ourNumber) {
    	out.innerHTML = "Your number is less";
    	++count;
    	c.innerHTML = count;
    } else if(userNumber > ourNumber) {
    	out.innerHTML = "Your number is more";
    	++count;
    	c.innerHTML = count;
    } else {
    	++count;
    	out.innerHTML = "Success! You are win! Your try count: " + count;
    	console.log(count);
    	c.innerHTML = count;
    }
}
