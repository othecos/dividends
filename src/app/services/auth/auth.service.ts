import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthFirebaseUser, FirebaseAuthMethods } from './firebase/auth.firebase.models';
import { AuthFirebaseService } from './firebase/auth.firebase.service';
import { AuthFirebaseUserService } from './firebase/auth.firebase.user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private firebaseUser: AuthFirebaseUserService,
    private firebase: AuthFirebaseService,
  ) { }

  async signIn(email: string, password: string) {
    const firebaseResult = await this.firebase.signIn(email, password);
    return firebaseResult;
  }
  async signInWithProvider(method: FirebaseAuthMethods) {
    const firebaseResult = await this.firebase.signInWithProvider(method);
    return firebaseResult;
  }

  async signUp(email, userName, password, photoURL) {
    return await this.firebase.signUp(email, userName, password, photoURL);
  }
  async signUpWithProvider(method: FirebaseAuthMethods) {
    return await this.firebase.signUpWithProvider(method);
  }
  async logout() {
    return await this.firebase.logout();
  }
  async passwordRecovery() {
    return await this.firebase.passwordRecovery();
  }
  async getCurrentUser(): Promise<Observable<AuthFirebaseUser>> {
    return await this.firebaseUser.getCurrentUser();
  }
}
