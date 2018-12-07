import { Directive } from '@angular/core';

/**
 * Generated class for the EmailvalidDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[emailvalid]' // Attribute selector
})
export class EmailvalidDirective {

  constructor() {
    console.log('Hello EmailvalidDirective Directive');
  }

}
