import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, PopoverController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { Platform } from 'ionic-angular/platform/platform';
import { BragProvider } from '../../providers/brag/brag';
import { Brag } from  '../../models/interfaces/brag';

import { RingamailPage } from '../ringamail/ringamail';
import { RingacalendarPage } from '../ringacalendar/ringacalendar';

/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  cards: any;
  selectedItem: any;
  items: any[]; //any objects can be in this array and Typescript will be happy with it
  brags: Brag[];
  // phoneNumber: string;
  calendars = [];

  constructor(public navCtrl: NavController, 
    private platform: Platform, 
      public navParams: NavParams, 
        public viewCtrl: ViewController, 
          private call: CallNumber, 
        public modalCtrl: ModalController,
        private bragservice: BragProvider,
        public popoverCtrl: PopoverController ) {

          this.brags = [];
      this.items = [];
    this.cards = [];
  }
  ngOnInit() {
    this.getBrags();
  }
  
  getBrags() : void {
    this.bragservice.getBrags()
      .subscribe(brags => this.brags = brags);
  

    // if(!this.platform.is('cordova')) {
    //   return false;}
  }

  // Cancel: close the Email modal page
  // closeModal() {
  //   this.viewCtrl.dismiss();
  // }
   
  
//     // Load RingamailPage
//     RingamailPage(){
//       this.navCtrl.push(RingamailPage);

//  }
 presentRingamailModal() {
  let RingamailModal = this.modalCtrl.create(RingamailPage, { userId: 8675309 });
  RingamailModal.present();
}

presentPopoverC3(myRingacalendar) {
  let pop = this.popoverCtrl.create(RingacalendarPage, {} , { cssClass: ' WIDEcustom-popover ' });
 
let ev = {
target : {
  getBoundingClientRect : () => {
    return {
      top: '100'
    };
  }
}
};

pop.present({ev});

}

// Group 1
  callNumber(){
    setTimeout(() => {
         let tel = '12345678890';
         window.open(`tel:${tel}`, '_system');
       },100);
   }
  catch (e) {
    console.error (e || "Error launching dialler.");
  }

  
pop() {
  this.navCtrl.pop();
  }
  ionViewDidLoad() {

    // this.callNumber.callNumber("0721262596", true)
    // .then(res => console.log('Launched dialer!', res))
    // .catch(err => console.log('Error launching dialer', err));
  
    console.log('ionViewDidLoad ContactPage');
    
  }
}
