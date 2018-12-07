import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController  } from 'ionic-angular';
import { BragProvider } from '../../providers/brag/brag';

import { Brag } from  '../../models/interfaces/brag';
import { BragpostPage } from '../bragpost/bragpost';

/**
 * Generated class for the MystatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mystatus',
  templateUrl: 'mystatus.html',
})
export class MyStatusPage {

  cards: any;
  selectedItem: any;
  items: any[]; //any objects can be in this array and Typescript will be happy with it
  brags: Brag[];

  constructor(public navCtrl: NavController, 
      public navParams: NavParams, 
              private bragservice: BragProvider,
              private modalCtrl: ModalController,
              public viewCtrl: ViewController ) {

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
  } 

  presentBragpostModal() {
    let BragpostModal = this.modalCtrl.create(BragpostPage, { userId: 8675309 }, {cssClass: 'myStatModal' });
    BragpostModal.present();
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyStatusPage');
  }

}
