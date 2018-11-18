//определение устройства

console.log(navigator);

if(navigator.userAgent.match('iPhone') || navigator.userAgent.match('Android')) {
	document.querySelector('#out').innerHTML = 'Mobile'
} else {
	document.querySelector('#out').innerHTML = 'Desktop'
	
}