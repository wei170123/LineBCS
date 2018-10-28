import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageArticleListComponent } from './page-article-list.component';

describe('PageArticleListComponent', () => {
  let component: PageArticleListComponent;
  let fixture: ComponentFixture<PageArticleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageArticleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageArticleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
