import { TestBed } from '@angular/core/testing';

import { OurProductsServiceService } from './sevices/our-products-service.service';

describe('OurProductsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OurProductsServiceService = TestBed.get(OurProductsServiceService);
    expect(service).toBeTruthy();
  });
});
