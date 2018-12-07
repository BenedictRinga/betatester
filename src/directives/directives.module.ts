import { NgModule } from '@angular/core';
import { ScrollHideDirective } from './scroll-hide/scroll-hide';
import { AutosizeDirective } from './autosize/autosize';
import { KeyboardAttachDirective } from './keyboard-attach/keyboard-attach';
import { EmailvalidDirective } from './emailvalid/emailvalid';
import { BlankAttrDirective } from './blank-attr/blank-attr';
import { AutoresizeDirective } from './autoresize/autoresize';
import { SwipeListenerDirective } from './swipe-listener/swipe-listener';

@NgModule({
	declarations: [
    ScrollHideDirective,
    AutosizeDirective,
    KeyboardAttachDirective,
    EmailvalidDirective,
    BlankAttrDirective,
    AutoresizeDirective,
    SwipeListenerDirective],
	imports: [],
	exports: [
    ScrollHideDirective,
    AutosizeDirective,
    KeyboardAttachDirective,
    EmailvalidDirective,
    BlankAttrDirective,
    AutoresizeDirective,
    SwipeListenerDirective]
})
export class DirectivesModule {}
