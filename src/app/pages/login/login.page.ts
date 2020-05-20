import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { IonicUtilsService } from 'src/app/services/utils/ionic-utils.service';
import { FormGroup, NgForm } from '@angular/forms';
import { FirebaseAuthMethods } from 'src/app/services/auth/firebase/auth.firebase.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  passwordVisible = false;
  constructor(
    public authenticationService: AuthService,
    private router: Router,
    private ionicUtils: IonicUtilsService
  ) { }

  ngOnInit() {
  }
  async onSubmit(loginForm: NgForm) {
    console.log('Submited');
    const email = loginForm.value.email;
    const password = loginForm.value.password;
    await this.onSignIn(email, password);
  }
  async onSignIn(email, password) {
    try {
      await this.ionicUtils.presentLoading();
      await this.authenticationService.signIn(email, password);
      this.router.navigate(['/home']);
    } catch ( error ) {
      const message = error.message ;
      this.ionicUtils.presentAlert('Forbidden', null, message, 'Ok');
    } finally {
      await this.ionicUtils.dismissLoading();
    }
  }
  async onSignInWithProvider(method:FirebaseAuthMethods){
    try {
      await this.ionicUtils.presentLoading();
      await this.authenticationService.signUpWithProvider(method);
      await this.ionicUtils.dismissLoading();
      this.router.navigate(['/home']);

    } catch ( error ) {
      const message = error.message ;
      this.ionicUtils.presentAlert('Forbidden', null, message, 'Ok');
      await this.ionicUtils.dismissLoading();
    }
  }
}
