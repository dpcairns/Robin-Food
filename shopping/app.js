import { sauces } from '../data.js';
import { getUser } from '../utils/local-storage-utils.js';
import { findBySauceName } from './find-by-sauce-name.js';

const user = getUser();
const ingredientsList = [];

const SOME_CONST = 3; // just to have an opportunity to name this for future devs walking into this mystery number

for (let i = 0; i < SOME_CONST; i++) {
    const sauceToLookFor = `sauce${i + 1}`;
    const { shopping } = findBySauceName(sauces[i], user[sauceToLookFor]);
    for (const ingredient of shopping) {
        ingredientsList.push(ingredient);
    }
}
const listSection = document.getElementById('list-section');
const listDiv = document.createElement('div');
const noRepeatsList = new Set(ingredientsList);

for (const ingredient of noRepeatsList) {
    const newPara = document.createElement('p');
    newPara.textContent = ingredient;
    listDiv.append(newPara);
}

listSection.append(listDiv);

