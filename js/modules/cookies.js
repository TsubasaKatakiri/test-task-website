const cookies = (messageSelector, buttonSelector) => {
    const message = document.querySelector(messageSelector);
    const button = document.querySelector(buttonSelector);

    const isCookiesOk = localStorage.getItem('cookiesOK');
    console.log(isCookiesOk);
    if(!isCookiesOk) {
        message.classList.remove('cookies--disabled');
        message.classList.add('cookies--active');
    }

    if(message){
        button.addEventListener('click', function(){
            localStorage.setItem('cookiesOK', true);
            message.classList.remove('cookies--active');
        })
    }
}

export default cookies;