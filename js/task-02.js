const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const ingredientsListRef = document.querySelector('#ingredients')

// const addIngredients = ingredient => {
//     ingredients.forEach(ingredient => {
//         const liRef = document.createElement('li')
//         liRef.textContent = ingredient   
//         ingredientListRef.append(liRef)
//         return ingredientListRef
//     })
// }
// addIngredients(ingredients)


const ingredientsList = ingredients.map(ingredient => {
    const liRef = document.createElement('li');
    liRef.textContent = ingredient;
    return liRef
})

ingredientsListRef.append(...ingredientsList)
