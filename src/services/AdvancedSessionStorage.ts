import { AESEncryptionService } from "./AESEncryption";

export class AdvancedSessionStorage implements Storage{

    private data: any = {};
    
    private secret_key: string = "!!aaabbb@debasco@2021";
    private storeName = "store_";

    private encryptor : AESEncryptionService;

    constructor() {
        this.encryptor = new AESEncryptionService();
    }

    get length() : number{
        return this.data.length;
    }

    clear(): void {
        sessionStorage.clear();
        this.data = {};
    }

    
    getItem(key: string, encryptKey:string = this.secret_key): string | null {
        let data = sessionStorage.getItem(this.storeName);
        if (!!data) {
            let store = JSON.parse(data);
            return (!!store && !!store[key]) ? this.encryptor.decryptionAES(store[key], encryptKey) : null;
        }
        return null;
    }

    key(index: number): string | null {
        return sessionStorage.key(index);
    }

    removeItem(key: string): void {
        let data = sessionStorage.getItem(this.storeName);
        if (!!data) {
            let store = JSON.parse(data);
            if (!!store && !!store[key]){
                delete store[key];
            }
            sessionStorage.setItem(this.storeName, JSON.stringify(store));
        }        
    }

    setItem(key: string, value: string, encryptKey:string = this.secret_key): void {
        let data = sessionStorage.getItem(this.storeName);
        let store = !!data ? JSON.parse(data)  : {};
        let encryptedString = this.encryptor.encryptionAES(value, encryptKey);
        store[key] = encryptedString;
        sessionStorage.setItem(this.storeName, JSON.stringify(store));
    }

}