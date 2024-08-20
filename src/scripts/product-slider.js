let currentSliderItem = 1;

document.addEventListener("click", function(e){
	const target = e.target.closest(".slider-controls a"); // Or any other selector.
	const indicator = e.target.closest(".slider-indicators a");
	if(target){
		let targetSlider = target.parentNode.dataset.targetSlider;
		let currentSliderPos = 0;
		if (document.querySelector(targetSlider).style.transform != '') {
			currentSliderPos = parseInt(document.querySelector(targetSlider).style.transform.replace("translateX(","").replace("px)","").replace("-",""));
		}
		const slideAmount = calculateSlideSize(target);
		if (target.getAttribute('href') == '#next'){
			if( (currentSliderPos + slideAmount) <= document.querySelector(targetSlider).scrollWidth){
				currentSliderItem++;
				document.querySelectorAll('.slider-indicators a').forEach(el => el.classList.remove('active'));
				document.querySelector('.slider-indicators li:nth-child('+currentSliderItem+') a').classList.add('active');
				document.querySelector(targetSlider).style = 'transform: translateX(-'+ (currentSliderPos + slideAmount) +'px)';
			}
		}
		if (target.getAttribute('href') == '#prev'){
			if( (currentSliderPos - slideAmount) >= 0){
				currentSliderItem--;
				document.querySelectorAll('.slider-indicators a').forEach(el => el.classList.remove('active'));
				document.querySelector('.slider-indicators li:nth-child('+currentSliderItem+') a').classList.add('active');
				document.querySelector(targetSlider).style = 'transform: translateX(-'+ (currentSliderPos - slideAmount) +'px)';
			}
		}
	}
	if(indicator){
		e.preventDefault();
		document.querySelectorAll('.slider-indicators a').forEach(el => el.classList.remove('active'));
		e.target.classList.add('active');
		const targetSlide = e.target.dataset.slideTo;
		let targetSlider = e.target.parentNode;
		let slideAmount = calculateSlideSize(targetSlider);
		document.querySelector(targetSlider.parentNode.dataset.targetSlider).style = 'transform: translateX(-'+ (slideAmount * (targetSlide - 1)) +'px)';
		currentSliderItem = targetSlide;
	}
});

function calculateSlideSize(target){
	let targetSlider = target.parentNode.dataset.targetSlider;
	let firstSlide = document.querySelector(targetSlider).children[0];
	let slideMargin = parseInt(window.getComputedStyle(firstSlide).marginRight.replace('px', ''));
	const slideAmount = firstSlide.offsetWidth + slideMargin;
	return slideAmount;
}

document.getElementById("productSlider").addEventListener('touchstart', function (event) {
    touchstartX = event.changedTouches[0].screenX;
}, false);

document.getElementById("productSlider").addEventListener('touchend', function (event) {
    touchendX = event.changedTouches[0].screenX;
    handleGesture();
}, false);


function handleGesture() {
    if (touchendX < touchstartX) {
		document.querySelector('.slider-controls .control-right').click();
    }

    if (touchendX > touchstartX) {
		document.querySelector('.slider-controls .control-left').click();
    }

}