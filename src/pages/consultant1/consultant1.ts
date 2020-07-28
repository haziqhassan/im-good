import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams, ToastController } from 'ionic-angular';
import { Socket } from 'ng-socket-io';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-consultant1',
  templateUrl: 'consultant1.html',
})
export class Consultant1Page {


    messages = [];
    nickname = '';
    message = '';

  constructor(private navCtrl: NavController, private navParams: NavParams, private socket: Socket, private toastCtrl: ToastController) {

      this.nickname = this.navParams.get('nickname');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Consultant1Page');
  }

  //privatemessage
  chatMessage() {
    this.socket.emit('chat-message', {userId: this.nickname, message: this.message });
    console.log(this.message, this.nickname);
    this.message = '';
  }

}
