const cookies = (messageSelector, buttonSelector) => {
    const message = document.querySelector(messageSelector);
    const button = document.querySelector(buttonSelector);

    const isCookiesOk = localStorage.getItem('cookiesOK');
    if(!isCookiesOk) {
        message.classList.remove('cookies--disabled');
        message.classList.add('cookies--active');
    }

    if(message){
        button.addEventListener('click', function(){
            localStorage.setItem('cookiesOK', true);
            message.classList.remove('cookies--active');
            message.classList.add('cookies--disabled');
        })
    }
}

export default cookies;