const form = document.querySelector('form');
const firstNameInput = document.querySelector('#firstName');
const lastNameInput = document.querySelector('#lastName');
const emailInput = document.querySelector('#email');
const consentInput = document.querySelector('#consent');
const queryInput = document.querySelectorAll('input[name="query"]');
const messageInput = document.querySelector('#message');
const submitBtn = document.querySelector('#submitBtn');

const clearValidityMessages = () => {
    firstNameInput.setCustomValidity('');
    lastNameInput.setCustomValidity('');
    emailInput.setCustomValidity('');
    consentInput.setCustomValidity('');
    queryInput[0].setCustomValidity('');
    messageInput.setCustomValidity('');
}

const validateForm = () => {
    clearValidityMessages();
    if (firstNameInput.value === '') {
        firstNameInput.setCustomValidity('error')
    }

    if (lastNameInput.value === '') {
        lastNameInput.setCustomValidity('error')
    }

    if (emailInput.value === '') {
        emailInput.setCustomValidity('error')
    }

    if (!consentInput.checked) {
        consentInput.setCustomValidity('error')
    }

    if (![...queryInput].some(radio => radio.checked)) {
        queryInput[0].setCustomValidity('error')
    }
    
    if (messageInput.value === '') {
        messageInput.setCustomValidity('error')
    }

    if (form.checkValidity()) {
        document.querySelector(".alert-success").style.opacity = "1"
        form.reset()
    }
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    validateForm();
})