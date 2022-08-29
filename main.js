document.addEventListener('DOMContentLoaded', () => {
	const scrollItems = document.querySelectorAll('._anim-items');

	const scrollAnimation = () => {
		let windowCenter = (window.innerHeight) + window.scrollY;
		scrollItems.forEach(el => {
			let scrollOffset = el.offsetTop + (el.offsetHeight / 4);
			if (windowCenter >= scrollOffset) {
				el.classList.add('active-anime');
			} else {
				el.classList.remove('active-anime');
			}
		});
	};
    setTimeout(() => {
        scrollAnimation();    
    }, 300);
	
	window.addEventListener('scroll', () => {
		scrollAnimation();
	});
});

// const el = document.querySelectorAll(".tools");

// setInterval(() => {
//     el.forEach(el => {
//         console.log(el.offsetTop);
//     });
// }, 1000);