//import { EventEmitter } from "@angular/core";
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {

  //newIngredient = new EventEmitter<Ingredient[]>();
  newIngredient = new Subject<Ingredient[]>();
  statedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    //this.newIngredient.emit(this.ingredients.slice());
    this.newIngredient.next(this.ingredients.slice());
  }

  addMoreIngredients(ingredient: Ingredient[]) {
    this.ingredients.push(...ingredient);
    this.newIngredient.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.newIngredient.next(this.ingredients.slice());
  }

  removeIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.newIngredient.next(this.ingredients.slice());
  }

}
