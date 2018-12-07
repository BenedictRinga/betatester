import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginModel } from '../../models/login.model';
import { MainPage } from '../main/main';
import { JoinPage } from '../join/join';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { BragProvider } from '../../providers/brag/brag'
import { User } from '../../models/interfaces/usercreds';
import { Brag } from '../../models/interfaces/brag';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user: LoginModel = new LoginModel();
  loginForm: FormGroup;
  hide = true;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private authservice: BragProvider) {
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'phoneNumber': [this.user.phoneNumber, [
        Validators.required
        //do more validatiors  here >>for country code manualy
      ]],
      'password': [this.user.password, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]]

    })
  }


  onDoLogin(loginForm: NgForm): void {
    console.log(loginForm.value);
    this.authservice.addBrag(loginForm.value as Brag)
      .subscribe(brag => {
        brag = brag;
        console.log(brag);
        this.navCtrl.setRoot(MainPage);
      });

  }
  //Load login page
  KonDoLogin(): void {
    alert(this.user.password + ' ' +this.user.phoneNumber);
  }

  //Load main page
  loginHome(){
    this.navCtrl.setRoot(MainPage);
  }
   //Load Join page
   JoinPage(){
    this.navCtrl.push(JoinPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}