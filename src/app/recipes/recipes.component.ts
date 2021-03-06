import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { recipeservice } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [recipeservice],
})
export class RecipesComponent implements OnInit {
  selectedrecipe: Recipe;
  constructor(private recipeservice: recipeservice) {}

  ngOnInit(): void {
    this.recipeservice.recipeselected.subscribe((recipe: Recipe) => {
      this.selectedrecipe = recipe;
    });
  }
}
