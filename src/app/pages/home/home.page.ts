import { Component } from '@angular/core';
import { DataService, Message } from '../../services/data.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { AuthFirebaseUser } from 'src/app/services/auth/firebase/auth.firebase.models';
import { pages, Page } from './home.models';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  currentUser:AuthFirebaseUser;
  pageList: Array<Page> = pages.slice();
  constructor(
    private data: DataService,
    private authService: AuthService,
    private router: Router
  ) {
    this.setCurrentUser()
  }
  
  async setCurrentUser() {
    this.currentUser = await this.authService.getCurrentUser()
    console.log(this.currentUser)
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
