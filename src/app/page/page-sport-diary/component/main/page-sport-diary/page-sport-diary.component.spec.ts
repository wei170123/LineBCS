import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSportDiaryComponent } from './page-sport-diary.component';

describe('PageSportDiaryComponent', () => {
  let component: PageSportDiaryComponent;
  let fixture: ComponentFixture<PageSportDiaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSportDiaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSportDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
