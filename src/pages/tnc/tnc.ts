import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ViewController, LoadingController } from 'ionic-angular';

/**
 * Generated class for the TncPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tnc',
  templateUrl: 'tnc.html',
})
export class TncPage {

  constructor(public platform: Platform, public NP: NavParams, public viewCtrl: ViewController, public loadingCtrl: LoadingController) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
    //this.ionicApp._modalPortal.getActive().dismiss();

  }

}
