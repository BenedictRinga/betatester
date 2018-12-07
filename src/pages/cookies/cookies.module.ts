import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CookiesPage } from './cookies';

@NgModule({
  declarations: [
    CookiesPage,
  ],
  imports: [
    IonicPageModule.forChild(CookiesPage),
  ],
})
export class CookiesPageModule {}
