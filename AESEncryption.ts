import { Injectable } from "@angular/core";
import { AES } from 'crypto-ts';

@Injectable({
    providedIn: 'root',
})
export class AESEncryptionService {

    private secret_key:string = "testingAESEncryptionDecryption";

    constructor(){

    }

    encryptionAES(value: any, key:string = this.secret_key): string {
        const encryptedMessage = AES.encrypt(value, key).toString();
        return encryptedMessage;
    }

    decryptionAES(value: string, key:string = this.secret_key): any{
        const decryptedCipher = AES.decrypt(value, key).toString();
        return decryptedCipher;
    }

}