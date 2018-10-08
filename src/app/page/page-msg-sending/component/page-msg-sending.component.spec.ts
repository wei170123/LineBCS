import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMsgSendingComponent } from './page-msg-sending.component';

describe('PageMsgSendingComponent', () => {
  let component: PageMsgSendingComponent;
  let fixture: ComponentFixture<PageMsgSendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMsgSendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMsgSendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
