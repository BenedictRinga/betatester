import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

/**
 * Generated class for the RingamailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-ringamail',
  templateUrl: 'ringamail.html',
})
export class RingamailPage {

  
  to="";
  cc="";
  bcc="";
  attachments="";
  subject="";
  message="";

 

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
      params: NavParams, 
        public viewCtrl: ViewController, 
          private emailComposer: EmailComposer) {

     
     console.log('UserId', params.get('userId'));

    
  }
// Cancel: close the Email modal page
  closeModal() {
  this.viewCtrl.dismiss();
}
 
  ionViewDidLoad() {

    this.emailComposer.isAvailable().then((available: boolean) =>{
      if(available) {
        //Now we know we can send
      }
     });
    console.log('ionViewDidLoad RingamailPage');
  }

  send(){
  let email = {
    to: this.to,
    cc: [],
    bcc: [],
    attachments: [
    ],
    subject: this.subject,
    body: this.message,
    isHtml: true
  };
  // Send a text message using default options
this.emailComposer.open(email);

}
}