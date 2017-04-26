import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] =
    [
        new Recipe("Test Recipe", "This is Test Description of Recipe", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Chicken-kathi-roll-rec" +
        "ipe.jpg/640px-Chicken-kathi-roll-recipe.jpg"),
        new Recipe("Mooli Prantha", "This is Test Description of Mooli Prantha", "https://c1.staticflickr.com/2/1548/24330115331_f731b72a75_b.jpg")
    ];

    getRecipes(){
        //Return Copy of array to make sure actual array is not accessible
        return this.recipes.slice();
    }
}