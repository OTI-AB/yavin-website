// Custom JavaScript
function userScroll() {
	const navbar = document.querySelector('.navbar');

	window.addEventListener('scroll', () => {
		if (window.scrollY > 50) {
			navbar.classList.add('navbar-sticky');
		} else {
			navbar.classList.remove('navbar-sticky');
		}
	});
}

function incrementStats() {
	const countsArr = document.querySelectorAll('.counter'); //this is actually a node list but behaves like array

	countsArr.forEach((counter) => {
		counter.innerText = 0;

		function updateCounter() {
			const target = +counter.getAttribute('data-target');
			const c = +counter.innerText;

			const incr = target / 200;

			if (c < target) {
				counter.innerText = Math.ceil(c + incr);
				setTimeout(updateCounter, 1);
			} else {
				counter.innerText = target;
			}
		}
		updateCounter();
	});
}

document.addEventListener('DOMContentLoaded', userScroll);
document.addEventListener('DOMContentLoaded', incrementStats);
