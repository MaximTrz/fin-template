const headerBurger = document.querySelector('.header__burger');
const burger = document.querySelector('.burger-btn');
const headerNav = document.querySelector('.header-nav');

headerBurger.addEventListener('click', (e)=>{
    e.preventDefault();
    burger.classList.toggle('--open');
    headerNav.classList.toggle('--hide');
});