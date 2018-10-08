import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGroupListComponent } from './page-group-list.component';

describe('PageGroupListComponent', () => {
  let component: PageGroupListComponent;
  let fixture: ComponentFixture<PageGroupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageGroupListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
