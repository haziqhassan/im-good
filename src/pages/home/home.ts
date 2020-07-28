import { Component } from '@angular/core';
import { NavController, ModalController, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  responseData : any;
  userData = {"username": "","password": "", "name": "","email": ""};
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
  userPostData = {"user_id": "","token": ""};
  userDetails : any;

  constructor(public navCtrl: NavController, public authService: AuthServiceProvider, public modalCtrl: ModalController, public toastCtrl  : ToastController) {
    //this.ionViewDidEnter();

  }

  ionViewDidEnter(){

    const data = JSON.parse(localStorage.getItem('userData'));
    console.log(data);
    if(data != null){
      this.navCtrl.push('MainPage');
    }
  }

  goSignUp(){
    this.navCtrl.push('SignupPage');
  }

   goMain()
   {
     this.authService.postData(this.userData,"login").then((result) => {
      this.responseData = result;
        console.log(this.responseData);
      if(this.responseData.userData){
        console.log(this.responseData.userData);
        localStorage.setItem('userData', JSON.stringify(this.responseData));
        this.goMainPage();
      }
      else{
        console.log("Wrong password");
        this.sendNotification("Wrong username or password. Try again.");
      }
    }, (err) => {
      console.log(err);
      this.sendNotification("Something wrong, please check your internet connection.");
    });

   }

   goMainPage(){
     this.userData.username = "";
     this.userData.password = "";
     this.navCtrl.push('MainPage');
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
