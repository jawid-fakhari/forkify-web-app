import * as model from './model.js';
import recipeView from './views/recipeView.js';

///////////
//install npm i core-js regenerator-runtime in terminal to make code readable in old brwosers, and import these two
import 'core-js/stable';
import 'regenerator-runtime/runtime';
///////////////
const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    // 1-loading recipe
    await model.loadRecipe(id);
    const { recipe } = model.state;

    // 2-rendering recepie
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};
init();
