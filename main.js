let isEndGTyping = true;
let dataText = "I believe that I'll be able to make great things in the nearest future!";

document.addEventListener('DOMContentLoaded', () => {
	const scrollItems = document.querySelectorAll('._anim-items');

	const scrollAnimation = () => {
		let windowCenter = (window.innerHeight) + window.scrollY;
		scrollItems.forEach(el => {
			let scrollOffset = el.offsetTop + (el.offsetHeight / 2);
			if (windowCenter >= scrollOffset) {
				el.classList.add('active-anime');
				if(el.classList.contains('satodsan-uvemopag') && isEndGTyping) {
					isEndGTyping = false;
					StartTextAnimation(0);
				}
			} else {
				el.classList.remove('active-anime');

				if(el.classList.contains('satodsan-uvemopag')){
					isEndGTyping = true;
					StartTextAnimation(dataText.length + 1);
				}
			}

			
		});
	};
    setTimeout(() => {
        scrollAnimation();    
    }, 400);
	
	window.addEventListener('scroll', () => {
		scrollAnimation();
	});
});



function typeWriter(text, i, fnCallback) {

	if (i < text.length) {

	document.querySelector(".satodsan-uvemopag").innerHTML = text.substring(0, i+1);

	setTimeout(function() {
		typeWriter(text, i + 1, fnCallback)
	}, 100);
	}

	else if (typeof fnCallback == 'function') {
	setTimeout(fnCallback, 700);
	}
}

function StartTextAnimation(i) {
	document.querySelector(".satodsan-uvemopag").innerHTML = '';
	if (i < dataText.length) {
		typeWriter(dataText, 0, function(){
			StartTextAnimation(i + 1);
		});
	}
}

