import { TestBed } from '@angular/core/testing';

import { WABServicesService } from './wab-services.service';

describe('WABServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WABServicesService = TestBed.get(WABServicesService);
    expect(service).toBeTruthy();
  });
});
