import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class recipeservice {
  recipeselected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'a test recipe',
      'this is simply a test ',
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg '
    ),
    new Recipe(
      'another test recipe',
      'this is simply a test ',
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg '
    ),
    new Recipe(
      'fufu',
      'salmon ',
      'https://outlookkitchenandbar.com/wp-content/uploads/2018/07/food-and-drinks-photo-28.jpg'
    ),
  ];

  getrecipes() {
    return this.recipes.slice();
  }
}
