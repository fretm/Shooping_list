import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { recipeservice } from '../recipe.service';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css'],
})
export class RecipelistComponent implements OnInit {
  @Output() recipewasselected = new EventEmitter<Recipe>();
  recipe: Recipe[];
  constructor(private recservice: recipeservice) {}

  ngOnInit(): void {
    this.recipe = this.recservice.getrecipes();
    console.log(this.recipe);
  }
  onrecipeselected(recipe: Recipe) {
    this.recipewasselected.emit(recipe);
  }
}
