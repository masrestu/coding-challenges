const btnExec = document.querySelector(".button");

const validate = () => {
  const dayLabel = document.querySelector("label[for=day-input]");
  const dayInput = document.querySelector("#day-input");
  const dayError = document.querySelector("label[for=day-input] .invalid");

  const monthLabel = document.querySelector("label[for=month-input]");
  const monthInput = document.querySelector("#month-input");
  const monthError = document.querySelector("label[for=month-input] .invalid");

  const yearLabel = document.querySelector("label[for=year-input]");
  const yearInput = document.querySelector("#year-input");
  const yearError = document.querySelector("label[for=year-input] .invalid");

  const day = dayInput.value;
  const month = monthInput.value;
  const year = yearInput.value;

  let dayIsValid = false;
  let monthIsValid = false;
  let yearIsValid = false;

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const currentDay = new Date().getDate();

  // validate day
  if (day === "") {
    dayLabel.classList.add("error");
    dayError.textContent = "This field is required";
  } else if (day < 1 || day > 31) {
    dayLabel.classList.add("error");
    dayError.textContent = "Must be a valid day";
  } else {
    dayLabel.classList.remove("error");
    dayError.textContent = "";
    dayIsValid = true;
  }

  // validate month
  if (month === "") {
    monthLabel.classList.add("error");
    monthError.textContent = "This field is required";
  } else if (month < 1 || month > 12) {
    monthLabel.classList.add("error");
    monthError.textContent = "Must be a valid month";
  } else {
    monthLabel.classList.remove("error");
    monthError.textContent = "";
    monthIsValid = true;
  }

  // validate year
  if (year === "") {
    yearLabel.classList.add("error");
    yearError.textContent = "This field is required";
  } else if (year > currentYear) {
    yearLabel.classList.add("error");
    yearError.textContent = "Must be in the past";
  } else {
    yearLabel.classList.remove("error");
    yearError.textContent = "";
    yearIsValid = true;
  }

  // validate date
  if (dayIsValid && monthIsValid && yearIsValid) {

    // check is date valid
    const date = new Date(year, month - 1, day);
    if (date.getFullYear() !== +year || date.getMonth() + 1 !== +month || date.getDate() !== +day) {
      dayLabel.classList.add("error");
      dayError.textContent = "Must be a valid date";
      return false;
    } else if (date >= new Date()) {
      yearLabel.classList.add("error");
      yearError.textContent = "Must be in the past";
      return false;
    }

    // calculate diff in years, months and days. store in object
    const agediff = {}
    let dayPass = true
    agediff.day = currentDay - +day
    console.log(agediff.day)
    if (agediff.day < 0) {
      dayPass = false
      agediff.day = 31 + agediff.day
    }

    let monthPass = true
    agediff.month = currentMonth - +month
    if (!dayPass) agediff.month = agediff.month - 1
    if (agediff.month < 0) {
      monthPass = false
      agediff.month = 12 + agediff.month
    }

    agediff.year = currentYear - +year
    if (!monthPass) agediff.year = agediff.year - 1

    // display result
    document.querySelector(".result .year span").textContent = agediff.year;
    document.querySelector(".result .month span").textContent = agediff.month;
    document.querySelector(".result .day span").textContent = agediff.day;
  } else {
    return false;
  }

};

btnExec.addEventListener("click", validate);
