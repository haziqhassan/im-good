webpackJsonp([10],{

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main__ = __webpack_require__(480);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MainPageModule = /** @class */ (function () {
    function MainPageModule() {
    }
    MainPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__main__["a" /* MainPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__main__["a" /* MainPage */]),
            ],
        })
    ], MainPageModule);
    return MainPageModule;
}());

//# sourceMappingURL=main.module.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_socket_io__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng_socket_io__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainPage = /** @class */ (function () {
    function MainPage(navCtrl, navParams, platform, authService, appCtrl, callNumber, loadingCtrl, toastCtrl, alertCtrl, socket) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.authService = authService;
        this.appCtrl = appCtrl;
        this.callNumber = callNumber;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.socket = socket;
        this.userPostData = { "user_id": "", "token": "", "username": "", "name": "" };
        var data = JSON.parse(localStorage.getItem('userData'));
        this.userDetails = data.userData;
        this.userPostData.user_id = this.userDetails.user_id;
        this.userPostData.token = this.userDetails.token;
        this.userPostData.username = this.userDetails.username;
        this.userPostData.name = this.userDetails.name;
        console.log("nama:", this.userPostData.name);
    }
    MainPage.prototype.callEmergency = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Call the right authorities?',
            message: 'This act will call the right authorities to make sure you are fine. If you are really in need and not in a good situation, please make this call',
            cssClass: "alertCustomCss",
            buttons: [
                {
                    text: 'Cancel',
                    cssClass: "cancel",
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Yes',
                    cssClass: "yes",
                    handler: function () {
                        //this.callJoint();
                        _this.callNumber.callNumber("+60173705160", true);
                    }
                }
            ]
        });
        confirm.present();
    };
    /*
    callJoint(telephoneNumber) {
      this.callNumber.isCallSupported()
      .then(function (response) {
        if (response == true) {
            this.callNumber.callNumber(`+60173705160`, true);
        }
        else {
            this.sendNotification(`Sorry you may make a call only with mobile phone.`);
        }
      });
  
    }*/
    MainPage.prototype.goPage1 = function () {
        this.navCtrl.push('Page1Page');
    };
    MainPage.prototype.goPage2 = function () {
        this.navCtrl.push('Page2Page');
    };
    MainPage.prototype.goProfile = function () {
        this.navCtrl.push('ProfilePage');
    };
    MainPage.prototype.goRoom = function () {
        this.socket.connect();
        this.socket.emit('online', this.userPostData.name);
        this.socket.emit('set-nickname', this.userPostData.name);
        this.navCtrl.push('Consultant2Page', { nickname: this.userPostData.name });
    };
    MainPage.prototype.goCounselor = function () {
        this.navCtrl.push('CounselorPage');
    };
    MainPage.prototype.goMeeting = function () {
        this.navCtrl.push('Page3Page');
    };
    MainPage.prototype.goMyApply = function () {
        this.navCtrl.push('ApplyPage');
    };
    MainPage.prototype.logout = function () {
        var _this = this;
        console.log("Logout triggered");
        localStorage.clear();
        setTimeout(function () { return _this.backToWelcome(); }, 1000);
    };
    MainPage.prototype.backToWelcome = function () {
        //this.navCtrl.pop();
        this.platform.exitApp();
    };
    MainPage.prototype.sendNotification = function (message) {
        var notification = this.toastCtrl.create({
            message: message,
            duration: 3000,
            cssClass: "toast-container",
            position: "bottom"
        });
        notification.present();
    };
    MainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-main',template:/*ion-inline-start:"C:\Users\user\IonicProject\imgood\src\pages\main\main.html"*/'\n  <ion-fab left top>\n    <button ion-fab color="light" mini><ion-icon name="medkit" color="flatbg3"></ion-icon></button>\n    <ion-fab-list side="right" class="fablists">\n      <button ion-fab color="danger" class="fabbb" (click)="callEmergency()"><ion-icon name="call"></ion-icon>Emergency</button>\n    </ion-fab-list>\n  </ion-fab>\n  <ion-fab right top (click)="logout()">\n    <button ion-fab class="btncircle" mini><ion-icon name="exit" color="dark"></ion-icon></button>\n  </ion-fab>\n<ion-content>\n    <div class="wkwk"></div>\n\n    <h2 text-uppercase class="wel">Hi <span class="come">{{userDetails.name}}</span> ,</h2>\n    <h2 text-uppercase class="wel">What\'s up for today?</h2>\n    <br>\n    <b><p class="bot-loading-container">Talk to me!</p></b>\n    <div class="container" (click)="goPage2()">\n        <img src="assets/imgs/moon.png" class="ghost" width="120px"/>\n\n        <p class="shadowFrame">\n          <svg version="1.1" class="shadow" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="61px" y="20px"\n             width="122.436px" height="39.744px" viewBox="0 0 122.436 39.744" enable-background="new 0 0 122.436 39.744"\n             xml:space="preserve">\n             <ellipse fill="#013E51" cx="63.500" cy="8.872" rx="49.25" ry="8.916"/>\n          </svg>\n        </p>\n    </div>\n\n\n  <!--<div class="card-background-page">\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-card (click)="goPage1()" style="background-color: #778beb;">\n            <img class="imgs" src="assets/imgs/list.png" height="100%"/>\n            <div class="card-title"><ion-icon name="list-box"></ion-icon> Clients</div>\n          </ion-card>\n        </ion-col>\n        <ion-col>\n\n          <ion-card (click)="goPage3()" style="background-color: #e77f67;">\n            <img class="imgs" src="assets/imgs/watch.png" height="100%"/>\n            <div class="card-title"><ion-icon name="calculator"></ion-icon> Counseling Session</div>\n            <div class="card-subtitle">72 Listings</div>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <!--<ion-card (click)="goProfile()" style="background-color: #e77f67;">\n            <div class="card-title"><ion-icon name="person"></ion-icon> Profail Amil</div>\n          </ion-card>\n        </ion-col>\n        <ion-col>\n          <ion-card (click)="goPage2()" style="background-color: #63cdda;">\n            <img class="imgs" src="assets/imgs/info.png" height="100%"/>\n            <div class="card-title"><ion-icon name="information-circle"></ion-icon> Forum</div>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </div>-->\n\n  <div class="card-bg" padding>\n   <ion-card (click)="goPage1()" style="background-color: #5f27cd;">\n     <img class="imgs" src="assets/imgs/bgforum.png" />\n     <h2 class="card-title">Forum</h2>\n     <p class="card-subtitle">Feel free to share anything with our positive society</p>\n   </ion-card>\n   <div class="spannew"></div>\n   <ion-card style="background-color: #B33771;">\n     <img class="imgs" src="assets/imgs/bgmeeting.png"/>\n     <div class="card-title">Meeting</div>\n     <div class="card-subtitle">Let\'s have a drink and meet with profesional counselor</div>\n     <ion-row>\n        <ion-col class="meet1" (click)="goMyApply()">\n          <div>\n              My application\n          </div>\n        </ion-col>\n        <ion-col class="meet2" (click)="goMeeting()">\n              New meeting\n        </ion-col>\n    </ion-row>\n   </ion-card>\n   <div class="spannew"></div>\n\n   <!--<ion-card (click)="goCounselor()" style="background-color: #55efc4;">\n     <img class="imgs" src="#"/>\n     <div class="card-title">Individual Consultant</div>\n     <div class="card-subtitle">Share your problem with your favourite counselor</div>\n   </ion-card>-->\n\n   <ion-card (click)="goRoom()" style="background-color: #01a3a4;">\n     <img class="imgs" src="assets/imgs/bgconsult.png"/>\n     <div class="card-title">Consultation</div>\n     <div class="card-subtitle">Discuss about anything with counselors</div>\n   </ion-card>\n\n   <!--<ion-card (click)="gozkwsp()" style="background-color: #63cdda;">\n     <img class="imgs" src="#"/>\n     <div class="card-title">DAS Test</div>\n     <div class="card-subtitle">A simple question to measure your level of depression, anxiety and stress.</div>\n   </ion-card>-->\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\IonicProject\imgood\src\pages\main\main.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4_ng_socket_io__["Socket"]])
    ], MainPage);
    return MainPage;
}());

//# sourceMappingURL=main.js.map

/***/ })

});
//# sourceMappingURL=10.js.map