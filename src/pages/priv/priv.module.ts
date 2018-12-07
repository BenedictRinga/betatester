import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrivPage } from './priv';

@NgModule({
  declarations: [
    PrivPage,
  ],
  imports: [
    IonicPageModule.forChild(PrivPage),
  ],
})
export class PrivPageModule {}
