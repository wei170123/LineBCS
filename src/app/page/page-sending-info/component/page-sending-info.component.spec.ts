import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSendingInfoComponent } from './page-sending-info.component';

describe('PageSendingInfoComponent', () => {
  let component: PageSendingInfoComponent;
  let fixture: ComponentFixture<PageSendingInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSendingInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSendingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
