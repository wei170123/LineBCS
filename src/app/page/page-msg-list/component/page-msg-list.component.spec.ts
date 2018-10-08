import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMsgListComponent } from './page-msg-list.component';

describe('PageMsgListComponent', () => {
  let component: PageMsgListComponent;
  let fixture: ComponentFixture<PageMsgListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMsgListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMsgListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
