import { Ingredent } from '../sharde/ingredient.model';

export class ShoopingService {
  public ingredients: Ingredent[] = [
    new Ingredent('Apple', 5),
    new Ingredent('Tomato', 10),
  ];

  getingrident() {
    return this.ingredients;
  }
  addingrident(ingident: Ingredent) {
    this.ingredients.push(ingident);
  }
}
