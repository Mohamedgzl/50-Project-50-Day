const next = document.getElementById('Next')
const prev = document.getElementById('prev')
const progress = document.getElementById('progress')
const Circles = document.querySelectorAll('.Circle')

 let currentActive =1;


next.addEventListener('click',() => {
	
	currentActive++

	if(currentActive > Circles.length){
		currentActive = Circles.length
	}
	update()

})
 

 prev.addEventListener('click',() => {
	
	currentActive--

	if(currentActive < 1){
		currentActive = 1
	}
	update()
})
 
function update(){
	Circles.forEach((circle,idx) => {
		if (idx < currentActive) {
			circle.classList.add('active')
		}else {
			circle.classList.remove('active')
		}
	})


	const actives = document.querySelectorAll('.active')

	progress.style.width = (actives.length-1)/(Circles.length-1)*100 +"%"


	if(currentActive === 1){
		prev.disabled =true
	}else if(currentActive === Circles.length){
		next.disabled = true;
	}else {
		prev.disabled = false;
		next.disabled = false;

	}
}