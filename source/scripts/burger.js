window.addEventListener('load', () => {
    const menuButton = document.querySelector('.burger-button');
    const burgerMenu= document.querySelector('.navigation__list');

    menuButton.addEventListener('click', () => {
        burgerMenu.classList.toggle('navigation__list--open');
        // toggleMenuButton.classList.toggle('burger-button--close'); добавить крестик в css
    })
})