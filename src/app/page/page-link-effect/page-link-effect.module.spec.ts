import { PageLinkEffectModule } from './page-link-effect.module';

describe('PageLinkEffectModule', () => {
  let pageLinkEffectModule: PageLinkEffectModule;

  beforeEach(() => {
    pageLinkEffectModule = new PageLinkEffectModule();
  });

  it('should create an instance', () => {
    expect(pageLinkEffectModule).toBeTruthy();
  });
});
