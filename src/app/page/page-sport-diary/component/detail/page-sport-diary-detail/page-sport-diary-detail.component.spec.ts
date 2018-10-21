import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSportDiaryDetailComponent } from './page-sport-diary-detail.component';

describe('PageSportDiaryDetailComponent', () => {
  let component: PageSportDiaryDetailComponent;
  let fixture: ComponentFixture<PageSportDiaryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSportDiaryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSportDiaryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
