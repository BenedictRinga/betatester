import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyStatusPage } from './mystatus';

@NgModule({
  declarations: [
    MyStatusPage,
  ],
  imports: [
    IonicPageModule.forChild(MyStatusPage),
  ],
})
export class MystatusPageModule {}
