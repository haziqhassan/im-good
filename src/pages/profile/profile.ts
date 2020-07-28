import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import CryptoJS from 'crypto-js';
import 'rxjs/add/operator/map';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  public form    : FormGroup;
  public nostaf : any;
  public name : any;
  public notelefon : any;
  //public password1 : any = "";
  public password : any;
  public ppp : any;
  public email : any;
  public pendaftar : any;
  userDetails : any;
  responseData : any;
  dataSet : any;
  userPostData = {"user_id": "","token":""};
  private baseURI : string = 'https://m3system.000webhostapp.com/mobilemaipk/PHP-Slim-Restful/api/';

  constructor(public navCtrl: NavController,  public navParams: NavParams, public http: Http, public fb: FormBuilder, public toastCtrl: ToastController) {
    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.userData;
    this.userPostData.user_id = this.userDetails.user_id;
    this.userPostData.token = this.userDetails.token;
    this.nostaf = this.userDetails.username;
    this.name = this.userDetails.name;
    this.notelefon = this.userDetails.notelefon;
    this.password = this.userDetails.password;
    this.email = this.userDetails.email;
    this.pendaftar = this.userDetails.pendaftarAmil;


    this.form = fb.group({
      "nostafd"                  : ["", Validators.required],
      "named"                  : ["", Validators.required],
      "notelefond"                  : ["", Validators.required],
      "passwordd1"                  : ["", Validators.required],
      "passwordd"                  : ["", Validators.required],
      "emaild"                  : ["", Validators.required],
      "pendaftard"                  : ["", Validators.required]
    });

  }

  editProfile(){
    let oldpp = CryptoJS.SHA256(this.form.controls["passwordd1"].value).toString(CryptoJS.enc.Hex);
    console.log(oldpp);
    if( oldpp == this.password){

      let nostafc          : string = this.form.controls["nostafd"].value,
          namec   : string    = this.form.controls["named"].value,
          notelefonc   : string    = this.form.controls["notelefond"].value,
          passwordc   : string    = CryptoJS.SHA256(this.form.controls["passwordd"].value).toString(CryptoJS.enc.Hex),
          emailc   : string    = this.form.controls["emaild"].value,
          pendaftarc   : string    = this.form.controls["pendaftard"].value,
          body       : string = "key=update&username=" + nostafc + "&password=" + passwordc + "&name=" + namec + "&notelefon=" + notelefonc + "&email=" + emailc + "&pendaftarAmil=" + pendaftarc + "&recordID=" + this.userPostData.user_id,
          type       : string = "application/x-www-form-urlencoded; charset=UTF-8",
          headers    : any     = new Headers({ 'Content-Type': type}),
          options    : any     = new RequestOptions({ headers: headers }),
          url        : any     = this.baseURI + "manage-data-amil.php";

          console.log(passwordc);
          this.http.post(url, body, options)
          .subscribe((data) =>
          {
             if(data.status === 200)
             {
                this.sendNotification(`Profil anda berjaya diubah. Sila log masuk semula.`);
                this.navCtrl.setRoot(HomePage);
                this.navCtrl.popToRoot();

             }

             else
             {
                this.sendNotification('Harap maaf, terdapat masalah rangkaian internet. Sila cuba lagi.');
             }
          });
    }
    else{
      this.sendNotification('Kata laluan lama anda salah. Sila cuba lagi.');
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
