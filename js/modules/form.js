const form = (formSelector, checkboxSelector) => {
    const formObject = document.querySelector(formSelector);
    const checkbox = document.querySelector(checkboxSelector);

    if(formObject){
        formObject.addEventListener('submit', (e) => {
            e.preventDefault();
            let url = e.target.action;
            console.log(url);
            let formFields = new FormData(e.target);
            let formDataObject = {
                fullname: formFields.get('fullname'),
                email: formFields.get('email'),
                phone: formFields.get('phone'),
                message: formFields.get('message'),
                acceptPrivacy: checkbox.checked,
            }
            console.log(formDataObject);
            location.href = '/thanks.html';
        })
    
    }
}

export default form;