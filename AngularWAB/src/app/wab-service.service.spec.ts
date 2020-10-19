import { TestBed } from '@angular/core/testing';

import { WABServiceService } from './wab-service.service';

describe('WABServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WABServiceService = TestBed.get(WABServiceService);
    expect(service).toBeTruthy();
  });
});
