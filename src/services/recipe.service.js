const Recipe = require('../models/recipe.model');

async function getAllRecipes(category) {
  const filter = category ? { category } : {};
  return Recipe.find(filter);
}

async function getRecipeById(id) {
  return Recipe.findById(id);
}

async function createRecipe(data) {
  return Recipe.create(data);
}

async function updateRecipe(id, data) {
  return Recipe.findByIdAndUpdate(id, data, { new: true, runValidators: true });
}

async function deleteRecipe(id) {
  return Recipe.findByIdAndDelete(id);
}

module.exports = {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
