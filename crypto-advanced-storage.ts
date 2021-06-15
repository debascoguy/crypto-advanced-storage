import { AdvancedLocalStorage } from "./AdvancedLocalStorage";
import { AdvancedSessionStorage } from "./AdvancedSessionStorage";
import { AESEncryptionService } from "./AESEncryption";

export var encryptor: AESEncryptionService = new AESEncryptionService();
export var advancedSessionStorage: AdvancedSessionStorage = new AdvancedSessionStorage(encryptor);
export var advancedLocalStorage: AdvancedLocalStorage = new AdvancedLocalStorage(encryptor);
