import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  //Commented to replace it with service
  // @Output()
  // recipeSelected = new EventEmitter<Recipe>();
  // recipes: Recipe[] =
  // [
  //   new Recipe("Test Recipe", "This is Test Description of Recipe", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Chicken-kathi-roll-rec" +
  //     "ipe.jpg/640px-Chicken-kathi-roll-recipe.jpg"),
  //   new Recipe("Mooli Prantha", "This is Test Description of Mooli Prantha", "https://c1.staticflickr.com/2/1548/24330115331_f731b72a75_b.jpg")
  // ]

  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipeService.recipeChanged.subscribe(
      (recipe: Recipe[]) => {
        this.recipes = recipe
      }
    );
    this.recipes = this.recipeService.getRecipes();
  }

  onRecipeSelected(recipe: Recipe) {
    // this.recipeSelected.emit(recipe);
    //this.recipeService.recipeSelected.emit(recipe);
  }

}
