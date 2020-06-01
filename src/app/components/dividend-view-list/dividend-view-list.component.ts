import { Component, OnInit, Input } from '@angular/core';
import { Dividend } from 'src/app/services/dividends/dividends.models';
import { Quote, QUOTE_TYPE } from 'src/app/services/quotes/quotes.models';
import { IonicUtilsService } from 'src/app/services/utils/ionic-utils.service';

@Component({
  selector: 'app-dividend-view-list',
  templateUrl: './dividend-view-list.component.html',
  styleUrls: ['./dividend-view-list.component.scss'],
})
export class DividendViewListComponent implements OnInit {
  private _quotes: Array<Quote>;

  @Input() dividend: Dividend
  @Input()
  public set quotes(value: Array<Quote>) {
    this._quotes = value;
  }
  public get quotes(): Array<Quote> {
    return this._quotes;
  }

  constructor(
    public ionicUtilsService: IonicUtilsService,
  ) { }

  ngOnInit() { }
  castToNumber(value) {
    return Number(value);
  }
  getYield(dividend: Dividend, quote: Quote) {
    if (dividend && quote) {
      let dividend_value
      if (quote.type == QUOTE_TYPE.ON) {
        dividend_value = dividend.value.ON
      } else if (quote.type == QUOTE_TYPE.PN) {
        dividend_value = dividend.value.PN
      } else {
        return 0;
      }
      return dividend_value / quote.price;
    } else {
      return 0;
    }
  }
  onPresentInformationSelected(key, label) {
    const message = Dividend.getInformation(key);
    this.ionicUtilsService.presentAlert(label, null, message, 'Ok');
  }
}
