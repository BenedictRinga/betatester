import { Component, ViewChild  } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { IonicPage, 
          NavController, 
          NavParams, 
          DateTime,
          AlertController, 
          PopoverController, 
          LoadingController,
          ViewController} from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { BragPage } from '../brag/brag';
import { EmailPage } from '../email/email';
import { CallPage } from '../call/call';
import { W3wPage } from '../w3w/w3w';
import { GooglePage } from '../google/google';
import { Brag } from '../../models/interfaces/brag';
import { BragProvider } from '../../providers/brag/brag';
import { FormsModule, NgForm } from '@angular/forms';



/**
 * Generated class for the BragProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bragprofile',
  templateUrl: 'bragprofile.html',
})
export class BragProfilePage {

      // @ViewChild('signupSlider') contactSlider: any;
    
      //   slideOneForm: FormGroup;
      //   slideTwoForm: FormGroup;

      contactpage:any;
      userId={};
      name:string;
      address:string;
      landmark:string;
      BizType:string;
      Website:string;
      Email:string;
          http: any;
          brag: Brag[];
          brags: any;'ionic-angular'

          constructor(params: NavParams, 
            public navCtrl: NavController, 
              public alertCtrl: AlertController, 
                public popoverCtrl: PopoverController,
                    public loadingCtrl: LoadingController,
                    private bragservice: BragProvider, ) {
                
            console.log('UserId', params.get('userId'));

            this.contactpage=ContactPage;
        
  }
  addBrag(BragForm:NgForm) {
    console.log(BragForm.value);
    this.bragservice.addBrag(BragForm.value as Brag)
    .subscribe(brags => this.brags = brags);
    
}

  pop() {
    this.navCtrl.push(BragPage,{
      name:this.name,
      address:this.address,


    });
    console.log(this.userId);
  }
  // showPrompt() {
  //   const prompt = this.alertCtrl.create({
  //     title: 'Login',
  //     message: "Enter a name for this new album you're so keen on adding",
  //     inputs: [
  //       {
  //         name: 'title',
  //         placeholder: 'Title'
  //       },
  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         handler: data => {
  //           console.log('Cancel clicked');
  //         }
  //       },
  //       {
  //         text: 'Save',
  //         handler: data => {
  //           console.log('Saved clicked');
  //         }
  //       }
  //     ]
  //   });
  //   prompt.present();
  // }
  presentPopover(myEmail) {
    let pop = this.popoverCtrl.create(EmailPage);
   
let ev = {
  target : {
    getBoundingClientRect : () => {
      return {
        top: '100'
      };
    }
  }
};

pop.present({ev});

  }
  

  presentPopover2(myCall) {
    let pop = this.popoverCtrl.create(CallPage);
   
let ev = {
  target : {
    getBoundingClientRect : () => {
      return {
        top: '100'
      };
    }
  }
};

pop.present({ev});

  }

  presentPopover3(myW3w) {
    let pop = this.popoverCtrl.create(W3wPage);
   
let ev = {
  target : {
    getBoundingClientRect : () => {
      return {
        top: '100'
      };
    }
  }
};

pop.present({ev});

  }

  presentPopover4(myGoogle) {
    let pop = this.popoverCtrl.create(GooglePage);
   
let ev = {
  target : {
    getBoundingClientRect : () => {
      return {
        top: '100'
      };
    }
  }
};

pop.present({ev});

  }

  public buttonClicked: boolean = false; //Whatever you want to initialise it as
  public onButtonClick() {
      this.buttonClicked = !this.buttonClicked;
  }
}