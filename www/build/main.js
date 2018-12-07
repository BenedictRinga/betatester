webpackJsonp([41],{

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttachedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AttachedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// https://www.djamware.com/post/599da16580aca768e4d2b130/how-to-upload-file-on-ionic-3-using-native-file-transfer-plugin
var AttachedPage = /** @class */ (function () {
    function AttachedPage(navCtrl, navParams, transfer, camera, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.transfer = transfer;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
    }
    AttachedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AttachedPage');
    };
    AttachedPage.prototype.getImage = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imageURI = imageData;
        }, function (err) {
            console.log(err);
            _this.presentToast(err);
        });
    };
    AttachedPage.prototype.uploadFile = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Uploading..."
        });
        loader.present();
        var fileTransfer = this.transfer.create();
        var options = {
            fileKey: 'ionicfile',
            fileName: 'ionicfile',
            chunkedMode: false,
            mimeType: "image/jpeg",
            headers: {}
        };
        fileTransfer.upload(this.imageURI, 'http://www.ringa.tech/brags/api/uploadImage', options)
            .then(function (data) {
            console.log(data + " Uploaded Successfully");
            _this.imageFileName = "http://www.ringa.tech/brags/static/images/ionicfile.jpg";
            loader.dismiss();
            _this.presentToast("Image uploaded successfully");
        }, function (err) {
            console.log(err);
            loader.dismiss();
            _this.presentToast(err);
        });
    };
    AttachedPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    AttachedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-attached',template:/*ion-inline-start:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\attached\attached.html"*/'<ion-content>\n  <!-- <ion-item>\n    <p>{{imageURI}}</p>\n    <button ion-button color="secondary" (click)="getImage()">Get Image</button>\n  </ion-item>\n  <ion-item>\n    <h4>Image Preview</h4>\n    <img src="{{imageFileName}}" *ngIf="imageFileName" alt="Ionic File" width="300" />\n  </ion-item>\n  <ion-item>\n    <button ion-button (click)="uploadFile()">Upload</button>\n  </ion-item> -->\n  \n  <ion-grid>\n    <ion-row>\n      <!-- <ion-col col-6 col-md-4 col-xl-3 *ngFor="let image of [1,2,3,4,5,6,7,8,9,10,11,12]"> -->\n          <ion-col col-6 col-md-4 col-xl-3  *ngFor="let image of images">\n        <div class="image-container" [style.background-image]="\'url(assets/imgs/\' + image + \'.jpg)\'"></div>\n        <!-- <img src="assets/imgs/Nairobi.jpg" imageViewer/> -->\n        <!-- <img src="assets/imgs/{{image}}.jpg" imageViewer/> -->\n        <img src="{{image}}" imageViewer/>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-col (click)="presentActionSheet()"><ion-icon name="images" class="BPicons"></ion-icon></ion-col>\n</ion-content>'/*ion-inline-end:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\attached\attached.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */]])
    ], AttachedPage);
    return AttachedPage;
}());

//# sourceMappingURL=attached.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__brag_brag__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__catalogsitem_catalogsitem__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CatalogsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CatalogsPage = /** @class */ (function () {
    function CatalogsPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    CatalogsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CatalogsPage');
    };
    CatalogsPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__brag_brag__["a" /* BragPage */]);
    };
    CatalogsPage.prototype.getItems = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__catalogsitem_catalogsitem__["a" /* CatalogsitemPage */]);
    };
    CatalogsPage.prototype.addEmail = function () {
        var alert = this.alertCtrl.create({
            title: 'Email Card',
            inputs: [
                {
                    name: 'catname',
                    placeholder: 'Album Name'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log('Saving');
                    }
                }
            ],
            cssClass: 'alertCustomCss'
        });
        alert.present();
    };
    CatalogsPage.prototype.createCatalog = function () {
        var alert = this.alertCtrl.create({
            title: 'Create Catalog',
            inputs: [
                {
                    name: 'catname',
                    placeholder: 'Album Name'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log('Saving');
                    }
                }
            ],
            cssClass: 'alertCustomCss'
        });
        alert.present();
    };
    CatalogsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-catalogs',template:/*ion-inline-start:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\catalogs\catalogs.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <!-- <button (click)="back()" class="back">\n      <ion-icon name="arrow-back"></ion-icon>\n    </button>\n    <ion-title class="catTitle">Catalog</ion-title> -->\n    <!-- <button class="catAdd" (click)="createCatalog()">\n      <ion-icon name="add"></ion-icon>\n    </button> -->\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="CTcntnt">\n  \n <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-img class="catImage" src="assets/imgs/Nairobi.jpg" (click)="addEmail()"></ion-img>\n        <p class="pCatalog">Bags</p>\n      </ion-col>\n      <ion-col>\n        <ion-img class="catImage" src="assets/imgs/RingaIcon.png"></ion-img>\n        <p class="pCatalog">Shoes</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-img class="catImage" src="assets/imgs/ionicLADY.jpg"></ion-img>\n        <p class="pCatalog">Art</p>\n      </ion-col>\n      <ion-col>\n        <ion-img class="catImage" src="assets/imgs/Nairobi.jpg"></ion-img>\n        <p class="pCatalog">Dresses</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-img class="catImage" src=""></ion-img>\n        <p class="pCatalog"></p>\n      </ion-col>\n      <ion-col>\n        <ion-img class="catImage" src=""></ion-img>\n        <p class="pCatalog"></p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n   <!-- Use Modals to activate FAB button ******\n    https://ionicframework.com/docs/components/#modals ****** -->\n\n  <ion-fab color="primary" class="Ctlgfab">\n      <button ion-fab (click)="createCatalog()">\n          \n              <ion-icon name="images"></ion-icon>\n            </button>\n     </ion-fab>\n     <label class="Ctlgfabtag">What\'s new?</label>\n\n</ion-content>'/*ion-inline-end:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\catalogs\catalogs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], CatalogsPage);
    return CatalogsPage;
}());

//# sourceMappingURL=catalogs.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FocusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bragv_bragv__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_brag_brag__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the FocusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FocusPage = /** @class */ (function () {
    function FocusPage(navCtrl, navParams, app, bragservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.bragservice = bragservice;
        this.category = 'gear';
        this.brags = [];
        this.cards = new Array(10);
    }
    FocusPage.prototype.ngOnInit = function () {
        this.getBrags();
        console.log(this.brags);
    };
    FocusPage.prototype.getBrags = function () {
        var _this = this;
        this.bragservice.getBrags()
            .subscribe(function (brags) { return _this.brags = brags; });
        console.log(this.brags);
    };
    // Load Brag Visitor page
    // BragVPage(){
    //   this.navCtrl.push(BragVPage);
    // Load Brag Visitor page FULLmode
    FocusPage.prototype.BragVPage = function () {
        var nav = this.app.getRootNav();
        nav.push(__WEBPACK_IMPORTED_MODULE_2__bragv_bragv__["a" /* BragVPage */]);
    };
    FocusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FocusPage');
    };
    FocusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-focus',template:/*ion-inline-start:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\focus\focus.html"*/'<!--\n  Generated template for the FocusPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar> \n    <ion-title>What am I focused on...</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="FCntnt">\n\n  <!-- DUNBAR\'S Law of frienship -->\n  <!-- https://www.newyorker.com/science/maria-konnikova/social-media-affect-math-dunbar-number-friendships -->\n  <!-- https://www.sciencealert.com/the-latest-data-suggests-you-can-only-keep-five-close-friends -->\n  <!-- https://www.businessinsider.com/friends-limited-number-of-close-relationships-2018-3?IR=T  -->\n  \n\n\n\n<!-- User details, date, etc. -->\n\n  <ion-card class="Focard" *ngFor="let card of cards">\n      <div>\n        <ion-grid class="Focitem">\n    <ion-item>\n       <ion-avatar item-end>\n          <img src="assets/imgs/Nairobi.jpg" imageViewer>\n             </ion-avatar>\n           <div (click)="BragVPage()"><h2>Marty McFly</h2></div>\n          <p (click)="BragVPage()">November 5, 1955; (11h ago)</p>\n        <!-- <ion-row align-items-baseline><ion-col><p>November 5, 1955</p></ion-col>\n             <ion-col center text-center><ion-note>11h ago</ion-note></ion-col>\n           </ion-row> -->\n        </ion-item>\n      </ion-grid>\n    </div>\n\n    \n      <!-- Photo, GIF, or Video (multi-stacked) -->\n <!-- <div>\n    <ion-scroll scrollX="true" scrollY="true" zoom="true">\n    <img src="assets/imgs/Nairobi.jpg" imageViewer/>\n  </ion-scroll> -->\n  <img src="assets/imgs/Nairobi.jpg" imageViewer/>\n  <!-- </div> -->\n\n  <ion-card-content>\n      <p>Wait a minute. Wait at a minute, Doc. Uhhh... t a minute, Doc. Uhhh... t a minute, Doc. Uhhh... Are you telling me that you built a time machine... out ofAre you telling me that you built a time machine... out ofAre you telling me that you built a time machine... out of minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>\n  </ion-card-content>\n\n  <!-- Social media ENGAGEMENT response    -->\n  <ion-row class="engagement">\n    <ion-col>\n      <button ion-button icon-start clear small>\n        <ion-icon name="thumbs-up"></ion-icon>\n        <div>12</div>\n      </button>\n    </ion-col>\n    <ion-col>\n      <button ion-button icon-start clear small>\n        <ion-icon name="text"></ion-icon>\n        <div>4</div>\n      </button>\n    </ion-col>\n    <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="share"></ion-icon>\n          <div>4</div>\n        </button>\n      </ion-col>\n      <ion-col>\n          <button ion-button icon-start clear small>\n            <ion-icon name="star-outline"></ion-icon>\n          </button>\n        </ion-col>\n  </ion-row>\n\n</ion-card>\n\n<!-- Shipping with useful features for creating effective layouts: \n\n\nBuilt from three blocks: header, content & footer\nFully supports typograpy elements & classes\nThumbnail, avatar, inline & cover image support\nIntegrates with horizontal scroll view and list view\nMultiple theme support\nLightweight footprint\nRTL Support\nSupports card collections -->\n\n\n\n  <ion-fab color="primary" class="FCfab">\n    <button ion-fab><ion-icon name="add"></ion-icon></button>\n      </ion-fab>\n      <label class="Focusfabtag">Add to Focus</label>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\focus\focus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_3__providers_brag_brag__["a" /* BragProvider */]])
    ], FocusPage);
    return FocusPage;
}());

//# sourceMappingURL=focus.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BragVPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bvratings_bvratings__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vision_vision__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__catalogsv_catalogsv__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fdback_fdback__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the BragVPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BragVPage = /** @class */ (function () {
    function BragVPage(navCtrl, navParams, viewCtrl, modalCtrl, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.popoverCtrl = popoverCtrl;
        this.category = 'gear';
        this.footerScrollConfig = { cssProperty: 'margin-bottom', maxValue: undefined };
        this.headerScrollConfig = { cssProperty: 'margin-top', maxValue: 44 };
        this.cards = new Array(10);
    }
    BragVPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BragVPage');
    };
    BragVPage.prototype.dismissView = function () {
        this.viewCtrl.dismiss();
    };
    BragVPage.prototype.presentContactModal = function () {
        var ContactModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */], { userId: 8675309 }, { showBackdrop: true, enableBackdropDismiss: true, cssClass: 'myStatModal' });
        ContactModal.present();
    };
    BragVPage.prototype.presentPopover9 = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__bvratings_bvratings__["a" /* BvratingsPage */]);
        popover.present({
            ev: myEvent
        });
    };
    BragVPage.prototype.pop = function () {
        this.navCtrl.pop();
    };
    //   presentPopover3(myContact) {
    //     let pop = this.popoverCtrl.create(ContactPage, {} , { cssClass: ' WIDEcustom-popover ' });
    // let ev = {
    //   target : {
    //     getBoundingClientRect : () => {
    //       return {
    //         top: '100'
    //       };
    //     }
    //   }
    // };
    // pop.present({ev});
    //   }
    BragVPage.prototype.presentPopover4 = function (myCatalogsv) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__catalogsv_catalogsv__["a" /* CatalogsvPage */], {}, { cssClass: ' WIDEcustom-popover ' });
        popover.present({
            ev: myCatalogsv
        });
    };
    BragVPage.prototype.pop4 = function () {
        this.navCtrl.pop();
    };
    BragVPage.prototype.presentFdbackModal = function () {
        var FdbackModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__fdback_fdback__["a" /* FdbackPage */], { cssClass: 'BragVModal' });
        FdbackModal.present();
    };
    BragVPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    BragVPage.prototype.presentPopover2 = function (myVision) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__vision_vision__["a" /* VisionPage */]);
        popover.present({
            ev: myVision
        });
    };
    BragVPage.prototype.pop2 = function () {
        this.navCtrl.pop();
    };
    BragVPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bragv',template:/*ion-inline-start:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\bragv\bragv.html"*/'<!-- https://medium.com/@gregor.srdic/ionic3-hidding-header-on-footer-on-content-scroll-15ab95b05dc5 -->\n\n<!-- DYNAMIC CHANGE NAVcolor https://forum.ionicframework.com/t/dynamically-change-navbar-color/46280/9 -->\n<!-- *** background opacity: https://stackoverflow.com/questions/51922633/opacity-does-not-working-on-ionic-3 -->\n\n<!-- FROSTED GLASS navbar opacity https://www.joshmorony.com/create-a-stylish-news-feed-layout-in-ionic-2/ -->\n\n          <ion-header [scrollHide]="headerScrollConfig" [scrollContent]="pageContent">\n            <ion-navbar transparent color="primary">\n                <!-- <button (click)="back()" class="back">\n               \n                </button> -->\n                <ion-title class="giftTitle">@AllanBenz</ion-title>\n                <!-- <ion-title class="giftTitle">@{{aliasName}}!</ion-title> -->\n\n                <ion-buttons start>\n                    <button ion-button icon-only>\n                  <ion-icon name="search"></ion-icon>\n                </button>\n              </ion-buttons>\n\n              <ion-buttons end>\n                <button ion-button icon-only>\n                  <ion-icon name="help-circle"></ion-icon>\n                    </button>\n                </ion-buttons>\n\n            </ion-navbar>\n          </ion-header>\n\n          <!-- https://www.joshmorony.com/high-performance-parallax-animation-in-ionic-2/ -->\n\n          <ion-content #pageContent fullscreen>\n\n              <div class="BVzap">\n      \n      \n                  <ion-scroll scrollY="true" style="width: 100%; height: 93%;">\n                    <ion-grid>\n                    </ion-grid>\n                  </ion-scroll>\n                  <ion-grid>\n                      <ion-segment [(ngModel)]="category">\n                          <ion-segment-button value="gear">\n                              Promos\n                          </ion-segment-button>\n                          <ion-segment-button (click)="presentContactModal()">\n                              Contact Us\n                          </ion-segment-button>\n                          <ion-segment-button (click)="presentPopover2($event)" >\n                              Vision\n                          </ion-segment-button>\n                      </ion-segment>\n                    </ion-grid>\n                \n                    </div>\n\n          <div class="cardPOS">\n            <ion-card class="BVcard" *ngFor="let card of cards">\n              <ion-grid class="BVitem">\n            <ion-item>\n              <ion-avatar item-end>\n                <img src="assets/imgs/RingaIcon.png" imageViewer/>\n              </ion-avatar>\n              <div><h2>Marty McFly</h2></div>\n              <!-- <div><h2>{{userName}}</h2></div> -->\n                       <p>November 5, 1955; (11h ago)</p>\n            </ion-item>\n          </ion-grid>\n\n            <img src="assets/imgs/1897.jpg" imageViewer/>\n          \n            <ion-card-content>\n              <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>\n            </ion-card-content>\n          \n           <!-- Social media ENGAGEMENT response    -->\n  <ion-row class="engagement">\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>12</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>4</div>\n        </button>\n      </ion-col>\n      <ion-col>\n          <button ion-button icon-start clear small>\n            <ion-icon name="share"></ion-icon>\n            <div>4</div>\n          </button>\n        </ion-col>\n        <ion-col>\n            <button ion-button icon-start clear small>\n              <ion-icon name="star-outline"></ion-icon>\n            </button>\n          </ion-col>\n    </ion-row>\n          \n          </ion-card>\n        </div>\n      \n\n\n<ion-fab color="primary" class="BragVbk">\n  <button (click)="pop()" ion-fab><ion-icon name="arrow-back"></ion-icon></button>\n    </ion-fab>\n\n    <div>\n        <ion-row class="firstcolV" padding>\n            <ion-col>\n              <ion-badge item-start color="primary" class="badgeV">260k</ion-badge>\n            </ion-col>\n                <ion-col><img class="wTw" src="assets/imgs/w3wApple.jpg"/></ion-col>\n                   <ion-col><ion-icon name="chatboxes"></ion-icon></ion-col>\n               <ion-col (click)="presentPopover9($event)" col-4><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon></ion-col>\n           <ion-col><ion-icon name="pin"></ion-icon></ion-col>\n       </ion-row>\n      </div>\n      \n      <!-- Settiings: choose icon colors -->\n      \n      <!-- SWIPE LISTENER https://forum.ionicframework.com/t/unable-to-catch-vertical-swipe-drag-events/46380/4 -->\n      \n      <div swipe-listener>\n          <ion-row class="secdcolV">\n            <ion-col><ion-icon name="heart" class="TMicons"></ion-icon><br><label class="TMstatusV">Focus</label></ion-col>\n                <ion-col (click)="presentContactModal()"><ion-icon name="contact" class="TMicons"></ion-icon><br><label class="TMstatusV">Contact</label></ion-col>\n                    <ion-col (click)="presentPopover4($event)"><ion-icon name="images" class="TMicons"></ion-icon><br><label class="TMstatusV">Catalogs</label></ion-col>\n                  <ion-col  (click)="presentFdbackModal($event)"><ion-icon name="sync" class="TMicons"></ion-icon><br><label class="TMstatusV">Feedback</label></ion-col>\n              <ion-col><ion-icon name="share" class="TMicons"></ion-icon><br><label class="TMstatusV">Share</label></ion-col>\n          </ion-row>\n        </div>       \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\bragv\bragv.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* PopoverController */]])
    ], BragVPage);
    return BragVPage;
}());

//# sourceMappingURL=bragv.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BvratingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RatingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BvratingsPage = /** @class */ (function () {
    function BvratingsPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    BvratingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BvratingsPage');
    };
    BvratingsPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    BvratingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bvratings',template:/*ion-inline-start:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\bvratings\bvratings.html"*/'<!--\n  Generated template for the RatingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>Ratings</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content padding>\n\n    <div>\n          <ion-row>\n                <ion-col><ion-icon name="star-outline" class="RStar"></ion-icon><ion-icon name="star-outline" class="RStar"></ion-icon><ion-icon name="star-outline" class="RStar"></ion-icon><ion-icon name="star-outline" class="RStar"></ion-icon><ion-icon name="star-outline" class="RStar"></ion-icon></ion-col>\n   \n                 </ion-row>\n        <p class="Rtext">How do you rate them?</p>\n    </div> \n   \n   \n    <div>\n       <ion-row>\n             <ion-col text-center><ion-icon name="star-outline" class="RStar2"></ion-icon><ion-icon name="star-outline" class="RStar2"></ion-icon><ion-icon name="star-outline" class="RStar2"></ion-icon><ion-icon name="star-outline" class="RStar2"></ion-icon><ion-icon name="star-outline" class="RStar2"></ion-icon></ion-col>\n         </ion-row>\n     <p class="Rtext2">How others have rated them!</p>\n   </div> \n   \n   <!-- Tell someone else   -->\n   \n   \n     <!-- <ion-list>\n       <ion-list-header>Ionic</ion-list-header>\n       <button ion-item (click)="close()">Learn Ionic</button>\n       <button ion-item (click)="close()">Documentation</button>\n       <button ion-item (click)="close()">Showcase</button>\n       <button ion-item (click)="close()">GitHub Repo</button>\n     </ion-list> -->\n   \n     <!-- https://forum.ionicframework.com/t/multiple-popovers-on-same-page/20916/5 -->\n   \n   </ion-content>\n   '/*ion-inline-end:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\bvratings\bvratings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */]])
    ], BvratingsPage);
    return BvratingsPage;
}());

//# sourceMappingURL=bvratings.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RingamailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__ = __webpack_require__(248);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RingamailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RingamailPage = /** @class */ (function () {
    function RingamailPage(navCtrl, navParams, params, viewCtrl, emailComposer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.emailComposer = emailComposer;
        this.to = "";
        this.cc = "";
        this.bcc = "";
        this.attachments = "";
        this.subject = "";
        this.message = "";
        console.log('UserId', params.get('userId'));
    }
    // Cancel: close the Email modal page
    RingamailPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    RingamailPage.prototype.ionViewDidLoad = function () {
        this.emailComposer.isAvailable().then(function (available) {
            if (available) {
                //Now we know we can send
            }
        });
        console.log('ionViewDidLoad RingamailPage');
    };
    RingamailPage.prototype.send = function () {
        var email = {
            to: this.to,
            cc: [],
            bcc: [],
            attachments: [],
            subject: this.subject,
            body: this.message,
            isHtml: true
        };
        // Send a text message using default options
        this.emailComposer.open(email);
    };
    RingamailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ringamail',template:/*ion-inline-start:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\ringamail\ringamail.html"*/'<!--\n  Generated template for the RingamailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <ion-title>Email</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n  \n    <div>\n  \n        <ion-item>\n            <ion-label color="primary" stacked>To:</ion-label>\n          <ion-input [(ngModel)]="to" type="text"></ion-input>\n              </ion-item>\n              <ion-item>\n                  <ion-label color="primary" stacked>Cc:</ion-label>\n                <ion-input [(ngModel)]="cc" type="text"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label color="primary" stacked>Bcc:</ion-label>\n                      <ion-input [(ngModel)]="bcc" type="text"></ion-input>\n                          </ion-item>\n              <ion-item>\n        <ion-label color="primary" stacked>Subject:</ion-label>\n          <ion-input [(ngModel)]="subject" type="text"></ion-input>\n             </ion-item>\n             <ion-item>\n          <ion-label color="primary" stacked>Message</ion-label>\n        <ion-input [(ngModel)]="message" type="text" placeholder="type your Message here"></ion-input>\n            </ion-item>\n    </div>\n  \n      \n    <button ion-fab clear (click)="closeModal()" class="goBack"><label>Cancel</label></button>\n    <ion-fab>\n  <button ion-fab clear (click)="send()" class="flight"><ion-icon name="ios-send"></ion-icon></button>\n  </ion-fab>\n  \n  <!-- name="ios-send-outline" -->\n  \n  </ion-content>\n  '/*ion-inline-end:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\ringamail\ringamail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__["a" /* EmailComposer */]])
    ], RingamailPage);
    return RingamailPage;
}());

//# sourceMappingURL=ringamail.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RingacalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cal_add_event_cal_add_event__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_calendar__ = __webpack_require__(124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RingacalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RingacalendarPage = /** @class */ (function () {
    function RingacalendarPage(navCtrl, navParams, alertCtrl, calendar) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.calendar = calendar;
    }
    RingacalendarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RingacalendarPage');
    };
    RingacalendarPage.prototype.goToLastMonth = function () {
        this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
        this.getDaysOfMonth();
    };
    RingacalendarPage.prototype.goToNextMonth = function () {
        this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0);
        this.getDaysOfMonth();
    };
    RingacalendarPage.prototype.getDaysOfMonth = function () {
        this.daysInThisMonth = new Array();
        this.daysInLastMonth = new Array();
        this.daysInNextMonth = new Array();
        this.currentMonth = this.monthNames[this.date.getMonth()];
        this.currentYear = this.date.getFullYear();
        if (this.date.getMonth() === new Date().getMonth()) {
            this.currentDate = new Date().getDate();
        }
        else {
            this.currentDate = 999;
        }
        var firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
        var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
        for (var i = prevNumOfDays - (firstDayThisMonth - 1); i <= prevNumOfDays; i++) {
            this.daysInLastMonth.push(i);
        }
        var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
        for (var i = 0; i < thisNumOfDays; i++) {
            this.daysInThisMonth.push(i + 1);
        }
        var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay();
        var nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0).getDate();
        for (var i = 0; i < (6 - lastDayThisMonth); i++) {
            this.daysInNextMonth.push(i + 1);
        }
        var totalDays = this.daysInLastMonth.length + this.daysInThisMonth.length + this.daysInNextMonth.length;
        if (totalDays < 36) {
            for (var i = (7 - lastDayThisMonth); i < ((7 - lastDayThisMonth) + 7); i++) {
                this.daysInNextMonth.push(i);
            }
        }
    };
    RingacalendarPage.prototype.addEvent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cal_add_event_cal_add_event__["a" /* CalAddEventPage */]);
    };
    RingacalendarPage.prototype.loadEventThisMonth = function () {
        var _this = this;
        this.eventList = new Array();
        var startDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
        var endDate = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);
        this.calendar.listEventsInRange(startDate, endDate).then(function (msg) {
            msg.forEach(function (item) {
                _this.eventList.push(item);
            });
        }, function (err) {
            console.log(err);
        });
    };
    RingacalendarPage.prototype.checkEvent = function (day) {
        var hasEvent = false;
        var thisDate1 = this.date.getFullYear() + "-" + (this.date.getMonth() + 1) + "-" + day + " 00:00:00";
        var thisDate2 = this.date.getFullYear() + "-" + (this.date.getMonth() + 1) + "-" + day + " 23:59:59";
        this.eventList.forEach(function (event) {
            if (((event.startDate >= thisDate1) && (event.startDate <= thisDate2)) || ((event.endDate >= thisDate1) && (event.endDate <= thisDate2))) {
                hasEvent = true;
            }
        });
        return hasEvent;
    };
    RingacalendarPage.prototype.selectDate = function (day) {
        var _this = this;
        this.isSelected = false;
        this.selectedEvent = new Array();
        var thisDate1 = this.date.getFullYear() + "-" + (this.date.getMonth() + 1) + "-" + day + " 00:00:00";
        var thisDate2 = this.date.getFullYear() + "-" + (this.date.getMonth() + 1) + "-" + day + " 23:59:59";
        this.eventList.forEach(function (event) {
            if (((event.startDate >= thisDate1) && (event.startDate <= thisDate2)) || ((event.endDate >= thisDate1) && (event.endDate <= thisDate2))) {
                _this.isSelected = true;
                _this.selectedEvent.push(event);
            }
        });
    };
    RingacalendarPage.prototype.deleteEvent = function (evt) {
        var _this = this;
        // console.log(new Date(evt.startDate.replace(/\s/, 'T')));
        // console.log(new Date(evt.endDate.replace(/\s/, 'T')));
        var alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: 'Are you sure want to delete this event?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        _this.calendar.deleteEvent(evt.title, evt.location, evt.notes, new Date(evt.startDate.replace(/\s/, 'T')), new Date(evt.endDate.replace(/\s/, 'T'))).then(function (msg) {
                            console.log(msg);
                            _this.loadEventThisMonth();
                            _this.selectDate(new Date(evt.startDate.replace(/\s/, 'T')).getDate());
                        }, function (err) {
                            console.log(err);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    RingacalendarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ringacalendar',template:/*ion-inline-start:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\ringacalendar\ringacalendar.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      RingaCalendar\n    </ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="addEvent()">\n          <ion-icon name="add-circle"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="calendar-header">\n    <ion-row class="calendar-month">\n      <ion-col col-2 (click)="goToLastMonth()"><ion-icon name="arrow-back"></ion-icon></ion-col>\n      <ion-col col-8>{{currentMonth}} {{currentYear}}</ion-col>\n      <ion-col col-2 (click)="goToNextMonth()"><ion-icon name="arrow-forward"></ion-icon></ion-col>\n    </ion-row>\n  </div>\n  <div class="calendar-body">\n    <ion-grid>\n      <ion-row class="calendar-weekday">\n        <ion-col>Su</ion-col>\n        <ion-col>Mo</ion-col>\n        <ion-col>Tu</ion-col>\n        <ion-col>We</ion-col>\n        <ion-col>Th</ion-col>\n        <ion-col>Fr</ion-col>\n        <ion-col>Sa</ion-col>\n      </ion-row>\n      <ion-row class="calendar-date">\n        <ion-col col-1 *ngFor="let lastDay of daysInLastMonth" class="last-month" (click)="goToLastMonth()">{{lastDay}}</ion-col>\n        <ion-col col-1 *ngFor="let day of daysInThisMonth" (click)="selectDate(day)">\n          <span class="currentDate" *ngIf="currentDate === day; else otherDate">{{day}}</span>\n          <ng-template #otherDate class="otherDate">\n            {{day}}<br>\n            <div class="event-bullet" *ngIf="checkEvent(day)"></div>\n          </ng-template>\n        </ion-col>\n        <ion-col col-1 *ngFor="let nextDay of daysInNextMonth" class="next-month" (click)="goToNextMonth()">{{nextDay}}</ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div class="selected-event" *ngIf="isSelected">\n    <ion-list>\n      <ion-item *ngFor="let se of selectedEvent">\n        <ion-buttons end>\n          <button ion-button clear icon-only (click)="deleteEvent(se)">\n            <ion-icon name="close"></ion-icon>\n          </button>\n        </ion-buttons>\n        <h2>{{se.title}}</h2>\n        <h3>{{se.message}}</h3>\n        <p>Start Date: {{se.startDate}}<br>\n        Start Date: {{se.endDate}}</p>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\ringacalendar\ringacalendar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_calendar__["a" /* Calendar */]])
    ], RingacalendarPage);
    return RingacalendarPage;
}());

//# sourceMappingURL=ringacalendar.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalAddEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_calendar__ = __webpack_require__(124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CalAddEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CalAddEventPage = /** @class */ (function () {
    function CalAddEventPage(alertCtrl, navCtrl, navParams, calendar) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.calendar = calendar;
        this.event = { title: "", location: "", message: "", startDate: "", endDate: "" };
    }
    CalAddEventPage.prototype.save = function () {
        var _this = this;
        this.calendar.createEvent(this.event.title, this.event.location, this.event.message, new Date(this.event.startDate), new Date(this.event.endDate)).then(function (msg) {
            var alert = _this.alertCtrl.create({
                title: 'Success!',
                subTitle: 'Event saved successfully',
                buttons: ['OK']
            });
            alert.present();
            _this.navCtrl.pop();
        }, function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Failed!',
                subTitle: err,
                buttons: ['OK']
            });
            alert.present();
        });
    };
    CalAddEventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CalAddEventPage');
    };
    CalAddEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cal-add-event',template:/*ion-inline-start:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\cal-add-event\cal-add-event.html"*/'<ion-content padding>\n  <form (ngSubmit)="save()">\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Title</ion-label>\n        <ion-input type="text" [(ngModel)]="event.title" name="event.title"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Location</ion-label>\n        <ion-input type="text" [(ngModel)]="event.location" name="event.location"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Notes</ion-label>\n        <ion-input type="text" [(ngModel)]="event.message" name="event.message"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Start Date</ion-label>\n        <ion-datetime displayFormat="DD MMM YYYY" pickerFormat="MM/DD/YYYY" [(ngModel)]="event.startDate" name="event.startDate"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>End Date</ion-label>\n        <ion-datetime displayFormat="DD MMM YYYY" pickerFormat="MM/DD/YYYY" [(ngModel)]="event.endDate" name="event.endDate"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <button ion-button type="submit" full round>Save</button>\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\cal-add-event\cal-add-event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_calendar__["a" /* Calendar */]])
    ], CalAddEventPage);
    return CalAddEventPage;
}());

//# sourceMappingURL=cal-add-event.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the VisionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VisionPage = /** @class */ (function () {
    function VisionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    VisionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VisionPage');
    };
    VisionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vision',template:/*ion-inline-start:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\vision\vision.html"*/'<!--\n  Generated template for the VisionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="primary">\n        \n        <ion-title class="giftTitle">Our Goals & Vision</ion-title>\n        \n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content padding>\n  \n  </ion-content>\n  '/*ion-inline-end:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\vision\vision.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], VisionPage);
    return VisionPage;
}());

//# sourceMappingURL=vision.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogsvPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__brag_brag__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__catalogsitem_catalogsitem__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CatalogsvPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CatalogsvPage = /** @class */ (function () {
    function CatalogsvPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    CatalogsvPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CatalogsvPage');
    };
    CatalogsvPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__brag_brag__["a" /* BragPage */]);
    };
    CatalogsvPage.prototype.getItems = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__catalogsitem_catalogsitem__["a" /* CatalogsitemPage */]);
    };
    CatalogsvPage.prototype.addEmail = function () {
        var alert = this.alertCtrl.create({
            title: 'Email Card',
            inputs: [
                {
                    name: 'catname',
                    placeholder: 'Album Name'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log('Saving');
                    }
                }
            ],
            cssClass: 'alertCustomCss'
        });
        alert.present();
    };
    CatalogsvPage.prototype.createCatalog = function () {
        var alert = this.alertCtrl.create({
            title: 'Create Catalog',
            inputs: [
                {
                    name: 'catname',
                    placeholder: 'Album Name'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log('Saving');
                    }
                }
            ],
            cssClass: 'alertCustomCss'
        });
        alert.present();
    };
    CatalogsvPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-catalogsv',template:/*ion-inline-start:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\catalogsv\catalogsv.html"*/'<ion-header>\n    <ion-navbar color="primary">\n  \n      <ion-title class="catTitle">Our Catalogs</ion-title>\n  \n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content class="CTcntnt">\n    \n   <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-img class="catImage" src="assets/imgs/Nairobi.jpg" (click)="addEmail()"></ion-img>\n          <p class="pCatalog">Bags</p>\n        </ion-col>\n        <ion-col>\n          <ion-img class="catImage" src="assets/imgs/RingaIcon.png"></ion-img>\n          <p class="pCatalog">Shoes</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-img class="catImage" src="assets/imgs/ionicLADY.jpg"></ion-img>\n          <p class="pCatalog">Art</p>\n        </ion-col>\n        <ion-col>\n          <ion-img class="catImage" src="assets/imgs/Nairobi.jpg"></ion-img>\n          <p class="pCatalog">Dresses</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-img class="catImage" src=""></ion-img>\n          <p class="pCatalog"></p>\n        </ion-col>\n        <ion-col>\n          <ion-img class="catImage" src=""></ion-img>\n          <p class="pCatalog"></p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n     <!-- Use Modals to activate FAB button ******\n      https://ionicframework.com/docs/components/#modals ****** -->\n  \n  \n  </ion-content>'/*ion-inline-end:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\catalogsv\catalogsv.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], CatalogsvPage);
    return CatalogsvPage;
}());

//# sourceMappingURL=catalogsv.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FdbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_brag_brag__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feedbackv_feedbackv__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the FdbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FdbackPage = /** @class */ (function () {
    function FdbackPage(navCtrl, navParams, viewCtrl, bragservice, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.bragservice = bragservice;
        this.popoverCtrl = popoverCtrl;
    }
    FdbackPage.prototype.addBrag = function (BragForm) {
        var _this = this;
        console.log(BragForm.value);
        this.bragservice.addBrag(BragForm.value)
            .subscribe(function (brags) { return _this.brags = brags; });
    };
    FdbackPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    FdbackPage.prototype.presentPopover8 = function (myFeedbackv) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__feedbackv_feedbackv__["a" /* FeedbackvPage */], {}, { cssClass: ' WIDEcustom-popover ' });
        popover.present({
            ev: myFeedbackv
        });
    };
    FdbackPage.prototype.pop4 = function () {
        this.navCtrl.pop();
    };
    FdbackPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FdbackPage');
    };
    FdbackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fdback',template:/*ion-inline-start:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\fdback\fdback.html"*/'<ion-content class="FdBcontainer">\n   \n        <!-- <div>\n                <img class="Logo" src="assets/imgs/logo.png">          \n            </div> -->\n\n          \n              <div class="FBheading">\n                  <h2>@AllanBenz</h2>\n                  <p>wants to hear from you.</p>\n                </div>\n            \n            \n\n  \n              <!-- <div>\n                    <button large class="Fbkview">View</button>\n                          <button (click)="pop()" large class="Fbkdone">Done</button>\n                              </div> -->\n      \n<div class="FBpost"> \n    <form #BragForm="ngForm" (ngSubmit)="addBrag(BragForm)">\n        \n            <ion-footer [keyboardAttach]="content" class="">\n                <ion-toolbar class="FBtext-input">\n                  <ion-item no-lines class="FBion-item">\n                    \n                    <ion-textarea autosize\n                    rows="3"\n                    placeholder="Type your feedback here..."\n                    autocomplete="on"\n                    autocorrect="on"\n                    text-style="justified"\n                    name="feedback"\n                    [(ngModel)]="feedback"\n                    contenteditable="true"\n                    (click)="$event.preventDefault();"\n                    user-select= "auto"\n                    scroll="true"\n                    >\n                    </ion-textarea>\n                    \n                  </ion-item>\n                </ion-toolbar>\n            </ion-footer>\n        </form>\n    </div> \n\n\n    <div class="FBmodalcol">\n       <ion-footer>\n            <ion-row align-items-start align-items-baseline>\n                <ion-col (click)="closeModal()"><ion-icon name="arrow-round-back" class="bottomIcon"></ion-icon></ion-col>\n                <ion-col><img class="BragIcon" src="assets/imgs/RingaIcon.png"/></ion-col>\n                        <ion-col><ion-icon class="bottomIcon" name="call"></ion-icon></ion-col>\n                        <ion-col (click)="presentPopover8($event)"><ion-icon class="bottomIcon" name="eye"></ion-icon></ion-col>\n                              <ion-col><ion-icon class="bottomIcon" name="alarm"></ion-icon></ion-col>\n                         <ion-col (click)="addBrag(BragForm); closeModal()"><ion-icon name="arrow-round-forward" class="bottomIcon"></ion-icon></ion-col>\n             \n           </ion-row>\n        </ion-footer>\n      </div>\n  \n  </ion-content>'/*ion-inline-end:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\fdback\fdback.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_brag_brag__["a" /* BragProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* PopoverController */]])
    ], FdbackPage);
    return FdbackPage;
}());

//# sourceMappingURL=fdback.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyStatusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_brag_brag__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bragpost_bragpost__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MystatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyStatusPage = /** @class */ (function () {
    function MyStatusPage(navCtrl, navParams, bragservice, modalCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.bragservice = bragservice;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.brags = [];
        this.items = [];
        this.cards = [];
    }
    MyStatusPage.prototype.ngOnInit = function () {
        this.getBrags();
    };
    MyStatusPage.prototype.getBrags = function () {
        var _this = this;
        this.bragservice.getBrags()
            .subscribe(function (brags) { return _this.brags = brags; });
    };
    MyStatusPage.prototype.presentBragpostModal = function () {
        var BragpostModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__bragpost_bragpost__["a" /* BragpostPage */], { userId: 8675309 }, { cssClass: 'myStatModal' });
        BragpostModal.present();
    };
    MyStatusPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    MyStatusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyStatusPage');
    };
    MyStatusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mystatus',template:/*ion-inline-start:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\mystatus\mystatus.html"*/'<!--\n  Generated template for the MyStatusPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="MSCntnt">\n\n\n\n  <!-- Use ActionSheets, Popovers, exciting -->\n\n\n\n    <div class="BPRingAssist1" *ngIf="buttonClicked"><ion-row>\n                \n        <ion-col>Welcome to Brag, your exciting channel to a world of your own choosing...</ion-col>\n    </ion-row></div> \n\n\n   <!-- User details, date, etc. -->s\n  \n   <ion-card class="MScard" *ngFor="let brag of brags" (click)="itemTapped($event, brag)">\n    \n    <div>\n      <ion-grid class="Focitem">\n        <ion-item>\n          <ion-avatar item-end>\n              <ion-img *ngIf="brag.image" src="{{brag.image}}" style="width: 100%"></ion-img>\n              <ion-img *ngIf="brag.image" [src]="brag.image" style="width: 100%"></ion-img>\n              <img src="{{brag.avatar}}" imageViewer>\n\n                </ion-avatar>\n                  <div (click)="BragVPage()"><h2>{{ brag.name}}</h2></div>\n                  <ion-item><ion-datetime displayFormat="MMM DD, YYYY HH:mm" pickerFormat="DD MMM YYYY" [(ngModel)]="myDate"></ion-datetime></ion-item>\n                  <!-- <ion-datetime displayFormat="MM DD YYYY" pickerFormat="DD MMM YYYY" [(ngModel)]="myDate"  ></ion-datetime> -->\n                <!-- <ion-row align-items-baseline><ion-col><p>November 5, 1955</p></ion-col>\n                <ion-col center text-center><ion-note>11h ago</ion-note></ion-col>\n              </ion-row> -->\n            </ion-item>\n          </ion-grid>\n        </div>\n\n\n  <!-- Photo, GIF, or Video (multi-stacked) -->\n<!-- <div>\n<ion-scroll scrollX="true" scrollY="true" zoom="true">\n<img src="assets/imgs/Nairobi.jpg" imageViewer/>\n</ion-scroll> -->\n<img src="{{brag.photo}}" imageViewer/>\n<!-- </div> -->\n\n<ion-card-content>\n  <p>{{brag.BGpost}}</p>\n</ion-card-content>\n\n<!-- Social media ENGAGEMENT response    -->\n<ion-row class="engagement">\n<ion-col>\n  <button ion-button icon-start clear small>\n    <ion-icon name="thumbs-up"></ion-icon>\n    <div>12</div>\n  </button>\n</ion-col>\n<ion-col>\n  <button ion-button icon-start clear small>\n    <ion-icon name="text"></ion-icon>\n    <div>4</div>\n  </button>\n</ion-col>\n<ion-col>\n    <button ion-button icon-start clear small>\n      <ion-icon name="share"></ion-icon>\n      <div>4</div>\n    </button>\n  </ion-col>\n  <ion-col>\n      <button ion-button icon-start clear small>\n        <ion-icon name="star-outline"></ion-icon>\n      </button>\n    </ion-col>\n</ion-row>\n\n</ion-card>\n\n    <!-- Use Modals to activate FAB button ******\n    https://ionicframework.com/docs/components/#modals ******\n     -->\n      <!-- <ion-fab (click)="presentBragpostModal($event)" color="primary" class="MSfab"> -->\n          <ion-fab (click)="presentBragpostModal($event)" color="primary" class="MSfab">\n            <button ion-fab>\n          <img src="assets/imgs/BragIcon.png"/>\n        </button>\n        <!-- <label>What\'s new?</label> -->\n       </ion-fab>\n       <label class="MSfabtag">What\'s new?</label>\n\n  \n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\mystatus\mystatus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_brag_brag__["a" /* BragProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */]])
    ], MyStatusPage);
    return MyStatusPage;
}());

//# sourceMappingURL=mystatus.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BragpostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_brag_brag__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_chooser__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_opener__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_picker__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_image_picker__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_clipboard__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_android_permissions__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_photo_photo__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__attached_attached__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_base64__ = __webpack_require__(257);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















/**
 * Generated class for the BragpostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @ViewChild('myInput')
var BragpostPage = /** @class */ (function () {
    function BragpostPage(navCtrl, navParams, viewCtrl, 
        // public element: ElementRef,
        // public myInput: ElementRef,
        loadingCtrl, bragservice, transfer, toastCtrl, file, androidPermissions, camera, photoService, clipboard, popoverCtrl, filePicker, fileChooser, fileOpener, filePath, imagePicker, actionSheetCtrl, platform, base64) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.bragservice = bragservice;
        this.transfer = transfer;
        this.toastCtrl = toastCtrl;
        this.file = file;
        this.androidPermissions = androidPermissions;
        this.camera = camera;
        this.photoService = photoService;
        this.clipboard = clipboard;
        this.popoverCtrl = popoverCtrl;
        this.filePicker = filePicker;
        this.fileChooser = fileChooser;
        this.fileOpener = fileOpener;
        this.filePath = filePath;
        this.imagePicker = imagePicker;
        this.actionSheetCtrl = actionSheetCtrl;
        this.platform = platform;
        this.base64 = base64;
        this.show = false;
        this.buttonClicked = false; //Whatever you want to initialise it as
    }
    BragpostPage.prototype.chooseFile = function () {
        // choose your file from the device
        this.fileOpener.open('path/to/file.pdf', 'application/pdf')
            .then(function () { return console.log('File is opened'); })
            .catch(function (e) { return console.log('Error opening file', e); });
    };
    BragpostPage.prototype.fileChoose = function () {
        var _this = this;
        // choose your file from the device
        this.fileChooser.open().then(function (uri) {
            alert('uri' + JSON.stringify(uri));
            // get file path
            _this.filePath.resolveNativePath(uri)
                .then(function (file) {
                alert('file' + JSON.stringify(file));
                var filePath = file;
                if (filePath) {
                    // convert your file in base64 format
                    _this.base64.encodeFile(filePath)
                        .then(function (base64File) {
                        alert('base64File' + JSON.stringify(base64File));
                    }, function (err) {
                        alert('err' + JSON.stringify(err));
                    });
                }
            })
                .catch(function (err) { return console.log(err); });
        })
            .catch(function (e) { return alert('uri' + JSON.stringify(e)); });
    };
    //android file chooser
    BragpostPage.prototype.attachFile = function () {
        this.fileChooser.open()
            .then(function (uri) { return console.log(uri); })
            .catch(function (e) { return console.log(e); });
    };
    //ios file picker
    BragpostPage.prototype.pickFile = function () {
        this.filePicker.pickFile()
            .then(function (uri) { return console.log(uri); })
            .catch(function (err) { return console.log('Error', err); });
    };
    BragpostPage.prototype.onImageLoad = function (e) {
        var reader = new FileReader();
        var self = this;
        var imageFileName = e.target.files[0].name;
        reader.onload = function (e) {
            self.fileData = reader.result; //base64 encoded
            var fileType = self.fileData.substring(self.fileData.indexOf(':') + 1, self.fileData.indexOf('/'));
            ;
        };
        reader.readAsDataURL(e.target.files[0]);
    };
    BragpostPage.prototype.addBrag = function (BragForm) {
        var _this = this;
        console.log(BragForm.value);
        BragForm.value.image = new Date() + "images/dommy.jpg"; // append  imagepath to formdata here
        this.bragservice.addBrag(BragForm.value)
            .subscribe(function (brags) { return _this.brags = brags; });
    };
    BragpostPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    // https://stackoverflow.com/questions/48714500/how-to-display-an-image-from-ionic-native-image-picker?rq=1
    // https://stackoverflow.com/questions/47118760/how-to-take-or-choose-image-from-gallery-in-ionic-3?rq=1
    // actionSHEET camera + photolibrary https://stackoverflow.com/questions/45299589/camera-and-photo-library-together-ionic-2?rq=1 
    //take Photo
    BragpostPage.prototype.takePhoto = function (sourceType) {
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: sourceType,
        };
        this.camera.getPicture(options).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    // https://stackoverflow.com/questions/47920164/image-from-gallery-not-displaying-on-img-tag-in-ionic-2/47922259#47922259
    // https://ionicframework.com/docs/native/camera/      
    //take Photo
    //  selectPhoto(sourceType:number) {
    //   var options = {
    //     quality: 100,
    //     allowEdit: true,
    //     sourceType: this.camera.PictureSourceType.CAMERA,
    //     saveToPhotoAlbum: false,
    //     correctOrientation: true,
    //     encodingType: this.camera.EncodingType.JPEG,
    //     destinationType: this.camera.DestinationType.FILE_URI
    //encodingType: this.camera.EncodingType.PNG,
    // };
    // this.camera.getPicture(options).then((imagePath) => {
    // Special handling for Android library  // 
    //             if (this.platform.is('ios')) {
    //               this.ImageData = imagePath.replace(/^file:\/\//, '');
    //       }
    //             else {
    //               this.ImageData = imagePath;
    //       }
    //             this.photos.push(this.ImageData); //if you have to show multiple image
    //             this.photos.reverse();
    //       })
    // }
    BragpostPage.prototype.showActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [{
                    text: 'Load from gallery',
                    handler: function () { _this.selectPhoto(_this.camera.PictureSourceType.PHOTOLIBRARY); }
                }, {
                    text: 'Take a photo',
                    handler: function () { _this.selectPhoto(_this.camera.PictureSourceType.CAMERA); }
                }, {
                    text: 'Cancel',
                    role: 'cancel'
                }]
        });
        actionSheet.present();
    };
    BragpostPage.prototype.selectPhoto = function (selectedSourceType) {
        var _this = this;
        var cameraOptions = {
            sourceType: selectedSourceType,
            destinationType: this.camera.DestinationType.FILE_URI,
            allowEdit: true,
            quality: 100,
            saveToPhotoAlbum: false,
            encodingType: this.camera.EncodingType.JPEG,
            //encodingType: this.camera.EncodingType.PNG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
        };
        this.camera.getPicture(cameraOptions).then(function (imagePath) {
            // Special handling for Android library  // 
            if (_this.platform.is('ios')) {
                _this.ImageData = imagePath.replace(/^file:\/\//, '');
            }
            else {
                _this.ImageData = imagePath;
            }
            _this.photos.push(_this.ImageData); //if you have to show multiple image
            _this.photos.reverse();
            // Do with the image data what you want.
        });
    };
    // public showActionSheet() {
    //   let actionSheet = this.actionSheetCtrl.create({
    //     buttons: [{
    //       text: 'Load from gallery',
    //       handler: () => {this.loadImage(this.camera.PictureSourceType.PHOTOLIBRARY);}
    //     },{
    //       text: 'Take a photo',
    //       handler: () => {this.loadImage(this.camera.PictureSourceType.CAMERA);}
    //     },{
    //       text: 'Cancel',
    //       role: 'cancel'
    //     }]
    //   });
    //   actionSheet.present();
    // }
    // private loadImage(selectedSourceType:number){
    //   let cameraOptions: CameraOptions = {
    //     sourceType: selectedSourceType,
    //     destinationType: this.camera.DestinationType.DATA_URL,
    //     quality: 100,
    //     encodingType: this.camera.EncodingType.JPEG,
    //     mediaType: this.camera.MediaType.PICTURE,
    //     correctOrientation: true,
    //   }
    //   this.camera.getPicture(cameraOptions).then((imageData) => {
    //     if(imageData!=null){
    //       // Do with the image data what you want.
    //     }
    //   });
    // }
    BragpostPage.prototype.presentPopover7 = function (myAttached) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_14__attached_attached__["a" /* AttachedPage */], {}, { cssClass: ' WIDEcustom-popover ' });
        popover.present({
            ev: myAttached
        });
    };
    BragpostPage.prototype.pop = function () {
        this.navCtrl.pop();
    };
    BragpostPage.prototype.onButtonClick = function () {
        this.buttonClicked = !this.buttonClicked;
    };
    BragpostPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BragpostPage');
    };
    BragpostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bragpost',template:/*ion-inline-start:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\bragpost\bragpost.html"*/'  \n  <ion-content scrollY="true">\n    <ion-segment class="switch">\n      <ion-segment-button value="Bragpost">\n        Brag\n          </ion-segment-button>\n            <ion-segment-button value="BGimages" (click)="presentPopover7($event)">\n         Attached\n      </ion-segment-button>\n    </ion-segment>\n\n    <form #BragForm="ngForm" (ngSubmit)="addBrag(BragForm)">\n      <div class="BPpost">\n          <ion-row>\n              <ion-col col-3 *ngFor="let photo of photos; let id = index">\n                              <ion-card class="block">\n                                <ion-icon name="ios-close-circle-outline" class="deleteIcon" (click)="deletePhoto(id)"></ion-icon>\n                                <img [src]="photo" *ngIf="photo" />\n                              </ion-card>\n              </ion-col>\n          </ion-row>\n        <ion-footer [keyboardAttach]="content" class="BPion-footer">\n            <ion-toolbar class="BPtext-input">\n              <ion-item no-lines class="BPion-item">\n                \n                <ion-textarea autosize\n                  rows="3"\n                  placeholder="Type a new Brag..."\n                  autocomplete="on"\n                  autocorrect="on"\n                  text-style="justified"\n                  name="BGpost"\n                  [(ngModel)]="BGpost"\n                  contenteditable="true"\n                  (click)="$event.preventDefault();"\n                  user-select= "auto"\n                  \n                  >\n                </ion-textarea>\n                \n              </ion-item>\n            </ion-toolbar>\n          </ion-footer>\n        </div> \n        \n      \n    </form>\n  \n             <div class="BPRingAssist1"><ion-row *ngIf="buttonClicked">\n              <ion-col text-center>Cancel</ion-col>\n              <ion-col text-center>Attach</ion-col>\n              <!-- <ion-col text-center>Photos</ion-col> -->\n              <ion-col text-center>Select</ion-col>\n              <ion-col text-center>Assist</ion-col>\n              <ion-col text-center>Send</ion-col>\n          </ion-row></div> \n    \n    <div>\n       <ion-footer>\n          <ion-row class="BPmodalcol">\n           \n             <ion-col (click)="closeModal()" ><ion-icon name="arrow-round-back" class="BPicons"></ion-icon></ion-col>\n                  <ion-col (click)="attachFile(); pickFile()"><ion-icon name="attach" class="BPicons"></ion-icon></ion-col>\n                  <!-- https://ionicframework.com/docs/api/components/action-sheet/ActionSheetController/ -->\n                  <!-- <ion-col (click)="selectPhoto()"><ion-icon name="images" class="BPicons"></ion-icon></ion-col> -->\n                  <ion-col (click)="showActionSheet()"><ion-icon name="camera" class="BPicons"></ion-icon></ion-col>\n                  <ion-col (click)="onButtonClick()"><ion-icon name="help-circle" class="BPicons"></ion-icon></ion-col>\n              <ion-col (click)="addBrag(BragForm); closeModal()"><ion-icon name="arrow-round-forward" class="BPicons"></ion-icon></ion-col>\n                \n          </ion-row>\n        </ion-footer>\n      </div>\n    \n\n    \n     \n  \n      \n         \n  \n \n\n\n  \n  <!-- responsive gallery https://www.youtube.com/watch?v=Wa6QXQj6UaM -->\n  <!-- https://www.youtube.com/watch?v=Wa6QXQj6UaM -->\n\n  <!-- HORIZONTAL SCROLL images -->\n                <!-- <div class="BGpostIMG">\n                    <ion-scroll scrollX="true" style="white-space: nowrap; height: 200px">\n                      <ion-grid>\n                          \n                        <ion-row>\n                        <ion-col col-4 *ngFor="">\n                            <img [src]="" imageViewer /> -->\n                            <!-- https://stackoverflow.com/questions/43196990/how-to-zoom-image-inside-ion-scroll -->\n                          <!-- </ion-col>\n                        </ion-row>\n                      \n                      </ion-grid>\n                    </ion-scroll>\n                  </div> -->\n               \n             <!-- </form> -->\n             \n        \n  \n    \n   \n   \n     \n  \n  \n  \n  </ion-content>\n\n  '/*ion-inline-end:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\bragpost\bragpost.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_brag_brag__["a" /* BragProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_android_permissions__["a" /* AndroidPermissions */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_12__providers_photo_photo__["a" /* PhotoProvider */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_clipboard__["a" /* Clipboard */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_picker__["a" /* IOSFilePicker */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_chooser__["a" /* FileChooser */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_opener__["a" /* FileOpener */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_base64__["a" /* Base64 */]])
    ], BragpostPage);
    return BragpostPage;
}());

//# sourceMappingURL=bragpost.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BragProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__brag_brag__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__email_email__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__call_call__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__w3w_w3w__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__google_google__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_brag_brag__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the BragProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BragProfilePage = /** @class */ (function () {
    function BragProfilePage(params, navCtrl, alertCtrl, popoverCtrl, loadingCtrl, bragservice) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.popoverCtrl = popoverCtrl;
        this.loadingCtrl = loadingCtrl;
        this.bragservice = bragservice;
        this.userId = {};
        this.buttonClicked = false; //Whatever you want to initialise it as
        console.log('UserId', params.get('userId'));
        this.contactpage = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    BragProfilePage.prototype.addBrag = function (BragForm) {
        var _this = this;
        console.log(BragForm.value);
        this.bragservice.addBrag(BragForm.value)
            .subscribe(function (brags) { return _this.brags = brags; });
    };
    BragProfilePage.prototype.pop = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__brag_brag__["a" /* BragPage */], {
            name: this.name,
            address: this.address,
        });
        console.log(this.userId);
    };
    // showPrompt() {
    //   const prompt = this.alertCtrl.create({
    //     title: 'Login',
    //     message: "Enter a name for this new album you're so keen on adding",
    //     inputs: [
    //       {
    //         name: 'title',
    //         placeholder: 'Title'
    //       },
    //     ],
    //     buttons: [
    //       {
    //         text: 'Cancel',
    //         handler: data => {
    //           console.log('Cancel clicked');
    //         }
    //       },
    //       {
    //         text: 'Save',
    //         handler: data => {
    //           console.log('Saved clicked');
    //         }
    //       }
    //     ]
    //   });
    //   prompt.present();
    // }
    BragProfilePage.prototype.presentPopover = function (myEmail) {
        var pop = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__email_email__["a" /* EmailPage */]);
        var ev = {
            target: {
                getBoundingClientRect: function () {
                    return {
                        top: '100'
                    };
                }
            }
        };
        pop.present({ ev: ev });
    };
    BragProfilePage.prototype.presentPopover2 = function (myCall) {
        var pop = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__call_call__["a" /* CallPage */]);
        var ev = {
            target: {
                getBoundingClientRect: function () {
                    return {
                        top: '100'
                    };
                }
            }
        };
        pop.present({ ev: ev });
    };
    BragProfilePage.prototype.presentPopover3 = function (myW3w) {
        var pop = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__w3w_w3w__["a" /* W3wPage */]);
        var ev = {
            target: {
                getBoundingClientRect: function () {
                    return {
                        top: '100'
                    };
                }
            }
        };
        pop.present({ ev: ev });
    };
    BragProfilePage.prototype.presentPopover4 = function (myGoogle) {
        var pop = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_7__google_google__["a" /* GooglePage */]);
        var ev = {
            target: {
                getBoundingClientRect: function () {
                    return {
                        top: '100'
                    };
                }
            }
        };
        pop.present({ ev: ev });
    };
    BragProfilePage.prototype.onButtonClick = function () {
        this.buttonClicked = !this.buttonClicked;
    };
    BragProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bragprofile',template:/*ion-inline-start:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\bragprofile\bragprofile.html"*/'<ion-header>\n        <ion-navbar>\n            <!-- <button (click)="back()" class="pbback">\n            </button> -->\n            <ion-title class="pbgiftTitle">My Profile</ion-title>\n      \n                        <ion-buttons end>\n                        <button ion-button icon-only end (click)="onButtonClick()">\n                          <ion-icon name="help-circle"></ion-icon>\n                            </button>\n                          </ion-buttons>\n                    \n        </ion-navbar>\n      </ion-header>\n      \n      \n      <ion-content>\n      \n         <!-- ***VALIDATION FORM https://www.joshmorony.com/advanced-forms-validation-in-ionic-2/ -->\n          <!-- <ion-slides #contactSlider page>\n       \n              <ion-slide> -->\n                   \n                    <form #BragForm="ngForm" (ngSubmit)="addBrag(BragForm)">\n            <!-- RingAssist1 -->\n            <div class="pbRingAssist1" *ngIf="buttonClicked"><ion-row>\n                    \n                    <ion-col>Click to set Icon/Display Photo or Logo</ion-col>\n                    <ion-col>Swipe left to see the results</ion-col>\n                </ion-row></div> \n        \n      <!-- Logo, DP, etc -->\n           <!-- <div><img class="pbprofileImage" src="assets/imgs/logo.png">\n           </div>  -->\n            \n            <!-- RingAssist2 -->\n          <div class="pbRingAssist2" *ngIf="buttonClicked">\n            \n                <ion-col>Please fill in your Contact information</ion-col>\n      \n                                   </div>\n                \n      <div>\n        \n            <ion-row class="pbnames1">\n                <input type="text" class="inputs" [(ngModel)]="userId.name" name="name" placeholder="Name">\n            </ion-row>\n            <ion-row class="pbnames2">\n                <input type="text" class="inputs" [(ngModel)]="userId.address"  name="address" placeholder="Address">\n            </ion-row>\n            <ion-row class="pbnames3">\n                <input type="text" class="inputs" [(ngModel)]="userId.landmark"  name="landmark" placeholder="Guiding landmarks">\n            </ion-row>\n            <ion-row class="pbnames4">\n                <input type="text" class="inputs" [(ngModel)]="userId.BizType"  name="BizType" placeholder="Business type/ specialisation">\n            </ion-row>\n            <ion-row class="pbnames5">\n                <input type="text" class="inputs" [(ngModel)]="userId.Website"  name="Website" placeholder="Website">\n            </ion-row>\n            <ion-row class="pbnames6">\n                <input type="text" class="inputs" [(ngModel)]="userId.Email"  name="Email" placeholder="Email">\n            </ion-row>\n            <ion-row class="pbnames7">\n                <input type="text" class="inputs" [(ngModel)]="userId.PhoneNumber"  name="PhoneNumber" placeholder="Phone number">\n            </ion-row>  \n          </div>\n      \n          <div>\n            <ion-row class="pbnames8">\n                <ion-col>\n                    <button class="bottomIcon" (click)="presentPopover($event)"><ion-icon name="mail"></ion-icon></button>\n                </ion-col>\n                <ion-col (click)="addNumber">\n                    <button class="bottomIcon" (click)="presentPopover2($event)"><ion-icon name="call"></ion-icon></button>\n                </ion-col>\n                <ion-col (click)="addGPin">\n                    <button class="bottomIcon" (click)="presentPopover3($event)"><ion-icon name="pin"></ion-icon></button>\n                </ion-col>\n                <ion-col (click)="addw3w">\n                    <img class="pbw3w" (click)="presentPopover4($event)" src="assets/imgs/w3w.png">\n                </ion-col>\n            </ion-row>  \n      </div>\n      \n      <!-- RingAssist3 -->\n      <div><ion-row *ngIf="buttonClicked" class="pbRingAssist3">\n              <ion-col text-center>Press any icon to set up EasyContact</ion-col>\n          </ion-row></div> \n      \n      \n      <!-- RingAssist4 -->\n      <div><ion-row *ngIf="buttonClicked" class="pbRingAssist4">\n          <ion-col>\n                  <p> Email</p></ion-col>\n              <ion-col>\n                  <p> Call</p>\n                      </ion-col>\n              <ion-col>\n                  <p> Pin</p></ion-col>\n              <ion-col>\n                  <p> w3w</p> </ion-col>\n      </ion-row>\n      </div>\n    </form>\n      <ion-fab color="primary" class="pBfab">\n               <button ion-fab (click)="addBrag(BragForm); pop()">Done</button>\n             </ion-fab>\n          <!-- </ion-slide> -->\n             \n      \n      <!-- ContactPage in Slide on BragProfile page\n      to show updates synchronously -->\n      \n          <!-- <ion-slide> -->\n                    \n                  <!-- <div><img class="pbprofileImage" src="assets/imgs/logo.png">\n           </div>\n                  \n                  \n                  \n                        <div> \n                            <ion-row align-items-start align-items-baseline class="CCRow4">\n                                  <ion-col><img class="BragIcon" src="assets/imgs/RingaIcon.png"/></ion-col>\n                                      <ion-col (click)="call()"><ion-icon class="bottomIcon" name="call"></ion-icon></ion-col>\n                                            <ion-col (click)="presentProfileModal()"><ion-icon class="bottomIcon" name="mail"></ion-icon></ion-col>\n                                       <ion-col><ion-icon class="bottomIcon" name="alarm"></ion-icon></ion-col>\n                                   <ion-col><ion-icon class="bottomIcon" name="pin"></ion-icon></ion-col>\n                               <ion-col><ion-icon class="bottomIcon" name="share"></ion-icon></ion-col>\n                          </ion-row>\n                       </div> -->\n                  \n              <!-- </ion-slide>\n       \n           \n          </ion-slides> -->\n             \n      </ion-content>\n      '/*ion-inline-end:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\bragprofile\bragprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_brag_brag__["a" /* BragProvider */]])
    ], BragProfilePage);
    return BragProfilePage;
}());

//# sourceMappingURL=bragprofile.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EmailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EmailPage = /** @class */ (function () {
    function EmailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.todo = {};
    }
    EmailPage.prototype.logForm = function () {
        console.log(this.todo);
    };
    EmailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EmailPage');
    };
    EmailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-email',template:/*ion-inline-start:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\email\email.html"*/'<!--\n  Generated template for the EmailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title  class="title">EasyContact - Email</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<!-- https://ionicthemes.com/tutorials/about/forms-and-validation-in-ionic -->\n\n<ion-content padding>\n\n<form (ngSubmit)="logForm()" class="content">\n  <ion-item>\n    <ion-input placeholder="Email address..." type="email" [(ngModel)]="todo.title" name="title"></ion-input>\n  </ion-item>\n  <!-- <ion-item>\n    <ion-label>Description</ion-label>\n    <ion-textarea [(ngModel)]="todo.description" name="description"></ion-textarea>\n  </ion-item> -->\n  <button ion-button type="submit" block>Done</button>\n  <br>\n  <p class="exit">*click anywhere outside to cancel*</p>\n</form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\email\email.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], EmailPage);
    return EmailPage;
}());

//# sourceMappingURL=email.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CallPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CallPage = /** @class */ (function () {
    function CallPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.todo = {};
    }
    CallPage.prototype.logForm = function () {
        console.log(this.todo);
    };
    CallPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CallPage');
    };
    CallPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-call',template:/*ion-inline-start:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\call\call.html"*/'<!--\n  Generated template for the CallPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title  class="title">EasyContact - Phone</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<p class="exit">*click outside to cancel*</p>\n\n<form (ngSubmit)="logForm()" class="content">\n  <ion-item>\n    <!-- <ion-label>Enter Email</ion-label> -->\n    <ion-input [(ngModel)]="username" type="tel"></ion-input>\n    <!-- <ion-input placeholder="Phone number..." type="tel" [(ngModel)]="todo.title" name="title"></ion-input> -->\n  </ion-item>\n  <!-- <ion-item>\n    <ion-label>Description</ion-label>\n    <ion-textarea [(ngModel)]="todo.description" name="description"></ion-textarea>\n  </ion-item> -->\n  <button ion-button type="submit" block>Done</button>\n</form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\call\call.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], CallPage);
    return CallPage;
}());

//# sourceMappingURL=call.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return W3wPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the W3wPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var W3wPage = /** @class */ (function () {
    function W3wPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.todo = {};
    }
    W3wPage.prototype.logForm = function () {
        console.log(this.todo);
    };
    W3wPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad W3wPage');
    };
    W3wPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-w3w',template:/*ion-inline-start:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\w3w\w3w.html"*/'<!--\n  Generated template for the W3wPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title  class="title">EasyContact - Email</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<p class="exit">*click outside to cancel*</p>\n\n<form (ngSubmit)="logForm()" class="content">\n  <ion-item>\n    <!-- <ion-label>Enter Email</ion-label> -->\n    <ion-input placeholder="Email address..." type="text" [(ngModel)]="todo.title" name="title"></ion-input>\n  </ion-item>\n  <!-- <ion-item>\n    <ion-label>Description</ion-label>\n    <ion-textarea [(ngModel)]="todo.description" name="description"></ion-textarea>\n  </ion-item> -->\n  <button ion-button type="submit" block>Done</button>\n</form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\w3w\w3w.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], W3wPage);
    return W3wPage;
}());

//# sourceMappingURL=w3w.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GooglePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the GooglePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GooglePage = /** @class */ (function () {
    function GooglePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.todo = {};
    }
    GooglePage.prototype.logForm = function () {
        console.log(this.todo);
    };
    GooglePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GooglePage');
    };
    GooglePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-google',template:/*ion-inline-start:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\google\google.html"*/'<!--\n  Generated template for the GooglePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title  class="title">EasyContact - Email</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<p class="exit">*click outside to cancel*</p>\n\n<form (ngSubmit)="logForm()" class="content">\n  <ion-item>\n    <!-- <ion-label>Enter Email</ion-label> -->\n    <ion-input placeholder="Email address..." type="text" [(ngModel)]="todo.title" name="title"></ion-input>\n  </ion-item>\n  <!-- <ion-item>\n    <ion-label>Description</ion-label>\n    <ion-textarea [(ngModel)]="todo.description" name="description"></ion-textarea>\n  </ion-item> -->\n  <button ion-button type="submit" block>Done</button>\n</form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\google\google.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], GooglePage);
    return GooglePage;
}());

//# sourceMappingURL=google.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RatingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RatingsPage = /** @class */ (function () {
    function RatingsPage(navCtrl, navParams, popoverCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.viewCtrl = viewCtrl;
    }
    RatingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RatingsPage');
    };
    RatingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ratings',template:/*ion-inline-start:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\ratings\ratings.html"*/'<!--\n  Generated template for the RatingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>Ratings</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content padding>\n\n\n\n    <div>\n       <ion-row>\n             <ion-col text-center><ion-icon name="star-outline" class="RStar2"></ion-icon><ion-icon name="star-outline" class="RStar2"></ion-icon><ion-icon name="star-outline" class="RStar2"></ion-icon><ion-icon name="star-outline" class="RStar2"></ion-icon><ion-icon name="star-outline" class="RStar2"></ion-icon></ion-col>\n         </ion-row>\n     <p class="Rtext2">Your rating!</p>\n   </div> \n     \n     <!-- <ion-list>\n       <ion-list-header>Ionic</ion-list-header>\n       <button ion-item (click)="close()">Learn Ionic</button>\n       <button ion-item (click)="close()">Documentation</button>\n       <button ion-item (click)="close()">Showcase</button>\n       <button ion-item (click)="close()">GitHub Repo</button>\n     </ion-list> -->\n   \n     \n   <!-- Tell someone else\n   Remember for later -->\n   </ion-content>\n   '/*ion-inline-end:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\ratings\ratings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */]])
    ], RatingsPage);
    return RatingsPage;
}());

//# sourceMappingURL=ratings.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormSamplePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_age__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_username__ = __webpack_require__(452);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the FormSamplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FormSamplePage = /** @class */ (function () {
    function FormSamplePage(navCtrl, navParams, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.submitAttempt = false;
        this.slideOneForm = formBuilder.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            age: ['', __WEBPACK_IMPORTED_MODULE_3__validators_age__["a" /* AgeValidator */].isValid]
        });
        this.slideTwoForm = formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z]*')]), __WEBPACK_IMPORTED_MODULE_4__validators_username__["a" /* UsernameValidator */].checkUsername],
            privacy: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            bio: ['']
        });
    }
    FormSamplePage.prototype.next = function () {
        this.signupSlider.slideNext();
    };
    FormSamplePage.prototype.prev = function () {
        this.signupSlider.slidePrev();
    };
    FormSamplePage.prototype.save = function () {
        this.submitAttempt = true;
        if (!this.slideOneForm.valid) {
            this.signupSlider.slideTo(0);
        }
        else if (!this.slideTwoForm.valid) {
            this.signupSlider.slideTo(1);
        }
        else {
            console.log("success!");
            console.log(this.slideOneForm.value);
            console.log(this.slideTwoForm.value);
        }
    };
    FormSamplePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FormSamplePage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('signupSlider'),
        __metadata("design:type", Object)
    ], FormSamplePage.prototype, "signupSlider", void 0);
    FormSamplePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-form-sample',template:/*ion-inline-start:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\form-sample\form-sample.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Sign Up\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button icon-left (click)="prev()"><ion-icon name="arrow-back"></ion-icon> Prev</button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-right (click)="next()">Next <ion-icon name="arrow-forward"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-slides #signupSlider pager>\n \n        <ion-slide>\n       \n          <p *ngIf="submitAttempt" style="color: #ea6153;">Please fill out all details accurately.</p>\n       \n          <ion-list no-lines>\n       \n              <form [formGroup]="slideOneForm">\n       \n                  <ion-item>\n                      <ion-label floating>First Name</ion-label>\n                      <ion-input formControlName="firstName" type="text" [class.invalid]="!slideOneForm.controls.firstName.valid && (slideOneForm.controls.firstName.dirty || submitAttempt)"></ion-input>\n                  </ion-item>\n       \n                  <ion-item *ngIf="!slideOneForm.controls.firstName.valid  && (slideOneForm.controls.firstName.dirty || submitAttempt)">\n                      <p>Please enter a valid name.</p>\n                  </ion-item>\n       \n                  <ion-item>\n                      <ion-label floating>Last Name</ion-label>\n                      <ion-input formControlName="lastName" type="text" [class.invalid]="!slideOneForm.controls.lastName.valid && (slideOneForm.controls.age.dirty || submitAttempt)"></ion-input>\n                  </ion-item>\n       \n                  <ion-item *ngIf="!slideOneForm.controls.lastName.valid  && (slideOneForm.controls.lastName.dirty || submitAttempt)">\n                      <p>Please enter a valid name.</p>\n                  </ion-item>\n       \n                  <ion-item>\n                      <ion-label floating>Age</ion-label>\n                      <ion-input formControlName="age" type="number" [class.invalid]="!slideOneForm.controls.age.valid && (slideOneForm.controls.age.dirty || submitAttempt)"></ion-input>\n                  </ion-item>\n       \n                  <ion-item *ngIf="!slideOneForm.controls.age.valid  && (slideOneForm.controls.age.dirty || submitAttempt)">\n                      <p>Please enter a valid age.</p>\n                  </ion-item>\n       \n              </form>\n       \n          </ion-list>\n       \n        </ion-slide>\n       \n        <ion-slide>\n       \n          <ion-list no-lines>\n       \n              <form [formGroup]="slideTwoForm">\n       \n                  <ion-item>\n                      <ion-label floating>Username</ion-label>\n                      <ion-input [class.invalid]="!slideTwoForm.controls.username.valid && (slideTwoForm.controls.username.dirty || submitAttempt)" formControlName="username" type="text"></ion-input>\n                  </ion-item>\n       \n                  <ion-item *ngIf="slideTwoForm.controls.username.pending">\n                      <p>Checking username...</p>\n                  </ion-item>\n       \n                  <ion-item *ngIf="!slideTwoForm.controls.username.valid && !slideTwoForm.controls.username.pending && (slideTwoForm.controls.username.dirty || submitAttempt)">\n                      <p>Sorry, that username can not be used!</p>\n                  </ion-item>\n       \n                  <ion-item>\n                      <ion-label floating>Privacy</ion-label>\n                      <ion-select [class.invalid]="!slideTwoForm.controls.privacy.valid && (slideTwoForm.controls.privacy.dirty || submitAttempt)" formControlName="privacy">\n                          <ion-option value="public" checked="true">Public</ion-option>\n                          <ion-option value="friends">Friends Only</ion-option>\n                          <ion-option value="private">Private</ion-option>\n                      </ion-select>\n                  </ion-item>\n       \n                  <ion-item>\n                      <ion-label floating>Bio</ion-label>\n                      <ion-textarea formControlName="bio"></ion-textarea>\n                  </ion-item>\n       \n              </form>\n       \n          </ion-list>\n       \n          <button ion-button full color="primary" (click)="save()">Create Account!</button>\n       \n        </ion-slide>\n       \n      </ion-slides>\n\n</ion-content>'/*ion-inline-end:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\form-sample\form-sample.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], FormSamplePage);
    return FormSamplePage;
}());

//# sourceMappingURL=form-sample.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BragsetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the BragsetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BragsetPage = /** @class */ (function () {
    function BragsetPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BragsetPage.prototype.setNavbarTheme = function (theme) {
        this.navbarTheme = theme;
    };
    BragsetPage.prototype.qChat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    BragsetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BragsetPage');
    };
    BragsetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bragset',template:/*ion-inline-start:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\bragset\bragset.html"*/'<ion-navbar *navbar [blankAttr]="navbarTheme">\n  <ion-title>a page title</ion-title>\n  <button>hello world</button>\n</ion-navbar>\n<ion-content padding>\n  <button (click)="setNavbarTheme(\'primary\')">primary</button>\n  <br>\n  <button (click)="setNavbarTheme(\'secondary\')">secondary</button>\n  <br>\n  <button (click)="setNavbarTheme(\'dark\')">dark</button>\n  <br>\n  <button (click)="setNavbarTheme(\'light\')">light</button>\n  <br>\n  <button (click)="setNavbarTheme(\'danger\')">danger</button>\n  <br>\n  <button (click)="qChat()">Logout</button>\n</ion-content>'/*ion-inline-end:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\bragset\bragset.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], BragsetPage);
    return BragsetPage;
}());

//# sourceMappingURL=bragset.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatroomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChatroomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatroomPage = /** @class */ (function () {
    function ChatroomPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.username = '';
        this.message = '';
        this.db = [];
        console.log(this.navParams);
    }
    ChatroomPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatroomPage');
    };
    ChatroomPage.prototype.send = function () {
        this.db.push({
            username: this.username,
            message: this.message
        });
    };
    ChatroomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chatroom',template:/*ion-inline-start:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\chatroom\chatroom.html"*/'<!--\n  Generated template for the ChatroomPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content>\n  <!-- <div id="chatMessages">\n\n      <h1>Talk-talk</h1>\n      <p>lorem ipsum</p>\n  </div> -->\n\n  <ion-fab color="primary" class="cfab">\n    <button ion-fab>\n      <img src="assets/imgs/RingaIcon.png"/>\n    </button>\n      </ion-fab>\n</ion-content>'/*ion-inline-end:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\chatroom\chatroom.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], ChatroomPage);
    return ChatroomPage;
}());

//# sourceMappingURL=chatroom.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FriendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FriendsPage = /** @class */ (function () {
    function FriendsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FriendsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FriendsPage');
    };
    FriendsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-friends',template:/*ion-inline-start:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\friends\friends.html"*/'<!--\n  Generated template for the FriendsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>friends</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\friends\friends.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], FriendsPage);
    return FriendsPage;
}());

//# sourceMappingURL=friends.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CookiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CookiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CookiesPage = /** @class */ (function () {
    function CookiesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CookiesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CookiesPage');
    };
    CookiesPage.prototype.pop = function () {
        this.navCtrl.popToRoot({ animate: true, direction: 'back' });
    };
    CookiesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cookies',template:/*ion-inline-start:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\cookies\cookies.html"*/'<!--\n  Generated template for the CookiesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n</ion-header>\n\n<ion-content style="text-align: justify" padding>\n  <h2>Cookies Policy</h2>\n  <br>\n    Last Modified: January 12, 2018\n    <br>\n    <br>\n    mTrustQ and its subsidiaries and affiliates (collectively, “mTrustQ”, “us”\n    or “we”) understand that your privacy is important to you and are\n    committed to being transparent about the technologies it uses. This\n    Cookie Policy explains how and why cookies, web beacons, pixels, clear\n    gifs, and other similar technologies (collectively “Cookies and Other\n    Tracking Technologies”) may be stored on and accessed from your device\n    when you use or visit any website or app that posts a link to this Policy\n    (collectively, “the Sites”). This Cookie Policy should be read together with\n    our Privacy Policy and our Terms of use.\n    <br>\n    <br>\n    By continuing to browse or use our Sites, you agree that we can store and\n    access Cookies and Other Tracking Technologies as described in this\n    Cookie Policy.\n    <br>\n    <br>\n    What are Cookies and Other Tracking Technologies?\n    <br>\n    <br>\n    A cookie is a small text file that can be stored on and accessed from your\n    device when you visit one of our Sites, to the extent you agree. The other\n    tracking technologies work similarly to cookies and place small data files\n    on your devices or monitor your website activity to enable us to collect\n    information about how you use our Sites. This allows our Sites to\n    recognize your device from those of other users of the Sites. The\n    information provided below about cookies also applies to these other\n    tracking technologies. You can find more information\n    at <a href="http://www.allaboutcookies.org">www.allaboutcookies.org</a> and <a href="http://www.youronlinechoices.eu">www.youronlinechoices.eu</a>.\n    <br>\n    <br>\n    How do our Sites use Cookies and Other Tracking Technologies?\n    <br>\n    <br>\n    mTrustQ uses Cookies and Other Tracking Technologies to identify you\n    and your interests, to remember your preferences, and to track your use of\n    our Sites. We also use Cookies and Other Tracking Technologies to control\n    access to certain content on our Sites, protect the Sites, and to process any\n    requests that you make of us.\n    <br>\n    <br>\n    To administer our Sites and for research purposes, mTrustQ also has\n    contracted with third-party service providers to track and analyze\n    \n    statistical usage and volume information from our Site users. These third-\n    party service providers use persistent Cookies to help us to improve the\n    \n    user experience, manage our Site content, and analyze how users navigate\n    and utilize the Sites.\n    <br>\n    <br>\n    First and Third-party Cookies\n    <br>\n    <br>\n    “First party Cookies” are cookies that belong to mTrustQ and that\n    mTrustQ places on your device. “Third-party Cookies” are cookies that\n    another party places on your device through our Site. mTrustQ may\n    contract with third-party service providers to send e-mails to users who\n    have provided us with their contact information. To help measure and\n    improve the effectiveness of our e-mail communications, and/or to\n    determine whether messages have been opened and links clicked on, the\n    third-party service providers may place Cookies on the devices of these\n    users.\n    <br>\n    <br>\n    For more information on how these companies collect and use information\n    on our behalf, please refer to their privacy policies as indicated below.\n    <br>\n    <br>\n    We use the following types of cookies:\n    <br>\n    <br>\n    Persistent Cookies. We use persistent Cookies to improve your experience\n    of using the Sites. This includes recording your acceptance of our Cookie\n    Policy to remove the cookie message which first appears when you use the\n    Sites.\n    <br>\n    <br>\n    Session Cookies. Session Cookies are temporary and deleted from your\n    machine when your web browser closes. We use session Cookies to help\n    us track internet usage as described above.\n    <br>\n    <br>\n    You may refuse to accept browser Cookies by activating the appropriate\n    setting on your browser. However, if you select this setting you may be\n    unable to access certain parts of the Sites. Unless you have adjusted your\n    browser setting so that it will refuse Cookies, our system will issue\n    Cookies when you direct your browser to our Sites.\n    <br>\n    <br>\n    The data collected by the Sites and/or through Cookies that may be placed\n    on your computer will not be kept for longer than is necessary to fulfil the\n    purposes mentioned above. In any event, such information will not be kept\n    for longer than one year.\n    <br>\n    <br>\n    Our Cookies are used for the following purposes:\n    <br>\n    <br>\n    How do I refuse or withdraw my consent to the use of Cookies?\n    <br>\n    <br>\n    If you do not want Cookies to be dropped on your device, you can adjust\n    the setting of your Internet browser to reject the setting of all or some\n    Cookies and to alert you when a Cookie is placed on your device. For\n    further information about how to do so, please refer to your browser\n    ‘help’ / ‘tool’ or ‘edit’ section or see <a href="http://www.allaboutcookies.org">www.allaboutcookies.org</a>. Please note\n    that if you use your browser settings to block all Cookies (including\n    \n    strictly necessary Cookies) you may not be able to access or use all or\n    parts or functionalities of our Sites.\n    <br>\n    <br>\n    If you want to remove previously-stored Cookies, you can manually delete\n    the Cookies at any time. However, this will not prevent the Sites from\n    placing further Cookies on your device unless and until you adjust your\n    Internet browser setting as described above.\n    <br>\n    <br>\n    For more information on the development of user-profiles and the use of\n    targeting/advertising Cookies, please see www.youronlinechoices.eu if you\n    are located in Europe or www.aboutads.info/choices if in the United\n    States.\n    <br>\n    <br>\n    Contact us\n    <br>\n    <br>\n    If you have any other questions about our Cookie Policy, please contact us\n    at:\n    <br>\n    <br>\n    • Email: Info@mtrustq.com\n    <br>\n    <br>\n    • Website: mTrustQ.com\n    <br>\n    <br>\n\n    <button ion-button (click)="pop()" class="goBACK">\n      Continue\n        <!-- <ion-icon name="share"></ion-icon> -->\n      </button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\cookies\cookies.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], CookiesPage);
    return CookiesPage;
}());

//# sourceMappingURL=cookies.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PrivPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrivPage = /** @class */ (function () {
    function PrivPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PrivPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrivPage');
    };
    PrivPage.prototype.pop = function () {
        this.navCtrl.popToRoot({ animate: true, direction: 'back' });
    };
    PrivPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-priv',template:/*ion-inline-start:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\priv\priv.html"*/'<!--\n  Generated template for the PrivPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n\n</ion-header>\n\n<ion-content text-justify padding>\n    \n    <h2>Privacy Policy</h2>\n  \n    Last Modified: January 12, 2018\n    <br>\n    <br>\n    mTrustQ Ltd. is a verification company. Our services provide verification\n    and interconnections between individuals, businesses and products through\n    our Ringa mobile app and Web platform (consisting of Brag, QChat, QPay,\n    Info etc. which are covered by this Privacy Policy) allowing anyone to\n    enjoy quality access to communication, information, and payments, within\n    a localized and discreet environment, free from technology addiction and\n    intrusion.\n    <br>\n    <br>\n    Your use of these services creates the sharing of certain data with us and\n    those with whom you interact via our platforms. WE DO NOT SHARE\n    YOUR DATA WITH ANYONE.\n    <br>\n    <br>\n    But we cannot protect you from government intrusions. Or invasion of\n    privacy by illegal third parties. We STRONGLY URGE WISDOM in\n    sharing any and all information online, here or on any other platform,\n    regardless of any promises received.\n    <br>\n    <br>\n    We store data as required for our services to function to your satisfaction.\n\n    <br>\n    <br>\n\n    <button ion-button (click)="pop()" class="goBACK">\n      Continue\n        <!-- <ion-icon name="share"></ion-icon> -->\n      </button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\priv\priv.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], PrivPage);
    return PrivPage;
}());

//# sourceMappingURL=priv.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TosPage = /** @class */ (function () {
    function TosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TosPage');
    };
    TosPage.prototype.pop = function () {
        this.navCtrl.popToRoot({ animate: true, direction: 'back' });
    };
    TosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tos',template:/*ion-inline-start:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\tos\tos.html"*/'<!--\n  Generated template for the TosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n</ion-header>\n\n<ion-content style="text-align: justify" padding>\n  <h2>Terms of Service</h2>\n  <br>\n    Last Modified: January 12, 2018\n    <br>\n    <br>\n    Karibu sana!\n    <br>\n    <br>\n    mTrustQ welcomes you. This document has the terms & conditions ‘Terms’ of our relationship if you agree to use our BraQ mobile app and web platforms, including such functions as Brag, QChat, QPay and Info, etc ‘Services’.\n    <br>\n    <br>\n    We will notify you whenever we update this document.\n    <br>\n    <br>\n    By using our Services, you agree that these Terms apply to you, your businesses, and any third parties you engage with.\n    <br>\n    <br>\n    1. Who can use our Services\n    <br>\n    <br>\n    You must be over 12 years old in order to use our Services.\n    <br>\n    <br>\n    By using them, you confirm that:\n    <br>\n    <br>\n    you are fully qualified, without any impediments in law or other capacity, to enter a binding contract with mTrustQ Limited, and any third parties you engage with via our Services.\n    <br>\n    <br>\n    you will comply with these Terms and all applicable local, state, national, and international laws, rules, and regulations.\n    <br>\n    <br>\n    2. What you do with our Services\n    <br>\n    <br>\n    We allow you to use all our Services, without infringing on any other users’ rights to do same. We always reserve a right to limit your use by conditions for payment, or any infringements by you.\n    <br>\n    <br>\n    3. Your content is your property\n    <br>\n    <br>\n    All materials you create, upload, post, send, receive, and store via our services, remain your property and responsibility to the extent that you have any ownership rights in them.\n    <br>\n    <br>\n    We will create a Referrals service which will request your permission to connect you to your friends and customers. At any event, we do not share your materials with third parties. We employ broad demographic and locational factors, and do not follow or snoop on your activities or contacts, to determine advertisement placements.\n    <br>\n    <br>\n    We reserve the right to delete any material of yours stored on our servers if required under law, or we decide that it is not compatible with ours or other’s right to enjoy the services covered in this agreement.\n    <br>\n    <br>\n    4. Materials produced by others\n    <br>\n    <br>\n    Such materials are the property and responsibility of its authors.\n    <br>\n    <br>\n    5. Privacy\n    <br>\n    <br>\n    Please refer to our privacy policy.\n    <br>\n    <br>\n    6. Respecting ours and other people’s rights\n    <br>\n    <br>\n    Respect and tolerance work best in neutrality. This means that we are all mutually best protected when cherished values remain equally accessible to everyone regardless of current fashion, gender, status or other distinguishing factors. It is imperative in our shared use of the services, that you do not:\n    \n    derogate or interfere with anyone else’s rights of publicity, privacy, copyright, trademark, or other intellectual-property right;\n    \n    bully, harass, or intimidate any other users or  persons connected to them;\n    \n    defame or libel other users or persons connected to them;\n    \n    spam or solicit other users.\n    <br>\n    <br>\n    \n    7. Safety\n    <br>\n    <br>\n    We need to work together for Ringa to be a safe environment for all users. Therefore:\n    <br>\n    <br>\n    You will not use our Services for any illegal or prohibited purposes. And you expressly agree that we may at any time, and without recourse or any explanation to you, delete your materials or restrict partially or completely your use of our services.\n    <br>\n    <br>\n    You will not use any automated means or interface to access the Services or extract other users’ information.\n    <br>\n    <br>\n    You will not use or develop any third-party applications to communicate with our services or content or materials of other users without our written consent.\n    <br>\n    <br>\n    You will not use the Services in a way that could interfere with, disrupt, affect negatively, or inhibit other users from fully enjoying the Services, or that could damage, disable, overburden, or impair the functioning of the Services.\n    <br>\n    <br>\n    You will not access or attempt to access any other user’s account, username, or password without their express permission.\n    <br>\n    <br>\n    You will not dupe other users in order to obtain their login details to our services.\n    <br>\n    <br>\n    You will not engage in the distribution or sharing of any materials containing pornography, graphic violence, threats, hate speech, or incitements to violence.\n    <br>\n    <br>\n    You will not use our services to solicit or execute unlawful acts of any kind whatsoever, and you will not claim any rights to privacy when you break any laws.\n    <br>\n    <br>\n    You will not create or transmit malicious code targeting our services.\n    <br>\n    <br>\n    You will not attempt to circumvent any content-filtering techniques we employ, or attempt to access areas or features of the Services that you are not authorised to access.\n    <br>\n    <br>\n    You will not probe, scan, or test the vulnerability of our Services or any system or network.\n    <br>\n    <br>\n    You will not encourage or promote any activity that violates these Terms.\n    <br>\n    <br>\n    8. Your account\n    <br>\n    <br>\n    Control of your account, content and activities is always your responsibility. Therefore, it is important that you deploy strong passwords on your devices and applications, and keep them private.\n    <br>\n    <br>\n    9. Third-party services\n    <br>\n    <br>\n    You engage with any third parties or other users via our services at your own risk. mTrustQ is not party to or responsible for such dealings.\n    <br>\n    <br>\n    10. Changes\n    <br>\n    <br>\n    We are constantly engaged in reviewing and updating our services, and you unequivocally accept our absolute right to make changes to our services and platforms. No liabilities can arise from any such changes.\n    <br>\n    <br>\n    11. Indemnity\n    <br>\n    <br>\n    You agree, to the extent permitted by law, to indemnify, defend and hold harmless mTrustQ Limited, mTrustQ Kenya Ltd. and our affiliates, directors, officers, stockholders, employees, licensors, suppliers, and agents from and against any complaints, charges, claims, damages, losses, costs, liabilities and expenses (including attorneys’ fees) due to, arising out of, or relating in any way to: (a) your access to or use of the Services; (b) your content; and (c) your breach of these Terms.\n    <br>\n    <br>\n    12. Disclaimers\n    <br>\n    <br>\n    We try to keep the Services up and running and free of annoyances. But we cannot promise that we will always succeed.\n    <br>\n    The Services are provided “as is” and “as available” and to the extent permitted by law without warranties of any kind, either express or implied, including, in particular implied warranties, conditions, or other terms relating to (i) merchantability, satisfactory quality, fitness for a particular purpose, title, quiet enjoyment, non-infringement, or (ii) arising from a course of dealing. In addition, while mTrustQ attempts to provide a good user experience, we do not represent or warrant that: (a) the Services will always be secure, error-free or timely; (b) the Services will always function without delays, disruption or imperfections; or (c) that any content or information you obtain through the Services will be timely or accurate.\n    <br>\n    <br>\n    IF THE LAW OF THE COUNTRY WHERE YOU LIVE DOES NOT ALLOW THE EXCLUSIONS OF LIABILITY PROVIDED FOR IN THIS CLAUSE, THOSE EXCLUSIONS SHALL NOT APPLY.\n    <br>\n    <br>\n    mTrustQ Limited, mTrustQ Kenya Ltd., and their affiliates take no responsibility and assume no liability for any content that you, another user, or a third party creates, uploads, posts, sends, receives, or stores on or through our Services. You understand and agree that you may be exposed to content that might be offensive, illegal, misleading, or otherwise inappropriate, none of which mTrustQ Limited, mTrustQ Kenya Ltd., nor their affiliates will be responsible for.\n    <br>\n    <br>\n    Nothing in these Terms will exclude or limit any responsibility we may have to remove content if so required by the law of the country where you live.\n    <br>\n    <br>\n    13. Limitation of liability\n    <br>\n    <br>\n    mTrustQ Limited, mTrustQ Kenya Ltd. and our affiliates, directors, officers, stockholders, employees, licensors, suppliers, and agents will not be liable for any indirect, incidental, special, consequential, punitive, or multiple damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill or other intangible losses, resulting from: (a) your use of the Services or inability to use the Services; (b) your access to or inability to access the Services; (c) the conduct or content of other users or third parties on or through the Services; or (d) unauthorised access, use or alteration of your content. In no event will mTrustQ Limited, mTrustQ Kenya Ltd. or their affiliates’ aggregate liability for all claims relating to the Services exceed the greater of KSh10,000 or the amount you paid mTrustQ Limited, mTrustQ Kenya Ltd. in the last 12 months for any paid Services.\n    <br>\n    <br>\n    IF THE LAW OF THE COUNTRY WHERE YOU LIVE DOES NOT ALLOW ANY LIMITATION OF LIABILITY PROVIDED FOR IN THIS CLAUSE, THAT LIMITATION WILL NOT APPLY.\n    <br>\n    <br>\n    14. Dispute resolution, arbitration\n    <br>\n    <br>\n    We are very keen to resolve disagreements and also address any issues of concern to you quickly and amicably. Kindly contact us via email (info@mtrustq.com) or via Brag.\n    <br>\n    <br>\n    If you are using the Services on behalf of a business (rather than for your personal use), you and mTrustQ Limited, mTrustQ Kenya Ltd. agree that to the extent permitted by law, all claims and disputes between us arising out of or relating to these Terms or the use of the Services will be finally settled under the LCIA Arbitration Rules, which are incorporated by reference into this clause. There will be one arbitrator (to be appointed by the LCIA), the arbitration will take place in London, and the arbitration will be conducted in English. If you do not wish to agree to this clause, you must not use the Services.\n    <br>\n    <br>\n    15. Exclusivity of jurisdiction\n    <br>\n    <br>\n    You agree with mTrustQ that any litigation, in the event that we are unable to amicably resolve differences, shall be exclusively in the courts of England in the United Kingdom, unless this is prohibited by the laws of the country where you reside. You and mTrustQ Kenya Limited consent to the exclusive jurisdiction of the English courts.\n    <br>\n    <br>\n    16. Choice of law\n    <br>\n    <br>\n    The laws of England and Wales govern these Terms and any claims and disputes (whether contractual or otherwise) arising out of or relating to these Terms or their subject matter. The courts in some countries may not apply the laws of England and Wales to some disputes related to these Terms. If you reside in one of those countries, the laws of your home country may apply to those disputes.\n    <br>\n    <br>\n    17. Severability\n    <br>\n    <br>\n    If any provision of these Terms is found unenforceable, then that provision will be severed from these Terms and not affect the validity and enforceability of any remaining provisions.\n    <br>\n    <br>\n    18. Additional terms for specific Services\n    <br>\n    <br>\n    Given the breadth of our Services, we sometimes need to craft additional terms and conditions for specific Services. Those additional terms and conditions, which will be presented to you before you access the relevant Services, then become part of your agreement with us when you accept them. If any part of those additional terms and conditions conflicts with these Terms, the additional terms and conditions will prevail.\n    <br>\n    <br>\n    19. Final terms\n    <br>\n    <br>\n    These Terms make up the entire agreement between you and mTrustQ Kenya Limited and supersede any prior agreements.\n    <br>\n    <br>\n    These Terms do not create or confer any third-party beneficiary rights.\n    <br>\n    <br>\n    If we do not enforce a provision in these Terms, it will not be considered a waiver.\n    <br>\n    <br>\n    We reserve all rights not expressly granted to you.\n    <br>\n    <br>\n    You may not transfer any of your rights or obligations under these Terms without our consent.\n    <br>\n    <br>\n    Contact us\n    <br>\n    <br>\n    Email: Info@mtrustq.com\n    <br>\n    <br>\n    Website: mTrustQ.com\n    <br>\n    <br>\n\n    <button ion-button (click)="pop()" class="goBACK">\n      Continue\n        <!-- <ion-icon name="share"></ion-icon> -->\n      </button>\n\n    \n</ion-content>\n'/*ion-inline-end:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\tos\tos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], TosPage);
    return TosPage;
}());

//# sourceMappingURL=tos.js.map

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 183;

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var AuthProvider = /** @class */ (function () {
    function AuthProvider(http) {
        this.http = http;
        this.usersUrl = 'http://www.ringa.tech/uer'; // URL to web api
        this.userUrlRegister = 'http://www.ringa.tech/users/register';
        this.usersUrlLogin = 'http://www.ringa.tech/users/login';
        this.usersUrlLogout = 'http://www.ringa.tech/users/logout';
    }
    //  Remember to implement =>private messageService: MessageService
    /** GET users from the server */
    AuthProvider.prototype.getUsers = function () {
        var _this = this;
        return this.http.get(this.usersUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (users) { return _this.log('fetched users'); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('getUsers', [])));
    };
    /** GET user by id. Return `undefined` when id not found */
    AuthProvider.prototype.getUserNo404 = function (id) {
        var _this = this;
        var url = this.usersUrl + "/?id=" + id;
        return this.http.get(url)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (users) { return users[0]; }), // returns a {0|1} element array
        Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (h) {
            var outcome = h ? "fetched" : "did not find";
            _this.log(outcome + " user id=" + id);
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError("getUser id=" + id)));
    };
    /** GET user by id. Will 404 if id not found */
    AuthProvider.prototype.getUser = function (id) {
        var _this = this;
        var url = this.usersUrl + "/" + id;
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (_) { return _this.log("fetched user id=" + id); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError("getUser id=" + id)));
    };
    /* GET users whose name contains search term */
    AuthProvider.prototype.searchUsers = function (term) {
        var _this = this;
        if (!term.trim()) {
            // if not search term, return empty user array.
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])([]);
        }
        return this.http.get(this.usersUrl + "/?name=" + term).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (_) { return _this.log("found users matching \"" + term + "\""); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('searchUsers', [])));
    };
    //////// Save methods //////////
    /** POST: add a new user to the server */
    AuthProvider.prototype.addUser = function (user) {
        return this.http.post(this.userUrlRegister, user, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (user) { return console.log("added user w/ id=" + user.id); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('addUser')));
    };
    /** DELETE: delete the user from the server */
    AuthProvider.prototype.deleteUser = function (user) {
        var _this = this;
        var id = typeof user === 'number' ? user : user.id;
        var url = this.usersUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (_) { return _this.log("deleted user id=" + id); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('deleteUser')));
    };
    /** PUT: update the user on the server */
    AuthProvider.prototype.updateUser = function (user) {
        var _this = this;
        return this.http.put(this.usersUrl, user, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (_) { return _this.log("updated user id=" + user.id); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('updateUser')));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    AuthProvider.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(result);
        };
    };
    /** Log a HeroService message with the MessageService */
    AuthProvider.prototype.log = function (message) {
        // console.log('implentation pending');
        // this.messageService.add(`HeroService: ${message}`);
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/attached/attached.module": [
		486,
		40
	],
	"../pages/brag/brag.module": [
		487,
		39
	],
	"../pages/bragpost/bragpost.module": [
		499,
		38
	],
	"../pages/bragprofile/bragprofile.module": [
		488,
		37
	],
	"../pages/bragset/bragset.module": [
		489,
		36
	],
	"../pages/bragv/bragv.module": [
		490,
		35
	],
	"../pages/bvratings/bvratings.module": [
		491,
		34
	],
	"../pages/cal-add-event/cal-add-event.module": [
		492,
		33
	],
	"../pages/call/call.module": [
		493,
		32
	],
	"../pages/catalogs/catalogs.module": [
		494,
		31
	],
	"../pages/catalogsitem/catalogsitem.module": [
		495,
		30
	],
	"../pages/catalogsv/catalogsv.module": [
		496,
		29
	],
	"../pages/chatroom/chatroom.module": [
		497,
		28
	],
	"../pages/contact/contact.module": [
		498,
		27
	],
	"../pages/cookies/cookies.module": [
		500,
		26
	],
	"../pages/email/email.module": [
		502,
		25
	],
	"../pages/fdback/fdback.module": [
		501,
		24
	],
	"../pages/feedback/feedback.module": [
		503,
		23
	],
	"../pages/feedbackv/feedbackv.module": [
		504,
		22
	],
	"../pages/focus/focus.module": [
		505,
		21
	],
	"../pages/form-sample/form-sample.module": [
		506,
		20
	],
	"../pages/friends/friends.module": [
		507,
		19
	],
	"../pages/giftbrag/giftbrag.module": [
		508,
		18
	],
	"../pages/google/google.module": [
		509,
		17
	],
	"../pages/home/home.module": [
		510,
		16
	],
	"../pages/itemdetails/itemdetails.module": [
		511,
		15
	],
	"../pages/join/join.module": [
		512,
		14
	],
	"../pages/login/login.module": [
		513,
		13
	],
	"../pages/mailmodal/mailmodal.module": [
		514,
		12
	],
	"../pages/main/main.module": [
		516,
		11
	],
	"../pages/mystatus/mystatus.module": [
		515,
		10
	],
	"../pages/priv/priv.module": [
		517,
		9
	],
	"../pages/qchat/qchat.module": [
		518,
		8
	],
	"../pages/qchatset/qchatset.module": [
		519,
		7
	],
	"../pages/qchatv/qchatv.module": [
		520,
		6
	],
	"../pages/ratings/ratings.module": [
		521,
		5
	],
	"../pages/ringacalendar/ringacalendar.module": [
		523,
		4
	],
	"../pages/ringamail/ringamail.module": [
		522,
		3
	],
	"../pages/tos/tos.module": [
		524,
		2
	],
	"../pages/vision/vision.module": [
		526,
		1
	],
	"../pages/w3w/w3w.module": [
		525,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 246;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FeedbackPage = /** @class */ (function () {
    function FeedbackPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FeedbackPage.prototype.pop = function () {
        this.navCtrl.pop();
    };
    FeedbackPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FeedbackPage');
    };
    FeedbackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feedback',template:/*ion-inline-start:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\feedback\feedback.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <button (click)="back()" class="back">\n       \n        </button>\n        <ion-title class="giftTitle">Feedback</ion-title>\n        <button class="help">\n            <ion-icon name="help"></ion-icon>\n        </button>\n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content padding scrollY="true">\n  \n        <!-- <div>\n                <img class="Logo" src="assets/imgs/logo.png">          \n            </div> -->\n\n          \n              <div class="FBheading">\n                  <h2>@AllanBenz</h2>\n                  <br>\n                  <br>\n                  <p>wants to hear from you.</p>\n                </div>\n            \n            \n\n  \n              <!-- <div>\n                    <button large class="Fbkview">View</button>\n                          <button (click)="pop()" large class="Fbkdone">Done</button>\n                              </div> -->\n      \n<div class=""> \n    <form #BragForm="ngForm" (ngSubmit)="addBrag(BragForm)">\n        \n            <ion-footer [keyboardAttach]="content" class="">\n                <ion-toolbar class="BPtext-input">\n                  <ion-item no-lines class="BPion-item">\n                    \n                    <ion-textarea autosize\n                    rows="3"\n                    placeholder="Type here..."\n                    autocomplete="on"\n                    autocorrect="on"\n                    text-style="justified"\n                    name="BGpost"\n                    [(ngModel)]="BGpost"\n                    contenteditable="true"\n                    (click)="$event.preventDefault();"\n                    user-select= "auto"\n                    scroll="true"\n                    >\n                    </ion-textarea>\n                    \n                  </ion-item>\n                </ion-toolbar>\n            </ion-footer>\n        </form>\n    </div> \n\n    \n    <div>\n       <ion-footer>\n            <ion-row align-items-start align-items-baseline>\n                    <ion-col><img class="BragIcon" src="assets/imgs/RingaIcon.png"/></ion-col>\n                        <ion-col><ion-icon class="bottomIcon" name="call"></ion-icon></ion-col>\n                              <ion-col><ion-icon class="bottomIcon" name="mail"></ion-icon></ion-col>\n                         <ion-col><ion-icon class="bottomIcon" name="alarm"></ion-icon></ion-col>\n                     <ion-col><ion-icon class="bottomIcon" name="pin"></ion-icon></ion-col>\n                 <ion-col><ion-icon class="bottomIcon" name="share"></ion-icon></ion-col>\n             \n           </ion-row>\n        </ion-footer>\n      </div>\n  \n  </ion-content>'/*ion-inline-end:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\feedback\feedback.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], FeedbackPage);
    return FeedbackPage;
}());

//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ItemdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ItemdetailsPage = /** @class */ (function () {
    function ItemdetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ItemdetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ItemdetailsPage');
    };
    ItemdetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-itemdetails',template:/*ion-inline-start:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\itemdetails\itemdetails.html"*/'<!--\n  Generated template for the ItemdetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>itemdetails</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\itemdetails\itemdetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], ItemdetailsPage);
    return ItemdetailsPage;
}());

//# sourceMappingURL=itemdetails.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailmodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MailmodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MailmodalPage = /** @class */ (function () {
    function MailmodalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MailmodalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MailmodalPage');
    };
    MailmodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mailmodal',template:/*ion-inline-start:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\mailmodal\mailmodal.html"*/'<!--\n  Generated template for the MailmodalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>mailmodal</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\mailmodal\mailmodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], MailmodalPage);
    return MailmodalPage;
}());

//# sourceMappingURL=mailmodal.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QchatsetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the QchatsetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QchatsetPage = /** @class */ (function () {
    function QchatsetPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    QchatsetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QchatsetPage');
    };
    QchatsetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-qchatset',template:/*ion-inline-start:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\qchatset\qchatset.html"*/'<!--\n  Generated template for the QchatsetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>qchatset</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\qchatset\qchatset.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], QchatsetPage);
    return QchatsetPage;
}());

//# sourceMappingURL=qchatset.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QchatvPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the QchatvPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QchatvPage = /** @class */ (function () {
    function QchatvPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    QchatvPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QchatvPage');
    };
    QchatvPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-qchatv',template:/*ion-inline-start:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\qchatv\qchatv.html"*/'<!--\n  Generated template for the QchatvPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>qchatv</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\qchatv\qchatv.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], QchatvPage);
    return QchatvPage;
}());

//# sourceMappingURL=qchatv.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(318);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_brag_brag__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_photo_photo__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_android_permissions__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_calendar__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_call_number__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_clipboard__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_crop__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_email_composer__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_file__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_file_chooser__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_file_opener__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_file_path__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_base64__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_file_picker__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_file_transfer__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_image_picker__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_keyboard__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_social_sharing__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_splash_screen__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_status_bar__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_storage__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ionic_img_viewer__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__directives_directives_module__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_attached_attached__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_brag_brag__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_bragpost_bragpost__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_bragprofile_bragprofile__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_bragset_bragset__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_bragv_bragv__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_bvratings_bvratings__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_cal_add_event_cal_add_event__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_call_call__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_catalogs_catalogs__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_catalogsitem_catalogsitem__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_catalogsv_catalogsv__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_chatroom_chatroom__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_contact_contact__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_cookies_cookies__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_email_email__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_fdback_fdback__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_feedback_feedback__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_feedbackv_feedbackv__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_focus_focus__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_form_sample_form_sample__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_friends_friends__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_giftbrag_giftbrag__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_google_google__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_home_home__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_itemdetails_itemdetails__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pages_join_join__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_login_login__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pages_mailmodal_mailmodal__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__pages_main_main__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_mystatus_mystatus__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__pages_priv_priv__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__pages_qchat_qchat__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__pages_qchatset_qchatset__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__pages_qchatv_qchatv__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__pages_ratings_ratings__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__pages_ringacalendar_ringacalendar__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__pages_ringamail_ringamail__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__pages_tos_tos__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__pages_vision_vision__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__pages_w3w_w3w__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

 // don't forget to import HttpModule in app.module.ts








































































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_57__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_60__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_59__pages_join_join__["a" /* JoinPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_cookies_cookies__["a" /* CookiesPage */],
                __WEBPACK_IMPORTED_MODULE_64__pages_priv_priv__["a" /* PrivPage */],
                __WEBPACK_IMPORTED_MODULE_71__pages_tos_tos__["a" /* TosPage */],
                __WEBPACK_IMPORTED_MODULE_62__pages_main_main__["a" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_65__pages_qchat_qchat__["a" /* QChatPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_chatroom_chatroom__["a" /* ChatroomPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_brag_brag__["a" /* BragPage */],
                __WEBPACK_IMPORTED_MODULE_63__pages_mystatus_mystatus__["a" /* MyStatusPage */],
                __WEBPACK_IMPORTED_MODULE_55__pages_giftbrag_giftbrag__["a" /* GiftBragPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_catalogs_catalogs__["a" /* CatalogsPage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_feedbackv_feedbackv__["a" /* FeedbackvPage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_focus_focus__["a" /* FocusPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_bragprofile_bragprofile__["a" /* BragProfilePage */],
                __WEBPACK_IMPORTED_MODULE_68__pages_ratings_ratings__["a" /* RatingsPage */],
                __WEBPACK_IMPORTED_MODULE_53__pages_form_sample_form_sample__["a" /* FormSamplePage */],
                __WEBPACK_IMPORTED_MODULE_58__pages_itemdetails_itemdetails__["a" /* ItemdetailsPage */],
                __WEBPACK_IMPORTED_MODULE_61__pages_mailmodal_mailmodal__["a" /* MailmodalPage */],
                __WEBPACK_IMPORTED_MODULE_67__pages_qchatv_qchatv__["a" /* QchatvPage */],
                __WEBPACK_IMPORTED_MODULE_66__pages_qchatset_qchatset__["a" /* QchatsetPage */],
                __WEBPACK_IMPORTED_MODULE_73__pages_w3w_w3w__["a" /* W3wPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_email_email__["a" /* EmailPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_google_google__["a" /* GooglePage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_friends_friends__["a" /* FriendsPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_catalogsitem_catalogsitem__["a" /* CatalogsitemPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_bvratings_bvratings__["a" /* BvratingsPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_bragv_bragv__["a" /* BragVPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_bragset_bragset__["a" /* BragsetPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_call_call__["a" /* CallPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_feedback_feedback__["a" /* FeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_bragpost_bragpost__["a" /* BragpostPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_70__pages_ringamail_ringamail__["a" /* RingamailPage */],
                __WEBPACK_IMPORTED_MODULE_72__pages_vision_vision__["a" /* VisionPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_catalogsv_catalogsv__["a" /* CatalogsvPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_attached_attached__["a" /* AttachedPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_fdback_fdback__["a" /* FdbackPage */],
                __WEBPACK_IMPORTED_MODULE_69__pages_ringacalendar_ringacalendar__["a" /* RingacalendarPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_cal_add_event_cal_add_event__["a" /* CalAddEventPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_31_ionic_img_viewer__["a" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_32__directives_directives_module__["a" /* DirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_30_ionic_angular__["o" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/attached/attached.module#AttachedPageModule', name: 'AttachedPage', segment: 'attached', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/brag/brag.module#BragPageModule', name: 'BragPage', segment: 'brag', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bragprofile/bragprofile.module#BragprofilePageModule', name: 'BragProfilePage', segment: 'bragprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bragset/bragset.module#BragsetPageModule', name: 'BragsetPage', segment: 'bragset', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bragv/bragv.module#BragvPageModule', name: 'BragVPage', segment: 'bragv', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bvratings/bvratings.module#BvratingsPageModule', name: 'BvratingsPage', segment: 'bvratings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cal-add-event/cal-add-event.module#CalAddEventPageModule', name: 'CalAddEventPage', segment: 'cal-add-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/call/call.module#CallPageModule', name: 'CallPage', segment: 'call', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/catalogs/catalogs.module#CatalogsPageModule', name: 'CatalogsPage', segment: 'catalogs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/catalogsitem/catalogsitem.module#CatalogsitemPageModule', name: 'CatalogsitemPage', segment: 'catalogsitem', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/catalogsv/catalogsv.module#CatalogsvPageModule', name: 'CatalogsvPage', segment: 'catalogsv', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chatroom/chatroom.module#ChatroomPageModule', name: 'ChatroomPage', segment: 'chatroom', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bragpost/bragpost.module#BragpostPageModule', name: 'BragpostPage', segment: 'bragpost', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cookies/cookies.module#CookiesPageModule', name: 'CookiesPage', segment: 'cookies', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fdback/fdback.module#FdbackPageModule', name: 'FdbackPage', segment: 'fdback', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/email/email.module#EmailPageModule', name: 'EmailPage', segment: 'email', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/feedback/feedback.module#FeedbackPageModule', name: 'FeedbackPage', segment: 'feedback', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/feedbackv/feedbackv.module#FeedbackvPageModule', name: 'FeedbackvPage', segment: 'feedbackv', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/focus/focus.module#FocusPageModule', name: 'FocusPage', segment: 'focus', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/form-sample/form-sample.module#FormSamplePageModule', name: 'FormSamplePage', segment: 'form-sample', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/friends/friends.module#FriendsPageModule', name: 'FriendsPage', segment: 'friends', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/giftbrag/giftbrag.module#GiftBragPageModule', name: 'GiftBragPage', segment: 'giftbrag', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/google/google.module#GooglePageModule', name: 'GooglePage', segment: 'google', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/itemdetails/itemdetails.module#ItemdetailsPageModule', name: 'ItemdetailsPage', segment: 'itemdetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/join/join.module#JoinPageModule', name: 'JoinPage', segment: 'join', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mailmodal/mailmodal.module#MailmodalPageModule', name: 'MailmodalPage', segment: 'mailmodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mystatus/mystatus.module#MystatusPageModule', name: 'MyStatusPage', segment: 'mystatus', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main/main.module#MainPageModule', name: 'MainPage', segment: 'main', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/priv/priv.module#PrivPageModule', name: 'PrivPage', segment: 'priv', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/qchat/qchat.module#QChatPageModule', name: 'QChatPage', segment: 'qchat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/qchatset/qchatset.module#QchatsetPageModule', name: 'QchatsetPage', segment: 'qchatset', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/qchatv/qchatv.module#QchatvPageModule', name: 'QchatvPage', segment: 'qchatv', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ratings/ratings.module#RatingsPageModule', name: 'RatingsPage', segment: 'ratings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ringamail/ringamail.module#RingamailPageModule', name: 'RingamailPage', segment: 'ringamail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ringacalendar/ringacalendar.module#RingacalendarPageModule', name: 'RingacalendarPage', segment: 'ringacalendar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tos/tos.module#TosPageModule', name: 'TosPage', segment: 'tos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/w3w/w3w.module#W3wPageModule', name: 'W3wPage', segment: 'w3w', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vision/vision.module#VisionPageModule', name: 'VisionPage', segment: 'vision', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_29__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_30_ionic_angular__["m" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_57__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_60__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_59__pages_join_join__["a" /* JoinPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_cookies_cookies__["a" /* CookiesPage */],
                __WEBPACK_IMPORTED_MODULE_64__pages_priv_priv__["a" /* PrivPage */],
                __WEBPACK_IMPORTED_MODULE_71__pages_tos_tos__["a" /* TosPage */],
                __WEBPACK_IMPORTED_MODULE_62__pages_main_main__["a" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_65__pages_qchat_qchat__["a" /* QChatPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_chatroom_chatroom__["a" /* ChatroomPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_brag_brag__["a" /* BragPage */],
                __WEBPACK_IMPORTED_MODULE_63__pages_mystatus_mystatus__["a" /* MyStatusPage */],
                __WEBPACK_IMPORTED_MODULE_55__pages_giftbrag_giftbrag__["a" /* GiftBragPage */],
                __WEBPACK_IMPORTED_MODULE_63__pages_mystatus_mystatus__["a" /* MyStatusPage */],
                __WEBPACK_IMPORTED_MODULE_55__pages_giftbrag_giftbrag__["a" /* GiftBragPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_catalogs_catalogs__["a" /* CatalogsPage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_feedbackv_feedbackv__["a" /* FeedbackvPage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_focus_focus__["a" /* FocusPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_bragprofile_bragprofile__["a" /* BragProfilePage */],
                __WEBPACK_IMPORTED_MODULE_68__pages_ratings_ratings__["a" /* RatingsPage */],
                __WEBPACK_IMPORTED_MODULE_53__pages_form_sample_form_sample__["a" /* FormSamplePage */],
                __WEBPACK_IMPORTED_MODULE_58__pages_itemdetails_itemdetails__["a" /* ItemdetailsPage */],
                __WEBPACK_IMPORTED_MODULE_61__pages_mailmodal_mailmodal__["a" /* MailmodalPage */],
                __WEBPACK_IMPORTED_MODULE_67__pages_qchatv_qchatv__["a" /* QchatvPage */],
                __WEBPACK_IMPORTED_MODULE_66__pages_qchatset_qchatset__["a" /* QchatsetPage */],
                __WEBPACK_IMPORTED_MODULE_73__pages_w3w_w3w__["a" /* W3wPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_email_email__["a" /* EmailPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_google_google__["a" /* GooglePage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_friends_friends__["a" /* FriendsPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_catalogsitem_catalogsitem__["a" /* CatalogsitemPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_bvratings_bvratings__["a" /* BvratingsPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_bragv_bragv__["a" /* BragVPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_bragset_bragset__["a" /* BragsetPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_call_call__["a" /* CallPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_feedback_feedback__["a" /* FeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_bragpost_bragpost__["a" /* BragpostPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_70__pages_ringamail_ringamail__["a" /* RingamailPage */],
                __WEBPACK_IMPORTED_MODULE_72__pages_vision_vision__["a" /* VisionPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_catalogsv_catalogsv__["a" /* CatalogsvPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_attached_attached__["a" /* AttachedPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_fdback_fdback__["a" /* FdbackPage */],
                __WEBPACK_IMPORTED_MODULE_69__pages_ringacalendar_ringacalendar__["a" /* RingacalendarPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_cal_add_event_cal_add_event__["a" /* CalAddEventPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_6__providers_photo_photo__["a" /* PhotoProvider */],
                __WEBPACK_IMPORTED_MODULE_5__providers_brag_brag__["a" /* BragProvider */],
                __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_file_transfer__["a" /* FileTransfer */],
                // FileUploadOptions,
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_file_transfer__["b" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_file_chooser__["a" /* FileChooser */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_file_opener__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_base64__["a" /* Base64 */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_file_transfer__["b" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_file_picker__["a" /* IOSFilePicker */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_crop__["a" /* Crop */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_clipboard__["a" /* Clipboard */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_calendar__["a" /* Calendar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_android_permissions__["a" /* AndroidPermissions */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_30_ionic_angular__["n" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BragProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { share } from 'rxjs/operator/share';

var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var BragProvider = /** @class */ (function () {
    function BragProvider(http) {
        this.http = http;
        this.bragsUrl = 'http://www.ringa.com/catalogs'; // URL to web api
    }
    //  Remember to implement =>private messageService: MessageService
    /** GET brags from the server */
    BragProvider.prototype.getBrags = function () {
        var _this = this;
        return this.http.get(this.bragsUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (brags) { return _this.log('fetched brags'); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('getBrags', [])));
    };
    /** GET brag by id. Return `undefined` when id not found */
    BragProvider.prototype.getBragNo404 = function (id) {
        var _this = this;
        var url = this.bragsUrl + "/?id=" + id;
        return this.http.get(url)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (brags) { return brags[0]; }), // returns a {0|1} element array
        Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (h) {
            var outcome = h ? "fetched" : "did not find";
            _this.log(outcome + " brag id=" + id);
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError("getBrag id=" + id)));
    };
    /** GET brag by id. Will 404 if id not found */
    BragProvider.prototype.getBrag = function (id) {
        var _this = this;
        var url = this.bragsUrl + "/" + id;
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (_) { return _this.log("fetched brag id=" + id); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError("getBrag id=" + id)));
    };
    /* GET brags whose name contains search term */
    BragProvider.prototype.searchBrags = function (term) {
        var _this = this;
        if (!term.trim()) {
            // if not search term, return empty brag array.
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])([]);
        }
        return this.http.get(this.bragsUrl + "/?name=" + term).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (_) { return _this.log("found brags matching \"" + term + "\""); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('searchUsers', [])));
    };
    //////// Save methods //////////
    /** POST: add a new brag to the server */
    BragProvider.prototype.addBrag = function (brag) {
        var _this = this;
        return this.http.post(this.bragsUrl, brag, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (brag) { return _this.log("added brag w/ id=" + brag.id); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('addBrag')));
    };
    /** DELETE: delete the brag from the server */
    BragProvider.prototype.deleteBrag = function (brag) {
        var _this = this;
        var id = typeof brag === 'number' ? brag : brag.id;
        var url = this.bragsUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (_) { return _this.log("deleted brag id=" + id); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('deleteBrag')));
    };
    /** PUT: update the brag on the server */
    BragProvider.prototype.updateBrag = function (brag) {
        var _this = this;
        return this.http.put(this.bragsUrl, brag, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (_) { return _this.log("updated brag id=" + brag.id); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError('updateBrag')));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    BragProvider.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for brag consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(result);
        };
    };
    /** Log a HeroService message with the MessageService */
    BragProvider.prototype.log = function (message) {
        // console.log('implentation pending');
        // this.messageService.add(`HeroService: ${message}`);
    };
    BragProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], BragProvider);
    return BragProvider;
}());

//# sourceMappingURL=brag.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_main_main__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_brag_brag__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_qchat_qchat__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, popoverCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.popoverCtrl = popoverCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        // public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private translate: TranslateService, public popoverCtrl: PopoverController) {
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_main_main__["a" /* MainPage */] },
            { title: 'Brag', component: __WEBPACK_IMPORTED_MODULE_6__pages_brag_brag__["a" /* BragPage */] },
            { title: 'QChat', component: __WEBPACK_IMPORTED_MODULE_7__pages_qchat_qchat__["a" /* QChatPage */] },
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.qChat = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\app\app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n      <ion-toolbar>\n        <!-- <ion-title>Ringa</ion-title> -->\n        <!-- <ion-title class="custTitle">Ringa</ion-title> -->\n      </ion-toolbar>\n    </ion-header>\n  \n    <ion-content>\n\n        <!-- https://forum.ionicframework.com/t/dynamically-change-navbar-color/46280/9 -->\n      <ion-list>\n        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          {{p.title}}\n        </button>\n      </ion-list>\n\n    \n      <div class="Mextraitems">\n          <ion-row>\n                  <ion-col>\n                   <h1 class="Mextrahead">Ringa</h1>\n                  </ion-col>\n               </ion-row>\n\n               <ion-row>\n                  <ion-col>\n                <img src="assets/imgs/RingaIcon.png" class="DPframe"/>\n                  </ion-col>\n                </ion-row>\n          </div>\n        \n      \n    </ion-content>\n  \n  </ion-menu>\n  \n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* PopoverController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BragPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__catalogs_catalogs__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feedbackv_feedbackv__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__focus_focus__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__giftbrag_giftbrag__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mystatus_mystatus__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bragprofile_bragprofile__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ratings_ratings__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__form_sample_form_sample__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__bragset_bragset__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the BragPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BragPage = /** @class */ (function () {
    function BragPage(navCtrl, navParams, modalCtrl, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.popoverCtrl = popoverCtrl;
        this.footerScrollConfig = { cssProperty: 'margin-bottom', maxValue: undefined };
        this.headerScrollConfig = { cssProperty: 'margin-top', maxValue: 44 };
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__focus_focus__["a" /* FocusPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_6__mystatus_mystatus__["a" /* MyStatusPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__catalogs_catalogs__["a" /* CatalogsPage */];
        this.hide = true;
    }
    //   // child to parent communication
    //   events.subscribe(click()
    //   console.log
    //   this.events.publish;
    // }
    // LoadFeedbackPage
    BragPage.prototype.FeedbackvPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__feedbackv_feedbackv__["a" /* FeedbackvPage */]);
        //this.navCtrl.setRoot(ScrollHideDirective);
    };
    // BragProfilePage
    BragPage.prototype.BragProfilePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__bragprofile_bragprofile__["a" /* BragProfilePage */]);
    };
    // FormSamplePage
    BragPage.prototype.FormSamplePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__form_sample_form_sample__["a" /* FormSamplePage */]);
    };
    // Load GiftBragPage
    BragPage.prototype.GiftBragPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__giftbrag_giftbrag__["a" /* GiftBragPage */]);
    };
    BragPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BragPage');
    };
    BragPage.prototype.ngIfCtrl = function () {
        this.hide = !this.hide;
    };
    // presentProfileModal() {
    //   let profileModal = this.modalCtrl.create(BragProfilePage, { userId: 8675309 });
    //   profileModal.present();
    // }
    BragPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_8__ratings_ratings__["a" /* RatingsPage */]);
        popover.present({
            ev: myEvent
        });
    };
    BragPage.prototype.pop = function () {
        this.navCtrl.pop();
    };
    BragPage.prototype.presentPopover2 = function (myBragset) {
        var pop = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_10__bragset_bragset__["a" /* BragsetPage */]);
        var ev = {
            target: {
                getBoundingClientRect: function () {
                    return {
                        top: '100'
                    };
                }
            }
        };
        pop.present({ ev: ev });
    };
    BragPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-brag',template:/*ion-inline-start:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\brag\brag.html"*/'<ion-header no-border [scrollHide]="headerScrollConfig" [scrollContent]="pageContent">\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n        </button>\n          <ion-title class="custTitle">My Brags</ion-title>\n            <ion-buttons start>\n          <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="help-circle"></ion-icon>\n        <!-- (click)="ngIfCtrl()" -->\n          </button>\n            </ion-buttons>\n              \n      <ion-buttons end (click)="presentPopover2($event)">\n        <button ion-button icon-only>\n          <ion-icon name="more"></ion-icon>\n            </button>\n              </ion-buttons>             \n            </ion-navbar>\n          </ion-header>\n\n<ion-content #pageContent fullscreen>\n\n\n  <ion-tabs tabsPlacement=bottom selectedIndex="1" class="tabs">\n    <ion-tab [root]="tab1Root" tabTitle="Focus"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="MyStatus"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Catalogs"></ion-tab>\n    </ion-tabs>\n    \n    <!-- to choose which tab shows first on Brag open, qualify tabs -->\n    <!-- selectedIndex="1" class="tabs"  -->\n    \n    <!-- To hide tabs on subpages, qualify each tab line -->\n    <!-- tabsHideOnSubPages="true" -->\n\n    \n<div>\n    <ion-row class="firstcol" *ngIf="hide" padding-top="20px">\n\n        <ion-col><ion-badge item-start color="primary" class="badge">260k</ion-badge></ion-col>\n\n           <ion-col style="line-height:15px;"><img class="wTw" src="assets/imgs/w3wApple.jpg"/><br>\n              <label class="Mstatus">Exact.Loc</label></ion-col>\n\n              <ion-col style="line-height:15px;"><ion-icon name="checkmark-circle"></ion-icon><br>\n                <label class="Mstatus">Endorsements</label></ion-col>\n\n                <ion-col style="line-height:15px;" col-4  (click)="presentPopover($event)"><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><br>\n            <label class="Mstatus">Chk.Rating</label></ion-col>\n           \n        <ion-col style="line-height:15px;"><ion-icon name="pin"></ion-icon><br>\n    <label class="Mstatus">Loc.Pin</label></ion-col>\n    \n  </ion-row>\n</div>\n\n\n<div> \n  <ion-row class="secdcol" *ngIf="hide">\n    <ion-col (click)="BragProfilePage()"><ion-icon name="contact"></ion-icon><br><label>Profile</label></ion-col>\n            <ion-col (click)="FormSamplePage()"><ion-icon name="megaphone"></ion-icon><br><label>Broadcast</label></ion-col>\n          <ion-col (click)="FeedbackvPage()"><ion-icon name="sync"></ion-icon><br><label>Feedback</label></ion-col>\n      <ion-col (click)="GiftBragPage()"><img class="Bragift" src="assets/imgs/GiftBox75.png"/><br><label>Gift.a.Brag</label></ion-col>\n  </ion-row>\n</div>\n\n\n<!-- <super-tabs tabsPlacement=bottom selectedTabIndex="1">\n  <super-tab [tabRoot]="tab1Root" tabTitle="Focus"></super-tab>\n  <super-tab [tabRoot]="tab2Root" tabTitle="MyStatus"></super-tab>\n  <super-tab [tabRoot]="tab3Root" tabTitle="Catalogs"></super-tab>\n</super-tabs> -->\n\n<!-- <super-tabs>\n  <super-tab [root]="FocusPage" title="First page"></super-tab>\n  <super-tab [root]="MyStatusPage" title="Second page"></super-tab>\n  <super-tab [root]="CatalogsPage" title="Third page"></super-tab>\n</super-tabs> -->\n\n<!-- https://github.com/msolima/horizontalIonic2Tabs -->\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\brag\brag.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* PopoverController */]])
    ], BragPage);
    return BragPage;
}());

//# sourceMappingURL=brag.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgeValidator; });
var AgeValidator = /** @class */ (function () {
    function AgeValidator() {
    }
    AgeValidator.isValid = function (control) {
        if (isNaN(control.value)) {
            return {
                "not a number": true
            };
        }
        if (control.value % 1 !== 0) {
            return {
                "not a whole number": true
            };
        }
        if (control.value < 18) {
            return {
                "too young": true
            };
        }
        if (control.value > 120) {
            return {
                "not realistic": true
            };
        }
        return null;
    };
    return AgeValidator;
}());

//# sourceMappingURL=age.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsernameValidator; });
var UsernameValidator = /** @class */ (function () {
    function UsernameValidator() {
    }
    UsernameValidator.checkUsername = function (control) {
        return new Promise(function (resolve) {
            //Fake a slow response from server
            setTimeout(function () {
                if (control.value.toLowerCase() === "greg") {
                    resolve({
                        "username taken": true
                    });
                }
                else {
                    resolve(null);
                }
            }, 2000);
        });
    };
    return UsernameValidator;
}());

//# sourceMappingURL=username.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModel; });
var LoginModel = /** @class */ (function () {
    function LoginModel() {
    }
    return LoginModel;
}());

//# sourceMappingURL=login.model.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterModel; });
var RegisterModel = /** @class */ (function () {
    function RegisterModel() {
    }
    return RegisterModel;
}());

//# sourceMappingURL=register.model.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scroll_hide_scroll_hide__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__autosize_autosize__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__keyboard_attach_keyboard_attach__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__emailvalid_emailvalid__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blank_attr_blank_attr__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__autoresize_autoresize__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__swipe_listener_swipe_listener__ = __webpack_require__(485);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DirectivesModule = /** @class */ (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__scroll_hide_scroll_hide__["a" /* ScrollHideDirective */],
                __WEBPACK_IMPORTED_MODULE_2__autosize_autosize__["a" /* AutosizeDirective */],
                __WEBPACK_IMPORTED_MODULE_3__keyboard_attach_keyboard_attach__["a" /* KeyboardAttachDirective */],
                __WEBPACK_IMPORTED_MODULE_4__emailvalid_emailvalid__["a" /* EmailvalidDirective */],
                __WEBPACK_IMPORTED_MODULE_5__blank_attr_blank_attr__["a" /* BlankAttrDirective */],
                __WEBPACK_IMPORTED_MODULE_6__autoresize_autoresize__["a" /* AutoresizeDirective */],
                __WEBPACK_IMPORTED_MODULE_7__swipe_listener_swipe_listener__["a" /* SwipeListenerDirective */]
            ],
            imports: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__scroll_hide_scroll_hide__["a" /* ScrollHideDirective */],
                __WEBPACK_IMPORTED_MODULE_2__autosize_autosize__["a" /* AutosizeDirective */],
                __WEBPACK_IMPORTED_MODULE_3__keyboard_attach_keyboard_attach__["a" /* KeyboardAttachDirective */],
                __WEBPACK_IMPORTED_MODULE_4__emailvalid_emailvalid__["a" /* EmailvalidDirective */],
                __WEBPACK_IMPORTED_MODULE_5__blank_attr_blank_attr__["a" /* BlankAttrDirective */],
                __WEBPACK_IMPORTED_MODULE_6__autoresize_autoresize__["a" /* AutoresizeDirective */],
                __WEBPACK_IMPORTED_MODULE_7__swipe_listener_swipe_listener__["a" /* SwipeListenerDirective */]
            ]
        })
    ], DirectivesModule);
    return DirectivesModule;
}());

//# sourceMappingURL=directives.module.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollHideDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScrollHideDirective = /** @class */ (function () {
    function ScrollHideDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.lastValue = 0;
    }
    ScrollHideDirective.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.scrollContent && this.config) {
            this.scrollContent.ionScrollStart.subscribe(function (ev) {
                _this.contentHeight = _this.scrollContent.getScrollElement().offsetHeight;
                _this.scrollHeight = _this.scrollContent.getScrollElement().scrollHeight;
                if (_this.config.maxValue === undefined) {
                    _this.config.maxValue = _this.element.nativeElement.offsetHeight;
                }
                _this.lastScrollPosition = ev.scrollTop;
            });
            this.scrollContent.ionScroll.subscribe(function (ev) { return _this.adjustElementOnScroll(ev); });
            this.scrollContent.ionScrollEnd.subscribe(function (ev) { return _this.adjustElementOnScroll(ev); });
        }
    };
    ScrollHideDirective.prototype.adjustElementOnScroll = function (ev) {
        var _this = this;
        if (ev) {
            ev.domWrite(function () {
                var scrollTop = ev.scrollTop > 0 ? ev.scrollTop : 0;
                var scrolldiff = scrollTop - _this.lastScrollPosition;
                _this.lastScrollPosition = scrollTop;
                var newValue = _this.lastValue + scrolldiff;
                newValue = Math.max(0, Math.min(newValue, _this.config.maxValue));
                _this.renderer.setStyle(_this.element.nativeElement, _this.config.cssProperty, "-" + newValue + "px");
                _this.lastValue = newValue;
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])('scrollHide'),
        __metadata("design:type", Object)
    ], ScrollHideDirective.prototype, "config", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])('scrollContent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* Content */])
    ], ScrollHideDirective.prototype, "scrollContent", void 0);
    ScrollHideDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["s" /* Directive */])({
            selector: '[scrollHide]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["W" /* Renderer2 */]])
    ], ScrollHideDirective);
    return ScrollHideDirective;
}());

//# sourceMappingURL=scroll-hide.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutosizeDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AutosizeDirective = /** @class */ (function () {
    function AutosizeDirective(element) {
        this.element = element;
    }
    AutosizeDirective.prototype.onInput = function (textArea) {
        this.adjust();
    };
    AutosizeDirective.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.adjust(); }, 0);
    };
    AutosizeDirective.prototype.adjust = function () {
        var textArea = this.element.nativeElement.getElementsByTagName('textarea')[0];
        textArea.style.height = 'auto';
        if (textArea.scrollHeight < 100) {
            textArea.style.height = textArea.scrollHeight + "px";
            textArea.style.overflowY = 'hidden';
        }
        else {
            textArea.style.height = "250px";
            textArea.style.overflowY = 'auto';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('input', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [HTMLTextAreaElement]),
        __metadata("design:returntype", void 0)
    ], AutosizeDirective.prototype, "onInput", null);
    AutosizeDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: 'ion-textarea[autosize]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], AutosizeDirective);
    return AutosizeDirective;
}());

//# sourceMappingURL=autosize.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyboardAttachDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_keyboard__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * @name KeyboardAttachDirective
 * @source https://gist.github.com/Manduro/bc121fd39f21558df2a952b39e907754
 * @description
 * The `keyboardAttach` directive will cause an element to float above the
 * keyboard when the keyboard shows. Currently only supports the `ion-footer` element.
 *
 * ### Notes
 * - This directive requires [Ionic Native](https://github.com/driftyco/ionic-native)
 * and the [Ionic Keyboard Plugin](https://github.com/driftyco/ionic-plugin-keyboard).
 * - Currently only tested to work on iOS.
 * - If there is an input in your footer, you will need to set
 *   `Keyboard.disableScroll(true)`.
 *
 * @usage
 *
 * ```html
 * <ion-content #content>
 * </ion-content>
 *
 * <ion-footer [keyboardAttach]="content">
 *   <ion-toolbar>
 *     <ion-item>
 *       <ion-input></ion-input>
 *     </ion-item>
 *   </ion-toolbar>
 * </ion-footer>
 * ```
 */
var KeyboardAttachDirective = /** @class */ (function () {
    function KeyboardAttachDirective(elementRef, keyboard, platform) {
        this.elementRef = elementRef;
        this.keyboard = keyboard;
        this.platform = platform;
    }
    KeyboardAttachDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.platform.is('cordova') && this.platform.is('ios')) {
            this.onShowSubscription = this.keyboard.onKeyboardShow().subscribe(function (e) { return _this.onShow(e); });
            this.onHideSubscription = this.keyboard.onKeyboardHide().subscribe(function () { return _this.onHide(); });
        }
    };
    KeyboardAttachDirective.prototype.ngOnDestroy = function () {
        if (this.onShowSubscription) {
            this.onShowSubscription.unsubscribe();
        }
        if (this.onHideSubscription) {
            this.onHideSubscription.unsubscribe();
        }
    };
    KeyboardAttachDirective.prototype.onShow = function (e) {
        var keyboardHeight = e.keyboardHeight || (e.detail && e.detail.keyboardHeight);
        this.setElementPosition(keyboardHeight);
    };
    ;
    KeyboardAttachDirective.prototype.onHide = function () {
        this.setElementPosition(0);
    };
    ;
    KeyboardAttachDirective.prototype.setElementPosition = function (pixels) {
        this.elementRef.nativeElement.style.paddingBottom = pixels + 'px';
        this.content.resize();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('keyboardAttach'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Content */])
    ], KeyboardAttachDirective.prototype, "content", void 0);
    KeyboardAttachDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[keyboardAttach]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["w" /* Platform */]])
    ], KeyboardAttachDirective);
    return KeyboardAttachDirective;
}());

//# sourceMappingURL=keyboard-attach.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailvalidDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the EmailvalidDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
var EmailvalidDirective = /** @class */ (function () {
    function EmailvalidDirective() {
        console.log('Hello EmailvalidDirective Directive');
    }
    EmailvalidDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[emailvalid]' // Attribute selector
        }),
        __metadata("design:paramtypes", [])
    ], EmailvalidDirective);
    return EmailvalidDirective;
}());

//# sourceMappingURL=emailvalid.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlankAttrDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlankAttrDirective = /** @class */ (function () {
    function BlankAttrDirective(eref) {
        this._elem = eref.nativeElement;
    }
    BlankAttrDirective.prototype.ngOnChanges = function (changes) {
        var change = changes['attrName'];
        var pv = change.previousValue;
        if (pv) {
            this._elem.removeAttribute(pv);
        }
        this._elem.setAttribute(change.currentValue, '');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('blankAttr'),
        __metadata("design:type", String)
    ], BlankAttrDirective.prototype, "attrName", void 0);
    BlankAttrDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[blankAttr]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], BlankAttrDirective);
    return BlankAttrDirective;
}());

//# sourceMappingURL=blank-attr.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoresizeDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
// An autoresize directive that works with ion-textarea
// Usage example: <ion-textarea autoresize></ion-textarea>
// Based on https://www.npmjs.com/package/angular2-autosize
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Jhix June 17 Thanks!
// https://forum.ionicframework.com/t/solved-ion-textarea-resize-height-dynamically/80885/7

var AutoresizeDirective = /** @class */ (function () {
    function AutoresizeDirective(element) {
        var _this = this;
        this.element = element;
        this.onInput = function (textArea) {
            _this.adjust();
        };
        this.adjust = function () {
            var ta = _this.element.nativeElement.querySelector("textarea");
            if (ta !== undefined && ta !== null) {
                ta.style.overflow = "hidden";
                ta.style.height = "auto";
                ta.style.height = ta.scrollHeight + "px";
            }
        };
    }
    AutoresizeDirective.prototype.ngOnInit = function () {
        var _this = this;
        var waitThenAdjust = function (trial) {
            if (trial > 10) {
                // Give up.
                return;
            }
            var ta = _this.element.nativeElement.querySelector("textarea");
            if (ta !== undefined && ta !== null) {
                _this.adjust();
            }
            else {
                setTimeout(function () {
                    waitThenAdjust(trial + 1);
                }, 0);
            }
        };
        // Wait for the textarea to properly exist in the DOM, then adjust it.
        waitThenAdjust(1);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])("input", ["$event.target"]),
        __metadata("design:type", Object)
    ], AutoresizeDirective.prototype, "onInput", void 0);
    AutoresizeDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: "ion-textarea[autoresize]" // Attribute selector
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], AutoresizeDirective);
    return AutoresizeDirective;
}());

//# sourceMappingURL=autoresize.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwipeListenerDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_gestures_gesture__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SwipeListenerDirective = /** @class */ (function () {
    function SwipeListenerDirective(el, events) {
        this.events = events;
        this.el = el.nativeElement;
        this.events = events;
    }
    SwipeListenerDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.swipeGesture = new __WEBPACK_IMPORTED_MODULE_1_ionic_angular_gestures_gesture__["a" /* Gesture */](this.el, {
            recognizers: [
                [Hammer.Swipe, { direction: Hammer.DIRECTION_ALL }]
            ]
        });
        this.swipeGesture.listen();
        this.swipeGesture.on('swipe', function (e) {
            // Publish event when swipe is detected.
            _this.events.publish('event:swipe');
        });
    };
    SwipeListenerDirective.prototype.ngOnDestroy = function () {
        this.swipeGesture.destroy();
    };
    SwipeListenerDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["s" /* Directive */])({
            selector: '[swipe-listener]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* Events */]])
    ], SwipeListenerDirective);
    return SwipeListenerDirective;
}());

//# sourceMappingURL=swipe-listener.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_photo_photo__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__qchat_qchat__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__brag_brag__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__giftbrag_giftbrag__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__ = __webpack_require__(258);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MainPage = /** @class */ (function () {
    function MainPage(navCtrl, navParams, camera, photoService, storage, socialSharing) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.photoService = photoService;
        this.storage = storage;
        this.socialSharing = socialSharing;
        this.show = false;
        this.buttonClicked = false; //Whatever you want to initialise it as
    }
    MainPage.prototype.ngOnInit = function () {
        this.photoService.loadSaved();
    };
    // Load GiftBragPage
    MainPage.prototype.GiftBragPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__giftbrag_giftbrag__["a" /* GiftBragPage */]);
    };
    MainPage.prototype.Brag = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__brag_brag__["a" /* BragPage */]);
    };
    MainPage.prototype.qChat = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__qchat_qchat__["a" /* QChatPage */]);
    };
    MainPage.prototype.share = function (index) {
        this.socialSharing.share(index.img, null, null, null);
    };
    MainPage.prototype.onButtonClick = function () {
        this.buttonClicked = !this.buttonClicked;
    };
    MainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-main',template:/*ion-inline-start:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\main\main.html"*/'<ion-header>\n  <ion-navbar color="primary" align-title="left">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n        </button>\n          <ion-title class="MaincustTitle">Ringa</ion-title>\n          <ion-buttons start>\n              <button ion-button icon-only (click)="show = !show">\n            <ion-icon name="search"></ion-icon>\n          </button>\n          <button ion-button icon-only (click)="onButtonClick()">\n              <ion-icon name="help-circle"></ion-icon>\n              <!-- (click)="ngIfCtrl()" -->\n                </button>\n\n                <!-- https://ionicthemes.com/tutorials/about/ionic2-app-with-socialsharing-and-deeplinking -->\n    <button ion-button icon-only>\n      <ion-icon onclick="window.plugins.socialsharing.share(\'Message only\')" name="share"></ion-icon>\n    </button>\n  </ion-buttons>\n  </ion-navbar>\n</ion-header>\n  \n \n  \n<!-- minimum viable product -->\n  \n  <ion-content padding center class="main">\n\n    <!-- RingAssist1 -->\n      <div class="RingAssist1" *ngIf="buttonClicked"><ion-row>\n          <ion-col>Click to SEARCH or INVITE Others</ion-col>\n      </ion-row></div> \n      \n    <!-- IMAGE VIEWER https://www.npmjs.com/package/ionic-img-viewer -->\n  <!-- Camera -->\n  <div class="zap">\n      \n      \n      <ion-scroll scrollY="true" style="width: 100%; height: 93%;">\n        <ion-grid>\n            \n          <ion-row>\n          <ion-col col-4 *ngFor="let photo of photoService.photos">\n              <img [src]="photo.data" imageViewer />\n              <!-- https://stackoverflow.com/questions/43196990/how-to-zoom-image-inside-ion-scroll -->\n            </ion-col>\n          </ion-row>\n        \n        </ion-grid>\n      </ion-scroll>\n      \n    \n   \n              <ion-fab center bottom position:fixed>\n                  <button ion-fab (click)="photoService.takePicture()">\n                    <ion-icon name="camera"></ion-icon>\n                  </button>\n             </ion-fab>\n        </div>\n \n\n    <!-- RingAssist2 -->\n    <div class="RingAssist2" *ngIf="buttonClicked">\n      \n        <ion-row>\n           <ion-col class="clickSet">Click</ion-col>\n              </ion-row>\n                <br>\n\n                <ion-row style="line-height:5px;">\n              <ion-col (click)="photoService.takePicture()" class="camSet">CAMERA</ion-col>\n          </ion-row>\n          <ion-icon  (click)="photoService.takePicture()" name="camera"  class="camIcon"></ion-icon>\n        <br>\n            <ion-row style="line-height:5px;">\n               <ion-col>to SHOW what you do</ion-col>             \n                  </ion-row>\n                      <br>\n                      <br>\n\n                 <ion-row style="line-height:5px;">\n              <ion-col (click)="Brag()" class="bragSet">Brag</ion-col>\n           </ion-row>\n            <ion-row style="line-height:5px;">\n               <ion-col>to TELL what you do</ion-col>\n                   </ion-row>\n                      <br>\n                      <br>\n    \n                  <ion-row style="line-height:5px;">\n               <ion-col (click)="GiftBragPage()" class="giftBSet">Gift.a.Brag</ion-col>\n            </ion-row>\n              <ion-row style="line-height:5px;">\n                  <ion-col>to SHOWCASE someone else\'s business</ion-col>\n                     </ion-row>\n                     <br>\n                     <br>\n                  \n                    <ion-row>\n                <ion-col (click)="qChat()" style="line-height:5px;" class="chatSet">QChat</ion-col>\n            </ion-row>\n              <ion-row style="line-height:5px;">\n                   <ion-col>to TALK with Friends & Customers</ion-col>\n                       </ion-row>\n\n                             </div>\n          \n  <!-- Search bar -->\n            <ion-searchbar class="searchbar"  *ngIf="show"\n                           [(ngModel)]="myInput"\n                           [showCancelButton]="shouldShowCancel"\n                           (ionInput)="onInput($event)"\n                           (ionCancel)="onCancel($event)">\n            </ion-searchbar>\n  \n<!-- Brag, Gift.a.Brag & QChat          -->\n\n  <div class="options">\n      <ion-row>\n          <ion-col>\n            <img (click)="Brag()" src="assets/imgs/BragIcon.png" class="first"/>\n              </ion-col>\n\n                  <ion-col>\n                      <img (click)="GiftBragPage()" src="assets/imgs/GiftBox75.png" class="second"/>\n                          </ion-col>\n     \n                  <ion-col>\n                <img (click)="qChat()" src="assets/imgs/RingaIcon.png" class="third"/>\n              </ion-col>\n          \n        </ion-row>\n    </div>\n\n    <!-- RingAssist3 -->\n   <div class="RingAssist3"><ion-row *ngIf="buttonClicked">\n        <ion-col text-center>Brag</ion-col>\n        <ion-col text-center>Gift.a.Brag</ion-col>\n        <ion-col text-center>QChat</ion-col>\n    </ion-row></div> \n\n\n  <!-- Bottom extras   -->\n  <div class="extraitems">\n      <ion-row>\n           <h1 class="extrahead">Ringa</h1>\n       </ion-row>\n  </div>\n  \n\n          <!-- Add Toasts ion-iconto announce new joins\n          new focus posts, etc -->\n\n          <!-- Add also LOGOUT -->\n<!--             \n          KiSwahili Ringa=Brag\n          ringa\n1 kt [se] \n1 show off, put on airs.\n2 boast. \n♦ (tde) ringia; (tdk) ringika; (tds) ringisha \n2 kt [e] impregnate. \n♦ (tde) ringia; (tdk) ringika; (tdn) ringana; (tds) ringisha; (tdw) ringwa  -->\n\n\n \n  </ion-content>'/*ion-inline-end:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\main\main.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3__providers_photo_photo__["a" /* PhotoProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], MainPage);
    return MainPage;
}());

//# sourceMappingURL=main.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogsitemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CatalogsitemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CatalogsitemPage = /** @class */ (function () {
    function CatalogsitemPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CatalogsitemPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CatalogsitemPage');
    };
    CatalogsitemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-catalogsitem',template:/*ion-inline-start:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\catalogsitem\catalogsitem.html"*/'<!--\n  Generated template for the CatalogsitemPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>catalogsitem</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\catalogsitem\catalogsitem.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], CatalogsitemPage);
    return CatalogsitemPage;
}());

//# sourceMappingURL=catalogsitem.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackvPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FeedbackvPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FeedbackvPage = /** @class */ (function () {
    function FeedbackvPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FeedbackvPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FeedbackvPage');
    };
    FeedbackvPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feedbackv',template:/*ion-inline-start:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\feedbackv\feedbackv.html"*/'<!--\n  Generated template for the FeedbackvPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="primary">\n        <button (click)="back()" class="back">\n       \n        </button>\n        <ion-title class="giftTitle">My Feedback</ion-title>\n        <button class="help">\n            <ion-icon name="help"></ion-icon>\n        </button>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <ion-card>\n  \n      <ion-item>\n        <ion-avatar item-start>\n          <img src="img/marty-avatar.png">\n        </ion-avatar>\n        <h2>Marty McFly</h2>\n        <p>November 5, 1955 (11 hours ago)</p>\n      </ion-item>\n    \n      <ion-card-content>\n        <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>\n      </ion-card-content>\n    \n      <ion-row>\n        <ion-col>\n          <button ion-button icon-start clear small>\n            <ion-icon name="thumbs-up"></ion-icon>\n            <div>12 Likes</div>\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button icon-start clear small>\n            <ion-icon name="reply"></ion-icon>\n            <div>4 Replies</div>\n          </button>\n        </ion-col>\n        <!-- <ion-col center text-center>\n          <ion-note>\n            11h ago\n          </ion-note>\n        </ion-col> -->\n      </ion-row>\n    \n    </ion-card>\n  </ion-content>\n  '/*ion-inline-end:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\feedbackv\feedbackv.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], FeedbackvPage);
    return FeedbackvPage;
}());

//# sourceMappingURL=feedbackv.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_platform_platform__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_brag_brag__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ringamail_ringamail__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ringacalendar_ringacalendar__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, platform, navParams, viewCtrl, call, modalCtrl, bragservice, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.call = call;
        this.modalCtrl = modalCtrl;
        this.bragservice = bragservice;
        this.popoverCtrl = popoverCtrl;
        // phoneNumber: string;
        this.calendars = [];
        this.brags = [];
        this.items = [];
        this.cards = [];
    }
    ContactPage.prototype.ngOnInit = function () {
        this.getBrags();
    };
    ContactPage.prototype.getBrags = function () {
        var _this = this;
        this.bragservice.getBrags()
            .subscribe(function (brags) { return _this.brags = brags; });
        // if(!this.platform.is('cordova')) {
        //   return false;}
    };
    // Cancel: close the Email modal page
    // closeModal() {
    //   this.viewCtrl.dismiss();
    // }
    //     // Load RingamailPage
    //     RingamailPage(){
    //       this.navCtrl.push(RingamailPage);
    //  }
    ContactPage.prototype.presentRingamailModal = function () {
        var RingamailModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__ringamail_ringamail__["a" /* RingamailPage */], { userId: 8675309 });
        RingamailModal.present();
    };
    ContactPage.prototype.presentPopoverC3 = function (myRingacalendar) {
        var pop = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__ringacalendar_ringacalendar__["a" /* RingacalendarPage */], {}, { cssClass: ' WIDEcustom-popover ' });
        var ev = {
            target: {
                getBoundingClientRect: function () {
                    return {
                        top: '100'
                    };
                }
            }
        };
        pop.present({ ev: ev });
    };
    // Group 1
    ContactPage.prototype.callNumber = function () {
        setTimeout(function () {
            var tel = '12345678890';
            window.open("tel:" + tel, '_system');
        }, 100);
    };
    ContactPage.prototype.catch = function (e) {
        console.error(e || "Error launching dialler.");
    };
    ContactPage.prototype.pop = function () {
        this.navCtrl.pop();
    };
    ContactPage.prototype.ionViewDidLoad = function () {
        // this.callNumber.callNumber("0721262596", true)
        // .then(res => console.log('Launched dialer!', res))
        // .catch(err => console.log('Error launching dialer', err));
        console.log('ionViewDidLoad ContactPage');
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\contact\contact.html"*/'<ion-header>\n    <!-- <ion-navbar color="primary">\n        <button (click)="back()" class="back">\n       \n        </button> -->\n        <ion-title class="giftTitle">Contact Card</ion-title>\n        <!-- <button class="help">\n            <ion-icon name="help"></ion-icon>\n        </button> -->\n    <!-- </ion-navbar> -->\n  </ion-header>\n  \n  \n  <ion-content>\n\n        <div>\n            <ion-avatar><img class="contactDP" src="assets/imgs/logo.png">  \n            </ion-avatar>        \n        </div>\n\n    <div *ngFor="let brag of brags" (click)="itemTapped($event, brag)">\n              \n  <!-- Name -->\n  <h3 class="FBname">{{brag.name}}</h3>\n  <p class="FBaddress">{{brag.address}}</p>\n  <p class="FBlandmarks">{{brag.landmarks}}</p>\n  <p class="FBbiztype">{{brag.BizType}}</p>\n  <p class="FBwebsite">{{brag.Website}}</p>\n  <p class="FBemail">{{brag.Email}}</p>\n\n</div> \n\n<!-- TAP CARD to dismiss -->\n<ion-content (click)="pop()"></ion-content> \n\n<!-- <div class="FBmodalcol"> -->\n            <ion-footer>\n                <ion-row align-items-start align-items-baseline>\n                  <ion-col><img class="BragIcon" src="assets/imgs/RingaIcon.png"/></ion-col>\n                  <!-- Group 1 -->\n                  <!-- https://www.technouz.com/4694/call-telephone-number-ionic-3-ionic-native/ -->\n                      <ion-col (click)="callNumber()"><ion-icon class="bottomIcon" name="call"></ion-icon></ion-col>\n                      <!-- Group 2 -->\n                            <ion-col (click)="presentRingamailModal()"><ion-icon class="bottomIcon" name="mail"></ion-icon></ion-col>\n                       <ion-col (click)="presentPopoverC3($event)"><ion-icon class="bottomIcon" name="alarm"></ion-icon></ion-col>\n                   <ion-col><ion-icon class="bottomIcon" name="pin"></ion-icon></ion-col>\n               <ion-col><ion-icon class="bottomIcon" name="share"></ion-icon></ion-col>\n          </ion-row>\n        </ion-footer>\n    <!-- </div>    -->\n  \n  \n  </ion-content>'/*ion-inline-end:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\contact\contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular_platform_platform__["a" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_brag_brag__["a" /* BragProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* PopoverController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GiftBragPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the GiftbragPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GiftBragPage = /** @class */ (function () {
    function GiftBragPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GiftBragPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GiftbragPage');
    };
    GiftBragPage.prototype.pop = function () {
        this.navCtrl.pop();
    };
    GiftBragPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-giftbrag',template:/*ion-inline-start:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\giftbrag\giftbrag.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <button (click)="back()" class="back">\n        </button>\n        <ion-title class="giftTitle">Gift-A-Brag</ion-title>\n        <button class="help">\n            <ion-icon name="help"></ion-icon>\n        </button>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n        <img class="profileImage" src="assets/imgs/logo.png">\n        <button class="settings">\n            <ion-icon name="settings"></ion-icon>\n        </button><br><p class="account">Accounts</p>\n        <ion-row class="names1">\n            <input type="text" class="inputs" placeholder="Name">\n        </ion-row>\n        <ion-row class="names2">\n            <input type="text" class="inputs" placeholder="Address">\n        </ion-row>\n        <ion-row class="names3">\n            <input type="text" class="inputs" placeholder="Guiding landmarks">\n        </ion-row>\n        <ion-row class="names4">\n            <input type="text" class="inputs" placeholder="Business type/ specialisation">\n        </ion-row>\n        <ion-row class="names5">\n            <input type="text" class="inputs" placeholder="Website">\n        </ion-row>\n        <ion-row class="names6">\n            <input type="text" class="inputs" placeholder="Email">\n        </ion-row>\n        <ion-row class="names7">\n            <input type="text" class="inputs" placeholder="Phone number">\n        </ion-row>    \n        <ion-row class="names8">\n            <ion-col>\n                <p class="bottomTxt"> Email</p>\n                <button class="bottomIcon"><ion-icon name="mail"></ion-icon></button>\n            </ion-col>\n            <ion-col>\n                <p class="bottomTxt"> Call</p>\n                <button class="bottomIcon"><ion-icon name="call"></ion-icon></button>\n            </ion-col>\n            <ion-col>\n                <p class="bottomTxt"> Pin</p>\n                <button class="bottomIcon"><ion-icon name="pin"></ion-icon></button>\n            </ion-col>\n            <ion-col>\n                <p class="bottomTxt"> w3w</p>\n                <img class="w3w" src="assets/imgs/w3w.png">\n            </ion-col>\n            <ion-col>\n                <button (click)="pop()" class="done">Done</button>\n            </ion-col>\n        </ion-row>  \n  \n  </ion-content>'/*ion-inline-end:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\giftbrag\giftbrag.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], GiftBragPage);
    return GiftBragPage;
}());

//# sourceMappingURL=giftbrag.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__join_join__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.login = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.join = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__join_join__["a" /* JoinPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\home\home.html"*/'<ion-content padding center class="home">\n  <div class="welcome1"><img class="homeicon" src="assets/imgs/RingaIcon.png"/></div>\n\n <div class="welcome2"><h1 class="homebrand">Ringa</h1></div> \n \n  <div class row>\n    <div class col>\n      <button ion-button large class="custom" color="light" (click)="login()">Login</button>\n    </div>\n\n    <div class col>\n      <button ion-button large class="cust" color="almond" (click)="join()">Join</button>\n    </div>\n  </div>\n</ion-content>\n\n<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  The world is your oyster.\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n  </p>\n</ion-content> -->\n'/*ion-inline-end:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

// import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';
// @Component({
//   selector: 'page-home',
//template:/*ion-inline-start:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\home\home.html"*/'<ion-content padding center class="home">\n  <div class="welcome1"><img class="homeicon" src="assets/imgs/RingaIcon.png"/></div>\n\n <div class="welcome2"><h1 class="homebrand">Ringa</h1></div> \n \n  <div class row>\n    <div class col>\n      <button ion-button large class="custom" color="light" (click)="login()">Login</button>\n    </div>\n\n    <div class col>\n      <button ion-button large class="cust" color="almond" (click)="join()">Join</button>\n    </div>\n  </div>\n</ion-content>\n\n<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  The world is your oyster.\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n  </p>\n</ion-content> -->\n'/*ion-inline-end:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\home\home.html"*/
// })
// export class HomePage {
//   constructor(public navCtrl: NavController) {
//   }
// }
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_login_model__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_main__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__join_join__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_brag_brag__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, formBuilder, authservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.authservice = authservice;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__models_login_model__["a" /* LoginModel */]();
        this.hide = true;
    }
    LoginPage.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            'phoneNumber': [this.user.phoneNumber, [
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required
                    //do more validatiors  here >>for country code manualy
                ]],
            'password': [this.user.password, [
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].maxLength(30)
                ]]
        });
    };
    LoginPage.prototype.onDoLogin = function (loginForm) {
        var _this = this;
        console.log(loginForm.value);
        this.authservice.addBrag(loginForm.value)
            .subscribe(function (brag) {
            brag = brag;
            console.log(brag);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__main_main__["a" /* MainPage */]);
        });
    };
    //Load login page
    LoginPage.prototype.KonDoLogin = function () {
        alert(this.user.password + ' ' + this.user.phoneNumber);
    };
    //Load main page
    LoginPage.prototype.loginHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__main_main__["a" /* MainPage */]);
    };
    //Load Join page
    LoginPage.prototype.JoinPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__join_join__["a" /* JoinPage */]);
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\login\login.html"*/'<ion-content padding class="bgColor">\n  \n  <div class="Llogin"> \n\n      <form action="" [formGroup]="loginForm" (ngSubmit)="loginForm.valid && onDoLogin()" novalidate>\n           <ion-item class="custom1">\n               <ion-input clearInput \n                  placeholder="Phone Number" \n                  class="cust" \n                  id="phoneNumber"\n                  [(ngModel)]="user.phoneNumber" \n                  formControlName="phoneNumber">\n              </ion-input>\n          </ion-item>\n  \n           <ion-item class="custom1">\n               <ion-input clearInput \n                  placeholder="Password" \n                  class="cust" \n                  id="password" \n                  [(ngModel)]="user.password" \n                  formControlName="password"\n                  [type]="hide ? \'password\':\'text\' ">\n              </ion-input>\n          </ion-item>\n      </form>\n      <br>\n  </div>\n  \n      <button ion-button small class="modi" \n                          type="submit" (click)="onDoLogin(loginForm)" \n                          [disabled]="!loginForm.valid">\n                           Click to login\n                      </button>\n<!-- \n                       <div><button ion-button small class="modiXalt" (click)="loginHome()">Click to Login</button>\n                      </div> -->\n\n\n      <div class="Lforgot"><p class="para">Forgot password?</p></div>\n\n      <p class="paragraph">Or login with</p>\n      \n      <div class="LaltloginFG">\n          <ion-grid>\n              <ion-row>\n                  <ion-col>\n                      <ion-icon name="logo-facebook" class="facebookCOLOR"></ion-icon>\n                          </ion-col>\n                          <ion-col>\n                      <ion-icon name="logo-google" class="googleCOLOR"></ion-icon>\n                  </ion-col></ion-row></ion-grid>\n              </div>\n      \n      \n      <div class="mistake">\n          <ion-row>\n      <ion-col text-align: right col-8><p class="parag">Don\'t have an account?</p></ion-col>\n          <ion-col col-4 text-align: left><p class="paragh" (click)="JoinPage()">Join now</p></ion-col>\n      </ion-row>\n      </div>\n\n      </ion-content>'/*ion-inline-end:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__providers_brag_brag__["a" /* BragProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatroom_chatroom__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__friends_friends__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the QchatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QChatPage = /** @class */ (function () {
    function QChatPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.ChatroomPage = __WEBPACK_IMPORTED_MODULE_2__chatroom_chatroom__["a" /* ChatroomPage */];
        this.FriendsPage = __WEBPACK_IMPORTED_MODULE_3__friends_friends__["a" /* FriendsPage */];
        console.log(this.navParams);
    }
    QChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-qchat',template:/*ion-inline-start:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\qchat\qchat.html"*/'<ion-header no-border >\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n        </button>\n          <ion-title class="custTitle">QChat</ion-title>\n            <ion-buttons start>\n          <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="help-circle"></ion-icon>\n          </button>\n            </ion-buttons>\n          \n      <ion-buttons end>\n        <button ion-button icon-only>\n          <ion-icon name="more"></ion-icon>\n            </button>\n              </ion-buttons>             \n            </ion-navbar>\n          </ion-header>\n\n<ion-content>\n\n\n<div>  \n  <ion-tabs tabsPlacement=bottom selectedIndex="1" class="tabs">\n        <ion-tab [root]="FriendsPage" tabTitle="Friends"></ion-tab>\n        <ion-tab [root]="ChatroomPage" tabTitle="Chats" ></ion-tab>\n    </ion-tabs>\n  </div>\n  \n  <div>\n<ion-row class="labelcol">\n  <ion-col><ion-icon name="contacts"></ion-icon><br><label>Contacts</label></ion-col>\n    <ion-col><ion-icon name="contact"></ion-icon><br><label>Profile</label></ion-col>\n      <ion-col><ion-icon name="settings"></ion-icon><br><label>Settings</label></ion-col>\n   <ion-col><ion-icon name="logo-rss"></ion-icon><br><label>Broadcast</label></ion-col>\n <ion-col><ion-icon name="people"></ion-icon><br><label>Group</label></ion-col>\n</ion-row>\n</div>\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\qchat\qchat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], QChatPage);
    return QChatPage;
}());

//# sourceMappingURL=qchat.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoinPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_register_model__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_main__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cookies_cookies__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__priv_priv__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tos_tos__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_auth_auth__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the JoinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JoinPage = /** @class */ (function () {
    function JoinPage(navCtrl, navParams, formBuilder, authservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.authservice = authservice;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__models_register_model__["a" /* RegisterModel */]();
        this.hide = true;
        this.buttonClicked2 = false; //Whatever you want to initialise it as
    }
    JoinPage.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            'name': [this.user.name, [
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ]],
            'username': [this.user.username, [
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                    //do more validatiors  here >>for country code manualy
                ]],
            'email': [this.user.email, [
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].email
                ]],
            'password': [this.user.password, [
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(30)
                    //do more validatiors  
                ]]
        });
    };
    JoinPage.prototype.onDoRegister = function (registerForm) {
        var _this = this;
        console.log(registerForm.value);
        this.authservice.addUser(registerForm.value)
            .subscribe(function (user) {
            user = user;
            console.log(user);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
        });
    };
    // onDoRegister(registerForm: NgForm) : void {
    //   console.log(registerForm.value);
    //   this.authservice.addUser(registerForm.value as User)
    //     .subscribe(user => {
    //       this.users.push(user);
    //     });
    //    alert(this.user.name + this.user.phoneNumber);
    // }
    //Load Main page
    JoinPage.prototype.loginHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__main_main__["a" /* MainPage */]);
    };
    // Load Login page
    JoinPage.prototype.LoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    // Load Login page
    JoinPage.prototype.TosPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__tos_tos__["a" /* TosPage */]);
    };
    // Load Login page
    JoinPage.prototype.PrivPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__priv_priv__["a" /* PrivPage */]);
    };
    // Load Login page
    JoinPage.prototype.CookiesPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cookies_cookies__["a" /* CookiesPage */]);
    };
    JoinPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JoinPage');
    };
    JoinPage.prototype.onButtonClick = function () {
        this.buttonClicked2 = !this.buttonClicked2;
    };
    JoinPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-join',template:/*ion-inline-start:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\join\join.html"*/'<ion-content padding class="JbgColor">\n  \n  <div class="Jlogin"> \n     \n      <form action="" [formGroup]="registerForm" (ngSubmit)= "registerForm.valid &&  onDoRegister()"  novalidate>\n          <ion-item class="custom1">\n               <ion-input clearInput placeholder="Name" class="cust"\n                   id = "name" [(ngModel)]="user.name" formControlName="name">\n               </ion-input>\n           </ion-item> \n\n           <ion-item class="custom1">\n               <ion-input clearInput placeholder="Phone Number" class="cust"\n                    id = "username" [(ngModel)]="user.username" formControlName="username">\n                  </ion-input>\n               </ion-item>\n\n          <ion-item class="custom1">\n               <ion-input clearInput placeholder="Email" class="cust"\n                   id = "email" [(ngModel)]="user.email" formControlName="email">\n                </ion-input>\n           </ion-item>\n\n          <ion-item class="custom1">\n               <ion-input clearInput placeholder="Password" class="cust"\n                    id = "password" [(ngModel)]="user.password" formControlName="password"\n                [type]="hide ? \'password\':\'text\' ">\n  \n          <ion-icon name="menu" (click)="hide = !hide">\n              {{ hide ? \'visibility\' :\'visibility_off\' }}\n          </ion-icon> \n          </ion-input>\n      </ion-item>\n     \n     \n  </form>\n  <br>\n</div> \n\n\n                   <button ion-button small class="modi1" \n                      type="submit" \n                      (click)=" onDoRegister(registerForm)"\n                      [disabled]="!registerForm.valid">\n                      Click to join\n                  </button>\n\n                 {{ brag}}\n                  \n                  \n                  \n\n\n<p class="paragraph1">Or login with</p>\n\n<div class="JaltloginFG">\n      <ion-grid>\n          <ion-row>\n              <ion-col>\n                   <ion-icon name="logo-facebook" class="facebookCOLOR"></ion-icon>\n                       </ion-col>\n                      <ion-col>\n                  <ion-icon name="logo-google" class="googleCOLOR"></ion-icon>\n              </ion-col></ion-row></ion-grid>\n          </div>\n   \n\n<div class="paragraphBox"  *ngIf="buttonClicked2">\n   <br>\n   <br>\n    <P class="para1">By joining Ringa, you agree to the <span  style="color:blue" (click)="TosPage()">Terms of Service</span> and  <span  style="color:blue" (click)="PrivPage()">Privacy Policy</span>, including <span  style="color:blue" (click)="CookiesPage()">Cookie Use</span>. Others will be able to find you by searching for the email or phone number you have provided. </P>\n    <br>\n    <button ion-button small (click)="loginHome()">Agree, & enter Ringa</button>\n    <br>\n    <br>\n  </div>\n\n  <!-- NAVIGATION https://stackoverflow.com/questions/40245847/how-to-go-to-another-page-with-a-button-click-with-ionic -->\n\n  <div class="Jmistake">\n      <ion-row>\n  <ion-col text-align: right col-9><p class="parag1">Already have an account?</p></ion-col>\n      <ion-col col-3 text-align: left><p class="paragh1" (click)="LoginPage()">Login</p></ion-col>\n</ion-row>\n</div>\n<!--   \n<p class="parag1">Already have an account?</p>\n<p class="paragh1" (click)="LoginPage()">Log In</p> -->\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\mTrustQ Kenya No1\projects\ringa 22Nov\src\pages\join\join.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_9__providers_auth_auth__["a" /* AuthProvider */]])
    ], JoinPage);
    return JoinPage;
}());

//# sourceMappingURL=join.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Photo = /** @class */ (function () {
    function Photo() {
    }
    return Photo;
}());
/*
  Generated class for the PhotoProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PhotoProvider = /** @class */ (function () {
    function PhotoProvider(camera, storage) {
        this.camera = camera;
        this.storage = storage;
        this.photos = [];
    }
    PhotoProvider.prototype.loadSaved = function () {
        var _this = this;
        this.storage.get('photos').then(function (photos) {
            _this.photos = photos || [];
        });
    };
    PhotoProvider.prototype.takePicture = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // Add new photo to gallery
            _this.photos.unshift({
                data: 'data:image/jpeg;base64,' + imageData
            });
            // Save all photos for later viewing
            _this.storage.set('photos', _this.photos);
        }, function (err) {
            // Handle error
            console.log("Camera issue:" + err);
        });
    };
    PhotoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], PhotoProvider);
    return PhotoProvider;
}());

//# sourceMappingURL=photo.js.map

/***/ })

},[310]);
//# sourceMappingURL=main.js.map