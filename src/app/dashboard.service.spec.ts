import { TestBed, inject } from '@angular/core/testing';

import { DashboardService } from './dashboard.service';

describe('DashboardserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardService]
    });
  });

  it('should be created', inject([DashboardService], (service: DashboardService) => {
    expect(service).toBeTruthy();
  }));
});
