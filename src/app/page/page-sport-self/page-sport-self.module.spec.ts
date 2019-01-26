import { PageSportSelfModule } from './page-sport-self.module';

describe('PageSportSelfModule', () => {
  let pageSportSelfModule: PageSportSelfModule;

  beforeEach(() => {
    pageSportSelfModule = new PageSportSelfModule();
  });

  it('should create an instance', () => {
    expect(pageSportSelfModule).toBeTruthy();
  });
});
