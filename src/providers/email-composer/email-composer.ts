import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer';

/*
  Generated class for the EmailComposerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EmailComposerProvider {

  constructor(public http: HttpClient, private emailComposer: EmailComposer) {
    console.log('Hello EmailComposerProvider Provider');
  }

  

}
