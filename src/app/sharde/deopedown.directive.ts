import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({ selector: '[appDropdown]' })
export class Dropdowndirective {
  @HostBinding('class.open') isopen = false;
  @HostListener('click') toggleopen() {
    this.isopen = !this.isopen;
  }
  constructor() {}
}
