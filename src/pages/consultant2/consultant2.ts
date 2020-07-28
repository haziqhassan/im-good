import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, NavParams, ToastController, Content } from 'ionic-angular';
import { Socket } from 'ng-socket-io';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-consultant2',
  templateUrl: 'consultant2.html',
})
export class Consultant2Page {

  @ViewChild(Content) content: Content;

  messages = [];
  nickname = '';
  message = '';

constructor(private navCtrl: NavController, private navParams: NavParams, private socket: Socket, private toastCtrl: ToastController) {

    this.nickname = this.navParams.get('nickname');

    this.getMessages().subscribe(message => {
      this.messages.push(message);
    });

    this.getUsers().subscribe(data => {
      let user = data['user'];
      if (data['event'] === 'left') {
        this.showToast('User left: ' + user);
      } else {
        this.showToast('User joined: ' + user);
      }
    });
  }

  //publicmessage
  sendMessage() {
    this.socket.emit('add-message', { text: this.message });
    console.log(this.message, this.nickname);
    this.message = '';
    this.scrollToBottom();
  }

  getMessages() {
    this.scrollToBottom();
    let observable = new Observable(observer => {
      this.socket.on('message', (data) => {
        observer.next(data);
      });
    })
    return observable;

  }

  getUsers() {
    let observable = new Observable(observer => {
      this.socket.on('users-changed', (data) => {
        observer.next(data);
      });
    });
    return observable;
  }

  ionViewWillLeave() {
    this.socket.disconnect();
  }

  showToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  scrollToBottom() {
    setTimeout(() => {
      this.content.scrollToBottom();
    }, 100);
  }

}
