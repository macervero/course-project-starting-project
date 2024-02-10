import { Component } from '@angular/core';
import { Recipe } from "src/app/model/recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  public recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is simply a test", "https://live.staticflickr.com/8719/28332021793_883a1c6c0a_b.jpg"),
    new Recipe("A Test Recipe", "This is simply a test", "https://live.staticflickr.com/8719/28332021793_883a1c6c0a_b.jpg")
  ];

  constructor() {}
}
