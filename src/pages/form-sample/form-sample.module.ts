import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormSamplePage } from './form-sample';

@NgModule({
  declarations: [
    FormSamplePage,
  ],
  imports: [
    IonicPageModule.forChild(FormSamplePage),
  ],
})
export class FormSamplePageModule {}
