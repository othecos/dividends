import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DividendComponent } from './dividend.component';

describe('DividendComponent', () => {
  let component: DividendComponent;
  let fixture: ComponentFixture<DividendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DividendComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DividendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
