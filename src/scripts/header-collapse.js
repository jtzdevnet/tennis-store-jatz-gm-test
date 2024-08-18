document.querySelector('.navbar-toggle').addEventListener('click', (e) => {
	e.target.classList.toggle('open');
	document.querySelector('.navbar-collapse').classList.toggle('open');
	document.querySelector('body').classList.toggle('navbar-open');
})

window.addEventListener("resize", function(){
	if(window.innerWidth > 768){
		if(document.querySelector('body').classList.contains('navbar-open')){
			document.querySelector('.navbar-toggle').classList.remove('open');
			document.querySelector('.navbar-collapse').classList.remove('open');
			document.querySelector('body').classList.remove('navbar-open');
		}
	}
});