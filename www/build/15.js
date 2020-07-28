webpackJsonp([15],{

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyPageModule", function() { return ApplyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apply__ = __webpack_require__(476);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ApplyPageModule = /** @class */ (function () {
    function ApplyPageModule() {
    }
    ApplyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__apply__["a" /* ApplyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__apply__["a" /* ApplyPage */]),
            ],
        })
    ], ApplyPageModule);
    return ApplyPageModule;
}());

//# sourceMappingURL=apply.module.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApplyPage = /** @class */ (function () {
    function ApplyPage(navCtrl, alertCtrl, navParams, authService, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.items = [];
        this.httpdata = [];
        this.userPostData = { "user_id": "", "token": "", "idMeet": "" };
        var data = JSON.parse(localStorage.getItem('userData'));
        this.userDetails = data.userData;
        this.userPostData.user_id = this.userDetails.user_id;
        this.userPostData.token = this.userDetails.token;
        this.getFeed();
        this.oriItems();
    }
    ApplyPage.prototype.doRefresh = function (refresher) {
        this.getFeed();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 500);
    };
    ApplyPage.prototype.getFeed = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            cssClass: "transparent",
            content: "\n        <img src=\"assets/imgs/moon.png\" class=\"ghost\" width=\"80px\"/>\n        <p class=\"fonts\">Please wait..</p>",
            spinner: 'hide',
        });
        loader.present();
        this.authService.postData(this.userPostData, 'mymeeting')
            .then(function (result) {
            _this.responseData = result;
            if (_this.responseData.feedData) {
                localStorage.setItem('meetingData', JSON.stringify(_this.responseData));
                _this.dataSet = _this.responseData.feedData;
                _this.httpdata = _this.dataSet;
                loader.dismiss();
            }
            else if (_this.responseData.feedData == '') {
                _this.dataSet = 0;
                loader.dismiss();
            }
            else {
                //this.dataSet = this.responseData.feedData;
                loader.dismiss();
            }
        }, function (err) {
        });
    };
    ApplyPage.prototype.deleteMeeting = function (item) {
        var _this = this;
        this.userPostData.idMeet = item.item;
        console.log(this.userPostData.idMeet);
        var confirm = this.alertCtrl.create({
            title: 'Delete meeting?',
            message: 'Are you sure?',
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
                        var loader = _this.loadingCtrl.create({
                            cssClass: "transparent",
                            content: "\n                <img src=\"assets/imgs/moon.png\" class=\"ghost\" width=\"80px\"/>\n                <p class=\"fonts\">Please wait..</p>",
                            spinner: 'hide',
                        });
                        loader.present();
                        _this.authService.postData(_this.userPostData, 'deleteMeeting')
                            .then(function (result) {
                            _this.responseData = result;
                            if (_this.responseData) {
                                _this.sendNotification("Success delete");
                                _this.getFeed();
                                _this.oriItems();
                                loader.dismiss();
                            }
                            else {
                                _this.sendNotification("Something wrong, check your internet connection");
                                loader.dismiss();
                            }
                        }, function (err) {
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    ApplyPage.prototype.oriItems = function () {
        this.dataSet = this.httpdata;
    };
    ApplyPage.prototype.getItems = function (ev) {
        this.oriItems(); // Reset items back to all of the items
        var val = ev.target.value; // set val to the value of the ev target
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.dataSet = this.dataSet.filter(function (item) {
                return (item.topic.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    ApplyPage.prototype.sendNotification = function (message) {
        var notification = this.toastCtrl.create({
            message: message,
            duration: 3000,
            cssClass: "toast-container",
            position: "bottom"
        });
        notification.present();
    };
    ApplyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-apply',template:/*ion-inline-start:"C:\Users\user\IonicProject\imgood\src\pages\apply\apply.html"*/'<ion-content class="bgg">\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n  <ion-refresher-content\n    refreshingSpinner="dots">\n  </ion-refresher-content>\n</ion-refresher>\n\n  <h2 text-uppercase class="come"> My Application</h2>\n\n<div>\n  <ion-searchbar (ionInput)="getItems($event)" class="search"></ion-searchbar>\n</div>\n\n    <ion-list class="lists">\n      <div *ngIf="dataSet != 0">\n          <ion-card *ngFor="let item of dataSet" class="ion-item-border">\n\n            <ion-item class="cardheader">\n                  <h2 class="people3" text-capitalize>{{ item.topic }}</h2>\n                  <p class="people2" text-wrap>With {{ item.name }} as\n                    <span *ngIf="item.position == \'C\'">Counselor</span>\n                    <span *ngIf="item.position == \'AC\'">Assitant Counselor</span>\n                  </p>\n            </ion-item>\n\n            <ion-card-content>\n              <ion-row>\n                <ion-col>\n                  <ion-card class="card1">\n                    <h2 class="people">Time</h2>\n                    <p class="people2">{{ item.time }}</p>\n                  </ion-card>\n                </ion-col>\n                <ion-col>\n                  <ion-card class="card1">\n                    <h2 class="people">Date</h2>\n                    <p class="people2">{{ item.date }}</p>\n                  </ion-card>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <ion-card class="card1">\n                    <h2 class="people">Category</h2>\n                    <p class="people2">{{ item.category }}</p>\n                  </ion-card>\n                </ion-col>\n                <ion-col>\n                  <ion-card class="card1">\n                    <h2 class="people">Service</h2>\n                    <p class="people2">{{ item.service }}</p>\n                  </ion-card>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n              <span class="pads" *ngIf="item.academic == 1"><img class="imgs" class="btnnew" src="assets/imgs/book2.png"/></span>\n              <span class="pads" *ngIf="item.career == 1"><img class="imgs" class="btnnew" src="assets/imgs/briefcase3.png"/></span>\n              <span class="pads" *ngIf="item.psychosocial == 1"><img class="imgs" class="btnnew" src="assets/imgs/chat.png"/></span>\n              <span class="pads" *ngIf="item.financial == 1"><img class="imgs" class="btnnew" src="assets/imgs/cash.png"/></span>\n              <span class="pads" *ngIf="item.family == 1"><img class="imgs" class="btnnew" src="assets/imgs/people.png"/></span>\n              <span class="pads" *ngIf="item.others == 1"><img class="imgs" class="btnnew" src="assets/imgs/others.png"/></span>\n              </ion-row>\n                <ion-item>\n                  <p class="people2">Status:\n                    <span *ngIf="item.status == \'Approved\'" style="color: #32db64;">Approved</span>\n                    <span *ngIf="item.status == \'Pending\'" style="color: #FFC312;">Pending</span>\n                    <span *ngIf="item.status == \'Rejected\'" style="color: #222;">Rejected</span>\n                  </p>\n                  <p class="people2">Apply on: {{ item.dateBook }}</p>\n                  <ion-icon *ngIf="item.status != \'Approved\'" color="grid2" name="trash" (click)="deleteMeeting({item : item.idMeet})" item-end small></ion-icon>\n                </ion-item>\n            </ion-card-content>\n\n          </ion-card>\n      </div>\n      <div *ngIf="dataSet == 0">\n        <ion-card class="ion-item-border">\n\n          <ion-item class="cardheader">\n                <p class="people" style="text-align: center;">There\'s no meeting, apply now!</p>\n          </ion-item>\n\n        </ion-card>\n      </div>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\IonicProject\imgood\src\pages\apply\apply.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], ApplyPage);
    return ApplyPage;
}());

//# sourceMappingURL=apply.js.map

/***/ })

});
//# sourceMappingURL=15.js.map