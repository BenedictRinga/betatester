import {Directive, Input, ElementRef, OnChanges, SimpleChange} from '@angular/core';

@Directive({
  selector: '[blankAttr]'
})
export class BlankAttrDirective implements OnChanges {
  private _elem: HTMLElement;
  @Input('blankAttr') attrName:string;

  constructor(eref: ElementRef) {
    this._elem = eref.nativeElement;
  }

  ngOnChanges(changes: {[key: string]: SimpleChange}):void {
    let change = changes['attrName'];
    let pv = change.previousValue;
    if (pv) {
      this._elem.removeAttribute(pv);
    }
    this._elem.setAttribute(change.currentValue, '');
  }
}