import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  @Output()
  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] =
  [
    new Recipe("Test Recipe", "This is Test Description of Recipe", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Chicken-kathi-roll-rec" +
      "ipe.jpg/640px-Chicken-kathi-roll-recipe.jpg"),
    new Recipe("Mooli Prantha", "This is Test Description of Mooli Prantha", "https://c1.staticflickr.com/2/1548/24330115331_f731b72a75_b.jpg")
  ]

  constructor() { }

  ngOnInit() { }

  onRecipeSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }

}
