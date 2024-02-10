import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './view/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './view/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './view/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './view/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './view/recipes/recipe-detail/recipe-detail.component';
import { HeaderComponent } from './view/header/header.component';
import { RecipesComponent } from './view/recipes/recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
