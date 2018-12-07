
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'; // don't forget to import HttpModule in app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AuthProvider } from '../providers/auth/auth';
import { BragProvider } from '../providers/brag/brag';
import { PhotoProvider } from '../providers/photo/photo';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Calendar } from '@ionic-native/calendar';
import { CallNumber } from '@ionic-native/call-number';
import { Camera } from '@ionic-native/camera';
import { Clipboard } from '@ionic-native/clipboard';
import { Crop } from '@ionic-native/crop';
import { EmailComposer } from '@ionic-native/email-composer';
import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { FileOpener } from '@ionic-native/file-opener';
import { FilePath } from '@ionic-native/file-path';
import { Base64 } from '@ionic-native/base64';
import { IOSFilePicker } from '@ionic-native/file-picker';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { ImagePicker } from '@ionic-native/image-picker';
import { Keyboard } from '@ionic-native/keyboard';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { DirectivesModule } from '../directives/directives.module';

import { AttachedPage } from '../pages/attached/attached';
import { BragPage } from '../pages/brag/brag';
import { BragpostPage } from '../pages/bragpost/bragpost';
import { BragProfilePage } from '../pages/bragprofile/bragprofile';
import { BragsetPage } from '../pages/bragset/bragset';
import { BragVPage } from '../pages/bragv/bragv';
import { BvratingsPage } from '../pages/bvratings/bvratings';
import { CalAddEventPage } from '../pages/cal-add-event/cal-add-event';
import { CallPage } from '../pages/call/call';
import { CatalogsPage } from '../pages/catalogs/catalogs';
import { CatalogsitemPage } from '../pages/catalogsitem/catalogsitem';
import { CatalogsvPage } from '../pages/catalogsv/catalogsv';
import { ChatroomPage } from '../pages/chatroom/chatroom';
import { ContactPage } from '../pages/contact/contact';
import { CookiesPage } from '../pages/cookies/cookies';
import { EmailPage } from '../pages/email/email';
import { FdbackPage } from '../pages/fdback/fdback';
import { FeedbackPage } from '../pages/feedback/feedback';
import { FeedbackvPage } from '../pages/feedbackv/feedbackv';
import { FocusPage } from '../pages/focus/focus';
import { FormSamplePage } from '../pages/form-sample/form-sample';
import { FriendsPage } from '../pages/friends/friends';
import { GiftBragPage } from '../pages/giftbrag/giftbrag';
import { GooglePage } from '../pages/google/google';
import { HomePage } from '../pages/home/home';
import { ItemdetailsPage } from '../pages/itemdetails/itemdetails';
import { JoinPage } from '../pages/join/join';
import { LoginPage } from '../pages/login/login';
import { MailmodalPage } from '../pages/mailmodal/mailmodal';
import { MainPage } from '../pages/main/main';
import { MyStatusPage } from '../pages/mystatus/mystatus';
import { PrivPage } from '../pages/priv/priv';
import { QChatPage } from '../pages/qchat/qchat';
import { QchatsetPage } from '../pages/qchatset/qchatset';
import { QchatvPage } from '../pages/qchatv/qchatv';
import { RatingsPage } from '../pages/ratings/ratings';
import { RingacalendarPage } from '../pages/ringacalendar/ringacalendar';
import { RingamailPage } from '../pages/ringamail/ringamail';
import { TosPage } from '../pages/tos/tos';
import { VisionPage } from '../pages/vision/vision';
import { W3wPage } from '../pages/w3w/w3w';







@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    JoinPage,
    CookiesPage,
    PrivPage,
    TosPage,
    MainPage,
    QChatPage,
    ChatroomPage,
    BragPage,
    MyStatusPage,
    GiftBragPage,
    CatalogsPage,
    FeedbackvPage,
    FocusPage,
    BragProfilePage,
    RatingsPage,
    FormSamplePage,
    ItemdetailsPage,
    MailmodalPage,
    QchatvPage,
    QchatsetPage,
    W3wPage,
    EmailPage,
    GooglePage,
    FriendsPage,
    CatalogsitemPage,
    BvratingsPage,
    BragVPage,
    BragsetPage,
    CallPage,
    FeedbackPage,
    BragpostPage,
    ContactPage,
    RingamailPage,
    VisionPage,
    CatalogsvPage,
    AttachedPage,
    FdbackPage,
    RingacalendarPage,
    CalAddEventPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicImageViewerModule,
    BrowserAnimationsModule,
    DirectivesModule, 
    FormsModule, 
    ReactiveFormsModule, // add the Directives Module to your app imports
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    JoinPage,
    CookiesPage,
    PrivPage,
    TosPage,
    MainPage,
    QChatPage,
    ChatroomPage,
    BragPage,
    MyStatusPage,
    GiftBragPage,
    MyStatusPage,
    GiftBragPage,
    CatalogsPage,
    FeedbackvPage,
    FocusPage,
    BragProfilePage,
    RatingsPage,
    FormSamplePage,
    ItemdetailsPage,
    MailmodalPage,
    QchatvPage,
    QchatsetPage,
    W3wPage,
    EmailPage,
    GooglePage,
    FriendsPage,
    CatalogsitemPage,
    BvratingsPage,
    BragVPage,
    BragsetPage,
    CallPage,
    FeedbackPage,
    BragpostPage,
    ContactPage,
    RingamailPage,
    VisionPage,
    CatalogsvPage,
    AttachedPage,
    FdbackPage,
    RingacalendarPage,
    CalAddEventPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    PhotoProvider,
    BragProvider,
    AuthProvider,
    File,
    FileTransfer,
    // FileUploadOptions,
    FileTransferObject,
    FileChooser,
    FileOpener,
    FilePath,
    Base64,
    FileTransferObject,
    IOSFilePicker,
    SocialSharing,
    EmailComposer,
    CallNumber,
    ImagePicker,
    Crop,
    Keyboard,
    Clipboard,
    Calendar,
    AndroidPermissions,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
