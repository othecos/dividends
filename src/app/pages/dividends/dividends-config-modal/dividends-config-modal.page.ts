import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dividends-config-modal',
  templateUrl: './dividends-config-modal.page.html',
  styleUrls: ['./dividends-config-modal.page.scss'],
})
export class DividendsConfigModalPage implements OnInit {

  @Input() min: number;
  @Input() max: number;
  @Input() from: Date;
  @Input() to: Date;
  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
    console.log(this.min,this.max,this.from,this.to)
  }
  onDismiss(ngForm?: NgForm) {
    if (ngForm) {
      this.modalController.dismiss({
        values: {
          from: this.from,
          to: this.to,
          min: this.min,
          max: this.max
        }
      })
    } else {
      this.modalController.dismiss()
    }
  }


}
