let submitButton = document.getElementById('contact-us-submit-button');
let formInputes = [...document.getElementsByClassName('contact-us-form-input')];
submitButton.addEventListener('click', (e) => {
    for (let i = 0; i < formInputes.length; i++) {
        if(formInputes[i].value === ""){
            alert(`please fill out ${formInputes[i].name} feild !`);
            e.preventDefault();
            return null;
        }
    }
    submitButton.parentElement.submit()
})