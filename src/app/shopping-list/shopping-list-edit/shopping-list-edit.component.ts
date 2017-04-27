import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from "../../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list.service";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  // @Output()
  // ingredient = new EventEmitter<Ingredient>();  

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onShoppingListAdd(){
    const newIngredient = new Ingredient(this.nameInput.nativeElement.value,this.amountInput.nativeElement.value);
    this.shoppingListService.addIngredient(newIngredient);
    //this.ingredient.emit(newIngredient);
  }

}
