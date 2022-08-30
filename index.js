/* Ao rolar a tela a barra da netflix fica preta*/

const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
if (window.scrollY >= 100) { //ao rolar a tela se passar de 100px entra a class nav__balck
    nav.classList.add('nav__black');
} else {
    nav.classList.remove('nav__black');
}
});


