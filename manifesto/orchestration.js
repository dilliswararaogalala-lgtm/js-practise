import { readAndPerformTasks } from "./main.js";

const cookingRecipes = async (recipes) => {
  const recipesList = recipes.split(',');
  const finalDish = recipesList.map((recipe) => readAndPerformTasks(recipe));
  return await Promise.all(finalDish);
}

const cookRecipes = async (recipesFilePath) => {
  const recipes = await Deno.readTextFile(recipesFilePath);
  const parsedRecipes = recipes.split('\n');
  let i = 1;
  for (const recipe of parsedRecipes) {
    console.log(`\nrecipe ${i} is started`);
    await cookingRecipes(recipe);
    console.log(`\nrecipe ${i} is ended\n`);
    i++;
  }
};

cookRecipes("./recipes/manifest");
