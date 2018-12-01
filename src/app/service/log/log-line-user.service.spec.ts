import { TestBed, inject } from '@angular/core/testing';

import { LogLineUserService } from './log-line-user.service';

describe('LogLineUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogLineUserService]
    });
  });

  it('should be created', inject([LogLineUserService], (service: LogLineUserService) => {
    expect(service).toBeTruthy();
  }));
});
