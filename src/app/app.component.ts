import { Component } from '@angular/core';

import { Platform, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoginPage } from './login/login.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private modal: ModalController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
      this.platform.pause.subscribe(()=>{
this.lockApp();
      })
    });
  }
  async lockApp(){
    const modal =  await this.modal.create({
      component: LoginPage,
      componentProps: {
        isModal : true
      },
      backdropDismiss: false,
      cssClass: 'login-modal'
    });
    modal.present();
    }
}
