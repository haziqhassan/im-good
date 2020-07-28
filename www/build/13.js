webpackJsonp([13],{

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consultant2PageModule", function() { return Consultant2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__consultant2__ = __webpack_require__(477);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Consultant2PageModule = /** @class */ (function () {
    function Consultant2PageModule() {
    }
    Consultant2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__consultant2__["a" /* Consultant2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__consultant2__["a" /* Consultant2Page */]),
            ],
        })
    ], Consultant2PageModule);
    return Consultant2PageModule;
}());

//# sourceMappingURL=consultant2.module.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Consultant2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Consultant2Page = /** @class */ (function () {
    function Consultant2Page(navCtrl, navParams, socket, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.socket = socket;
        this.toastCtrl = toastCtrl;
        this.messages = [];
        this.nickname = '';
        this.message = '';
        this.nickname = this.navParams.get('nickname');
        this.getMessages().subscribe(function (message) {
            _this.messages.push(message);
        });
        this.getUsers().subscribe(function (data) {
            var user = data['user'];
            if (data['event'] === 'left') {
                _this.showToast('User left: ' + user);
            }
            else {
                _this.showToast('User joined: ' + user);
            }
        });
    }
    //publicmessage
    Consultant2Page.prototype.sendMessage = function () {
        this.socket.emit('add-message', { text: this.message });
        console.log(this.message, this.nickname);
        this.message = '';
        this.scrollToBottom();
    };
    Consultant2Page.prototype.getMessages = function () {
        var _this = this;
        this.scrollToBottom();
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('message', function (data) {
                observer.next(data);
            });
        });
        return observable;
    };
    Consultant2Page.prototype.getUsers = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('users-changed', function (data) {
                observer.next(data);
            });
        });
        return observable;
    };
    Consultant2Page.prototype.ionViewWillLeave = function () {
        this.socket.disconnect();
    };
    Consultant2Page.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    Consultant2Page.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            _this.content.scrollToBottom();
        }, 100);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], Consultant2Page.prototype, "content", void 0);
    Consultant2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-consultant2',template:/*ion-inline-start:"C:\Users\user\IonicProject\imgood\src\pages\consultant2\consultant2.html"*/'<ion-header>\n  	<ion-navbar class="bgtitle">\n    	  <ion-title text-wrap text-uppercase class="title">\n          Room\n   	 </ion-title>\n  	</ion-navbar>\n</ion-header>\n\n<ion-content class="bggg">\n  <ion-grid class="padtop">\n    <ion-row *ngFor="let message of messages">\n      <ion-col col-9 *ngIf="message.from !== nickname" class="message" [ngClass]="{\'my_message\': message.from === nickname, \'other_message\': message.from !== nickname}">\n        <span [ngClass]="{\'user_name\': message.from === nickname, \'user_name1\': message.from !== nickname}">{{ message.from }}:</span><br>\n        <span>{{ message.text }}</span>\n        <div class="time">{{message.created | date:\'hh:mm\'}}</div>\n      </ion-col>\n\n      <ion-col offset-3 col-9 *ngIf="message.from === nickname" class="message" [ngClass]="{\'my_message\': message.from === nickname, \'other_message\': message.from !== nickname}">\n        <span [ngClass]="{\'user_name\': message.from === nickname, \'user_name1\': message.from !== nickname}">{{ message.from }}:</span><br>\n        <span>{{ message.text }}</span>\n        <div class="time">{{message.created | date:\'hh:mm\'}}</div>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n<ion-footer>\n        <ion-item>\n          <ion-input type="text" placeholder="What\'s on your mind sunshine?" [(ngModel)]="message"></ion-input>\n          <button ion-button clear (click)="sendMessage()" [disabled]="message === \'\'" item-end>\n            <ion-icon class="footer-btn" name="send"></ion-icon>\n          </button>\n      </ion-item>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\user\IonicProject\imgood\src\pages\consultant2\consultant2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__["Socket"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], Consultant2Page);
    return Consultant2Page;
}());

//# sourceMappingURL=consultant2.js.map

/***/ })

});
//# sourceMappingURL=13.js.map