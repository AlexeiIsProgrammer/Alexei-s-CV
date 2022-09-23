//Parallax effect
let leftParallax = document.querySelectorAll('.relative-figures > img:first-child');
new simpleParallax(leftParallax, {
	orientation: 'left',
	overflow: true,
	delay: 0,
	scale: 2,
});

let upParallax = document.querySelectorAll('.relative-figures > img:last-child');
new simpleParallax(upParallax, {
	overflow: true,
	delay: 0,
	scale: 2,
});

let leftYellowBlock = document.querySelectorAll('.yellow-block > img:first-child');
new simpleParallax(leftYellowBlock, {
	overflow: true,
	delay: 0,
	scale: 2,
});

let upYellowBlock = document.querySelectorAll('.yellow-block > img:last-child');
new simpleParallax(upYellowBlock, {
	orientation: 'left',
	overflow: true,
	delay: 0,
	scale: 2,
});

let isEndGTyping = true;
let dataText = "I believe that I'll be able to make great things in the nearest future!";

document.addEventListener('DOMContentLoaded', () => {
	const scrollItems = document.querySelectorAll('._anim-items');

	//Sqew animation
		scrollItems.forEach(el => {
			if(el.parentElement.classList.contains('relative-figures')) {
				el.classList.add('interval-animation');
			}
		});

	const scrollAnimation = () => {
		let windowCenter = (window.innerHeight) + window.scrollY;
		scrollItems.forEach(el => {
			let scrollOffset;
			
			if(el.parentElement.classList.contains('relative-figures')) {

				//console.log('Top:' + el.getBoundingClientRect().top + '---' + 'Height:' +el.offsetHeight);
				scrollOffset = el.getBoundingClientRect().top;

				if (scrollOffset < 700) {
					el.classList.add('active-anime');
				} else {
					el.classList.remove('active-anime');
				}
			}
			else {
				scrollOffset = el.offsetTop + (el.offsetHeight / 2);

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
					}
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

	if(isEndGTyping){
		return;
	}
	else if (i < text.length) {

	document.querySelector(".satodsan-uvemopag").innerHTML = text.substring(0, i+1);

	setTimeout(function() {
		typeWriter(text, i + 1, fnCallback)
	}, 30);
	}

	else if (typeof fnCallback == 'function') {
		return;	
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

const getMain = document.querySelector('main');

window.addEventListener('DOMContentLoaded', function(event) {
    if(this.screen.width <= 768) {
		getMain.classList.remove('pismeco');
	}
	else {
		getMain.classList.add('pismeco');
	}
}, true)

window.addEventListener('resize', function(event) {
    if(this.screen.width <= 768) {
		getMain.classList.remove('pismeco');
	}
	else {
		getMain.classList.add('pismeco');
	}
}, true);

const contactBtn = document.getElementById('submit');
const wrapperEnvelope = document.querySelector('.wrapper');

contactBtn.addEventListener('click', () => {

	wrapperEnvelope.style.display = 'flex';
	document.body.style.overflow = 'hidden';

	window.scroll(0,0);

	wrapperEnvelope.classList.add('show-envelope');
	document.querySelector('main').classList.add('send-feedback');

	setTimeout(() => {
		wrapperEnvelope.classList.add('open-envelope');
	}, 500);

	setTimeout(() => {
		wrapperEnvelope.classList.remove('open-envelope');
	}, 4500);
})

// const textElements = document.querySelectorAll(".textStyle");

// textElements.forEach(el => {
// 	if(!el.classList.contains('nameText')) {
// 		el.addEventListener('mouseover', function() {
// 			this.classList.add('bgChoose');
// 		})
	
// 		el.addEventListener('mouseout', function() {
// 			this.classList.remove('bgChoose');
// 		})
// 	}
// });



// const relativeFigures = document.querySelectorAll('.simpleParallax > img');
// let isStart = true;
// setInterval(() => {
// 	if(isStart) {
// 		relativeFigures.forEach(el => {
// 			el.classList.add('.translatingFigures');
// 		});

// 		isStart = false;
// 	}
// 	else {
// 		relativeFigures.forEach(el => {
// 			el.classList.remove('.translatingFigures');
// 		});

// 		isStart = true;
// 	}
// }, 750);



