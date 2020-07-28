import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-apply',
  templateUrl: 'apply.html',
})
export class ApplyPage {

  public items: any = [];
  public httpdata: any = [];

  userDetails : any;
  responseData : any;
  dataSet : any;
  userPostData = {"user_id": "","token": "","idMeet": ""};

  constructor(public navCtrl: NavController,public alertCtrl : AlertController,  public navParams: NavParams, public authService: AuthServiceProvider, public loadingCtrl: LoadingController, public toastCtrl  : ToastController) {
    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.userData;
    this.userPostData.user_id = this.userDetails.user_id;
    this.userPostData.token = this.userDetails.token;
    this.getFeed();
    this.oriItems();

  }

  doRefresh(refresher) {
    this.getFeed();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 500);
  }

  getFeed() {
    let loader = this.loadingCtrl.create({
      cssClass: "transparent",
      content: `
        <img src="assets/imgs/moon.png" class="ghost" width="80px"/>
        <p class="fonts">Please wait..</p>`,
      spinner: 'hide',
    });

    loader.present();

    this.authService.postData(this.userPostData, 'mymeeting')
      .then((result) => {
        this.responseData = result;
        if (this.responseData.feedData) {
          localStorage.setItem('meetingData', JSON.stringify(this.responseData));
          this.dataSet = this.responseData.feedData;
          this.httpdata = this.dataSet;
          loader.dismiss();
        } else if (this.responseData.feedData == ''){
          this.dataSet = 0;
          loader.dismiss();
        } else {
          //this.dataSet = this.responseData.feedData;
          loader.dismiss();
        }
      }, (err) => {

      });
  }

  deleteMeeting(item){
    this.userPostData.idMeet = item.item;
    console.log(this.userPostData.idMeet);
    const confirm = this.alertCtrl.create({
      title: 'Delete meeting?',
      message: 'Are you sure?',
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
            let loader = this.loadingCtrl.create({
              cssClass: "transparent",
              content: `
                <img src="assets/imgs/moon.png" class="ghost" width="80px"/>
                <p class="fonts">Please wait..</p>`,
              spinner: 'hide',
            });

            loader.present();

            this.authService.postData(this.userPostData, 'deleteMeeting')
              .then((result) => {
                this.responseData = result;
                if (this.responseData) {
                  this.sendNotification(`Success delete`);
                  this.getFeed();
                  this.oriItems();
                  loader.dismiss();
                } else {
                  this.sendNotification(`Something wrong, check your internet connection`);
                  loader.dismiss();
                }
              }, (err) => {

              });

          }
        }
      ]
    });
    confirm.present();
  }

  oriItems() {

    this.dataSet = this.httpdata;
  }

  getItems(ev) {
    this.oriItems(); // Reset items back to all of the items

    var val = ev.target.value; // set val to the value of the ev target

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {

      this.dataSet = this.dataSet.filter((item) => {
        return (item.topic.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }

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
