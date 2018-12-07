import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ViewController } from 'ionic-angular';

/**
 * Generated class for the RatingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ratings',
  templateUrl: 'ratings.html',
})
export class RatingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RatingsPage');
  }
  // close() {
  //   this.viewCtrl.dismiss();
  // }

}
