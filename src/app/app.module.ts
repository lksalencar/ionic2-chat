import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule, AuthMethods, AuthProviders, FirebaseAppConfig } from "angularfire2";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {SigninPage} from "../pages/signin/signin";
import { SignupPage } from "../pages/signup/signup";
import {AuthService} from "../providers/auth.service";
import { UserService } from "../providers/user.service";
import {HttpModule} from "@angular/http";
import {CustomLoggedHeaderComponent} from "../components/custom-logged-header/custom-logged-header.component";
import {ChatPage} from "../pages/chat/chat";
import {ChatService} from "../providers/chat.service";
import {CapitalizePipe} from "../pipes/capitalize.pipe";
import {MessageService} from "../providers/message.service";
import {MessageBoxComponent} from "../components/message-box/message-box.component";
import {UserInfoComponent} from "../components/user-info/user-info.component";
import {UserMenuComponent} from "../components/user-menu/user-menu.component";
import {UserProfilePage} from "../pages/user-profile/user-profile";
import { ProgressBarComponent } from '../components/progress-bar/progress-bar.component';



const firebaseAppConfig: FirebaseAppConfig = {
   apiKey: "AIzaSyCezM36GCAb80NdP7NVM2PNUOxU0r3O2qw",
    authDomain: "chat-message-97ad4.firebaseapp.com",
    databaseURL: "https://chat-message-97ad4.firebaseio.com",
    storageBucket: "chat-message-97ad4.appspot.com",
    messagingSenderId: "309333901709"
};
const firebaseAuthconfig = {
 provider: AuthProviders.Custom,
 method: AuthMethods.Password
}
@NgModule({
  declarations: [
    CapitalizePipe,
    CustomLoggedHeaderComponent,
    MyApp,
    ChatPage,
    HomePage,
    MessageBoxComponent,
    SigninPage,
    SignupPage,
    UserInfoComponent,
    UserMenuComponent,
    UserProfilePage,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(firebaseAppConfig, firebaseAuthconfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChatPage,
    HomePage,
    SigninPage,
    SignupPage,
    UserProfilePage
  ],
  providers: [
    AuthService,
    ChatService,
    MessageService,
    StatusBar,
    SplashScreen,
    UserService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
