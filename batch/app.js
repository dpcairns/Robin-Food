import { createBatchRecipeDiv } from './create-batch-recipe.js';
import batchData from '../data.js';
import { sauces } from '../data.js';
import { generateSauce } from './generate-sauce-div.js';


const calendarButton = document.getElementById('calendar-button');
const shoppingListButton = document.getElementById('shopping-list-button');

const batchRecipeDiv = document.getElementById('batch-recipe-container-div');
const sauceDiv = document.getElementById('sauce-div');

for (const ingredientType of batchData) {
    const recipeEl = createBatchRecipeDiv(ingredientType);
    batchRecipeDiv.append(recipeEl);
}

const MAGIC_NUMBER = 3; // give this a nice name for future devs
for (let i = 0; i < MAGIC_NUMBER; i++) {
    const singleSauceDiv = generateSauce(sauces[i], i + 1);
    sauceDiv.append(singleSauceDiv);
}


calendarButton.addEventListener('click', () => {
    window.location = '../calendar';
});

shoppingListButton.addEventListener('click', () => {
    window.location = '../shopping';
});

