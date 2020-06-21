import { Component, OnInit } from '@angular/core';
import { Ingredent } from '../sharde/ingredient.model';

@Component({
  selector: 'app-shoopinglist',
  templateUrl: './shoopinglist.component.html',
  styleUrls: ['./shoopinglist.component.css'],
})
export class ShoopinglistComponent implements OnInit {
  public ingredients: Ingredent[] = [
    new Ingredent('Apple', 5),
    new Ingredent('Tomato', 10),
  ];
  constructor() {}

  ngOnInit(): void {}
}
