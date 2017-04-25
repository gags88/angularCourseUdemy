import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { CockpitComponent } from './serverExercise/cockpit/cockpit.component';
import { ServerElementsComponent } from './serverExercise/server-elements/server-elements.component';
import { GameControlComponent } from './game-assignment/game-control/game-control.component';
import { GameOddComponent } from './game-assignment/game-odd/game-odd.component';
import { GameEvenComponent } from './game-assignment/game-even/game-even.component';
import { BasicHighlightDirective } from './shared/directives/basic-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipesItemComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    CockpitComponent,
    ServerElementsComponent,
    GameControlComponent,
    GameOddComponent,
    GameEvenComponent,
    BasicHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
