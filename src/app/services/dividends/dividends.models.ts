import { Utils } from 'src/app/classes/utils';
import { HttpHeaders } from '@angular/common/http';

export interface DividendValue {
    ON: number;
    PN: number;
}
export class Dividend {
    id: string;
    code: string;
    aprovalDate: Date;
    comDate: Date;
    paymentType: string;
    exDate: Date;
    paymentDate: Date;
    value: DividendValue;
    constructor(code, aprovalDate, paymentType, exDate, comDate, paymentDate, value: { ON: string, PN: string }) {
        this.id = Dividend.generateID(code, new Date(exDate));
        this.code = code;
        this.aprovalDate = new Date(aprovalDate);
        this.paymentType = paymentType;
        this.exDate = new Date(exDate);
        this.comDate = new Date(comDate);
        this.paymentDate = new Date(paymentDate);
        this.value = {
            ON: parseFloat(value.ON),
            PN: parseFloat(value.PN)
        };
    }
    static generateID(code, exDate) {
        return `${code}_${exDate.getTime()}`;
    }
    static getInformation(field) {
        switch (field) {
            case 'exDate':
                return 'Data em que perde o direito ao dividendo';
            case 'comDate':
                return 'Ultimo dia para realizar a compra do ativo e ter direito ao dividendo';
            case 'paymentDate':
                return 'Data que a empresa realizara o pagamento';
            default:
                return '';
        }
    }
}
export const getHeaders = (token) => {
    const headerOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'authToken': token
        })
    };
    return headerOptions
}

