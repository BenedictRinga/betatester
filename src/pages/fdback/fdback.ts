import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, PopoverController } from 'ionic-angular';
import { Brag } from '../../models/interfaces/brag';
import { BragProvider } from '../../providers/brag/brag';
import { FormsModule, NgForm } from '@angular/forms';
import { HTTP } from '@ionic-native/http';
import { FeedbackvPage } from '../feedbackv/feedbackv';
/**
 * Generated class for the FdbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fdback',
  templateUrl: 'fdback.html',
})
export class FdbackPage {
  http: any;
  brag: Brag[];
  brags: any;'ionic-angular'

  constructor(
    public navCtrl: NavController,
        public navParams: NavParams,
        public viewCtrl: ViewController,
        private bragservice: BragProvider,
        public popoverCtrl: PopoverController ) {
  }

  addBrag(BragForm:NgForm) {
    console.log(BragForm.value);
    this.bragservice.addBrag(BragForm.value as Brag)
    .subscribe(brags => this.brags = brags);
    
}


        
  closeModal() {
    this.viewCtrl.dismiss();
}

presentPopover8(myFeedbackv) {
  let popover = this.popoverCtrl.create(FeedbackvPage, {} , { cssClass: ' WIDEcustom-popover ' });
  popover.present({
    ev: myFeedbackv
  });
    }

    pop4() {
      this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FdbackPage');
  }

}
