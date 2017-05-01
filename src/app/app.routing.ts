import { Routes,RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { RecipesComponent } from "./recipes/recipes.component"
import { ShoppingListComponent } from "./shopping-list/shopping-list.component"
import { ErrorpageComponent } from "./errorpage/errorpage.component"

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: "full"},
    {path: 'recipes', component: RecipesComponent},
    {path: 'shopping', component: ShoppingListComponent},
    {path: 'not-found', component: ErrorpageComponent, data: {message: "Page Not Found"}},
    {path: '**', redirectTo: '/not-found'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);