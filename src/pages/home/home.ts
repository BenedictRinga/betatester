import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { JoinPage } from '../join/join';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  login(){
    this.navCtrl.setRoot(LoginPage);
  }
  join(){
    this.navCtrl.setRoot(JoinPage);
  }

}



// import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';

// @Component({
//   selector: 'page-home',
//   templateUrl: 'home.html'
// })
// export class HomePage {

//   constructor(public navCtrl: NavController) {

//   }

// }
