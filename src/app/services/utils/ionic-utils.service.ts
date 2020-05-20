import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class IonicUtilsService {
  isLoadingPresent = false;
  constructor(
    private alertController: AlertController,
    public loadingController: LoadingController
  ) { }

  async presentAlert(
    header: string = 'Alert',
    subHeader: string = null,
    message: string = 'This is an alert message',
    buttonText: string = 'Ok') {
    const alert = await this.alertController.create({
      header,
      subHeader,
      message,
      buttons: [buttonText]
    });
    await alert.present();
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    await loading.present();

    this.isLoadingPresent = true;
    return;
  }
  async dismissLoading(counter = 0) {
    if (this.isLoadingPresent) {
      await this.loadingController.dismiss();
      this.isLoadingPresent = false;
      return;
    } else {
      setTimeout(() => {
        this.dismissLoading(counter + 1);
      });
    }
  }

}
