import { PageGroupCreateModule } from './page-group-create.module';

describe('PageGroupCreateModule', () => {
  let pageGroupCreateModule: PageGroupCreateModule;

  beforeEach(() => {
    pageGroupCreateModule = new PageGroupCreateModule();
  });

  it('should create an instance', () => {
    expect(pageGroupCreateModule).toBeTruthy();
  });
});
