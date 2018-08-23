import { TestBed, inject } from '@angular/core/testing';

import { TokenIntercepterService } from './token-intercepter.service';

describe('TokenIntercepterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenIntercepterService]
    });
  });

  it('should be created', inject([TokenIntercepterService], (service: TokenIntercepterService) => {
    expect(service).toBeTruthy();
  }));
});
