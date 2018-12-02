import { TestBed, inject } from '@angular/core/testing';

import { TraceLinkService } from './trace-link.service';

describe('TraceLinkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TraceLinkService]
    });
  });

  it('should be created', inject([TraceLinkService], (service: TraceLinkService) => {
    expect(service).toBeTruthy();
  }));
});
