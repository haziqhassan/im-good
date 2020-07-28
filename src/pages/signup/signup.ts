import { Component } from '@angular/core';
import { NavController, ModalController, ToastController, IonicPage, LoadingController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  responseData : any;
  userData = {"username": "","password": "", "name": ""};
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
  public form : FormGroup;

  constructor(public navCtrl: NavController, public authService: AuthServiceProvider, public modalCtrl: ModalController, public fb: FormBuilder, public toastCtrl  : ToastController,  public loadingCtrl: LoadingController) {

    this.form = fb.group({
         "username1"               : ["", Validators.required],
         "name1"             : ["", Validators.required],
         "password1"           : ["", Validators.compose([Validators.minLength(5), Validators.required])]
    });
  }

  goMain()
  {
    let loader = this.loadingCtrl.create({
      cssClass: "transparent",
      content: `
        <img src="assets/imgs/moon.png" class="ghost" width="80px"/>
        <p class="fonts">Please wait..</p>`,
      spinner: 'hide',
    });
    loader.present();

    this.authService.postData(this.userData,"signup").then((result) => {
     this.responseData = result;
       console.log(this.responseData);
     if(this.responseData.userData){
       console.log(this.responseData.userData);
       //localStorage.setItem('userData', JSON.stringify(this.responseData));
       loader.dismiss();
       this.goMainPage();
       this.navCtrl.popToRoot();
       this.sendNotification("Done! let's login and have a try");
     }
     else{
       loader.dismiss();
       console.log("Wrong password");
       this.sendNotification("Account name or username already exist. Please change to different username.");
     }
   }, (err) => {
     console.log(err);
     loader.dismiss();
     this.sendNotification("Something wrong, please check your internet connection.");
   });

  }

  goMainPage(){
    this.userData.username = "";
    this.userData.password = "";
    //let abc = this.modalCtrl.create('MainPage');
    //abc.present();
  }

  sendNotification(message)  : void
  {
     let notification = this.toastCtrl.create({
         message       : message,
         duration      : 3000,
         cssClass      : "toast-container",
         position      : "bottom"
     });
     notification.present();
  }

  hideShowPassword() {
   this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
   this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
 }

}
