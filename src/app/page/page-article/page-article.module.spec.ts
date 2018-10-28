import { PageArticleModule } from './page-article.module';

describe('PageArticleModule', () => {
  let pageArticleModule: PageArticleModule;

  beforeEach(() => {
    pageArticleModule = new PageArticleModule();
  });

  it('should create an instance', () => {
    expect(pageArticleModule).toBeTruthy();
  });
});
