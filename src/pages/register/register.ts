import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  public myDate: any;
  public myTime: any;
  public userDetails : any;
  public resposeData : any;
  public dataSet : any;
  userPostData = {"user_id": "","name": "","token": ""};
  public form                   : FormGroup;
  private baseURI               : string  = "https://m3system.000webhostapp.com/mobilemaipk/PHP-Slim-Restful/api/";

  constructor(public navCtrl    : NavController,
              public http       : Http,
              public NP         : NavParams,
              public fb         : FormBuilder,
              public toastCtrl  : ToastController,
              public authService: AuthServiceProvider)
  {
              this.myDate = moment().format("DD/MM");
              this.myTime = moment().format("hh:mm a");
              const data = JSON.parse(localStorage.getItem('userData'));
              this.userDetails = data.userData;
              this.userPostData.user_id = this.userDetails.user_id;
              this.userPostData.name = this.userDetails.name;
              this.userPostData.token = this.userDetails.token;
              console.log(this.userPostData.user_id);

              this.form = fb.group({
                   "topic"               : ["", Validators.required],
                   "post"             : ["", Validators.required]
              });
  }



  createEntry(topic, post)
  {
     let body     : string   = "key=create&user_id=" + this.userPostData.user_id + "&topic=" + topic + "&post=" + post + "&author=" + this.userPostData.name + "&date=" + this.myDate + "&time=" + this.myTime,
         type     : string   = "application/x-www-form-urlencoded; charset=UTF-8",
         headers  : any      = new Headers({ 'Content-Type': type}),
         options  : any      = new RequestOptions({ headers: headers }),
         url      : any      = this.baseURI + "manage-data.php";

     this.http.post(url, body, options)
     .subscribe((data) =>
     {


        if(data.status === 200)
        {
           this.sendNotification(`Nice post! let's talk about it`);
           this.navCtrl.setRoot('Page1Page');
           console.log(data);
        }

        else
        {
           this.sendNotification('Pendaftaran gagal, Sila periksa rangkaian internet anda');

        }
     }, error => {
       console.log(error);
     });
  }

  saveEntry()
  {
    let topic            : string = this.form.controls["topic"].value,
        post          : string = this.form.controls["post"].value;

        this.createEntry(topic, post);

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
