const feedback = document.querySelector('.feedback');
const email = document.querySelector('.email');
const button = document.querySelector('button');

button.addEventListener('click', () => {
	ValidateEmail(email.value);
});

function ValidateEmail(mail) {
	const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (mail.match(mailformat)) {
		ValidInput(true);
	} else {
		ValidInput(false);
	}
}

function ValidInput(val) {
	if (val) {
		feedback.classList.remove('invalid');
		button.classList.remove('invalid');
	} else {
		feedback.classList.add('invalid');
		button.classList.add('invalid');
	}
}