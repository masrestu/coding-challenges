let ratingBtn = document.getElementsByClassName('rating');
let rateInfo = document.getElementsByClassName('rated');
let submitBtn = document.getElementById('submit');
let ratingState = document.getElementById('rating-state');
let thankYouState = document.getElementById('thank-you-state');

let rateButton = document.getElementsByClassName('rate-value');

let rateValue = 0;

const clicked = function() {
	rateValue = 0;
	for (let i = 0; i < ratingBtn.length; i++) {
		ratingBtn[i].classList.remove('selected');
	}
	this.classList.add('selected');
	rateValue = this.children[0].textContent;
}

for (let index = 0; index < ratingBtn.length; index++) {
	ratingBtn[index].addEventListener('click', clicked);
}

const submitted = function() {
	ratingState.style.display = "none";
	thankYouState.style.display = "flex";
	rateInfo[0].textContent = rateValue;
}

submitBtn.addEventListener('click', submitted);