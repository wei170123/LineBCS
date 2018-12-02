import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLinkTracingCreateComponent } from './page-link-tracing-create.component';

describe('PageLinkTracingCreateComponent', () => {
  let component: PageLinkTracingCreateComponent;
  let fixture: ComponentFixture<PageLinkTracingCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLinkTracingCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLinkTracingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
