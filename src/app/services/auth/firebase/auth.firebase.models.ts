type GOOGLE = 'google';
type FACEBOOK = 'facebook';
type EMAIL = 'email';

export type FirebaseAuthMethods = GOOGLE | FACEBOOK | EMAIL;

export interface User {
    id: string;
    email: string;
    name: string;
    photoURL: string;
  }

export class AuthFirebaseUser implements User {
    id: string;
    email: string;
    name: string;
    photoURL: string;
    provider: 'email' | 'google' | 'facebook'
    constructor(email, name, photoURL,provider) {
        this.email = email;
        this.name = name;
        this.photoURL = photoURL;
        this.provider = provider;
    }
    setId(id: string) {
        this.id = id;
    }
}
