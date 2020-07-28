import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html',
})
export class Page3Page {
  public items: any = [];
  public httpdata: any = [];

  userDetails : any;
  responseData : any;
  dataSet : any;
  userPostData = {"user_id": "","token": "","idPem": ""};

  constructor(public navCtrl: NavController,public alertCtrl : AlertController,  public NP: NavParams, public authService: AuthServiceProvider, public loadingCtrl: LoadingController) {
    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.userData;
    this.userPostData.user_id = this.userDetails.user_id;
    this.userPostData.token = this.userDetails.token;
    this.getFeed();
    this.oriItems();
  }

  goMeeting(param){
    this.navCtrl.push('NewmeetingPage', param);
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

    this.authService.postData(this.userPostData, 'counselors')
      .then((result) => {
        this.responseData = result;
        if (this.responseData.feedData) {
          //localStorage.setItem('forumData', JSON.stringify(this.responseData));
          this.dataSet = this.responseData.feedData;
          this.httpdata = this.dataSet;
          loader.dismiss();
        } else {}
      }, (err) => {

      });
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
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }

  }

}
