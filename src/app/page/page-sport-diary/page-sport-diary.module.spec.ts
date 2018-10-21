import { PageSportDiaryModule } from './page-sport-diary.module';

describe('PageSportDiaryModule', () => {
  let pageSportDiaryModule: PageSportDiaryModule;

  beforeEach(() => {
    pageSportDiaryModule = new PageSportDiaryModule();
  });

  it('should create an instance', () => {
    expect(pageSportDiaryModule).toBeTruthy();
  });
});
