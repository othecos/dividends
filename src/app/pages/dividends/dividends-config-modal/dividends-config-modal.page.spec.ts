import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DividendsConfigModalPage } from './dividends-config-modal.page';

describe('DividendsConfigModalPage', () => {
  let component: DividendsConfigModalPage;
  let fixture: ComponentFixture<DividendsConfigModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DividendsConfigModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DividendsConfigModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
