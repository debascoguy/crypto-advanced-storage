import { NgModule } from '@angular/core';
import { AESEncryptionService } from '../services/AESEncryption';
import { AdvancedLocalStorage } from '../services/AdvancedLocalStorage';
import { AdvancedSessionStorage} from '../services/AdvancedSessionStorage';
import { CryptoAdvancedStorageComponent } from './crypto-advanced-storage.component';

export { AdvancedLocalStorage } from '../services/AdvancedLocalStorage';
export { AdvancedSessionStorage } from '../services/AdvancedSessionStorage';
export { AESEncryptionService } from '../services/AESEncryption';

export var encryptor: AESEncryptionService = new AESEncryptionService();
export var advancedSessionStorage: AdvancedSessionStorage = new AdvancedSessionStorage();
export var advancedLocalStorage: AdvancedLocalStorage = new AdvancedLocalStorage();

@NgModule({
  declarations: [CryptoAdvancedStorageComponent],
  imports: [],
  exports: [CryptoAdvancedStorageComponent],
  providers:[
    AESEncryptionService,
    AdvancedSessionStorage,
    AdvancedLocalStorage
  ]
})
export class CryptoAdvancedStorageModule { }
