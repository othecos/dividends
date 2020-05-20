import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AuthFirebaseUser, FirebaseAuthMethods } from './auth.firebase.models';
import { AuthFirebaseUserService } from './auth.firebase.user.service';
import { Platform } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {

  constructor(
    public afAuth: AngularFireAuth,
    private firebaseUserService: AuthFirebaseUserService,
    private platform: Platform
  ) { }

  public async signIn(email: string, password: string) {
    return await this.onEmailLogin(email, password);
  }
  public async signInWithProvider(method: FirebaseAuthMethods) {
    switch (method) {
      case 'google':
        return await this.onGoogleAuth();
      case 'facebook':
        return await this.onFacebookAuth();
    }
  }

  public async signUp(email, userName, password, photoURL) {
    let user: AuthFirebaseUser;
    let userCredentials: auth.UserCredential;
    try {
      userCredentials = await this.onEmailSignUp(email, password);
      user = new AuthFirebaseUser(email, userName, photoURL, 'email');
      return await this.firebaseUserService.saveUser(userCredentials.user.uid, user);
    } catch (err) {
      console.error(err);
      if (err.code === 500) { this.deleteUserAuth(userCredentials.user); }
      throw err;
    }
  }
  async signUpWithProvider(method: FirebaseAuthMethods) {
    console.log('Method', method)
    let userCredentials: auth.UserCredential;
    try {
      switch (method) {
        case 'google':
          userCredentials = await this.onGoogleAuth();
          break;
        case 'facebook':
          userCredentials = await this.onFacebookAuth();
          break;
      }
      if (userCredentials.additionalUserInfo.isNewUser) {
        const user = new AuthFirebaseUser(
          userCredentials.user.email,
          userCredentials.user.displayName,
          userCredentials.user.photoURL,
          method
        );
        await this.firebaseUserService.saveUser(userCredentials.user.uid, user);
        console.log('User added to database');
      }
      return;
    } catch (err) {
      console.error(err);
      if (err.code === 500) { this.deleteUserAuth(userCredentials.user); }
      throw err;
    }
  }
  public async logout() {
    return await this.afAuth.signOut();
  }
  public async passwordRecovery() {
  }
  async onGoogleAuth() {
    const provider = new auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    let response = null;
    if (this.platform.is('mobile')) {
      response = this.afAuth.signInWithRedirect(provider)
    } else {
      response = await this.afAuth.signInWithPopup(provider);
    }
    return response;
  }
  async onFacebookAuth() {
    const provider = new auth.FacebookAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    let response = null;
    if (this.platform.is('mobile')) {
      response = this.afAuth.signInWithRedirect(provider);
    } else {
      response = await this.afAuth.signInWithPopup(provider);
    }
    return response;
  }
  async onEmailLogin(email, password) {
    return await this.afAuth.signInWithEmailAndPassword(email, password);
  }
  async onEmailSignUp(username, password) {
    console.log('Credentials', username, password)
    return await this.afAuth.createUserWithEmailAndPassword(username, password);
  }
  async generateIdToken(){
    return new Promise((resolve,reject)=>{
     this.afAuth.idToken.subscribe((id)=>{
        resolve(id)
      },error=> reject(error))
    })
  }
  async deleteUserAuth(user: firebase.User) {
    return await user.delete();
  }
}
