import { PageFriendEffectModule } from './page-friend-effect.module';

describe('PageFriendEffectModule', () => {
  let pageFriendEffectModule: PageFriendEffectModule;

  beforeEach(() => {
    pageFriendEffectModule = new PageFriendEffectModule();
  });

  it('should create an instance', () => {
    expect(pageFriendEffectModule).toBeTruthy();
  });
});
