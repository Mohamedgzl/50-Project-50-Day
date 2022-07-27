const loadin = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
let loadd = 0
let int = setInterval(blurring, 30)

function blurring() {
	loadd++
	if (loadd > 99) {
		clearInterval(int)
	}

	loadin.innerText = `${loadd}%`;
	loadin.style.opacity = Scale(loadd, 0, 100, 1, 0);
	bg.style.filter = `blur(${Scale(loadd, 0, 100, 30, 0)}px)`;


}


const Scale = (num, in_min, in_max, out_min, out_max) => {
	return((num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min);
}