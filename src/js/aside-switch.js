const switchAside = document.querySelector('.js-aside-switch');
const switchAsideButton = document.querySelector('.js-aside-switch-button');
const sideBars = document.querySelectorAll('.js-aside-wrapper');

switchAside.addEventListener('click', ()=>{
    switchAsideButton.classList.toggle('--open');
    sideBars.forEach(sideBar => {
        sideBar.classList.toggle('--hide');
    });    
});