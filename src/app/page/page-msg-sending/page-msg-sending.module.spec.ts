import { PageMsgSendingModule } from './page-msg-sending.module';

describe('PageMsgSendingModule', () => {
  let pageMsgSendingModule: PageMsgSendingModule;

  beforeEach(() => {
    pageMsgSendingModule = new PageMsgSendingModule();
  });

  it('should create an instance', () => {
    expect(pageMsgSendingModule).toBeTruthy();
  });
});
