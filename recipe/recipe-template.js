import { getUser, findById } from '../utils/local-storage-utils.js';
import ingredients from '../data.js';

const heartyVegCategory = ingredients[0].value;
const lightVegCategory = ingredients[1].value;
const starchCategory = ingredients[2].value;
const proteinCategory = ingredients[3].value;

const user = getUser();

function getName(vegCategory, valueToPull) {
    const ingredient = findById(vegCategory, user[valueToPull]);
    return ingredient.name;
}

function getPrep(vegCategory, valueToPull) {
    const ingredient = findById(vegCategory, user[valueToPull]);
    return ingredient['preparation-shorthand'];
}

const heartyVeg = getName(heartyVegCategory, 'hardVeg');
const heartyVegPrep = getPrep(heartyVegCategory, 'hardVeg');
const lightVeg = getName(lightVegCategory, 'softVeg');
const lightVegPrep = getPrep(lightVegCategory, 'softVeg');
const protein = getName(proteinCategory, 'protein');
const proteinPrep = getPrep(proteinCategory, 'protein');
const grain = getName(starchCategory, 'starch');
const grainPrep = 'prepared';
const rawVeg = 'onion';
const rawVegPrep = 'chopped';
const rawVegPrep2 = 'pickled';
const sauce1 = user.sauce1;
const sauce2 = user.sauce2;
const sauce3 = user.sauce3;
const seasoningBlend = `this week's herb/spice blend`;
const acid = user.acid;
const oil = user.oil;
const wrap = user.wrap;
const choppedHerb = user.herb;

export const excitingDescription = [
    `Rainbow`,
    `Fab`,
    `Sparkle`,
    `"Kale Yeah!"`,
    `Increds`,
    `"Fax Me!"`,
    `"Flavor Party"`,
    `Taste-a-rama`,
    `Nommz`,
    `"D to the Lish"`,
    `Amaze`,
    `"Page Me!"`,
];

export const recipes = [
    {
        id: 1,
        title: `Bowl`,
        stepOne: `Toss a handful of ${rawVegPrep} ${rawVeg} with a sprinkle of salt, a pinch of ${seasoningBlend}, a splash of ${acid} and a drizzle of ${oil} oil. Set aside for now.`,
        stepTwo: `Reheat (optional) your prepared ${grain}, ${heartyVegPrep} ${heartyVeg}, ${lightVegPrep} ${lightVeg} and ${proteinPrep} ${protein} separately, tossing one or more in ${sauce1}.`,
        stepThree: `Assemble your bowl by arranging each element neatly over a base of ${grainPrep} ${grain}.`,
        stepFour: `Garnish your bowl with the ${rawVegPrep2} ${rawVeg} and ${choppedHerb}.`
    },
    {
        id: 2,
        title: `Wrap`,
        stepOne: `Toss a handful of ${rawVegPrep} ${rawVeg} with a sprinkle of salt, a splash of ${acid} and a drizzle of ${oil} oil. Set aside for now.`,
        stepTwo: `Get out and combine small portions of your ${grainPrep} ${grain}, ${heartyVegPrep} ${heartyVeg}, ${lightVegPrep} ${lightVeg} and ${proteinPrep} ${protein} in a large bowl, tossing in enough ${sauce2} to evenly coat ingredients.`,
        stepThree: `Assemble your wrap by positioning the filling in the lower third of a ${wrap}, folding in the left and right sides, and rolling up tightly.`,
        stepFour: `Slice in half diagonally, and garnish with ${rawVegPrep} ${rawVeg} and ${choppedHerb}.`
    },
    {
        id: 3,
        title: `Stir Fry`,
        stepOne: `Heat a splash of cooking oil in a skillet over medium-high until it glistens.`,
        stepTwo: `Add your ${heartyVegPrep} ${heartyVeg}, ${lightVegPrep} ${lightVeg} and ${proteinPrep} ${protein} together, tossing in enough ${sauce3} to evenly coat ingredients.`,
        stepThree: `Warm thoroughly, then serve with a side of reheated ${grain}.`,
        stepFour: `Garnish with ${rawVegPrep} ${rawVeg}, ${choppedHerb} and a drizzle of ${acid}.`
    },
    {
        id: 4,
        title: `Soup`,
        stepOne: `Heat a splash of cooking oil in a skillet over medium-high until it glistens.`,
        stepTwo: `Add some chopped onion/garlic & sauté until onions are translucent (optional). Add a bit of ${seasoningBlend} & stir until aromatic.`,
        stepThree: `Add your ${heartyVegPrep} ${heartyVeg}, ${lightVegPrep} ${lightVeg}, ${proteinPrep} ${protein} and ${grainPrep} ${grain}, then enough stock/water to cover.`,
        stepFour: `Warm thoroughly, then garnish with ${choppedHerb}.`,
    },
    {
        id: 5,
        title: `Market Plate`,
        stepOne: `Toss a handful of ${rawVegPrep} ${rawVeg} with a sprinkle of salt, a splash of ${acid} and a drizzle of ${oil} oil. Set aside for now.`,
        stepTwo: `Reheat your ${grainPrep} ${grain}, ${heartyVegPrep} ${heartyVeg}, ${lightVegPrep} ${lightVeg} and ${proteinPrep} ${protein} separately.`,
        stepThree: `Assemble your Market Plate by arranging each element neatly around a center of ${grainPrep} ${grain}.`,
        stepFour: `Garnish your bowl with the ${rawVegPrep2} ${rawVeg} and ${choppedHerb}.`
    },
    {
        id: 6,
        title: `${proteinPrep} ${protein} Burrito`,
        stepOne: `Preheat oven to 350 F. Lightly oil baking dish and set aside.`,
        stepTwo: `Get out your ${grainPrep} ${grain}, ${heartyVegPrep} ${heartyVeg}, and ${proteinPrep} ${protein}. Mix your ${proteinPrep} ${protein} with enough ${sauce1} to coat evenly.`,
        stepThree: `In a ${wrap}, add ingredients down the center, fold in opposite sides of the ${wrap} and roll. Place seam sides down in prepared dish. Optional: Add cheese. Make up to 6 burritos at a time for easy-reheat meals.`,
        stepFour: `Cover with foil and bake until heated through - 25-30mins. Once warmed, remove from oven and garnish with ${rawVegPrep} ${rawVeg}. Refrigerate leftovers.`
    },
    {
        id: 7,
        title: `${protein} Salad`,
        stepOne: `Start with a bed of your favorite lettuce or salad greens, washed and prepped.`,
        stepTwo: `Layer your ${proteinPrep} ${protein}, ${heartyVegPrep} ${heartyVeg}, ${rawVegPrep} ${rawVeg} and ${grainPrep} ${grain} over your salad greens.`,
        stepThree: `Drizzle prepared ${sauce2} over your salad.`,
        stepFour: `Garnish salad with ${choppedHerb} & a sprinkle of ${seasoningBlend}. Optional: add nuts, dried fruit and/or cheese of your choice.`
    },
    {
        id: 8,
        title: `Bowl`,
        stepOne: `Toss a handful of ${rawVegPrep} ${rawVeg} with a sprinkle of salt, a pinch of ${seasoningBlend}, a splash of ${acid} and a drizzle of ${oil} oil. Set aside for now.`,
        stepTwo: `Reheat (optional) your prepared ${grain}, ${heartyVegPrep} ${heartyVeg}, ${lightVegPrep} ${lightVeg} and ${proteinPrep} ${protein} separately, tossing one or more in ${sauce3}.`,
        stepThree: `Assemble your bowl by arranging each element neatly over a base of ${grainPrep} ${grain}.`,
        stepFour: `Garnish your bowl with the ${rawVegPrep2} ${rawVeg} and ${choppedHerb}.`
    },
    {
        id: 9,
        title: `Market Plate`,
        stepOne: `Toss a handful of ${rawVegPrep} ${rawVeg} with a sprinkle of salt, a splash of ${acid} and a drizzle of ${oil} oil. Set aside for now.`,
        stepTwo: `Reheat your ${grainPrep} ${grain}, ${heartyVegPrep} ${heartyVeg}, ${lightVegPrep} ${lightVeg} and ${proteinPrep} ${protein} separately.`,
        stepThree: `Assemble your Market Plate by arranging each element neatly around a center of ${grainPrep} ${grain}.`,
        stepFour: `Garnish your bowl with the ${rawVegPrep2} ${rawVeg} and ${choppedHerb}.`
    },
    {
        id: 3,
        title: `Stir Fry`,
        stepOne: `Heat a splash of cooking oil in a skillet over medium-high until it glistens.`,
        stepTwo: `Add your ${heartyVegPrep} ${heartyVeg}, ${lightVegPrep} ${lightVeg} and ${proteinPrep} ${protein} together, tossing in enough ${sauce1} to evenly coat ingredients.`,
        stepThree: `Warm thoroughly, then serve with a side of reheated ${grain}.`,
        stepFour: `Garnish with ${rawVegPrep} ${rawVeg}, ${choppedHerb} and a drizzle of ${acid}.`
    },
];
