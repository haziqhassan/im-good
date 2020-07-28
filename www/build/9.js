webpackJsonp([9],{

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page1PageModule", function() { return Page1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page1__ = __webpack_require__(484);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Page1PageModule = /** @class */ (function () {
    function Page1PageModule() {
    }
    Page1PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__page1__["a" /* Page1Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__page1__["a" /* Page1Page */]),
            ],
        })
    ], Page1PageModule);
    return Page1PageModule;
}());

//# sourceMappingURL=page1.module.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Page1Page = /** @class */ (function () {
    function Page1Page(navCtrl, alertCtrl, navParams, http, authService, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.http = http;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.items = [];
        this.httpdata = [];
        this.userPostData = { "user_id": "", "token": "", "idForum": "" };
        var data = JSON.parse(localStorage.getItem('userData'));
        this.userDetails = data.userData;
        this.userPostData.user_id = this.userDetails.user_id;
        this.userPostData.token = this.userDetails.token;
        this.getFeed();
        this.oriItems();
    }
    Page1Page.prototype.gonext = function () {
        this.navCtrl.push('RegisterPage');
    };
    Page1Page.prototype.goedit = function (param) {
        this.navCtrl.push('EditPage', param);
    };
    Page1Page.prototype.getFeed = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            cssClass: "transparent",
            content: "\n        <img src=\"assets/imgs/moon.png\" class=\"ghost\" width=\"80px\"/>\n        <p class=\"fonts\">Please wait..</p>",
            spinner: 'hide',
        });
        loader.present();
        this.authService.postData(this.userPostData, 'forum')
            .then(function (result) {
            _this.responseData = result;
            if (_this.responseData.feedData) {
                localStorage.setItem('forumData', JSON.stringify(_this.responseData));
                _this.dataSet = _this.responseData.feedData;
                _this.httpdata = _this.dataSet;
                loader.dismiss();
            }
            else { }
        }, function (err) {
        });
    };
    Page1Page.prototype.doRefresh = function (refresher) {
        this.getFeed();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 500);
    };
    Page1Page.prototype.deleteForum = function (item) {
        var _this = this;
        this.userPostData.idForum = item.item;
        console.log(this.userPostData.idForum);
        var confirm = this.alertCtrl.create({
            title: 'Delete post?',
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
                        _this.authService.postData(_this.userPostData, 'deleteForum')
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
    Page1Page.prototype.flagForum = function (item) {
        var _this = this;
        this.userPostData.idForum = item.item;
        console.log(this.userPostData.idForum);
        var confirm = this.alertCtrl.create({
            title: 'Report this forum?',
            message: 'Reported forum cannot be undo. Are you sure?',
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
                        _this.authService.postData(_this.userPostData, 'newflag')
                            .then(function (result) {
                            _this.responseData = result;
                            if (_this.responseData) {
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
    Page1Page.prototype.oriItems = function () {
        this.dataSet = this.httpdata;
    };
    Page1Page.prototype.getItems = function (ev) {
        this.oriItems(); // Reset items back to all of the items
        var val = ev.target.value; // set val to the value of the ev target
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.dataSet = this.dataSet.filter(function (item) {
                return (item.topic.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    Page1Page.prototype.sendNotification = function (message) {
        var notification = this.toastCtrl.create({
            message: message,
            duration: 3000,
            cssClass: "toast-container",
            position: "bottom"
        });
        notification.present();
    };
    Page1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-page1',template:/*ion-inline-start:"C:\Users\user\IonicProject\imgood\src\pages\page1\page1.html"*/'<ion-content class="bgg">\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n  <ion-refresher-content\n    refreshingSpinner="dots">\n  </ion-refresher-content>\n</ion-refresher>\n\n  <h2 text-uppercase class="come"> All Topics</h2>\n\n<div>\n  <ion-searchbar (ionInput)="getItems($event)" class="search"></ion-searchbar>\n</div>\n\n    <ion-list class="lists">\n\n          <ion-card tappable *ngFor="let item of dataSet" class="ion-item-border" (click)="goedit( {record : item})">\n\n            <ion-item>\n                  <ion-icon *ngIf="item.user_id == this.userPostData.user_id" color="grid2" name="trash" (click)="deleteForum({item : item.id}, $event.stopPropagation())" item-end small></ion-icon>\n                  <h2 class="people">{{ item.topic }}</h2>\n                  <p class="people2">Posted by\n                    <span *ngIf="item.user_id == this.userPostData.user_id">you</span>\n                    <span *ngIf="item.user_id != this.userPostData.user_id">{{ item.author }}</span>\n                  </p>\n            </ion-item>\n\n            <ion-card-content>\n              <p class="people2">{{ item.post }}</p>\n            </ion-card-content>\n            <ion-row>\n              <ion-col>\n                <button ion-button icon-start clear small color="test2">\n                  <ion-icon name="time"></ion-icon>\n                  {{ item.time }}\n                </button>\n              </ion-col>\n              <ion-col>\n                <button ion-button icon-start clear small color="test2">\n                  <ion-icon name="text"></ion-icon>\n                  <div *ngIf="item.allcomment < 1">0</div>\n                  <div *ngIf="item.allcomment >= 1">{{ item.allcomment }}</div>\n                </button>\n              </ion-col>\n              <ion-col>\n                <button ion-button icon-start clear small color="test2">\n                    <ion-icon name="calendar"></ion-icon>\n                    {{ item.date }}\n                </button>\n              </ion-col>\n              <ion-col *ngIf="item.user_id != this.userPostData.user_id" align-self-center text-center (click)="flagForum({item : item.id}, $event.stopPropagation())">\n                <ion-note color="danger">\n                  <ion-icon name="flag" clear small></ion-icon>\n                  {{ item.flag }}\n                </ion-note>\n              </ion-col>\n              <ion-col *ngIf="item.user_id == this.userPostData.user_id" align-self-center text-center>\n                <ion-note color="silver">\n                  <ion-icon name="flag" clear small></ion-icon>\n                  {{ item.flag }}\n                </ion-note>\n              </ion-col>\n            </ion-row>\n\n          </ion-card>\n\n    </ion-list>\n    <div class="zzz"></div>\n    <ion-fab right bottom>\n      <button ion-fab color="flaty3" (click)="gonext()"><ion-icon name="paper"></ion-icon></button>\n    </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\IonicProject\imgood\src\pages\page1\page1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], Page1Page);
    return Page1Page;
}());

//# sourceMappingURL=page1.js.map

/***/ })

});
//# sourceMappingURL=9.js.map