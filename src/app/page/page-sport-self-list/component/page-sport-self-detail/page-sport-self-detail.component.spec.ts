import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSportSelfDetailComponent } from './page-sport-self-detail.component';

describe('PageSportSelfDetailComponent', () => {
  let component: PageSportSelfDetailComponent;
  let fixture: ComponentFixture<PageSportSelfDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSportSelfDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSportSelfDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
