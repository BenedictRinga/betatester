import {Events} from 'ionic-angular';
import {Gesture} from 'ionic-angular/gestures/gesture';
import { OnDestroy, Directive, ElementRef, OnInit } from '@angular/core';
declare var Hammer: any;

@Directive({
    selector: '[swipe-listener]'
})
export class SwipeListenerDirective implements OnInit, OnDestroy {      

    private el: HTMLElement;
    private swipeGesture: Gesture;

    constructor(el: ElementRef,  public events: Events) {
        this.el = el.nativeElement;
        this.events = events;
    }
    ngOnInit() {
        this.swipeGesture = new Gesture(this.el, {
            recognizers: [
                [Hammer.Swipe, {direction: Hammer.DIRECTION_ALL}]
            ]
        });
        this.swipeGesture.listen();
        this.swipeGesture.on('swipe', e => {
            // Publish event when swipe is detected.
            this.events.publish('event:swipe');
        });
    }

    ngOnDestroy() {
        this.swipeGesture.destroy();
    }

}