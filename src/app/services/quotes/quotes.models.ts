export class Quote{
    code: string;
    price: any
    date: Date
    constructor( code: string,price,timestamp:number){
       this.code = code
       this.price = price ?  Number(price.trim().replace(',','.')): 0;
       this.date = new Date(timestamp)
    }
}