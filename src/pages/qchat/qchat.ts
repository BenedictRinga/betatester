import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController} from 'ionic-angular';
import { ChatroomPage } from '../chatroom/chatroom';
import { FriendsPage } from '../friends/friends';



/**
 * Generated class for the QchatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qchat',
  templateUrl: 'qchat.html',
})
export class QChatPage {

  ChatroomPage=ChatroomPage
  FriendsPage=FriendsPage

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  
    console.log(this.navParams);
  }
  

  
  }




 