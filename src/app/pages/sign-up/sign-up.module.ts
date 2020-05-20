import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpPageRoutingModule } from './sign-up-routing.module';

import { SignUpPage } from './sign-up.page';
import { MustMatchDirective } from 'src/app/directives/must-match/must-match.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpPageRoutingModule
  ],
  declarations: [
    SignUpPage,
    MustMatchDirective
  ],
})
export class SignUpPageModule {}
