const spanRef = document.querySelector('#value')
const incrementBntRef = document.querySelector('[data-action="increment"]')
const decrementBntRef = document.querySelector('[data-action="decrement"]')
let counterValue = 0

function increment(event) {
    counterValue += 1
    spanRef.textContent = counterValue
}

function decrement(event) {
    counterValue -= 1;
    spanRef.textContent = counterValue
}

incrementBntRef.addEventListener('click', increment);
decrementBntRef.addEventListener('click', decrement);

