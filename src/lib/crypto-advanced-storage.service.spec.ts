import { TestBed } from '@angular/core/testing';

import { CryptoAdvancedStorageService } from './crypto-advanced-storage.service';

describe('CryptoAdvancedStorageService', () => {
  let service: CryptoAdvancedStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptoAdvancedStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
