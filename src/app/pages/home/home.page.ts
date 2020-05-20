import { Component } from '@angular/core';
import { DataService, Message } from '../../services/data.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { AuthFirebaseUser } from 'src/app/services/auth/firebase/auth.firebase.models';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  currentUser:AuthFirebaseUser;
  constructor(
    private data: DataService,
    private authService: AuthService,
    private router: Router
  ) {
    this.getUser()
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }
  async getUser() {
    (await this.authService.getCurrentUser()).subscribe((user) => {
      this.currentUser = user
      console.log(user)
    })
  }
  async onLogout() {
    try {
      await this.authService.logout();
      this.router.navigate(['/login']);
    } catch (err) {
      console.error(err);
    }
  }
}
