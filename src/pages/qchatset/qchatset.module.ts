import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QchatsetPage } from './qchatset';

@NgModule({
  declarations: [
    QchatsetPage,
  ],
  imports: [
    IonicPageModule.forChild(QchatsetPage),
  ],
})
export class QchatsetPageModule {}
