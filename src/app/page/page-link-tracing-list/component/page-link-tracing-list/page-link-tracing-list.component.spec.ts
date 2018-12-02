import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLinkTracingListComponent } from './page-link-tracing-list.component';

describe('PageLinkTracingListComponent', () => {
  let component: PageLinkTracingListComponent;
  let fixture: ComponentFixture<PageLinkTracingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLinkTracingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLinkTracingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
