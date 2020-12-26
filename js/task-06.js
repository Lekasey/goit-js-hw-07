const validInputRef = document.querySelector('#validation-input')
const validLength = Number(validInputRef.dataset.length);

validInputRef.addEventListener('blur', event => {
    const inputData = event.target.value
    if (inputData.length === validLength) {
        validInputRef.classList.remove('invalid');
        validInputRef.classList.add('valid');
      } else {
        validInputRef.classList.remove('valid');
        validInputRef.classList.add('invalid');
      }
})  
//  ? validInputRef.classList.add('valid') :  validInputRef.classList.add('invalid')
    
