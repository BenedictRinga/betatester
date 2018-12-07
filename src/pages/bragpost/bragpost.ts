import { Component, ElementRef, ViewChild  } from '@angular/core';
import { IonicPage, LoadingController, NavController, PopoverController, ActionSheetController, NavParams, ViewController, ToastController, Platform  } from 'ionic-angular';
import { Brag } from '../../models/interfaces/brag';
import { BragProvider } from '../../providers/brag/brag';
import { FormsModule, NgForm } from '@angular/forms';
import { HTTP } from '@ionic-native/http';


import { File } from '@ionic-native/file';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer';

import { FileChooser } from '@ionic-native/file-chooser';
import { FileOpener } from '@ionic-native/file-opener';
import { FilePath } from '@ionic-native/file-path';
import { IOSFilePicker } from '@ionic-native/file-picker';
import { ImagePicker } from '@ionic-native/image-picker';
import { Clipboard } from '@ionic-native/clipboard';


import { AndroidPermissions } from '@ionic-native/android-permissions';
import { PhotoProvider } from '../../providers/photo/photo';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { KeyboardAttachDirective } from '../../directives/keyboard-attach/keyboard-attach';
import { AttachedPage } from '../attached/attached';
import { ThrowStmt } from '@angular/compiler';
import { Base64 } from '@ionic-native/base64';

/**
 * Generated class for the BragpostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @ViewChild('myInput')
@IonicPage()
@Component({
  selector: 'page-bragpost',
  templateUrl: 'bragpost.html',
})
export class BragpostPage {
  
  http: any;
  brag: Brag[];
  brags: any;'ionic-angular'
  // android: AndroidPermissions;
  currentImage: any;
  show: boolean = false;
  fileData: any;
  ImageData: any;
  photos: any;

      constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public viewCtrl: ViewController,
            // public element: ElementRef,
            // public myInput: ElementRef,
                public loadingCtrl: LoadingController,
                private bragservice: BragProvider,
                private transfer: FileTransfer, 
                public toastCtrl: ToastController,
                private file: File,
                private androidPermissions: AndroidPermissions,
                private camera: Camera, 
                public photoService: PhotoProvider,
                private clipboard: Clipboard,
                public popoverCtrl: PopoverController,
              private filePicker: IOSFilePicker,
            private fileChooser: FileChooser, 
          private fileOpener: FileOpener,
         private filePath: FilePath,
         private imagePicker: ImagePicker,
         public actionSheetCtrl: ActionSheetController,
         public platform: Platform,
         private base64: Base64
     ) {
      

    }
        chooseFile(){
          // choose your file from the device
          this.fileOpener.open('path/to/file.pdf', 'application/pdf')
          .then(() => console.log('File is opened'))
          .catch(e => console.log('Error opening file', e));
        
        }
        fileChoose(){
          // choose your file from the device
        this.fileChooser.open().then(uri => {
          alert('uri'+JSON.stringify(uri));
              // get file path
          this.filePath.resolveNativePath(uri)
          .then(file => {
            alert('file'+JSON.stringify(file));
            let filePath: string = file;
            if (filePath) {
                      // convert your file in base64 format
              this.base64.encodeFile(filePath)
                      .then((base64File: string) => {
                alert('base64File'+JSON.stringify(base64File));
              }, (err) => {
                alert('err'+JSON.stringify(err));
              });
            }
          })
          .catch(err => console.log(err));
        })
        .catch(e => alert('uri'+JSON.stringify(e)));
        }
      
      
    
        //android file chooser
        attachFile() {
          this.fileChooser.open()
          .then(uri => console.log(uri))
          .catch(e => console.log(e));
        }

        //ios file picker
          pickFile() {
          this.filePicker.pickFile()
          .then(uri => console.log(uri))
          .catch(err => console.log('Error', err));
          
        }
          onImageLoad(e){
            var reader = new FileReader();
            let self = this;

          
            let imageFileName = e.target.files[0].name;
            reader.onload = function(e) {
              self.fileData = reader.result; //base64 encoded
              let fileType = self.fileData.substring(self.fileData.indexOf(':')+1,self.fileData.indexOf('/'));;
        }

            reader.readAsDataURL(e.target.files[0]);

      }

          addBrag(BragForm:NgForm) {
            console.log(BragForm.value);
            BragForm.value.image = new Date() + "images/dommy.jpg"    // append  imagepath to formdata here
            this.bragservice.addBrag(BragForm.value as Brag)
            .subscribe(brags => this.brags = brags);
            
        }
        
          closeModal() {
            this.viewCtrl.dismiss();
        }
        // https://stackoverflow.com/questions/48714500/how-to-display-an-image-from-ionic-native-image-picker?rq=1
        // https://stackoverflow.com/questions/47118760/how-to-take-or-choose-image-from-gallery-in-ionic-3?rq=1
        // actionSHEET camera + photolibrary https://stackoverflow.com/questions/45299589/camera-and-photo-library-together-ionic-2?rq=1 
        
        //take Photo
          takePhoto(sourceType:number) {
            const options: CameraOptions = {
              quality: 100,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE,
              correctOrientation: true,
              sourceType:sourceType,
            }

            this.camera.getPicture(options).then((imageData) => {
              let base64Image = 'data:image/jpeg;base64,' + imageData;
            }, (err) => {
              // Handle error
            });
          }
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
            public showActionSheet() {
              let actionSheet = this.actionSheetCtrl.create({
                buttons: [{
                  text: 'Load from gallery',
                  handler: () => {this.selectPhoto(this.camera.PictureSourceType.PHOTOLIBRARY);}
                },{
                  text: 'Take a photo',
                  handler: () => {this.selectPhoto(this.camera.PictureSourceType.CAMERA);}
                },{
                  text: 'Cancel',
                  role: 'cancel'
                }]
              });
              actionSheet.present();
            }
          
            private selectPhoto(selectedSourceType:number){
              let cameraOptions: CameraOptions = {
                sourceType: selectedSourceType,
                destinationType: this.camera.DestinationType.FILE_URI,
                allowEdit: true,
                quality: 100,
                saveToPhotoAlbum: false,
                encodingType: this.camera.EncodingType.JPEG,
                //encodingType: this.camera.EncodingType.PNG,
                mediaType: this.camera.MediaType.PICTURE,
                correctOrientation: true,
              }
              this.camera.getPicture(cameraOptions).then((imagePath) => {
                // Special handling for Android library  // 
                if (this.platform.is('ios')) {
                this.ImageData = imagePath.replace(/^file:\/\//, '');
                }
                else {
                  this.ImageData = imagePath;
                }
                this.photos.push(this.ImageData); //if you have to show multiple image
                this.photos.reverse();
                  // Do with the image data what you want.
                }
              );
            }
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
          presentPopover7(myAttached) {
            let popover = this.popoverCtrl.create(AttachedPage, {} , { cssClass: ' WIDEcustom-popover ' });
            popover.present({
              ev: myAttached
            });
              }

              pop() {
                    this.navCtrl.pop();
            }
              
                public buttonClicked: boolean = false; //Whatever you want to initialise it as
                public onButtonClick() {
                this.buttonClicked = !this.buttonClicked;
                }
              
        
          ionViewDidLoad() {
          
            console.log('ionViewDidLoad BragpostPage');
             }

             
          }
