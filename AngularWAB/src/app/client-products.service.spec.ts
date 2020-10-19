import { TestBed } from '@angular/core/testing';

import { ClientProductsService } from './formio.service.ts/client-products.service';

describe('ClientProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientProductsService = TestBed.get(ClientProductsService);
    expect(service).toBeTruthy();
  });
});
