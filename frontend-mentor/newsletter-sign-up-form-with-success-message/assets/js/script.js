window.addEventListener("load", function() {
	const emailInput = document.getElementById("email")
	const landingPage = document.querySelector(".landing-page")
	const successPage = document.querySelector(".success-page")
	const emailConfirm = document.getElementById("email-confirm")

	const btnSubmit = document.querySelector(".btn-submit")
	const btnDismiss = document.querySelector(".btn-dismiss")

	btnSubmit.addEventListener("click", function(e) {
		e.preventDefault()
		if (!emailInput.value) {
			emailInput.focus()
			return
		}

		if (emailInput.validity.valid && emailInput.value) {
			successPage.classList.remove("hidden")
			successPage.classList.remove("lg:hidden")
			successPage.classList.add("grid")
			successPage.classList.add("lg:flex")

			const email = emailInput.value
			emailConfirm.textContent = email
			
			landingPage.classList.remove("lg:grid")
			landingPage.classList.add("hidden")
			landingPage.classList.add("lg:hidden")
		}
	})

	btnDismiss.addEventListener("click", function(){
		successPage.classList.add("hidden")
		successPage.classList.add("lg:hidden")
		successPage.classList.remove("grid")
		successPage.classList.remove("lg:flex")

		emailInput.value = ''
		
		landingPage.classList.add("lg:grid")
		landingPage.classList.remove("hidden")
		landingPage.classList.remove("lg:hidden")
		
	})
// 	const guide = document.createElement("p");
// 	guide.textContent = "Width: "
// 	guide.style.position = "absolute";
// 	guide.style.bottom = 0;
// 	guide.style.left = "50%";
// 	guide.style.transform = "translateX(-50%)";
// 	const width = document.createElement("span")
// 	width.textContent = window.innerWidth;
// 	width.style.color = "tomato";
// 	guide.appendChild(width);
// 	document.body.appendChild(guide);
// 
// 	this.window.addEventListener("resize", function(){
// 		const widthPage = document.querySelector("p>span");
// 		widthPage.textContent = window.innerWidth
// 	})
})