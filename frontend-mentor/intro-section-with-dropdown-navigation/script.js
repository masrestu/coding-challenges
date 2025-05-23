const menuClose = document.querySelector("#menu-close");
const menuOpen = document.querySelector("#menu-open");
const header = document.querySelector("header");
const overlay = document.querySelector("#overlay");

const menuCloser = [menuClose, overlay];
menuOpen.addEventListener("click", () => {
    header.classList.add("menu-open");
})

menuCloser.forEach(element => {
    element.addEventListener("click", () => {
        header.classList.remove("menu-open");
    })
})

const menuParent = document.querySelectorAll(".menu.menu-parent");
const allMenu = document.querySelectorAll("li");
menuParent.forEach(element => {
    element.addEventListener("click", () => {
        element.classList.toggle("details");
    })
})

const container = document.querySelector(".container");

container.addEventListener("click", (e) => {
    const target = e.target;
    console.log(target.classList)
    if (target.classList.contains("menu-parent") || (target.classList.contains("menu-label") && target.parentElement.classList.contains("menu-parent"))) {
        return
    }
    menuParent.forEach(parent => {
        parent.classList.remove("details");
    })
})