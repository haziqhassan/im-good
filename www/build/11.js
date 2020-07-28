webpackJsonp([11],{

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPageModule", function() { return EditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit__ = __webpack_require__(479);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditPageModule = /** @class */ (function () {
    function EditPageModule() {
    }
    EditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit__["a" /* EditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit__["a" /* EditPage */]),
            ],
        })
    ], EditPageModule);
    return EditPageModule;
}());

//# sourceMappingURL=edit.module.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditPage = /** @class */ (function () {
    function EditPage(navCtrl, http, NP, fb, toastCtrl, authService, alertCtrl, modalCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.NP = NP;
        this.fb = fb;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.testings = { "id": "", "author": "" };
        this.userPostData = { "user_id": "", "token": "", "idForum": "" };
        this.userCommentData = { "user_id": "", "token": "", "idComment": "" };
        this.forumPostData = { "id": "", "comment": "" };
        this.forumPass = { "id": "", "user_id": "", "topic": "", "post": "", "author": "", "allcomment": "", "upvote": "", "downvote": "", "flag": "", "date": "", "time": "" };
        this.selectEntry(this.NP.get("record"));
        var data = JSON.parse(localStorage.getItem('userData'));
        this.userDetails = data.userData;
        this.userPostData.user_id = this.userDetails.user_id;
        this.userPostData.token = this.userDetails.token;
        this.getComment();
    }
    EditPage.prototype.doRefresh = function (refresher) {
        this.getComment();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 500);
    };
    EditPage.prototype.openModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create('ModalPage', { idForum: this.forumPass.id });
        modal.onDidDismiss(function (data) {
            _this.getComment();
        });
        modal.present();
    };
    EditPage.prototype.upvote = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            cssClass: "transparent",
            content: "\n        <img src=\"assets/imgs/moon.png\" class=\"ghost\" width=\"80px\"/>\n        <p class=\"fonts\">Please wait..</p>",
            spinner: 'hide',
        });
        loader.present();
        this.userPostData.idForum = this.forumPass.id;
        this.authService.postData(this.userPostData, 'newupvote')
            .then(function (result) {
            _this.responseData = result;
            if (_this.responseData.feedData) {
                loader.dismiss();
            }
            else {
                loader.dismiss();
            }
        }, function (err) {
        });
    };
    EditPage.prototype.downvote = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            cssClass: "transparent",
            content: "\n        <img src=\"assets/imgs/moon.png\" class=\"ghost\" width=\"80px\"/>\n        <p class=\"fonts\">Please wait..</p>",
            spinner: 'hide',
        });
        loader.present();
        this.userPostData.idForum = this.forumPass.id;
        this.authService.postData(this.userPostData, 'newdownvote')
            .then(function (result) {
            _this.responseData = result;
            if (_this.responseData.feedData) {
                loader.dismiss();
            }
            else {
                loader.dismiss();
            }
        }, function (err) {
        });
    };
    EditPage.prototype.deleteComment = function (otem) {
        var _this = this;
        this.userCommentData.user_id = this.userPostData.user_id;
        this.userCommentData.token = this.userPostData.token;
        this.userCommentData.idComment = otem.otem;
        console.log(this.userCommentData.idComment);
        var confirm = this.alertCtrl.create({
            title: 'Delete comment?',
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
                        _this.authService.postData(_this.userCommentData, 'deleteComment')
                            .then(function (result) {
                            _this.responseData = result;
                            if (_this.responseData) {
                                _this.sendNotification("Success delete");
                                _this.getComment();
                                loader.dismiss();
                            }
                            else {
                                _this.sendNotification("Something wrong, check your internet connection");
                                _this.getComment();
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
    EditPage.prototype.flagcomment = function (otem) {
        var _this = this;
        this.userCommentData.user_id = this.userPostData.user_id;
        this.userCommentData.token = this.userPostData.token;
        this.userCommentData.idComment = otem.otem;
        console.log(this.userCommentData.idComment);
        var confirm = this.alertCtrl.create({
            title: 'Report this comment?',
            message: 'Reported comment cannot be undo. Are you sure?',
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
                        _this.authService.postData(_this.userCommentData, 'newflagcomment')
                            .then(function (result) {
                            _this.responseData = result;
                            if (_this.responseData) {
                                _this.getComment();
                                loader.dismiss();
                            }
                            else {
                                _this.sendNotification("Something wrong, check your internet connection");
                                _this.getComment();
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
    EditPage.prototype.gonext = function () {
        this.navCtrl.push('NewmeetingPage');
    };
    EditPage.prototype.getComment = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            cssClass: "transparent",
            content: "\n        <img src=\"assets/imgs/moon.png\" class=\"ghost\" width=\"80px\"/>\n        <p class=\"fonts\">Please wait..</p>",
            spinner: 'hide',
        });
        loader.present();
        this.userPostData.idForum = this.forumPass.id;
        this.authService.postData(this.userPostData, 'comments')
            .then(function (result) {
            _this.responseData = result;
            if (_this.responseData.feedData) {
                localStorage.setItem('commentData', JSON.stringify(_this.responseData));
                _this.dataSet = _this.responseData.feedData;
                console.log(_this.dataSet);
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
    EditPage.prototype.ionViewDidLoad = function () {
        this.selectEntry(this.NP.get("record"));
    };
    EditPage.prototype.selectEntry = function (item) {
        this.forumPass.id = item.id;
        this.forumPass.user_id = item.user_id;
        this.forumPass.topic = item.topic;
        this.forumPass.post = item.post;
        this.forumPass.author = item.author;
        this.forumPass.allcomment = item.allcomment;
        this.forumPass.upvote = item.upvote;
        this.forumPass.downvote = item.downvote;
        this.forumPass.flag = item.flag;
        this.forumPass.date = item.date;
        this.forumPass.time = item.time;
    };
    EditPage.prototype.sendNotification = function (message) {
        var notification = this.toastCtrl.create({
            message: message,
            duration: 3000,
            cssClass: "toast-container",
            position: "bottom"
        });
        notification.present();
    };
    EditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit',template:/*ion-inline-start:"C:\Users\user\IonicProject\imgood\src\pages\edit\edit.html"*/'\n<ion-content class="bgcolor">\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n  <ion-refresher-content\n    refreshingSpinner="dots">\n  </ion-refresher-content>\n</ion-refresher>\n\n  <div class="divinput2">\n    <ion-list no-lines>\n      <ion-item class="top" no-lines>\n        <ion-label floating>\n            Posted by\n            <span *ngIf="this.forumPass.user_id == this.userPostData.user_id">you</span>\n            <span *ngIf="this.forumPass.user_id != this.userPostData.user_id">{{ this.forumPass.author }}</span>\n        </ion-label>\n\n        <ion-input type="text" class="people" [ngModel]="this.forumPass.topic" readonly no-lines></ion-input>\n      </ion-item>\n\n      <ion-item no-lines>\n        <ion-textarea type="text" rows="8" [ngModel]="this.forumPass.post" readonly></ion-textarea>\n      </ion-item>\n\n      <ion-item no-lines class="bottom">\n      <ion-row class="padd">\n        <ion-col>\n          <!--<button ion-button icon-start clear small color="primary" (click)="upvote()">\n            <ion-icon name="arrow-round-up"></ion-icon>\n            {{ this.forumPass.upvote }}\n          </button>\n          <span class="span"></span>\n          <button ion-button icon-start clear small color="primary" (click)="downvote()">\n            <ion-icon name="arrow-round-down"></ion-icon>\n            {{ this.forumPass.downvote }}\n          </button>-->\n          <button ion-button icon-start clear small color="test2" item-start>\n            <ion-icon name="time"></ion-icon>\n            {{ this.forumPass.time }}\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button icon-start clear small color="test2" item-end>\n            <ion-icon name="calendar"></ion-icon>\n            <!--<div>{{ this.forumPass.allcomment }}</div>-->\n            {{ this.forumPass.date }}\n          </button>\n        </ion-col>\n      </ion-row>\n      </ion-item>\n    </ion-list>\n  </div>\n  <br>\n\n  <div class="divinput">\n    <ion-list>\n      <ion-item class="top1" no-lines>\n      </ion-item>\n      <div *ngIf="dataSet != 0">\n          <ion-item *ngFor="let otem of dataSet" class="items">\n            <ion-icon *ngIf="otem.user_id == this.userPostData.user_id" color="grid2" name="trash" (click)="deleteComment({otem : otem.id})" item-end small></ion-icon>\n            <ion-icon *ngIf="otem.user_id != this.userPostData.user_id" name="flag" color="danger" (click)="flagcomment({otem : otem.id})" item-end small> {{ otem.flag }}</ion-icon>\n            <ion-icon *ngIf="otem.user_id == this.userPostData.user_id" name="flag" color="silver" item-end small> {{ otem.flag }}</ion-icon>\n\n            <h2><span *ngIf="otem.user_id == this.userPostData.user_id">you</span>\n            <span *ngIf="otem.user_id != this.userPostData.user_id">{{otem.user}}</span> <ion-note style="font-size: 14px;">{{otem.time}}</ion-note></h2>\n            <p text-wrap>{{otem.text}}</p>\n\n          </ion-item>\n      </div>\n      <div *ngIf="dataSet == 0">\n        <ion-item class="items" style="text-align: center;">\n          <h2>Be the first to comment!</h2>\n        </ion-item>\n      </div>\n\n      <ion-item class="bottom1" no-lines>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <ion-fab right bottom>\n    <button ion-fab color="flaty3" (click)="openModal()"><ion-icon name="text"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\IonicProject\imgood\src\pages\edit\edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], EditPage);
    return EditPage;
}());

//# sourceMappingURL=edit.js.map

/***/ })

});
//# sourceMappingURL=11.js.map