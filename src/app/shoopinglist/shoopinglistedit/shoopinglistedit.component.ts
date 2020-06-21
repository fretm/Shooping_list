import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';

import { Ingredent } from 'src/app/sharde/ingredient.model';

@Component({
  selector: 'app-shoopinglistedit',
  templateUrl: './shoopinglistedit.component.html',
  styleUrls: ['./shoopinglistedit.component.css'],
})
export class ShoopinglisteditComponent implements OnInit {
  @ViewChild('nameinput') nameinputref: ElementRef;
  @ViewChild('amuntinput') amountinputref: ElementRef;
  @Output() ingrdientadded = new EventEmitter<Ingredent>();
  constructor() {}

  ngOnInit(): void {}
  onadditem() {
    const ingname = this.nameinputref.nativeElement.value;
    const ingamunt = this.amountinputref.nativeElement.value;
    const newingrdient = new Ingredent(ingname, ingamunt);
    this.ingrdientadded.emit(newingrdient);
  }
}
