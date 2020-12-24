const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const ingredientListRef = document.querySelector('#ingredients')
// console.log(ingredientListRef)

const addIngredients = ingredient => {
    ingredients.forEach(ingredient => {
        const liRef = document.createElement('li')
        liRef.textContent = ingredient   
        ingredientListRef.append(liRef)

        return ingredientListRef
    })
}
addIngredients(ingredients)
