webpackJsonp([6],{

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomPageModule", function() { return RoomPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__room__ = __webpack_require__(513);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RoomPageModule = /** @class */ (function () {
    function RoomPageModule() {
    }
    RoomPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__room__["a" /* RoomPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__room__["a" /* RoomPage */]),
            ],
        })
    ], RoomPageModule);
    return RoomPageModule;
}());

//# sourceMappingURL=room.module.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_socket_io__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoomPage = /** @class */ (function () {
    function RoomPage(navCtrl, navParams, socket) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
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
    RoomPage.prototype.joinChatRoom = function () {
        this.socket.connect();
        this.socket.emit('online', this.userPostData.name);
        this.socket.emit('set-nickname', this.userPostData.name);
        this.navCtrl.push('Consultant2Page', { nickname: this.userPostData.name });
    };
    RoomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-room',template:/*ion-inline-start:"C:\Users\user\IonicProject\imgood\src\pages\room\room.html"*/'<ion-content class="bgg">\n\n  <h2 text-uppercase class="come"> Rooms</h2>\n\n  <ion-list class="lists">\n          <ion-item  class="ion-item-border">\n            <div (click)="joinChatRoom()">\n              <h2 class="people"><b>Workload & Assignment</b></h2>\n\n            </div>\n          </ion-item>\n    </ion-list>\n<!--<div>\n  <ion-searchbar (ionInput)="getItems($event)" class="search"></ion-searchbar>\n</div>\n\n    <ion-list class="lists">\n\n          <ion-card *ngFor="let item of dataSet" class="ion-item-border" (click)="goedit( {record : item} )">\n\n            <ion-item>\n                  <h2 class="people"><b>{{ item.topic }}</b></h2>\n                  <p class="people2">Posted by {{ item.author }}</p>\n            </ion-item>\n\n            <ion-card-content>\n              <p class="people2">{{ item.post }}</p>\n            </ion-card-content>\n            <ion-row>\n              <ion-col>\n                <button ion-button icon-start clear small style="color: tomato;">\n                  <ion-icon name="arrow-round-up"></ion-icon>\n                  <div>{{ item.upvote }}</div>\n                  <span class="span"></span>\n                  <ion-icon name="arrow-round-down"></ion-icon>\n                  <div>{{ item.downvote }}</div>\n                </button>\n              </ion-col>\n              <ion-col>\n                <button ion-button icon-start clear small>\n                  <ion-icon name="text"></ion-icon>\n                  <div>{{ item.allcomment }}</div>\n                </button>\n              </ion-col>\n              <ion-col align-self-center text-center>\n                <ion-note>\n                  {{ item.time }}\n                </ion-note>\n              </ion-col>\n            </ion-row>\n          </ion-card>\n\n    </ion-list>\n    <ion-fab right bottom>\n      <button ion-fab color="flaty3" (click)="gonext()"><ion-icon name="paper"></ion-icon></button>\n    </ion-fab>-->\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\IonicProject\imgood\src\pages\room\room.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__["Socket"]])
    ], RoomPage);
    return RoomPage;
}());

//# sourceMappingURL=room.js.map

/***/ })

});
//# sourceMappingURL=6.js.map