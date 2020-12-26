const inputRef = document.querySelector('#font-size-control')
const spanRef = document.querySelector('#text');
console.log(spanRef.style.fontSize);

const handleInput = () => {
    spanRef.style.fontSize = `${inputRef.value}px`
}
inputRef.addEventListener('input', handleInput)