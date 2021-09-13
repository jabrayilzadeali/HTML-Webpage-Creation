const navButton = document.querySelector('.navbar-button');
const navbar = document.querySelector('.navbar');

navButton.onclick = () => {
	if (navbar.style.display === 'none') {
		navbar.style.display = 'block';
	} else {
		navbar.style.display = 'none';
	}
}

setInterval(() => {
	if (window.innerWidth > 600) {
		navbar.style.display = 'block';
	}
}, 200)

