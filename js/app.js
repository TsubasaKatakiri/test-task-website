import dropdown from './modules/dropdown.js';
import animations from './modules/animate.js';
import slider from './modules/slider.js';
import form from './modules/form.js';
import cookies from './modules/cookies.js';

window.addEventListener('DOMContentLoaded', () => {
    animations();
    form('#contact_form', '#privacy');
    cookies('#cookies', '#cookies_consent');
    dropdown('.header__button', '.header__nav');
    slider('.slider', '.slider__ribbon', '.slide');
})