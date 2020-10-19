import { TestBed } from '@angular/core/testing';

import { ClientProductsServiceService } from './sevices/client-products-service.service';

describe('ClientProductsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientProductsServiceService = TestBed.get(ClientProductsServiceService);
    expect(service).toBeTruthy();
  });
});
