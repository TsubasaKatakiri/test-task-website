const slider = (sliderSelector, contentSelector, slidesSelector) => {
    const slider = document.querySelector(sliderSelector);
    const content = document.querySelector(contentSelector);
    const slides = document.querySelectorAll(slidesSelector);
    const slidesNumber = slides.length;

    let scrollLock = false;

    function sliderInit(){
        const firstSlide = slides[0], lastSlide = slides[slidesNumber - 1];
        const cloneFirst = firstSlide.cloneNode(true);
        const cloneLast = lastSlide.cloneNode(true);
        content.appendChild(cloneFirst);
        content.insertBefore(cloneLast, firstSlide);
        content.style.transform = `translateX(-100%)`;

        content.addEventListener('transitionend', finishTransition)
        content.addEventListener('transitionstart', () => { scrollLock = true });
    }

    if(slidesNumber > 1) sliderInit();

    let currentBias = 0;
    let currentSlide = 1;

    function finishTransition(){
        content.classList.remove('transition');
        scrollLock = false;
        if(currentSlide > slidesNumber){
            content.style.transform = `translateX(-100%)`;
            currentSlide = 1;
        }
        else if(currentSlide < 1){
            content.style.transform = `translateX(-${slidesNumber * 100}%)`;
            currentSlide = slidesNumber;
        }
    }

    function moveToSlide(id){
        content.classList.add('transition');
        currentBias = id * 100;
        currentSlide = id;
        content.style.transform = `translateX(-${currentBias}%)`;
    }

    function moveForward(){
        if(scrollLock === false){
            currentSlide++;
            moveToSlide(currentSlide);
        }
    }

    function moveBackward(){
        if(scrollLock === false){
            currentSlide--;
            moveToSlide(currentSlide);
        }
    }

    let touchstartX = 0;
    let touchendX = 0;
    let swipeThreshold = window.innerWidth > 1024 ? window.innerWidth / 8 : window.innerWidth / 4;

    content.addEventListener('touchstart', (e) => {
        touchstartX = e.changedTouches[0].screenX;
    }, false);
    content.addEventListener('touchend', (e) => {
        touchendX = e.changedTouches[0].screenX;
        detectSwipe();
    }, false);
    
    content.addEventListener('mousedown', (e) => {
        touchstartX = e.screenX;
    }, false);
    content.addEventListener('mouseup', (e) => {
        touchendX = e.screenX;
        detectSwipe();
    }, false);

    function detectSwipe(){
        if(touchendX > touchstartX && touchendX - touchstartX > swipeThreshold){
            moveBackward();
        }
        if(touchendX < touchstartX && touchstartX - touchendX > swipeThreshold){
            moveForward();
        }
    }
}

export default slider;