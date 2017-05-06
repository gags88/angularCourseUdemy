import { Routes,RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { RecipesComponent } from "./recipes/recipes.component"
import { ShoppingListComponent } from "./shopping-list/shopping-list.component"
import { ErrorpageComponent } from "./errorpage/errorpage.component"
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipesDetailComponent } from "./recipes/recipes-detail/recipes-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { CustomObservableComponent } from "./observable/custom-observable/custom-observable.component";

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: "full"},
    {path: 'recipes', component: RecipesComponent, children: [
        { path: '', component: RecipeStartComponent },
        { path: 'new', component: RecipeEditComponent},
        { path: ':id', component: RecipesDetailComponent},
        { path: ':id/edit', component: RecipeEditComponent},
    ]},
    {path: 'shopping', component: ShoppingListComponent},
    {path: 'observables', component: CustomObservableComponent},
    {path: 'not-found', component: ErrorpageComponent, data: {message: "Page Not Found"}},
    {path: '**', redirectTo: '/not-found'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
