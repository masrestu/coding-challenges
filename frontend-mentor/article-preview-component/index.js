const btnShare = document.querySelector('.btn-share.btn-ready');
const btnBack = document.querySelector('.btn-share.btn-back');
const tooltip = document.querySelector('.tooltip-share');

btnShare.addEventListener('click', () => {
	tooltip.classList.toggle('active');
	btnShare.classList.toggle('active');
});

btnBack.addEventListener('click', () => {
	tooltip.classList.remove('active');
});

// btnShare.click();