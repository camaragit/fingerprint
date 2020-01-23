import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modal: ModalController) {
    setTimeout(() => {
      this.lockApp();
    }, 2000);
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
