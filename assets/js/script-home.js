// Navbar com scroll inteligente:
let lastScrollTop = 0
const navbar = document.getElementById("navbar")

window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop < lastScrollTop) {
        navbar.classList.remove("hidden")
    } else {
        navbar.classList.add("hidden")
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
})