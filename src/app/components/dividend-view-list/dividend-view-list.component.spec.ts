import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DividendViewListComponent } from './dividend-view-list.component';

describe('DividendViewListComponent', () => {
  let component: DividendViewListComponent;
  let fixture: ComponentFixture<DividendViewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DividendViewListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DividendViewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
