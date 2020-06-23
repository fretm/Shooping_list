import { Component, OnInit } from '@angular/core';
import { Ingredent } from '../sharde/ingredient.model';
import { ShoopingService } from './shopping.service';

@Component({
  selector: 'app-shoopinglist',
  templateUrl: './shoopinglist.component.html',
  styleUrls: ['./shoopinglist.component.css'],
})
export class ShoopinglistComponent implements OnInit {
  public ingredients: Ingredent[];

  constructor(private slservice: ShoopingService) {}

  ngOnInit(): void {
    this.ingredients = this.slservice.getingrident();
  }
}
