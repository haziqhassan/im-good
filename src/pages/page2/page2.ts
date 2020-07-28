import { Component, ViewChild } from '@angular/core';
import { Platform, Content, IonicPage, LoadingController, ToastController } from 'ionic-angular';
//import { ApiAiClient } from 'api-ai-javascript';
import { Message } from 'models/message';
import { FormControl, FormBuilder } from '@angular/forms';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';


@IonicPage()
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
})
export class Page2Page {

  @ViewChild(Content) content: Content;
  accessToken: string = '4cbf55627a664ccdb21171d56789213c';
  client;
  messages: Message[] = [];
  messageForm: any;
  chatBox: any;
  isLoading: boolean;

  userDetails : any;
  responseData : any;
  dataSet : any;
  userPostData = {"user_id": "","token": ""};

  agentDetails : any;
  responseAgent : any;
  agentPostData = [];

  constructor(public platform: Platform, public formBuilder: FormBuilder, public authService: AuthServiceProvider, public loadingCtrl: LoadingController, public toastCtrl  : ToastController) {
    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.userData;
    this.userPostData.user_id = this.userDetails.user_id;
    this.userPostData.token = this.userDetails.token;
    this.getAgent();

    this.chatBox = '';

    this.messageForm = formBuilder.group({
      message: new FormControl('')
    });

    /*this.client = new ApiAiClient({
      accessToken: this.accessToken
    });*/
  }

  getAgent() {
    let loader = this.loadingCtrl.create({
      cssClass: "transparent",
      content: `
        <img src="assets/imgs/moon.png" class="ghost" width="80px"/>
        <p class="fonts">Please wait..</p>`,
      spinner: 'hide',
    });

    loader.present();

    this.authService.postData(this.userPostData, 'chatbot')
      .then((result) => {
        this.responseData = result;
        if (this.responseData.feedData) {
          localStorage.setItem('chatbot', JSON.stringify(this.responseData));
          this.dataSet = this.responseData.feedData;
          console.log(this.dataSet);
          this.allAgent();
          //this.httpdata = this.dataSet;
          loader.dismiss();
        } else {
          this.sendNotification(`Something wrong, check your internet connection`);
          loader.dismiss();
        }
      }, (err) => {
          loader.dismiss();
      });
  }

  sendMessage(req: string) {
    if (!req || req === '') {
      return;
    }
    else{
      this.messages.push({ from: 'You', text: req });
      this.isLoading = true;
      console.log(req);
      var splitted = req.split(" ");
      console.log(splitted)

      for (var i = 0; i < splitted.length; i++) {
        //splitted[i] += " ";
        if(splitted[i] == "problem"){
          this.messages.push({ from: 'Mr. Moon', text: "Please share if you dont mind, I won't judge you" });
          this.scrollToBottom();
          this.isLoading = false;
        }
        else if(splitted[i] == "hi"){
          this.messages.push({ from: 'Mr. Moon', text: "Hi there! I am Mr.Moon, how are you feeling today?" });
          this.scrollToBottom();
          this.isLoading = false;
        }
        else if(splitted[i] == "great"){
          this.messages.push({ from: 'Mr. Moon', text: "Nice! glad to hear that." });
          this.messages.push({ from: 'Mr. Moon', text: "If you need someone to listen to your problem, just find me here." });
          this.scrollToBottom();
          this.isLoading = false;
        }
        else if(splitted[i] == "bad"){
          this.messages.push({ from: 'Mr. Moon', text: "Why dear? anything happen?" });
          this.scrollToBottom();
          this.isLoading = false;
        }
        else if(splitted[i] == "hmm"){
          this.messages.push({ from: 'Mr. Moon', text: "Looks like you're not okay. Mind to share anything dear?" });
          this.scrollToBottom();
          this.isLoading = false;
        }
        else if(splitted[i] == "done"){
          this.messages.push({ from: 'Mr. Moon', text: "Hmm i see. Look Bad things can happen, and often do. But they only take up a few pages of your story, and anyone can survive a few pages." });
          this.messages.push({ from: 'Mr. Moon', text: "You will feel better after this, just stay strong alright :)" });
          this.messages.push({ from: 'Mr. Moon', text: "How are you feeling now?" });
          this.scrollToBottom();
          this.isLoading = false;
        }
        else if(splitted[i] == "better"){
          this.messages.push({ from: 'Mr. Moon', text: "Nice! glad to hear that." });
          this.messages.push({ from: 'Mr. Moon', text: "If you need someone to listen to your problem, just find me here." });
          this.scrollToBottom();
          this.isLoading = false;
        }
        else if(splitted[i] == "worse"){
          this.messages.push({ from: 'Mr. Moon', text: "If you still feel bad, feel free to apply meeting in this app. Your meeting will be handle by counsellor. All counsellor listed in this app are come from Counselling Centre, UPSI" });
          this.messages.push({ from: 'Mr. Moon', text: "They are professional, they will able to help you :). And don't worry, they good at keeping secrets ;)" });
          this.scrollToBottom();
          this.isLoading = false;
        }
        else if(splitted[i] == "later"){
          this.messages.push({ from: 'Mr. Moon', text: "Alright no worries. See ya :)" });
          this.scrollToBottom();
          this.isLoading = false;
        }
        else if(splitted[i] == "alright"){
          this.messages.push({ from: 'Mr. Moon', text: "Great. Anything just find me here." });
          this.messages.push({ from: 'Mr. Moon', text: ";)" });
          this.scrollToBottom();
          this.isLoading = false;
        }

      }


    }

    /*this.client
      .textRequest(req)
      .then(response => {

        console.log('res');
        console.log(response);
        this.messages.push({
          from: 'Mr. Moon',
          text: response.result.fulfillment.speech
        });
        this.scrollToBottom();
        this.isLoading = false;
      })
      .catch(error => {

        console.log('error');
        console.log(error);
      })*/;

    this.chatBox = '';
  }

  allAgent(){
    const data = JSON.parse(localStorage.getItem('chatbot'));
    //this.userDetails = data.userData;
    //this.userPostData.user_id = this.userDetails.user_id;
    //this.userPostData.token = this.userDetails.token;
  }

  scrollToBottom() {
    setTimeout(() => {
      this.content.scrollToBottom();
    }, 100);
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
