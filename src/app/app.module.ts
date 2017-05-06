import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes } from '@angular/router';

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
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { ActiveUsersComponent } from './serviceExercise/active-users/active-users.component';
import { InactiveUsersComponent } from './serviceExercise/inactive-users/inactive-users.component';
import { UserService } from "./shared/services/user.service";
import { CounterService } from "./shared/services/counter.service";
import { RecipeService } from "./recipes/recipe.service";
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { routing } from "./app.routing";
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { ToggleDirective } from "./shared/directives/toggle.directive";
import { CustomObservableComponent } from './observable/custom-observable/custom-observable.component';
import { SubjectService } from "./shared/services/subject.service";

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
    BasicHighlightDirective,
    DropdownDirective,
    ActiveUsersComponent,
    InactiveUsersComponent,
    ErrorpageComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    ToggleDirective,
    CustomObservableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    UserService,
    CounterService,
    RecipeService,
    ShoppingListService,
    SubjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
