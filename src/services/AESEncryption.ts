import { AES, enc } from 'crypto-ts';


export class AESEncryptionService {

    private secret_key:string = "testingAESEncryptionDecryption";

    constructor(){

    }

    encryptionAES(value: any, key:string = this.secret_key): string {
        let data = (typeof value == 'object') ? JSON.stringify(value) : value;
        const encryptedMessage = AES.encrypt(data, key).toString();
        return encryptedMessage;
    }

    decryptionAES(value: any, key:string = this.secret_key): any{
        let bytes  = AES.decrypt(value.toString(), key);
        let plaintext = bytes.toString(enc.Utf8);
        return plaintext;
    }

}