import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {

  //recipeSelected = new EventEmitter<Recipe>();
  recipeChanged = new Subject<Recipe[]>()

  private recipes: Recipe[] =
            [
              new Recipe('Test Recipe', 'This is Test Description of Recipe', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Chicken-kathi-roll-rec' +
                'ipe.jpg/640px-Chicken-kathi-roll-recipe.jpg', [
                new Ingredient('Roll', 1),
                new Ingredient('Vegetables', 3)
              ]),
              new Recipe('Mooli Prantha', 'This is Test Description of Mooli Prantha', 'https://c1.staticflickr.com/2/1548/24330115331_f731b72a75_b.jpg', [
                new Ingredient('Flour', 1),
                new Ingredient('Reddish', 2)
              ])
            ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes() {
    //Return Copy of array to make sure actual array is not accessible
    return this.recipes.slice();
  }

  getRecipeDetail(index: number) {
    return this.recipes[index];
  }

  addIngredientToShoppingList(ingredient: Ingredient[]) {
    this.slService.addMoreIngredients(ingredient);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
