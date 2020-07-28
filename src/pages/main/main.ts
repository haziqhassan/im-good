import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, App, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { CallNumber } from '@ionic-native/call-number';
import { Socket } from 'ng-socket-io';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  userDetails : any;
  responseData: any;
  userPostData = {"user_id":"","token":"","username":"","name":""};


  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform, public authService: AuthServiceProvider, public appCtrl: App, private callNumber: CallNumber, public loadingCtrl: LoadingController, public toastCtrl  : ToastController, public alertCtrl : AlertController, public socket: Socket) {

    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.userData;
    this.userPostData.user_id = this.userDetails.user_id;
    this.userPostData.token = this.userDetails.token;
    this.userPostData.username = this.userDetails.username;
    this.userPostData.name = this.userDetails.name;
    console.log("nama:", this.userPostData.name);

  }

  callEmergency(){
    const confirm = this.alertCtrl.create({
      title: 'Call the right authorities?',
      message: 'This act will call the right authorities to make sure you are fine. If you are really in need and not in a good situation, please make this call',
      cssClass: "alertCustomCss",
      buttons: [
        {
          text: 'Cancel',
          cssClass: "cancel",
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Yes',
          cssClass: "yes",
          handler: () => {
            //this.callJoint();
          this.callNumber.callNumber(`+60173705160`, true);

          }
        }
      ]
    });
    confirm.present();
  }

  /*
  callJoint(telephoneNumber) {
    this.callNumber.isCallSupported()
    .then(function (response) {
      if (response == true) {
          this.callNumber.callNumber(`+60173705160`, true);
      }
      else {
          this.sendNotification(`Sorry you may make a call only with mobile phone.`);
      }
    });

  }*/

  goPage1(){
	  this.navCtrl.push('Page1Page');
  }

  goPage2(){
	  this.navCtrl.push('Page2Page');
  }

  goProfile(){
	  this.navCtrl.push('ProfilePage');
  }

  goRoom(){
    this.socket.connect();
    this.socket.emit('online', this.userPostData.name);
    this.socket.emit('set-nickname', this.userPostData.name);
    this.navCtrl.push('Consultant2Page', { nickname: this.userPostData.name });
  }

  goCounselor(){
    this.navCtrl.push('CounselorPage');
  }

  goMeeting(){
    this.navCtrl.push('Page3Page');
  }

  goMyApply(){
    this.navCtrl.push('ApplyPage');
  }

  logout(){
    console.log("Logout triggered");
    localStorage.clear();
    setTimeout(() => this.backToWelcome(), 1000);

  }

  backToWelcome(){
     //this.navCtrl.pop();
     this.platform.exitApp();
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

}
