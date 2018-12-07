import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, PopoverController, ViewController } from 'ionic-angular';
import { ScrollHideConfig } from '../../directives/scroll-hide/scroll-hide';
import { BvratingsPage } from '../bvratings/bvratings';
import { ContactPage } from '../contact/contact';
import { FeedbackPage } from '../feedback/feedback';
import { VisionPage } from '../vision/vision';
import { CatalogsvPage } from '../catalogsv/catalogsv';
import { FdbackPage } from '../fdback/fdback';


/**
 * Generated class for the BragVPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bragv',
  templateUrl: 'bragv.html',
})
export class BragVPage {

  cards: any;
  category: string = 'gear';


  footerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-bottom', maxValue: undefined };
  headerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-top', maxValue: 44 };

  

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
      public viewCtrl: ViewController, 
        private modalCtrl: ModalController,
        public popoverCtrl: PopoverController ) {

    this.cards = new Array(10);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BragVPage');
  }
  dismissView(){
    this.viewCtrl.dismiss(
    //pass data what you want on dismiss
   );
   }

  presentContactModal() {
    let ContactModal = this.modalCtrl.create(ContactPage, { userId: 8675309 }, {showBackdrop: true, enableBackdropDismiss: true, cssClass: 'myStatModal' });
    ContactModal.present();

    
  }
  presentPopover9(myEvent) {
    let popover = this.popoverCtrl.create(BvratingsPage);
    popover.present({
      ev: myEvent
    });
      }

      pop() {
            this.navCtrl.pop();
  }

//   presentPopover3(myContact) {
//     let pop = this.popoverCtrl.create(ContactPage, {} , { cssClass: ' WIDEcustom-popover ' });
   
// let ev = {
//   target : {
//     getBoundingClientRect : () => {
//       return {
//         top: '100'
//       };
//     }
//   }
// };

// pop.present({ev});

//   }

  presentPopover4(myCatalogsv) {
    let popover = this.popoverCtrl.create(CatalogsvPage, {} , { cssClass: ' WIDEcustom-popover ' });
    popover.present({
      ev: myCatalogsv
    });
      }

      pop4() {
        this.navCtrl.pop();
    }
  
    presentFdbackModal() {
      let FdbackModal = this.modalCtrl.create(FdbackPage, {cssClass: 'BragVModal' });
      FdbackModal.present();
    }

    closeModal() {
      this.viewCtrl.dismiss();
    }

  presentPopover2(myVision) {
          let popover = this.popoverCtrl.create(VisionPage);
          popover.present({
            ev: myVision
          });
        }

        pop2() {
          this.navCtrl.pop();
  }

}
