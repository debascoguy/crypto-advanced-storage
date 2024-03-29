import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoAdvancedStorageComponent } from './crypto-advanced-storage.component';

describe('CryptoAdvancedStorageComponent', () => {
  let component: CryptoAdvancedStorageComponent;
  let fixture: ComponentFixture<CryptoAdvancedStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CryptoAdvancedStorageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CryptoAdvancedStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
