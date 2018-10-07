import { PageFriendListModule } from './page-friend-list.module';

describe('PageFriendListModule', () => {
  let pageFriendListModule: PageFriendListModule;

  beforeEach(() => {
    pageFriendListModule = new PageFriendListModule();
  });

  it('should create an instance', () => {
    expect(pageFriendListModule).toBeTruthy();
  });
});
