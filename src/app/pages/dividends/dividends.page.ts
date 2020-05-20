import { Component, OnInit } from '@angular/core';
import { DividendsService } from 'src/app/services/dividends/dividends.service';
import { Dividend } from 'src/app/services/dividends/dividends.models';
import { Filter, CodeFilter, DateFilter, ValueFilter, FilterType } from './dividends.models';
import { ModalController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { IonicUtilsService } from 'src/app/services/utils/ionic-utils.service';
import { Utils } from 'src/app/classes/utils';
import { DividendsConfigModalPage } from './dividends-config-modal/dividends-config-modal.page';

@Component({
  selector: 'app-dividends',
  templateUrl: './dividends.page.html',
  styleUrls: ['./dividends.page.scss'],
})
export class DividendsPage implements OnInit {
  dividends: Array<Dividend> = [];
  filteredDividends: Array<Dividend> = [];
  filters: Array<Filter> = [];
  constructor(
    private dividendsService: DividendsService,
    public modalController: ModalController,
    private router: Router,
    private route: ActivatedRoute,
    private ionicUtilsSevice: IonicUtilsService
  ) {
   this.setDividends();
  }

  ngOnInit() {
  }
  async setDividends() {
    this.ionicUtilsSevice.presentLoading('Getting data...');
    try {
      this.dividends = await this.dividendsService.getDividends();
      console.log(this.dividends);
      this.setFiltered(this.dividends);
      this.ionicUtilsSevice.dismissLoading();
    } catch  {
      this.ionicUtilsSevice.dismissLoading();
    }
  }
  setFiltered(dividends: Array<Dividend>) {
    this.filteredDividends = dividends;
  }
  onResetFilters() {
    this.filters = [];
    this.updateFilters();
  }
  onRemoveFilter(filter: Filter) {
    if (this.removeFilterByKey(filter.key)) {
      this.updateFilters();
    }
  }
  onSearch(query) {
    this.removeFilterByType('code');
    if (query) {
      this.filters.push(new CodeFilter('code', 'code', query));
    }
    this.updateFilters();

  }
  async updateFilters(filters: Array<Filter> = null) {
    filters = filters ? filters : this.filters;
    if (filters) {
      let filtered = this.dividends.slice();
      filters.forEach((filter) => {
        switch (filter.type) {
          case 'date':
            filtered = filtered.filter((dividend) => {
              let response = false;
              if ((filter as DateFilter).key === 'from' && (filter as DateFilter).key === 'to') {
                response = (dividend[filter.field] as Date).getTime() > (filter as DateFilter).value.getTime() &&
                  (dividend[filter.field] as Date).getTime() < (filter as DateFilter).value.getTime();
              } else if ((filter as DateFilter).key === 'from') {
                response = (dividend[filter.field] as Date).getTime() > (filter as DateFilter).value.getTime();
              } else if ((filter as DateFilter).key === 'to') {
                response = (dividend[filter.field] as Date).getTime() < (filter as DateFilter).value.getTime();
              }
              return response;
            });
            break;
          case 'value':
            filtered = filtered.filter((dividend) => {
              let response = false;
              if ((filter as ValueFilter).key === 'min' && (filter as ValueFilter).key === 'max') {
                response = dividend.value[filter.field] > (filter as ValueFilter).value &&
                  dividend.value[filter.field] < (filter as ValueFilter).value;
              } else if ((filter as ValueFilter).key === 'min') {
                response = dividend.value[filter.field] > (filter as ValueFilter).value;
              } else if ((filter as ValueFilter).key === 'max') {
                response = dividend.value[filter.field] < (filter as ValueFilter).value;
              }
              return response;
            });
            break;
          case 'code':
            filtered = filtered.filter((dividend) => dividend.code.toLowerCase().indexOf(filter.value.toLowerCase()) > -1);
            break;
        }
      });
      this.setFiltered(filtered);
    }
  }
  async onPresentConfigModal() {
    const response = await this.presentFilterAlert();
    const filters = [];
    if (response.data && response.data.values) {
      const values = response.data.values;
      if (values.from) {
        filters.push(new DateFilter('from', 'exDate', Utils.castDateToIonicDateTime(values.from)));
      }
      if (values.to) {
        filters.push(new DateFilter('to', 'exDate', Utils.castDateToIonicDateTime(values.to)));
      }
      if (values.min) {
        filters.push(new ValueFilter('min', 'ON', parseFloat(values.min)));
      }
      if (values.max) {
        filters.push(new ValueFilter('max', 'ON', parseFloat(values.max)));
      }
      this.filters = filters;
      if (this.filters && this.filters.length > 0) { this.updateFilters(this.filters); }
    }

  }
  async presentFilterAlert() {
    const inputs = Filter.castFiltersToInput(this.filters);
    const modal = await this.modalController.create({
      component: DividendsConfigModalPage,
      componentProps: {
        ...inputs
      }
    });
    await modal.present();
    return await modal.onDidDismiss();
  }

  removeFilterByType(type: FilterType) {
    const codeFilterIndex = this.filters.findIndex((filter) => filter.type === type);
    if (codeFilterIndex !== -1) {
      return this.filters.splice(codeFilterIndex, 1);
    } else {
      return;
    }
  }
  removeFilterByKey(key: string) {
    const codeFilterIndex = this.filters.findIndex((filter) => filter.key === key);
    if (codeFilterIndex !== -1) {
      return this.filters.splice(codeFilterIndex, 1);
    } else {
      return;
    }
  }
  async onRefresh() {
    this.ionicUtilsSevice.presentLoading('Refreshing Data');
    try {
      this.dividends = await this.dividendsService.refreshDividends();
    } catch (err) {
      console.error(err);
    }
    this.ionicUtilsSevice.dismissLoading();
  }
  onSelectDividend(dividend: Dividend) {
    if (dividend) {
      this.router.navigate(['dividend-view', dividend.id], {relativeTo: this.route});
    }
  }
}
