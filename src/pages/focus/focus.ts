import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams } from 'ionic-angular';
import { BragVPage } from '../bragv/bragv';
import { BragProvider } from '../../providers/brag/brag';
import { Brag } from  '../../models/interfaces/brag';

/**
 * Generated class for the FocusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-focus',
  templateUrl: 'focus.html',
})
export class FocusPage {

  cards: any;
  category: string = 'gear';
  brags: Brag[];

  constructor(public navCtrl: NavController, 
     public navParams: NavParams, 
     private app: App,
     private bragservice: BragProvider) {
    
      this.brags = [];
    this.cards = new Array(10);
  }
  
  ngOnInit() {
    this.getBrags();
    console.log(this.brags);
  }
  
  getBrags() : void {
    this.bragservice.getBrags()
      .subscribe(brags => this.brags = brags);
    console.log(this.brags);
  } 
  
  // Load Brag Visitor page
  // BragVPage(){
  //   this.navCtrl.push(BragVPage);

  // Load Brag Visitor page FULLmode
  BragVPage(){
    let nav = this.app.getRootNav();
    nav.push(BragVPage);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FocusPage');
  }
}
