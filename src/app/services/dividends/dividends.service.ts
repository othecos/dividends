import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Dividend, getHeaders } from './dividends.models';
import { URL } from 'src/app/configs/credentials/crendentials';
import { AuthFirebaseService } from '../auth/firebase/auth.firebase.service';
@Injectable({
  providedIn: 'root'
})
export class DividendsService {

  dividends: Array<Dividend> = [];
  constructor(
    private http: HttpClient,
    private authFirebaseService: AuthFirebaseService
  ) {
  }
  async getDividends() {
    if (this.dividends && this.dividends.length > 0) {
      return this.dividends;
    } else {
      this.dividends = await this.searchForDividends();
      return this.dividends;
    }
  }
  async generateHeaders(){
    const token = await this.authFirebaseService.generateIdToken()
    return getHeaders(token)
  }
  async refreshDividends() {
    this.dividends = await this.searchForDividends();
    return this.dividends;
  }
  async searchForDividends(): Promise<any> {
    const headers = await this.generateHeaders()
    return this.http.get(`${URL}/dividends/calendar`,headers).pipe(map((dividends: Array<any>) => {
      return dividends.map((dividend) => {
        return new Dividend(
          dividend.code,
          dividend.date_aproval,
          dividend.payment_type,
          dividend.date_ex,
          dividend.date_com,
          dividend.date_payment,
          dividend.value);
      }).sort((a, b) => {
        return b.exDate.getTime() - a.exDate.getTime();
      });
    })).toPromise();
  }
}
