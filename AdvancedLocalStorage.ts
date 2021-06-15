import { Injectable } from "@angular/core";
import { AESEncryptionService } from "./AESEncryption";

@Injectable({
    providedIn: 'root',
})
export class AdvancedLocalStorage implements Storage{
    private data: any = {};
    
    private secret_key: string = "!!aaabbb@debasco@2021";
    private storeName = "store_";

    constructor(private encryptor : AESEncryptionService) {
        
    }

    get length() : number{
        return this.data.length;
    }

    clear(): void {
        localStorage.clear();
        this.data = {};
    }

    getItem(key: string, encryptKey:string = this.secret_key): string {
        let store = JSON.parse(localStorage.getItem(this.storeName));
        return (!!store && !!store[key]) ? this.encryptor.decryptionAES(store[key], encryptKey) : null;
    }

    key(index: number): string {
        return localStorage.key(index);
    }

    removeItem(key: string): void {
        let store = JSON.parse(localStorage.getItem(this.storeName));
        if (!!store && !!store[key]){
            delete store[key];
        }
        localStorage.setItem(this.storeName, JSON.stringify(store));
    }

    setItem(key: string, value: string, encryptKey:string = this.secret_key): void {
        let store = JSON.parse(sessionStorage.getItem(this.storeName)) || {};
        let encryptedString = this.encryptor.encryptionAES(value, encryptKey);
        store[key] = encryptedString;
        localStorage.setItem(this.storeName, JSON.stringify(store));
    }

    // getItem(key: string, encryptKey:string = this.secret_key): string {
    //     let encryptedString = localStorage.getItem(key);
    //     let value = this.encryptor.decryptionAES(encryptedString, encryptKey);
    //     return value;
    // }

    // removeItem(key: string): void {
    //     localStorage.removeItem(key);
    //     delete this.data[key];
    // }

    // setItem(key: string, value: string, encryptKey:string = this.secret_key): void {
    //     let encryptedString = this.encryptor.encryptionAES(value, encryptKey);
    //     this.data[key] = encryptedString;
    //     localStorage.setItem(key, encryptedString);
    // }

}