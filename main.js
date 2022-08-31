document.addEventListener('DOMContentLoaded', () => {
	const scrollItems = document.querySelectorAll('._anim-items');

	const scrollAnimation = () => {
		let windowCenter = (window.innerHeight ) + window.scrollY;
		scrollItems.forEach(el => {
			let scrollOffset = el.offsetTop + (el.offsetHeight / 2);
			if (windowCenter >= scrollOffset) {
				el.classList.add('active-anime');
			} else {
				el.classList.remove('active-anime');
			}

			el.addEventListener('mouseover', function () {
				this.classList.remove('active-anime');
				setTimeout(()=>{
					this.classList.add('active-anime');
				}, 1000);
			})
		});
	};
    setTimeout(() => {
        scrollAnimation();    
    }, 400);
	
	window.addEventListener('scroll', () => {
		scrollAnimation();
	});
});