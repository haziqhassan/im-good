webpackJsonp([5],{

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(514);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
            ],
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
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




var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, authService, modalCtrl, fb, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.modalCtrl = modalCtrl;
        this.fb = fb;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userData = { "username": "", "password": "", "name": "" };
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
        this.form = fb.group({
            "username1": ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            "name1": ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            "password1": ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])]
        });
    }
    SignupPage.prototype.goMain = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            cssClass: "transparent",
            content: "\n        <img src=\"assets/imgs/moon.png\" class=\"ghost\" width=\"80px\"/>\n        <p class=\"fonts\">Please wait..</p>",
            spinner: 'hide',
        });
        loader.present();
        this.authService.postData(this.userData, "signup").then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.userData) {
                console.log(_this.responseData.userData);
                //localStorage.setItem('userData', JSON.stringify(this.responseData));
                loader.dismiss();
                _this.goMainPage();
                _this.navCtrl.popToRoot();
                _this.sendNotification("Done! let's login and have a try");
            }
            else {
                loader.dismiss();
                console.log("Wrong password");
                _this.sendNotification("Account name or username already exist. Please change to different username.");
            }
        }, function (err) {
            console.log(err);
            loader.dismiss();
            _this.sendNotification("Something wrong, please check your internet connection.");
        });
    };
    SignupPage.prototype.goMainPage = function () {
        this.userData.username = "";
        this.userData.password = "";
        //let abc = this.modalCtrl.create('MainPage');
        //abc.present();
    };
    SignupPage.prototype.sendNotification = function (message) {
        var notification = this.toastCtrl.create({
            message: message,
            duration: 3000,
            cssClass: "toast-container",
            position: "bottom"
        });
        notification.present();
    };
    SignupPage.prototype.hideShowPassword = function () {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\user\IonicProject\imgood\src\pages\signup\signup.html"*/'<ion-content padding class="background">\n\n  <!--<b><p class="bot-loading-container"></p></b>-->\n\n  <!--<div class="container2">-->\n\n  <div>\n\n      <img src="assets/imgs/moon.png" class="ghost"/>\n\n\n\n      <p class="shadowFrame">\n\n        <svg version="1.1" class="shadow" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="61px" y="20px"\n\n           width="122.436px" height="39.744px" viewBox="0 0 122.436 39.744" enable-background="new 0 0 122.436 39.744"\n\n           xml:space="preserve">\n\n           <ellipse fill="#013E51" cx="63.500" cy="8.872" rx="49.25" ry="8.916"/>\n\n        </svg>\n\n      </p>\n\n  </div>\n\n  <br>\n\n  <br>\n\n  <br>\n\n  <br>\n\n  <br>\n\n  <br>\n\n  <br>\n\n  <br>\n\n  <br>\n\n  <br>\n\n  <br>\n\n  <span class="p" text-wrap>Hi there! I am Mr Moon. Here you can sign up as anonymous, this way no one can judge you. So remember to be open and free!</span>\n\n  <br>\n\n  <br>\n\n  <br>\n\n  <form [formGroup]="form" (ngSubmit)="goMain()">\n\n		<ion-list>\n\n      <ion-item id="rounded" no-lines>\n\n				<ion-input class="item-inner" type="text" [(ngModel)]="userData.name" formControlName="name1" placeholder="Account name"></ion-input>\n\n			</ion-item>\n\n\n\n			<ion-item id="rounded" no-lines>\n\n				<ion-input class="item-inner" type="text" [(ngModel)]="userData.username" formControlName="username1" placeholder="Username"></ion-input>\n\n			</ion-item>\n\n\n\n			<ion-item id="rounded">\n\n				<ion-input class="item-inner" type="password" [type]="passwordType" [(ngModel)]="userData.password" formControlName="password1" placeholder="Password (min 5 character)" clearOnEdit="false"></ion-input>\n\n        <button ion-button icon-only clear color="dark" type="button" item-right  (click)=\'hideShowPassword()\'><ion-icon [name]="passwordIcon"></ion-icon></button>\n\n			</ion-item>\n\n			<br>\n\n			<button ion-button class="btn" round [disabled]="!form.valid">Ready to go!</button>\n\n\n\n		</ion-list>\n\n  </form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\user\IonicProject\imgood\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=5.js.map