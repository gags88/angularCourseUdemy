//import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs/Subject";

export class ShoppingListService{

    //newIngredient = new EventEmitter<Ingredient[]>();
    newIngredient = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient("Apples", 5),
        new Ingredient("Tomatoes", 10)
     ];

     getIngredients(){
         return this.ingredients.slice();
     }

     addIngredient(ingredient: Ingredient){
         this.ingredients.push(ingredient);
         //this.newIngredient.emit(this.ingredients.slice());
        this.newIngredient.next(this.ingredients.slice());
     }

     addMoreIngredients(ingredient: Ingredient[]){
         this.ingredients.push(...ingredient);
         this.newIngredient.next(this.ingredients.slice());
     }

}
