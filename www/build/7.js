webpackJsonp([7],{

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page3PageModule", function() { return Page3PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page3__ = __webpack_require__(486);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Page3PageModule = /** @class */ (function () {
    function Page3PageModule() {
    }
    Page3PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__page3__["a" /* Page3Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__page3__["a" /* Page3Page */]),
            ],
        })
    ], Page3PageModule);
    return Page3PageModule;
}());

//# sourceMappingURL=page3.module.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page3Page; });
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



var Page3Page = /** @class */ (function () {
    function Page3Page(navCtrl, alertCtrl, NP, authService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.NP = NP;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.items = [];
        this.httpdata = [];
        this.userPostData = { "user_id": "", "token": "", "idPem": "" };
        var data = JSON.parse(localStorage.getItem('userData'));
        this.userDetails = data.userData;
        this.userPostData.user_id = this.userDetails.user_id;
        this.userPostData.token = this.userDetails.token;
        this.getFeed();
        this.oriItems();
    }
    Page3Page.prototype.goMeeting = function (param) {
        this.navCtrl.push('NewmeetingPage', param);
    };
    Page3Page.prototype.getFeed = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            cssClass: "transparent",
            content: "\n        <img src=\"assets/imgs/moon.png\" class=\"ghost\" width=\"80px\"/>\n        <p class=\"fonts\">Please wait..</p>",
            spinner: 'hide',
        });
        loader.present();
        this.authService.postData(this.userPostData, 'counselors')
            .then(function (result) {
            _this.responseData = result;
            if (_this.responseData.feedData) {
                //localStorage.setItem('forumData', JSON.stringify(this.responseData));
                _this.dataSet = _this.responseData.feedData;
                _this.httpdata = _this.dataSet;
                loader.dismiss();
            }
            else { }
        }, function (err) {
        });
    };
    Page3Page.prototype.oriItems = function () {
        this.dataSet = this.httpdata;
    };
    Page3Page.prototype.getItems = function (ev) {
        this.oriItems(); // Reset items back to all of the items
        var val = ev.target.value; // set val to the value of the ev target
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.dataSet = this.dataSet.filter(function (item) {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    Page3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-page3',template:/*ion-inline-start:"C:\Users\user\IonicProject\imgood\src\pages\page3\page3.html"*/'<ion-content padding class="bgg">\n\n  <h2 text-uppercase class="come"> Choose your counselor</h2>\n\n  <div>\n    <ion-searchbar (ionInput)="getItems($event)" class="search"></ion-searchbar>\n  </div>\n\n      <ion-list class="lists">\n\n            <ion-card *ngFor="let item of dataSet" class="ion-item-border" (click)="goMeeting( {record : item} )">\n              <ion-item>\n                    <h2 class="people" text-wrap>{{ item.name }}</h2>\n                    <p class="people2" *ngIf="item.position == \'C\'" text-wrap>Counselor</p>\n                    <p class="people2" *ngIf="item.position != \'C\'" text-wrap>Assistant Counselor</p>\n              </ion-item>\n            </ion-card>\n\n      </ion-list>\n\n  </ion-content>\n'/*ion-inline-end:"C:\Users\user\IonicProject\imgood\src\pages\page3\page3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], Page3Page);
    return Page3Page;
}());

//# sourceMappingURL=page3.js.map

/***/ })

});
//# sourceMappingURL=7.js.map