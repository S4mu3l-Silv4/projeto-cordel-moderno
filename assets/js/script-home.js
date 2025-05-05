// Navbar com scroll inteligente:

let lastScrollTop = 0
const navbar = document.getElementById("navbar")

window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-70px"
    } else {
        navbar.style.top = "0"
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
})