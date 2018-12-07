import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { PhotoProvider } from '../../providers/photo/photo';
import { Storage } from '@ionic/storage';

import { QChatPage } from '../qchat/qchat';
import { BragPage } from '../brag/brag';
import { GiftBragPage } from '../giftbrag/giftbrag';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  currentImage: any;
    show: boolean = false;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private camera: Camera, 
    public photoService: PhotoProvider,
    private storage: Storage,
    private socialSharing: SocialSharing) {
  }
  ngOnInit() {
    this.photoService.loadSaved();
}
  // Load GiftBragPage
  GiftBragPage(){
  this.navCtrl.push(GiftBragPage);
  }
  Brag(){
    this.navCtrl.setRoot(BragPage);
  }
  qChat(){
    this.navCtrl.setRoot(QChatPage);
  }
  share(index){
    this.socialSharing.share(index.img, null, null, null);
  }
  public buttonClicked: boolean = false; //Whatever you want to initialise it as
    public onButtonClick() {
        this.buttonClicked = !this.buttonClicked;
    }

}