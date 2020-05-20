import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthFirebaseUser } from './auth.firebase.models';


@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseUserService {
  // tslint:disable-next-line: variable-name
  private userCollection: AngularFirestoreCollection<AuthFirebaseUser>;
  public users: Observable<AuthFirebaseUser[]>;
  public user: AuthFirebaseUser;

  constructor(private afs: AngularFirestore) {
    this.userCollection = this.afs.collection<AuthFirebaseUser>('users');
    this.users = this.userCollection.valueChanges()
  }

  async removeUser(userId: string) {
    try {
      return await this.userCollection.doc(userId).delete();
    } catch (err) {
      throw { code: 500, message: 'User not deleted' };
    }
  }
  async saveUser(uid: string, user: AuthFirebaseUser) {
    console.log(uid, user)
    try {
      return await this.userCollection.doc(uid).set({ ...user });
    } catch (err) {
      console.error('Error', err);
      throw { code: 500, message: 'User not created' }
    }
  }
  getUserByEmail(email: string): Promise<AuthFirebaseUser> {
    return new Promise((resolve, reject) => {
      if (this.user) {
        resolve(this.user);
      } else {
        this.users.pipe(map(item => item.find(user => user.email === email))).subscribe((user) => {
          this.user = user;
          resolve(this.user);
        }, error => reject(error));
      }
    });
  }
  async getCurrentUser(): Promise<AuthFirebaseUser> {
    const currentUser = auth().currentUser;
    await this.checkForAuthUser(currentUser);
    return await this.getUserByEmail(currentUser.email);
  }
  private async checkForAuthUser(currentUser) {
    if (currentUser.metadata.lastSignInTime === currentUser.metadata.creationTime) {
      const user = new AuthFirebaseUser(currentUser.email, currentUser.displayName, currentUser.photoURL, currentUser.providerId);
      await this.saveUser(currentUser.uid, user);
    } else {
      return;
    }
  }
}
