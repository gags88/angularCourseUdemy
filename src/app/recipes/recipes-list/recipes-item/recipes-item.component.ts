import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "../../../recipes/recipe.model";
import { RecipeService } from "../../recipe.service";

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {

  @Input()
  itemData : Recipe;
  // @Output()
  // selectedRecipe = new EventEmitter<void>();

  //constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  // onRecipeSelected(recipeData){
  //   this.selectedRecipe.emit(recipeData);
  //   this.recipeService.recipeSelected.emit(recipeData);
  // }

}
