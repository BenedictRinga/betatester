import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalAddEventPage } from './cal-add-event';

@NgModule({
  declarations: [
    CalAddEventPage,
  ],
  imports: [
    IonicPageModule.forChild(CalAddEventPage),
  ],
})
export class CalAddEventPageModule {}
