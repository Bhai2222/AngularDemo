import { TestBed } from '@angular/core/testing';

import { OurProductsService } from './our-products.service';

describe('OurProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OurProductsService = TestBed.get(OurProductsService);
    expect(service).toBeTruthy();
  });
});
