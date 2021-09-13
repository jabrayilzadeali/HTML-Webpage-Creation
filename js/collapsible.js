const collapsibleButton = document.querySelector('.collapsible');
const content = document.querySelector('.content');
content.style.display = 'block';

collapsibleButton.onclick = () => {
	console.log(content.style.display);
	if (content.style.display === 'block') {
		console.log('I am here')
		content.style.display = 'none';
	} else {
		console.log('I am on else')
		content.style.display = 'block';
	}
}