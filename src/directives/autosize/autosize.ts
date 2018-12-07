import {ElementRef, HostListener, Directive, OnInit, ViewChild} from '@angular/core';
import {Content} from 'ionic-angular';

@Directive({
  selector: 'ion-textarea[autosize]'
})

export class AutosizeDirective implements OnInit {
  @HostListener('input', ['$event.target'])
  onInput(textArea:HTMLTextAreaElement):void {
    this.adjust();
  }

  constructor(public element:ElementRef) {
  }

  ngOnInit():void {
    setTimeout(() => this.adjust(), 0);
  }

  adjust():void {
    let textArea = this.element.nativeElement.getElementsByTagName('textarea')[0];
    textArea.style.height = 'auto';
    if (textArea.scrollHeight < 100) {
      textArea.style.height = textArea.scrollHeight + "px";
      textArea.style.overflowY = 'hidden';
    } else {
      textArea.style.height = "250px";
      textArea.style.overflowY = 'auto';
    }

  }
}