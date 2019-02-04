import { PageSportSelfListModule } from './page-sport-self-list.module';

describe('PageSportSelfListModule', () => {
  let pageSportSelfListModule: PageSportSelfListModule;

  beforeEach(() => {
    pageSportSelfListModule = new PageSportSelfListModule();
  });

  it('should create an instance', () => {
    expect(pageSportSelfListModule).toBeTruthy();
  });
});
