import { Component, OnInit } from '@angular/core';
import { Dividend } from 'src/app/services/dividends/dividends.models';
import { ActivatedRoute } from '@angular/router';
import { DividendsService } from 'src/app/services/dividends/dividends.service';
import { IonicUtilsService } from 'src/app/services/utils/ionic-utils.service';
import { QuotesService } from 'src/app/services/quotes/quotes.service';
import { Quote } from 'src/app/services/quotes/quotes.models';
import { QuoteFactory } from 'src/app/services/quotes/quotes.factory';

@Component({
  selector: 'app-dividend-view',
  templateUrl: './dividend-view.page.html',
  styleUrls: ['./dividend-view.page.scss'],
})
export class DividendViewPage implements OnInit {

  id: string;
  dividend: Dividend;
  on_quote: Quote;
  pn_quote: Quote;
  unit_quote: Quote;
  quotes: Array<Quote>
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
      const dividends = await this.dividendsService.getDividends();
      this.dividend = dividends.find((dividend) => dividend.id === this.id);
      if (this.dividend) {
        this.setQuote(this.dividend.code);
      }
    } catch {}
    await this.ionicUtilsService.dismissLoading();
  }
  ngOnInit() {
  }
  async setQuote(code) {
    try {
      const result = await this.quoteService.searchForQuotePrices([code + '3',code + '4',code + '11']);
      this.quotes = result
    } catch {
    }
  }
  castToNumber(value) {
    return Number(value);
  }

}
