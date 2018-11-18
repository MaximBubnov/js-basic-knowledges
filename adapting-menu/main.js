function menuShow(){
	document.querySelector('#menu').style.left = 0;
}

function menuHide(){
	document.querySelector('#menu').style.left = '-230px';

}

document.querySelector('#menu').onmouseover = menuShow;
document.querySelector('#menu').onmouseout = menuHide;

document.onkeypress = function(event){
	console.log(event);

	if(event.code == 'KeyM') {
		menuShow();
	}
}

document.onkeydown = function(event){
	if(event.code == 'Escape') {
		menuHide();
	}
}