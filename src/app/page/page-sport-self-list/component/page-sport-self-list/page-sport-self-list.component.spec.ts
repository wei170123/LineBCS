import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSportSelfListComponent } from './page-sport-self-list.component';

describe('PageSportSelfListComponent', () => {
  let component: PageSportSelfListComponent;
  let fixture: ComponentFixture<PageSportSelfListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSportSelfListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSportSelfListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
