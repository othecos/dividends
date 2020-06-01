import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DividendViewListSkeletonComponent } from './dividend-view-list-skeleton.component';

describe('DividendViewListSkeletonComponent', () => {
  let component: DividendViewListSkeletonComponent;
  let fixture: ComponentFixture<DividendViewListSkeletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DividendViewListSkeletonComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DividendViewListSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
