import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfSPortDialogComponent } from './self-sport-dialog.component';

describe('SelfSPortDialogComponent', () => {
  let component: SelfSPortDialogComponent;
  let fixture: ComponentFixture<SelfSPortDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfSPortDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfSPortDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
