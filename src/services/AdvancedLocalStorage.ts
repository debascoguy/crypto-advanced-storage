import { AESEncryptionService } from "./AESEncryption";

export class AdvancedLocalStorage implements Storage {
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
        localStorage.clear();
        this.data = {};
    }

    getItem(key: string, encryptKey:string = this.secret_key): string | null {
        let data = localStorage.getItem(this.storeName);
        if (!!data) {
            let store = JSON.parse(data);
            return (!!store && !!store[key]) ? this.encryptor.decryptionAES(store[key], encryptKey) : null;
        }
        return null;
    }

    key(index: number): string | null {
        return localStorage.key(index);
    }

    removeItem(key: string): void {
        let data = localStorage.getItem(this.storeName);
        if (!!data) {
            let store = JSON.parse(data);
            if (!!store && !!store[key]){
                delete store[key];
            }
            localStorage.setItem(this.storeName, JSON.stringify(store));
        }        
    }

    setItem(key: string, value: string, encryptKey:string = this.secret_key): void {
        let data = localStorage.getItem(this.storeName);
        let store = !!data ? JSON.parse(data)  : {};
        let encryptedString = this.encryptor.encryptionAES(value, encryptKey);
        store[key] = encryptedString;
        localStorage.setItem(this.storeName, JSON.stringify(store));
    }
}