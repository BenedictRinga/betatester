import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, Events, PopoverController } from 'ionic-angular';
import { ScrollHideConfig } from '../../directives/scroll-hide/scroll-hide';
import { CatalogsPage } from '../catalogs/catalogs';
import { FeedbackvPage } from '../feedbackv/feedbackv';
import { FocusPage } from '../focus/focus';
import { GiftBragPage } from '../giftbrag/giftbrag';
import { MyStatusPage } from '../mystatus/mystatus';
import { BragProfilePage } from '../bragprofile/bragprofile';
import { RatingsPage } from '../ratings/ratings';
import { FormSamplePage } from '../form-sample/form-sample';
import { BragsetPage } from '../bragset/bragset';
/**
 * Generated class for the BragPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-brag',
  templateUrl: 'brag.html',
})
export class BragPage {


  footerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-bottom', maxValue: undefined };
  headerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-top', maxValue: 44 };

  selectedItem: any;
  items: any[]; //any objects can be in this array and Typescript will be happy with it

  tab1Root=FocusPage
  tab2Root=MyStatusPage
  tab3Root=CatalogsPage



  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
      public modalCtrl: ModalController, 
        public popoverCtrl: PopoverController ) {
  }
//   // child to parent communication
//   events.subscribe(click()
//   console.log
//   this.events.publish;
// }

  // LoadFeedbackPage
  FeedbackvPage(){
  this.navCtrl.push(FeedbackvPage);
  //this.navCtrl.setRoot(ScrollHideDirective);
  }
    
  // BragProfilePage
  BragProfilePage(){
    this.navCtrl.push(BragProfilePage);
    
    }
     // FormSamplePage
     FormSamplePage(){
    this.navCtrl.push(FormSamplePage);
  
    }

  // Load GiftBragPage
  GiftBragPage(){
  this.navCtrl.push(GiftBragPage);
  
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BragPage');
  }

  hide:boolean = true;
  ngIfCtrl(){
    this.hide = !this.hide;
  }
  // presentProfileModal() {
  //   let profileModal = this.modalCtrl.create(BragProfilePage, { userId: 8675309 });
  //   profileModal.present();
  // }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(RatingsPage);
    popover.present({
      ev: myEvent
    });
  }

  pop() {
    this.navCtrl.pop();
    }

  presentPopover2(myBragset) {
    let pop = this.popoverCtrl.create(BragsetPage);
   
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
}
