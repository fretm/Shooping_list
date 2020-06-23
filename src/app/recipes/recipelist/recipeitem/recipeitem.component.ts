import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { recipeservice } from '../../recipe.service';

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css'],
})
export class RecipeitemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeservice: recipeservice) {}

  ngOnInit(): void {}

  onselected() {
    this.recipeservice.recipeselected.emit(this.recipe);
  }
}
