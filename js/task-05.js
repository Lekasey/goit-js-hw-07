const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');


inputRef.addEventListener('input', event => 
(outputRef.textContent = event.target.value ? event.target.value : 'незнакомец'))

// inputRef.addEventListener('input', event => {
//     outputRef.textContent = event.target.value;
//     if(outputRef.textContent === '') {
//         outputRef.textContent = 'незнакомец'
//     }
// })


/* Вариант через change*/
// inputRef.addEventListener('change', event => {
//     outputRef.textContent = event.target.value;
//     if(outputRef.textContent === '') {
//         outputRef.textContent = 'незнакомец'
//     }
// })

