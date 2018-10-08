import { PageGroupListModule } from './page-group-list.module';

describe('PageGroupListModule', () => {
  let pageGroupListModule: PageGroupListModule;

  beforeEach(() => {
    pageGroupListModule = new PageGroupListModule();
  });

  it('should create an instance', () => {
    expect(pageGroupListModule).toBeTruthy();
  });
});
