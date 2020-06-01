export const QUOTE_TYPE = {
    UNIT: 'unit',
    PN: 'pn',
    ON: 'on'
};
export type QuoteTypes = 'unit' | 'on' | 'pn';
export class Quote {
    type: QuoteTypes | string;
    code: string;
    price: any;
    date: Date;
    constructor(type: QuoteTypes | string, code: string, price, timestamp: number) {
       this.type = type;
       this.code = code;
       this.price = price ?  Number(price.trim().replace(',', '.')) : 0;
       this.date = new Date(timestamp);
    }
}
export class PrefencialQuote extends Quote {
    constructor( code: string, price, timestamp: number) {
       super(QUOTE_TYPE.PN, code, price, timestamp);
    }
}
export class OrdinayQuote extends Quote {
    constructor( code: string, price, timestamp: number) {
       super(QUOTE_TYPE.ON, code, price, timestamp);
    }
}
export class UnitQuote extends Quote {
    constructor( code: string, price, timestamp: number) {
       super(QUOTE_TYPE.UNIT, code, price, timestamp);
    }
}

