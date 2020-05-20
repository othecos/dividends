import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DividendsPage } from './dividends.page';

describe('DividendsPage', () => {
  let component: DividendsPage;
  let fixture: ComponentFixture<DividendsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DividendsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DividendsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
