import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChatroomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chatroom',
  templateUrl: 'chatroom.html',
})
export class ChatroomPage {

  username : string = '';
  message: string = '';
  db:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   console.log(this.navParams);
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatroomPage');
  }
 
  send() {
    this.db.push({
      username: this.username,
      message: this.message
    });
  }

}
