import { PageLinkTracingListModule } from './page-link-tracing-list.module';

describe('PageLinkTracingListModule', () => {
  let pageLinkTracingListModule: PageLinkTracingListModule;

  beforeEach(() => {
    pageLinkTracingListModule = new PageLinkTracingListModule();
  });

  it('should create an instance', () => {
    expect(pageLinkTracingListModule).toBeTruthy();
  });
});
