import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AttachedPage } from './attached';

@NgModule({
  declarations: [
    AttachedPage,
  ],
  imports: [
    IonicPageModule.forChild(AttachedPage),
  ],
})
export class AttachedPageModule {}
