const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    ingredients: {
      type: [String],
      required: true,
      validate: {
        validator: (v) => v.length > 0,
        message: 'At least one ingredient is required',
      },
    },
    instructions: {
      type: String,
      required: true,
      trim: true,
    },
    cookingTime: {
      type: Number,
      required: true,
      min: 1,
    },
    difficulty: {
      type: String,
      required: true,
      enum: ['Easy', 'Medium', 'Hard'],
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

recipeSchema.index({ category: 1 });

module.exports = mongoose.model('Recipe', recipeSchema);
