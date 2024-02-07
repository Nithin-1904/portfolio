const ham = document.querySelector("#ham")
const menu = document.querySelector("#menu")
const h1 = document.querySelector("#h1")
const h2 = document.querySelector("#h2")
const h3 = document.querySelector("#h3")

ham.addEventListener("click", () => {
    menu.classList.toggle("hidden")
    h1.classList.toggle("bg-white")
    h3.classList.toggle("bg-white")
    h2.classList.toggle("bg-white")
})