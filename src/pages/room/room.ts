import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Socket } from 'ng-socket-io';

@IonicPage()
@Component({
  selector: 'page-room',
  templateUrl: 'room.html',
})
export class RoomPage {

  userDetails : any;
  responseData: any;
  userPostData = {"user_id":"","token":"","username":"","name":""};

  constructor(public navCtrl: NavController, public navParams: NavParams, public socket: Socket) {
    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.userData;
    this.userPostData.user_id = this.userDetails.user_id;
    this.userPostData.token = this.userDetails.token;
    this.userPostData.username = this.userDetails.username;
    this.userPostData.name = this.userDetails.name;
    console.log("nama:", this.userPostData.name);
  }

  joinChatRoom() {
    this.socket.connect();
    this.socket.emit('online', this.userPostData.name);
    this.socket.emit('set-nickname', this.userPostData.name);
    this.navCtrl.push('Consultant2Page', { nickname: this.userPostData.name });
  }

}
