import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterModel } from '../../models/register.model';
import { FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import { MainPage } from '../main/main';
import { LoginPage } from '../login/login';
import { CookiesPage } from '../cookies/cookies';
import { PrivPage } from '../priv/priv';
import { TosPage } from '../tos/tos';
import { AuthProvider } from '../../providers/auth/auth'
import { BragProvider } from '../../providers/brag/brag'
import { User } from '../../models/interfaces/usercreds';
import { Brag } from '../../models/interfaces/brag';

/**
 * Generated class for the JoinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-join',
  templateUrl: 'join.html',
})
export class JoinPage {
  user: RegisterModel= new RegisterModel();
  users: User[];
  brags: Brag[];
  registerForm: FormGroup;
  hide  = true;

  constructor(public navCtrl: NavController, 
      public navParams: NavParams, 
      private formBuilder:FormBuilder,
       private authservice: AuthProvider
    ) {
  }
  ngOnInit() { 
    this.registerForm = this.formBuilder.group({
      'name': [this.user.name, [
         Validators.required
      ]],
      'username': [this.user.username, [
        Validators.required
      //do more validatiors  here >>for country code manualy
      ]],
      'email': [this.user.email, [
        Validators.required,
        Validators.email
      
      ]],
      'password': [this.user.password, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
        //do more validatiors  
      ]]

    })
  }

  onDoRegister(registerForm: NgForm): void {
    console.log(registerForm.value);
    this.authservice.addUser(registerForm.value as User)
       .subscribe(user => {
           user = user;
         console.log(user);
         this.navCtrl.push(LoginPage);
       });
     
  }


  // onDoRegister(registerForm: NgForm) : void {
  //   console.log(registerForm.value);
  //   this.authservice.addUser(registerForm.value as User)
  //     .subscribe(user => {
  //       this.users.push(user);
  //     });
  //    alert(this.user.name + this.user.phoneNumber);
  // }

//Load Main page
loginHome(){
  this.navCtrl.setRoot(MainPage);
}
// Load Login page
LoginPage(){
this.navCtrl.push(LoginPage);
}
// Load Login page
TosPage(){
  this.navCtrl.push(TosPage);
  }
  // Load Login page
PrivPage(){
  this.navCtrl.push(PrivPage);
  }
  // Load Login page
CookiesPage(){
  this.navCtrl.push(CookiesPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad JoinPage');
  }
  public buttonClicked2: boolean = false; //Whatever you want to initialise it as
    public onButtonClick() {
        this.buttonClicked2 = !this.buttonClicked2;
    }

}

