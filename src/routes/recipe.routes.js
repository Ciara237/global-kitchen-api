const express = require('express');
const {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} = require('../controllers/recipe.controller');

const router = express.Router();

router.get('/', getAllRecipes);
router.get('/:id', getRecipeById);
router.post('/', createRecipe);
router.patch('/:id', updateRecipe);
router.delete('/:id', deleteRecipe);

module.exports = router;
