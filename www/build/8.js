webpackJsonp([8],{

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page2PageModule", function() { return Page2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page2__ = __webpack_require__(485);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Page2PageModule = /** @class */ (function () {
    function Page2PageModule() {
    }
    Page2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__page2__["a" /* Page2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__page2__["a" /* Page2Page */]),
            ],
        })
    ], Page2PageModule);
    return Page2PageModule;
}());

//# sourceMappingURL=page2.module.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Page2Page = /** @class */ (function () {
    function Page2Page(platform, formBuilder, authService, loadingCtrl, toastCtrl) {
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.accessToken = '4cbf55627a664ccdb21171d56789213c';
        this.messages = [];
        this.userPostData = { "user_id": "", "token": "" };
        this.agentPostData = [];
        var data = JSON.parse(localStorage.getItem('userData'));
        this.userDetails = data.userData;
        this.userPostData.user_id = this.userDetails.user_id;
        this.userPostData.token = this.userDetails.token;
        this.getAgent();
        this.chatBox = '';
        this.messageForm = formBuilder.group({
            message: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('')
        });
        /*this.client = new ApiAiClient({
          accessToken: this.accessToken
        });*/
    }
    Page2Page.prototype.getAgent = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            cssClass: "transparent",
            content: "\n        <img src=\"assets/imgs/moon.png\" class=\"ghost\" width=\"80px\"/>\n        <p class=\"fonts\">Please wait..</p>",
            spinner: 'hide',
        });
        loader.present();
        this.authService.postData(this.userPostData, 'chatbot')
            .then(function (result) {
            _this.responseData = result;
            if (_this.responseData.feedData) {
                localStorage.setItem('chatbot', JSON.stringify(_this.responseData));
                _this.dataSet = _this.responseData.feedData;
                console.log(_this.dataSet);
                _this.allAgent();
                //this.httpdata = this.dataSet;
                loader.dismiss();
            }
            else {
                _this.sendNotification("Something wrong, check your internet connection");
                loader.dismiss();
            }
        }, function (err) {
            loader.dismiss();
        });
    };
    Page2Page.prototype.sendMessage = function (req) {
        if (!req || req === '') {
            return;
        }
        else {
            this.messages.push({ from: 'You', text: req });
            this.isLoading = true;
            console.log(req);
            var splitted = req.split(" ");
            console.log(splitted);
            for (var i = 0; i < splitted.length; i++) {
                //splitted[i] += " ";
                if (splitted[i] == "problem") {
                    this.messages.push({ from: 'Mr. Moon', text: "Please share if you dont mind, I won't judge you" });
                    this.scrollToBottom();
                    this.isLoading = false;
                }
                else if (splitted[i] == "hi") {
                    this.messages.push({ from: 'Mr. Moon', text: "Hi there! I am Mr.Moon, how are you feeling today?" });
                    this.scrollToBottom();
                    this.isLoading = false;
                }
                else if (splitted[i] == "great") {
                    this.messages.push({ from: 'Mr. Moon', text: "Nice! glad to hear that." });
                    this.messages.push({ from: 'Mr. Moon', text: "If you need someone to listen to your problem, just find me here." });
                    this.scrollToBottom();
                    this.isLoading = false;
                }
                else if (splitted[i] == "bad") {
                    this.messages.push({ from: 'Mr. Moon', text: "Why dear? anything happen?" });
                    this.scrollToBottom();
                    this.isLoading = false;
                }
                else if (splitted[i] == "hmm") {
                    this.messages.push({ from: 'Mr. Moon', text: "Looks like you're not okay. Mind to share anything dear?" });
                    this.scrollToBottom();
                    this.isLoading = false;
                }
                else if (splitted[i] == "done") {
                    this.messages.push({ from: 'Mr. Moon', text: "Hmm i see. Look Bad things can happen, and often do. But they only take up a few pages of your story, and anyone can survive a few pages." });
                    this.messages.push({ from: 'Mr. Moon', text: "You will feel better after this, just stay strong alright :)" });
                    this.messages.push({ from: 'Mr. Moon', text: "How are you feeling now?" });
                    this.scrollToBottom();
                    this.isLoading = false;
                }
                else if (splitted[i] == "better") {
                    this.messages.push({ from: 'Mr. Moon', text: "Nice! glad to hear that." });
                    this.messages.push({ from: 'Mr. Moon', text: "If you need someone to listen to your problem, just find me here." });
                    this.scrollToBottom();
                    this.isLoading = false;
                }
                else if (splitted[i] == "worse") {
                    this.messages.push({ from: 'Mr. Moon', text: "If you still feel bad, feel free to apply meeting in this app. Your meeting will be handle by counsellor. All counsellor listed in this app are come from Counselling Centre, UPSI" });
                    this.messages.push({ from: 'Mr. Moon', text: "They are professional, they will able to help you :). And don't worry, they good at keeping secrets ;)" });
                    this.scrollToBottom();
                    this.isLoading = false;
                }
                else if (splitted[i] == "later") {
                    this.messages.push({ from: 'Mr. Moon', text: "Alright no worries. See ya :)" });
                    this.scrollToBottom();
                    this.isLoading = false;
                }
                else if (splitted[i] == "alright") {
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
          })*/ ;
        this.chatBox = '';
    };
    Page2Page.prototype.allAgent = function () {
        var data = JSON.parse(localStorage.getItem('chatbot'));
        //this.userDetails = data.userData;
        //this.userPostData.user_id = this.userDetails.user_id;
        //this.userPostData.token = this.userDetails.token;
    };
    Page2Page.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            _this.content.scrollToBottom();
        }, 100);
    };
    Page2Page.prototype.sendNotification = function (message) {
        var notification = this.toastCtrl.create({
            message: message,
            duration: 3000,
            cssClass: "toast-container",
            position: "bottom"
        });
        notification.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], Page2Page.prototype, "content", void 0);
    Page2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-page2',template:/*ion-inline-start:"C:\Users\user\IonicProject\imgood\src\pages\page2\page2.html"*/'<ion-header class="headertop" no-border>\n  <div *ngIf="isLoading" class="bot-loading-container">\n    <ion-spinner name="dots"></ion-spinner>\n  </div>\n  <div class="container">\n    <img src="assets/imgs/moon.png" class="ghost" width="120px"/>\n\n    <p class="shadowFrame">\n      <svg version="1.1" class="shadow" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="61px" y="20px"\n         width="122.436px" height="39.744px" viewBox="0 0 122.436 39.744" enable-background="new 0 0 122.436 39.744"\n         xml:space="preserve">\n         <ellipse fill="#013E51" cx="63.500" cy="8.872" rx="49.25" ry="8.916"/>\n      </svg>\n    </p>\n  </div>\n</ion-header>\n<ion-content class="bggg">\n\n  <div *ngFor="let message of messages" class="message-wrapper">\n    <div>\n      <img class="profile-pic" [ngClass]="{\'left\':message.from===\'Mr. Moon\', \'right\':message.from===\'You\'}" src="http://haziqhassan.zazrj.com/mobilemaipk/imgwebhost/{{message.from}}"\n      />\n      <!--  wave-->\n      <div class="chat-bubble" [ngClass]="{\'left\':message.from===\'Mr. Moon\', \'right\':message.from===\'You\', \'slide-left\': message.from===\'Mr. Moon\', \'slide-right\':message.from===\'You\'}">\n\n        <div class="message" [innerHTML]="message.text" autolinker>\n        </div>\n\n        <div class="message-detail">\n          <span class="bold">{{message.from}}</span>\n          <!-- <span>{{message.created | date:\'dd/MM hh:MM\'}}</span> -->\n        </div>\n\n      </div>\n    </div>\n\n    <div class="cf"></div>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <form [formGroup]="messageForm" (submit)="sendMessage(chatBox)" novalidate>\n    <ion-item>\n      <ion-input formControlName="message" [(ngModel)]="chatBox" placeholder="What\'s on your mind sunshine?" text-lowercase></ion-input>\n      <button ion-button clear (click)="sendMessage(chatBox)" item-end>\n        <ion-icon class="footer-btn" name="send"></ion-icon>\n      </button>\n    </ion-item>\n  </form>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\user\IonicProject\imgood\src\pages\page2\page2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], Page2Page);
    return Page2Page;
}());

//# sourceMappingURL=page2.js.map

/***/ })

});
//# sourceMappingURL=8.js.map