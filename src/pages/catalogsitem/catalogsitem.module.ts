import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CatalogsitemPage } from './catalogsitem';

@NgModule({
  declarations: [
    CatalogsitemPage,
  ],
  imports: [
    IonicPageModule.forChild(CatalogsitemPage),
  ],
})
export class CatalogsitemPageModule {}
