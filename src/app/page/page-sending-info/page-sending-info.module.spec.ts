import { PageSendingInfoModule } from './page-sending-info.module';

describe('PageSendingInfoModule', () => {
  let pageSendingInfoModule: PageSendingInfoModule;

  beforeEach(() => {
    pageSendingInfoModule = new PageSendingInfoModule();
  });

  it('should create an instance', () => {
    expect(pageSendingInfoModule).toBeTruthy();
  });
});
