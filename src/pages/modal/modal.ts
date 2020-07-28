import { Component } from '@angular/core';
import { IonicApp, IonicPage, NavController, NavParams, Platform, ViewController, LoadingController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  public form    : FormGroup;
  dataSet : any;
  responseData : any;
  public myDate: any;
  public myTime: any;
  public idForum: any;
  public userDetails : any;
  userPostData = {"user_id": "","name": "","token": ""};
  commentPostData = {"token": "","idForum": "","user_id": "","user": "","text": "","commentCount": "1","upvote": "0","downvote": "0","flag": "0","date": "","time": ""};
  constructor(private ionicApp: IonicApp, public platform: Platform, public fb: FormBuilder, public NP: NavParams, public navCtrl: NavController, public params: NavParams, public viewCtrl: ViewController, public authService: AuthServiceProvider, public loadingCtrl: LoadingController) {
    this.myDate = moment().format("DD/MM");
    this.myTime = moment().format("hh:mm a");
    this.idForum = NP.get('idForum');
    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.userData;
    this.userPostData.user_id = this.userDetails.user_id;
    this.userPostData.name = this.userDetails.name;
    this.userPostData.token = this.userDetails.token;

    this.form = fb.group({
      "text"                  : ["", Validators.required]

    });
  }

  postComment(){
    this.commentPostData.token = this.userPostData.token;
    this.commentPostData.idForum = this.idForum;
    this.commentPostData.user_id = this.userPostData.user_id;
    this.commentPostData.user = this.userPostData.name;
    this.commentPostData.text = this.form.controls["text"].value;
    this.commentPostData.date = this.myDate;
    this.commentPostData.time = this.myTime;

    let loader = this.loadingCtrl.create({
      cssClass: "transparent",
      content: `
        <img src="assets/imgs/moon.png" class="ghost" width="80px"/>
        <p class="fonts">Please wait..</p>`,
      spinner: 'hide',
    });

    loader.present();
    this.authService.postData(this.commentPostData, 'postcomment')
      .then((result) => {
        this.responseData = result;
        if (this.responseData.feedData) {
          console.log(this.responseData);
          this.dismiss();
          loader.dismiss();
          //this.dataSet = this.responseData.feedData;
        } else {
          loader.dismiss();
        }
      }, (err) => {

      });
  }

  dismiss() {
    this.viewCtrl.dismiss();
    //this.ionicApp._modalPortal.getActive().dismiss();

  }
}
