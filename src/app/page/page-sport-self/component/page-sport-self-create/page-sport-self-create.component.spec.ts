import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSportSelfCreateComponent } from './page-sport-self-create.component';

describe('PageSportSelfCreateComponent', () => {
  let component: PageSportSelfCreateComponent;
  let fixture: ComponentFixture<PageSportSelfCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSportSelfCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSportSelfCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
