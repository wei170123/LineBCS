import { TestBed, inject } from '@angular/core/testing';

import { MsgSendService } from './msg-send.service';

describe('MsgSendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MsgSendService]
    });
  });

  it('should be created', inject([MsgSendService], (service: MsgSendService) => {
    expect(service).toBeTruthy();
  }));
});
