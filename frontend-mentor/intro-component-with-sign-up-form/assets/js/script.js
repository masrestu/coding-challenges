const btnClaim = document.querySelector("#btnClaim")
const inputs = [...document.querySelectorAll("input")]

const clearErrors = () => {
	for (let i = 0; i < inputs.length; i++) {
		const elem = inputs[i]
		const elemName = elem.getAttribute("id")
		elem.classList.remove("errorInput")
		const label = document.querySelector("label[for='" + elemName + "']")
		label.classList.remove("errorLabel")
	}
}

const submitForm = (e) => {
	e.preventDefault()
	clearErrors()

	for (let i = 0; i < inputs.length; i++) {
		const elem = inputs[i]
		const elemName = elem.getAttribute("id")
		if (elemName.includes("Email")) {
			const pattern = /^(?:[a-z0-9!#$%&amp;'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
			if (!pattern.test(elem.value)) {
				elem.classList.add("errorInput")
				const label = document.querySelector("label[for='" + elemName + "']")
				label.classList.add("errorLabel")
			}
		} else if (elem.value.trim() === '') {
			elem.classList.add("errorInput")
			const label = document.querySelector("label[for='" + elemName + "']")
			label.classList.add("errorLabel")
		}
	}
}

window.addEventListener("load", (event) => {
	btnClaim.addEventListener("click", submitForm)
})
