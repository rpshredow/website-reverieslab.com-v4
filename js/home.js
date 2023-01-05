const nav = document.querySelector('.header')
window.addEventListener('scroll', fixNav)

nav.classList.add('hidden')

function fixNav() {
    if(window.scrollY < 10) {
        nav.classList.add('hidden')
    } else {
        nav.classList.remove('hidden')
    }
}