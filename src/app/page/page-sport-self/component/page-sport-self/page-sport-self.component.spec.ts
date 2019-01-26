import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSportSelfComponent } from './page-sport-self.component';

describe('PageSportSelfComponent', () => {
  let component: PageSportSelfComponent;
  let fixture: ComponentFixture<PageSportSelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSportSelfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSportSelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
