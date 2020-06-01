import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Quote } from './quotes.models';
import { URL } from 'src/app/configs/credentials/crendentials';
import { AuthFirebaseService } from '../auth/firebase/auth.firebase.service';
import { getHeaders } from '../dividends/dividends.models';
import { QuoteFactory } from './quotes.factory';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(
    private http: HttpClient,
    private authFirebaseService: AuthFirebaseService
  ) { }
  private getParams(stocksCodes){
    let params = new HttpParams();
    for (let index = 0; index < stocksCodes.length; index++) {
      const code = stocksCodes[index];
      params = params.append('codes[]', code);
    }
    return params
  }
  async generateHeaders(){
    const token = await this.authFirebaseService.generateIdToken()
    return getHeaders(token)
  }
  async searchForQuotePrices(stocksCodes: Array<string>): Promise<any> {
    let params = this.getParams(stocksCodes)
    const headers = await this.generateHeaders()
    headers['params'] = params
    return this.http.get(`${URL}/stocks/quotes/`, headers).pipe(map((prices: Array<any>) => {
      return prices.map((price) => {
        return QuoteFactory.create(
          price.type,
          price.code,
          price.price,
          price.timestamp,
        );
      });
    })).toPromise();
  }
}
