import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLinkEffectComponent } from './page-link-effect.component';

describe('PageLinkEffectComponent', () => {
  let component: PageLinkEffectComponent;
  let fixture: ComponentFixture<PageLinkEffectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLinkEffectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLinkEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
