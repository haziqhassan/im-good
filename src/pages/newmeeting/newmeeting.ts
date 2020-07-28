import { Component } from '@angular/core';
import { IonicApp, IonicPage, NavController, NavParams, Platform, ViewController, ModalController, LoadingController, ToastController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import * as moment from 'moment';
import { TncPage } from '../tnc/tnc';

@IonicPage()
@Component({
  selector: 'page-newmeeting',
  templateUrl: 'newmeeting.html',
})
export class NewmeetingPage {
  maxDate: any;
  minDate: any;

  public myDate: any;
  public userDetails : any;
  responseData : any;
  public dataSet : any;
  userPostData = {"user_id": "","name": "","token": ""};
  public form : FormGroup;
  meetingPostData = {"token": "","user_id": "","counselor_id": "","topic": "","category": "","service": "","academic": "","career": "","psychosocial": "","financial": "","family": "","others": "","date": "","time": "","dateBook": ""};
  counselorData = {"id": "","name": ""};

  constructor(public navCtrl    : NavController,
              public NP         : NavParams,
              public fb         : FormBuilder,
              public toastCtrl  : ToastController,
              public modalCtrl: ModalController,
              public authService: AuthServiceProvider,
              public loadingCtrl: LoadingController)
  {
              this.minDate = new Date(new Date().setDate(new Date().getDate() + 1)).toISOString();
              this.maxDate = (new Date()).getFullYear()+2;
              this.selectEntry(this.NP.get("record"));
              const data = JSON.parse(localStorage.getItem('userData'));
              this.myDate = moment().format("DD-MM-YYYY");
              this.userDetails = data.userData;
              this.userPostData.user_id = this.userDetails.user_id;
              this.userPostData.token = this.userDetails.token;
              this.userPostData.name = "test";

              this.form = fb.group({
                   "topic"               : ["", Validators.required],
                   "category"             : ["", Validators.required],
                   "service"           : ["", Validators.required],
                   "academic"           : ["0"],
                   "career"           : ["0"],
                   "psychosocial"    : ["0"],
                   "financial" : ["0"],
                   "family"           : ["0"],
                   "others"         : ["0"],
                   "date"           : ["", Validators.required],
                   "time"        : ["", Validators.required]
              });
  }

  selectEntry(item)
  {
    this.counselorData.id = item.idCounselor;
    this.counselorData.name = item.name;
  }

  openModal(){
    let modal = this.modalCtrl.create('TncPage');
    modal.present();
  }

  postMeeting(){
    this.meetingPostData.token = this.userPostData.token;
    this.meetingPostData.user_id = this.userPostData.user_id;
    this.meetingPostData.counselor_id = this.counselorData.id;
    this.meetingPostData.topic = this.form.controls["topic"].value;
    this.meetingPostData.category = this.form.controls["category"].value;
    this.meetingPostData.service = this.form.controls["service"].value;
    this.meetingPostData.academic = this.form.controls["academic"].value;
    this.meetingPostData.career = this.form.controls["career"].value;
    this.meetingPostData.psychosocial = this.form.controls["psychosocial"].value;
    this.meetingPostData.financial = this.form.controls["financial"].value;
    this.meetingPostData.family = this.form.controls["family"].value;
    this.meetingPostData.others = this.form.controls["others"].value;
    this.meetingPostData.date = this.form.controls["date"].value;
    this.meetingPostData.time = this.form.controls["time"].value;
    this.meetingPostData.dateBook = this.myDate;

    let loader = this.loadingCtrl.create({
      cssClass: "transparent",
      content: `
        <img src="assets/imgs/moon.png" class="ghost" width="80px"/>
        <p class="fonts">Please wait..</p>`,
      spinner: 'hide',
    });

    loader.present();
    this.authService.postData(this.meetingPostData, 'newmeeting')
      .then((result) => {
        this.responseData = result;
        if (this.responseData.feedData) {
          console.log(this.responseData);
          this.sendNotification(`Alright set! Don't forget to check application regularly`);
          loader.dismiss();
          this.navCtrl.pop();
        } else {
          loader.dismiss();
          this.sendNotification(`Something wrong, check your internet connection`);
          this.navCtrl.pop();
        }
      }, (err) => {

      });
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
