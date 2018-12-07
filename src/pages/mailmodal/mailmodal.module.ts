import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MailmodalPage } from './mailmodal';

@NgModule({
  declarations: [
    MailmodalPage,
  ],
  imports: [
    IonicPageModule.forChild(MailmodalPage),
  ],
})
export class MailmodalPageModule {}
