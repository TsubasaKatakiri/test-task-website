const dropdown = (buttonSelector, menuSelector) => {
    const button = document.querySelector(buttonSelector);
    const menu = document.querySelector(menuSelector);

    button.addEventListener('click', menuControl);

    function menuControl(){
        menu.classList.toggle('header__nav--active');
        button.classList.toggle('header__button--active');
    }

    window.addEventListener('click', (e) => {
        if(!e.target.matches(menuSelector) && !e.target.closest(buttonSelector)){
            menu.classList.remove('header__nav--active');
            button.classList.remove('header__button--active');
        }
    })
}

export default dropdown;