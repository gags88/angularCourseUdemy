import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from "../../../recipes/recipe.model";

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {

  @Input()
  itemData : Recipe;
  @Output()
  selectedRecipe = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipeData){
    this.selectedRecipe.emit(recipeData);
  }

}
