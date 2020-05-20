import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DividendViewPage } from './dividend-view.page';

describe('DividendViewPage', () => {
  let component: DividendViewPage;
  let fixture: ComponentFixture<DividendViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DividendViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DividendViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
