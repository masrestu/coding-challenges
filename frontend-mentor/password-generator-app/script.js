const root = document.documentElement
const slider = document.getElementById("char_length")
const sliderMin = +slider.min
const sliderMax = +slider.max
const sliderTotal = sliderMax - sliderMin + 1

function updateSliderTrack(sliderValue) {
    let sliderPercentage = sliderValue * 100 / sliderTotal
    document.documentElement.style.setProperty("--char-length-pct", `${sliderPercentage}%`)
}

function generatePassword(passLength, terms) {
    const randomUpper = () => Math.floor(Math.random() * (90 - 65 + 1) + 65)
    const randomLower = () => Math.floor(Math.random() * (122 - 97 + 1) + 97)
    const randomNumber = () => Math.floor(Math.random() * (57 - 48 + 1) + 48)
    const randomSymbol = () => Math.floor(Math.random() * (47 - 33 + 1) + 33)

    const getRandomChar = []
    for (const element of terms) {
        if (element.checked && element.id === "inc_upper") getRandomChar.push(randomUpper)
        if (element.checked && element.id === "inc_lower") getRandomChar.push(randomLower)
        if (element.checked && element.id === "inc_numbers") getRandomChar.push(randomNumber)
        if (element.checked && element.id === "inc_symbols") getRandomChar.push(randomSymbol)
    }

    const allowedType = getRandomChar.length

    let passwordString = ''
    const startingRandoms = [...getRandomChar]
    do {
        const selectedIndex = Math.floor(Math.random() * startingRandoms.length)
        const startingChar = String.fromCharCode(startingRandoms[selectedIndex]())
        passwordString += startingChar
        startingRandoms.splice(selectedIndex, 1)
    } while (startingRandoms.length > 0 && passwordString.length < passLength)

    while (passwordString.length < passLength) {
        passwordString += String.fromCharCode(
            getRandomChar[
                Math.floor(Math.random() * allowedType)
            ]()
        )
    }

    return passwordString
}

function displayPasswordStrength(passwordStrength) {
    const strengthInfo = {
        0: "",
        1: "POOR",
        2: "WEAK",
        3: "MEDIUM",
        4: "STRONG",
    }
    const colorStroke = {
        0: "var(--color-grey-200)",
        1: "var(--color-red-500)",
        2: "var(--color-orange-400)",
        3: "var(--color-yellow-300)",
        4: "var(--color-green-200)",
    }
    const colorFill = {
        0: "transparent",
        1: "var(--color-red-500)",
        2: "var(--color-orange-400)",
        3: "var(--color-yellow-300)",
        4: "var(--color-green-200)",
    }

    const strengthIndicator = document.getElementById("strength_indicator")
    strengthIndicator.dataset.value = passwordStrength
    strengthIndicator.innerText = strengthInfo[passwordStrength]

    const root = document.documentElement

    for (let i = 1; i <= 4; i++) {
        root.style.setProperty(
            `--indicator-stroke-${i}`,
            i <= passwordStrength ? colorStroke[passwordStrength] : colorStroke[0]
        )
        root.style.setProperty(
            `--indicator-fill-${i}`,
            i <= passwordStrength ? colorFill[passwordStrength] : colorFill[0]
        )
    }
}

function checkPasswordStrength(passLength, terms) {
    const charTypeCount = terms.reduce((total, elem) => (
        total + (elem.checked ? 1 : 0)
    ), 0)

    if (passLength >= 16 && charTypeCount === 4) {
        return 4
    } else if (passLength >= 12 && charTypeCount >= 3) {
        return 3
    } else if (passLength >= 8 && charTypeCount >= 2) {
        return 2
    } else {
        return 1
    }
}

async function renderPassword(password) {
    const display = document.getElementById("generated_pwd")
    display.value = ''
    const characters = [...password]

    const delay = (delayInms) => {
        return new Promise(resolve => setTimeout(resolve, delayInms));
    };

    let character
    while (character = characters.shift()) {
        display.value += character
        await delay(25)
    }
}

function clearError() {
    document.getElementById("password_generator_app").classList.remove("invalid")
    document.getElementById("error_message").innerText = ""
}

function displayError(text) {
    document.getElementById("password_generator_app").classList.add("invalid")
    document.getElementById("error_message").innerText = text
}

slider.addEventListener("input", function () {
    updateSliderTrack(+slider.value)
})

const btnGenerate = document.getElementById("btn_generate")
const btnCopy = document.getElementById("btn_copy")

btnGenerate.addEventListener("click", async function () {
    const passLength = +slider.value
    const terms = document.getElementsByName("contains")

    clearError()
    if (passLength === 0) {
        displayError("Character length must not be zero")
        return false
    } else if ([...terms].every(term => !term.checked)) {
        displayError("Select at least one character type")
        return false
    }

    const buttonTitle = document.getElementById("btn_generate_title")
    btnGenerate.disabled = true
    btnCopy.parentElement.classList.remove("copied")
    buttonTitle.innerText = "Generating..."

    const password = generatePassword(passLength, [...terms])
    await renderPassword(password)

    const passwordStrength = checkPasswordStrength(passLength, [...terms])
    displayPasswordStrength(passwordStrength)

    buttonTitle.innerText = "Generate"
    btnGenerate.disabled = false
    btnGenerate.focus()
})

document.addEventListener("DOMContentLoaded", function () {
    slider.dispatchEvent(new Event('input', { bubbles: true }))
    displayPasswordStrength(0)
    btnGenerate.focus()
    // btnGenerate.click()
})

function copyPassword() {
    const generated_pwd = document.getElementById("generated_pwd").value
    if (!generated_pwd) return false
    navigator.clipboard.writeText(generated_pwd)
    btnCopy.parentElement.classList.add("copied")
}

btnCopy.addEventListener("click", copyPassword)

btnCopy.addEventListener("keypress", function (e) {
    if (e.code === "Enter" || e.code === "Space") copyPassword()
})

const characterType = document.getElementById("character_type").getElementsByTagName("label")

function toggleCheckbox(e) {
    if (e.code === "Space") {
        e.preventDefault()
        const checkbox = e.currentTarget.querySelector("input")
        checkbox.checked = !checkbox.checked
    }
}

[...characterType].forEach(type => {
    type.addEventListener("keydown", toggleCheckbox)
})