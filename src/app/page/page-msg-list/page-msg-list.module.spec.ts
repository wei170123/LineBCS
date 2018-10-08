import { PageMsgListModule } from './page-msg-list.module';

describe('PageMsgListModule', () => {
  let pageMsgListModule: PageMsgListModule;

  beforeEach(() => {
    pageMsgListModule = new PageMsgListModule();
  });

  it('should create an instance', () => {
    expect(pageMsgListModule).toBeTruthy();
  });
});
