const toggle = document.querySelector('.toggle');
const img_text_1 = document.querySelector('.img-text-1');
const img_text_2 = document.querySelector('.img-text-2');

img_text_1.style.display = 'none';
img_text_2.style.display = 'block'
toggle.onclick = () => {
	if (img_text_2.style.display === "block") {
		img_text_2.style.display = 'none';
		img_text_1.style.display = 'block';
	} else {
		img_text_2.style.display = 'block';
		img_text_1.style.display = 'none';
	}
}


