import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, DateTime, AlertController } from 'ionic-angular';
import { BragPage } from '../brag/brag';
import { CatalogsitemPage } from '../catalogsitem/catalogsitem';
/**
 * Generated class for the CatalogsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-catalogs',
  templateUrl: 'catalogs.html',
})
export class CatalogsPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
      public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CatalogsPage');
  }


  back() {
    this.navCtrl.setRoot(BragPage);
  }
  getItems() {
    this.navCtrl.setRoot(CatalogsitemPage);
  }
  
  addEmail() {
    let alert = this.alertCtrl.create({
      title: 'Email Card',
      inputs: [
        {
          name: 'catname',
          placeholder: 'Album Name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saving');
          }
        }
      ],
      cssClass: 'alertCustomCss'
    });
    alert.present();

  }
  createCatalog() {
    let alert = this.alertCtrl.create({
      title: 'Create Catalog',
      inputs: [
        {
          name: 'catname',
          placeholder: 'Album Name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saving');
          }
        }
      ],
      cssClass: 'alertCustomCss'
    });
    alert.present();
  }

}