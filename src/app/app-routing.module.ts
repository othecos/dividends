import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin} ,
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  {
    path: 'message/:id',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin},
    loadChildren: () => import('./pages/view-message/view-message.module').then( m => m.ViewMessagePageModule)
  },
  {
    path: 'login',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToHome},
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'sign-up',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToHome},
    loadChildren: () => import('./pages/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  { path: '**', redirectTo: 'home' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
