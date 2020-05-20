import { Component, OnInit } from '@angular/core';
import { Dividend } from 'src/app/services/dividends/dividends.models';
import { ActivatedRoute } from '@angular/router';
import { DividendsService } from 'src/app/services/dividends/dividends.service';
import { IonicUtilsService } from 'src/app/services/utils/ionic-utils.service';
import { QuotesService } from 'src/app/services/quotes/quotes.service';
import { Quote } from 'src/app/services/quotes/quotes.models';

@Component({
  selector: 'app-dividend-view',
  templateUrl: './dividend-view.page.html',
  styleUrls: ['./dividend-view.page.scss'],
})
export class DividendViewPage implements OnInit {

  id: string;
  dividend: Dividend;
  quote: Quote;
  isLoading = false;
  constructor(
    private route: ActivatedRoute,
    private dividendsService: DividendsService,
    public ionicUtilsService: IonicUtilsService,
    private quoteService: QuotesService
  ) {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.loadDividendById();
    });
  }
  async loadDividendById() {
    try {
      this.isLoading = true
      await this.ionicUtilsService.presentLoading()
      const dividends = await this.dividendsService.getDividends();
      this.dividend = dividends.find((dividend) => dividend.id === this.id);
      if (this.dividend) {
        this.setQuote(this.dividend.code);
      }
    } catch {}
    await this.ionicUtilsService.dismissLoading();
    this.isLoading = false;
  }
  ngOnInit() {
  }
  async setQuote(code) {
    try {
      const result = await this.quoteService.searchForQuotePrices([code + '3']);
      this.quote = result[0];
      console.log(result, this.quote);
    } catch {
    }
  }
  castToNumber(value) {
    return Number(value);
  }
  getYield() {
    if (this.dividend && this.quote) {
      return this.dividend.value.ON / this.quote.price
    } else {
      return 0;
    }
  }
  onPresentInformationSelected(key, label) {
    const message = Dividend.getInformation(key);
    this.ionicUtilsService.presentAlert(label, null, message, 'Ok');
  }

}
