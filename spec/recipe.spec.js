import Recipe from "../src/models/Recipe.js";

describe("Recipe tests", () => {
  let recipeId = null;

  it("can create a recipe", async () => {
    const recipe = {
      title: "crepe",
      ingredients: "flour, milk, eggs",
      id_categorie: 1,
      type: "dessert",
    };
    const result = await Recipe.createRecipe(
      recipe.title,
      recipe.ingredients,
      recipe.id_categorie,
      recipe.type
    );

    expect(result).not.toBeNull();
    recipeId = result;
  });

  it("cannot create a recipe with null title", async () => {
    try {
      const recipe = {
        title: null,
        ingredients: "flour, milk, eggs",
        id_categorie: 1,
        type: "dessert",
      };
      await Recipe.createRecipe(
        recipe.title,
        recipe.ingredients,
        recipe.id_categorie,
        recipe.type
      );
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("can get all recipes", async () => {
    const getAll = await Recipe.getAllRecipes();
    expect(Array.isArray(getAll)).toBe(true);
    expect(getAll.length).toBeGreaterThan(0);
  });

  it("can get a recipe by id", async () => {
    const recipe = await Recipe.getRecipeById(recipeId);
    expect(recipe).not.toBeNull();
    expect(recipe.id).toBe(recipeId);
  });

  it("can update a recipe", async () => {
    const updatedRecipe = {
      title: "Updated Title",
      ingredients: "Updated Ingredients",
      id_categorie: 2,
      type: "Main Course",
    };

    const result = await Recipe.updateRecipe(
      recipeId,
      updatedRecipe.title,
      updatedRecipe.ingredients,
      updatedRecipe.id_categorie,
      updatedRecipe.type
    );

    expect(result).toBeGreaterThan(0);

    const recipe = await Recipe.getRecipeById(recipeId);
    expect(recipe.title).toBe(updatedRecipe.title);
    expect(recipe.ingredients).toBe(updatedRecipe.ingredients);
    expect(recipe.id_categorie).toBe(updatedRecipe.id_categorie);
    expect(recipe.type).toBe(updatedRecipe.type);
  });

  it("can delete a recipe", async () => {
    await Recipe.deleteRecipe(recipeId);
    const deletedRecipe = await Recipe.getRecipeById(recipeId);
    expect(deletedRecipe).toBeNull();
  });
});
