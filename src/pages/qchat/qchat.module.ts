import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QChatPage } from './qchat';

@NgModule({
  declarations: [
    QChatPage,
  ],
  imports: [
    IonicPageModule.forChild(QChatPage),
  ],
})
export class QChatPageModule {}
