const recipeService = require('../services/recipe.service');

async function getAllRecipes(req, res, next) {
  try {
    const { category } = req.query;
    const recipes = await recipeService.getAllRecipes(category);
    res.status(200).json(recipes);
  } catch (err) {
    next(err);
  }
}

async function getRecipeById(req, res, next) {
  try {
    const { id } = req.params;
    const recipe = await recipeService.getRecipeById(id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.status(200).json(recipe);
  } catch (err) {
    next(err);
  }
}

async function createRecipe(req, res, next) {
  try {
    const recipe = await recipeService.createRecipe(req.body);
    res.status(201).json(recipe);
  } catch (err) {
    next(err);
  }
}

async function updateRecipe(req, res, next) {
  try {
    const { id } = req.params;
    const recipe = await recipeService.updateRecipe(id, req.body);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.status(200).json(recipe);
  } catch (err) {
    next(err);
  }
}

async function deleteRecipe(req, res, next) {
  try {
    const { id } = req.params;
    const recipe = await recipeService.deleteRecipe(id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.status(200).json({ message: 'Recipe deleted' });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
