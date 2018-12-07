import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QchatvPage } from './qchatv';

@NgModule({
  declarations: [
    QchatvPage,
  ],
  imports: [
    IonicPageModule.forChild(QchatvPage),
  ],
})
export class QchatvPageModule {}
