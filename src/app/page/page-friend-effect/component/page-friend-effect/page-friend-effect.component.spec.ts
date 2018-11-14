import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFriendEffectComponent } from './page-friend-effect.component';

describe('PageFriendEffectComponent', () => {
  let component: PageFriendEffectComponent;
  let fixture: ComponentFixture<PageFriendEffectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFriendEffectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFriendEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
