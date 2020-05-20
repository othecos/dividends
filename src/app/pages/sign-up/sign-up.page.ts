import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { IonicUtilsService } from 'src/app/services/utils/ionic-utils.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  showPassword = false;
  constructor(
    public authService: AuthService,
    public ionicUtils: IonicUtilsService,
    public router: Router
  ) { }

  ngOnInit() {
  }
  async onSubmit(form: NgForm) {
    if (form.valid) {
      const email = form.value.email;
      const username = form.value.username;
      const password = form.value.password;
      await this.signUp(email, username, password);
    }
  }
  async signUp(email, username, password) {
    try {
      await this.ionicUtils.presentLoading();
      await this.authService.signUp(email, username, password, '');
      await this.ionicUtils.dismissLoading();
      this.router.navigate(['/']);
    } catch (error) {
      await this.ionicUtils.dismissLoading();
      console.error(error.message);
      const message = error.error ? error.error.message : error;
      this.ionicUtils.presentAlert('Forbidden', null, message, 'Ok');
    }
  }
  async onSignUpWithProvider(method) {
    try {
      await this.ionicUtils.presentLoading();
      await this.authService.signUpWithProvider(method);
      await this.ionicUtils.dismissLoading();
      this.router.navigate(['/']);
    } catch (error) {
      await this.ionicUtils.dismissLoading();
      const message = error.error ? error.error.message : error;
      this.ionicUtils.presentAlert('Forbidden', null, message, 'Ok');
    }
  }
}
