import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BlankAttrDirective } from '../../directives/blank-attr/blank-attr';
import { HomePage } from '../home/home';


/**
 * Generated class for the BragsetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

  
@IonicPage()
@Component({
  selector: 'page-bragset',
  templateUrl: 'bragset.html',
})
export class BragsetPage {
  navbarTheme:string;
  
  setNavbarTheme(theme:string): void {
    this.navbarTheme = theme;
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  qChat(){
    this.navCtrl.push(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BragsetPage');
  }

}
