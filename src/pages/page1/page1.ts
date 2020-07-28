import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
})
export class Page1Page {

  public items: any = [];
  public httpdata: any = [];

  userDetails : any;
  responseData : any;
  dataSet : any;
  userPostData = {"user_id": "","token": "","idForum": ""};

  constructor(public navCtrl: NavController, public alertCtrl : AlertController,  public navParams: NavParams, public http   : Http, public authService: AuthServiceProvider, public loadingCtrl: LoadingController, public toastCtrl  : ToastController) {

    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.userData;
    this.userPostData.user_id = this.userDetails.user_id;
    this.userPostData.token = this.userDetails.token;
    this.getFeed();
    this.oriItems();
  }

  gonext()
  {
    this.navCtrl.push('RegisterPage');
  }

  goedit(param)
  {
    this.navCtrl.push('EditPage', param);
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

    this.authService.postData(this.userPostData, 'forum')
      .then((result) => {
        this.responseData = result;
        if (this.responseData.feedData) {
          localStorage.setItem('forumData', JSON.stringify(this.responseData));
          this.dataSet = this.responseData.feedData;
          this.httpdata = this.dataSet;
          loader.dismiss();
        } else {}
      }, (err) => {

      });
  }

  doRefresh(refresher) {
    this.getFeed();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 500);
  }

  deleteForum(item){

    this.userPostData.idForum = item.item;
    console.log(this.userPostData.idForum);
    const confirm = this.alertCtrl.create({
      title: 'Delete post?',
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

            this.authService.postData(this.userPostData, 'deleteForum')
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

  flagForum(item){

    this.userPostData.idForum = item.item;
    console.log(this.userPostData.idForum);
    const confirm = this.alertCtrl.create({
      title: 'Report this forum?',
      message: 'Reported forum cannot be undo. Are you sure?',
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

            this.authService.postData(this.userPostData, 'newflag')
              .then((result) => {
                this.responseData = result;
                if (this.responseData) {
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
