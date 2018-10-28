import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageArticleCreateComponent } from './page-article-create.component';

describe('PageArticleCreateComponent', () => {
  let component: PageArticleCreateComponent;
  let fixture: ComponentFixture<PageArticleCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageArticleCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageArticleCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
