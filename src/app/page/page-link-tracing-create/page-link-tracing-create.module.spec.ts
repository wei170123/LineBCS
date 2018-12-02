import { PageLinkTracingCreateModule } from './page-link-tracing-create.module';

describe('PageLinkTracingCreateModule', () => {
  let pageLinkTracingCreateModule: PageLinkTracingCreateModule;

  beforeEach(() => {
    pageLinkTracingCreateModule = new PageLinkTracingCreateModule();
  });

  it('should create an instance', () => {
    expect(pageLinkTracingCreateModule).toBeTruthy();
  });
});
