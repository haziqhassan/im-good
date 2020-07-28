import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, LoadingController, ModalController, Platform, ViewController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ModalPage } from '../modal/modal';

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {
  public test : any;
  testings: any = {"id": "","author": ""};

  userDetails : any;
  responseData : any;
  dataSet : any;
  userPostData = {"user_id": "","token":"","idForum":""};
  userCommentData = {"user_id": "","token":"","idComment":""};
  forumDetails : any;
  forumPostData: any = {"id": "","comment": ""};
  forumPass: any = {"id": "","user_id": "","topic": "","post": "","author": "","allcomment": "","upvote": "","downvote": "","flag": "","date": "","time": ""};
  public form    : FormGroup;


  constructor(public navCtrl    : NavController,
              public http       : Http,
              public NP         : NavParams,
              public fb         : FormBuilder,
              public toastCtrl  : ToastController,
              public authService: AuthServiceProvider,
              public alertCtrl: AlertController,
              public modalCtrl: ModalController,
              public loadingCtrl: LoadingController) {

                this.selectEntry(this.NP.get("record"));
                const data = JSON.parse(localStorage.getItem('userData'));
                this.userDetails = data.userData;
                this.userPostData.user_id = this.userDetails.user_id;
                this.userPostData.token = this.userDetails.token;
                this.getComment();
  }

  doRefresh(refresher) {
    this.getComment();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 500);
  }

  openModal(){
    let modal = this.modalCtrl.create('ModalPage', {idForum: this.forumPass.id});
    modal.onDidDismiss(data => {
     this.getComment();

   });
    modal.present();
  }

  upvote(){
    let loader = this.loadingCtrl.create({
      cssClass: "transparent",
      content: `
        <img src="assets/imgs/moon.png" class="ghost" width="80px"/>
        <p class="fonts">Please wait..</p>`,
      spinner: 'hide',
    });

    loader.present();
    this.userPostData.idForum = this.forumPass.id;
    this.authService.postData(this.userPostData, 'newupvote')
      .then((result) => {
        this.responseData = result;
        if (this.responseData.feedData) {
          loader.dismiss();
        } else {
          loader.dismiss();
        }
      }, (err) => {

      });

  }

  downvote(){
    let loader = this.loadingCtrl.create({
      cssClass: "transparent",
      content: `
        <img src="assets/imgs/moon.png" class="ghost" width="80px"/>
        <p class="fonts">Please wait..</p>`,
      spinner: 'hide',
    });

    loader.present();
    this.userPostData.idForum = this.forumPass.id;
    this.authService.postData(this.userPostData, 'newdownvote')
      .then((result) => {
        this.responseData = result;
        if (this.responseData.feedData) {
          loader.dismiss();
        } else {
          loader.dismiss();
        }
      }, (err) => {

      });
  }

  deleteComment(otem){
    this.userCommentData.user_id = this.userPostData.user_id;
    this.userCommentData.token = this.userPostData.token;
    this.userCommentData.idComment = otem.otem;
    console.log(this.userCommentData.idComment);
    const confirm = this.alertCtrl.create({
      title: 'Delete comment?',
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

            this.authService.postData(this.userCommentData, 'deleteComment')
              .then((result) => {
                this.responseData = result;
                if (this.responseData) {
                  this.sendNotification(`Success delete`);
                  this.getComment();
                  loader.dismiss();
                } else {
                  this.sendNotification(`Something wrong, check your internet connection`);
                  this.getComment();
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

  flagcomment(otem){
    this.userCommentData.user_id = this.userPostData.user_id;
    this.userCommentData.token = this.userPostData.token;
    this.userCommentData.idComment = otem.otem;
    console.log(this.userCommentData.idComment);

    const confirm = this.alertCtrl.create({
      title: 'Report this comment?',
      message: 'Reported comment cannot be undo. Are you sure?',
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

            this.authService.postData(this.userCommentData, 'newflagcomment')
              .then((result) => {
                this.responseData = result;
                if (this.responseData) {
                  this.getComment();
                  loader.dismiss();
                } else {
                  this.sendNotification(`Something wrong, check your internet connection`);
                  this.getComment();
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

  gonext(){
    this.navCtrl.push('NewmeetingPage');
  }

  getComment() {
    let loader = this.loadingCtrl.create({
      cssClass: "transparent",
      content: `
        <img src="assets/imgs/moon.png" class="ghost" width="80px"/>
        <p class="fonts">Please wait..</p>`,
      spinner: 'hide',
    });

    loader.present();
    this.userPostData.idForum = this.forumPass.id;
    this.authService.postData(this.userPostData, 'comments')
      .then((result) => {
        this.responseData = result;
        if (this.responseData.feedData) {
          localStorage.setItem('commentData', JSON.stringify(this.responseData));
          this.dataSet = this.responseData.feedData;
          console.log(this.dataSet);
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

  ionViewDidLoad() {
    this.selectEntry(this.NP.get("record"));
  }

  selectEntry(item)
  {
    this.forumPass.id = item.id;
    this.forumPass.user_id = item.user_id;
    this.forumPass.topic = item.topic;
    this.forumPass.post = item.post;
    this.forumPass.author = item.author;
    this.forumPass.allcomment = item.allcomment;
    this.forumPass.upvote = item.upvote;
    this.forumPass.downvote = item.downvote;
    this.forumPass.flag = item.flag;
    this.forumPass.date = item.date;
    this.forumPass.time = item.time;

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
