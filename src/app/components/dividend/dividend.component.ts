import { Component, OnInit, Input } from '@angular/core';
import { Dividend } from 'src/app/services/dividends/dividends.models';

@Component({
  selector: 'app-dividend',
  templateUrl: './dividend.component.html',
  styleUrls: ['./dividend.component.scss'],
})
export class DividendComponent implements OnInit {

  @Input() dividend: Dividend;
  constructor() { }

  ngOnInit() {}
  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
  getCurrentDate(){
    return Date.now()
  }

}
