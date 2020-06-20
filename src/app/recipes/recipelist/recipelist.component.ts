import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css'],
})
export class RecipelistComponent implements OnInit {
  public recipes: Recipe[] = [
    new Recipe(
      'a test recipe',
      'this is simply a test ',
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg '
    ),
    new Recipe(
      'a test recipe',
      'this is simply a test ',
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg '
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
