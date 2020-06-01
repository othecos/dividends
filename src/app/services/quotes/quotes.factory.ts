import { QuoteTypes, QUOTE_TYPE, OrdinayQuote, PrefencialQuote, UnitQuote } from './quotes.models';

export class QuoteFactory {
    static create(type: QuoteTypes | string, code: string, price, timestamp: number) {
        switch (type) {
            case QUOTE_TYPE.ON:
                return new OrdinayQuote(code, price, timestamp);
            case QUOTE_TYPE.PN:
                return new PrefencialQuote(code, price, timestamp);
            case QUOTE_TYPE.UNIT:
                return new UnitQuote(code, price, timestamp);
            default:
                return new OrdinayQuote(code, price, timestamp);
        }
    }
}
