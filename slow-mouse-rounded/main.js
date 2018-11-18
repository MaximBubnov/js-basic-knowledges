//все, что здесь написано, будет выполняться только
//после загрузки страницы = defer
window.onload = function(){
	//window.scrollTo(x,y)

	var 
		scrolled,
		timer
	;

	document.getElementById('tp').onclick = function(){
		scrolled = window.pageYOffset;
		scrollToTop();
	}

	function scrollToTop(){
		if(scrolled > 0) {
			window.scrollTo(0, scrolled);
			scrolled = scrolled - 100; //100px - speed
			timer = setTimeout(scrollToTop, 50);
		} else {
			clearTimeout(timer);
			window.scrollTo(0,0);
		}
	}
}