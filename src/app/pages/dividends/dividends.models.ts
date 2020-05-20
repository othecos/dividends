import { Utils } from 'src/app/classes/utils';

export type FilterType = 'date' | 'value' | 'code';
export interface Filter {
    key: string;
    type: FilterType;
}
export interface Sort {
    key: string;
    value: 'asc' | 'desc';
}

export class Filter implements Filter {
    field: string;
    key: string;
    type: FilterType;
    value: any;
    constructor(key: string, field: string, type: FilterType) {
        this.field = field;
        this.key = key;
        this.type = type;
    }
    static castFiltersToInput(filters) {
        let input = {};

        const arrayFilter = filters.map((filter) => {
            let value;
            if (filter.type === 'date') {
                value = Utils.getIonicFormatDate(filter.value);
            } else {
                value = filter.value;
            }
            return { [filter.key]: value };
        });

        input = arrayFilter.reduce((result, item) => {
            const key = Object.keys(item)[0];
            result[key] = item[key];
            return result;
        }, {});

        return input;
    }
}
export class DateFilter extends Filter {
    value: Date;
    constructor(key: string, field: string, value: Date = null) {
        super(key, field, 'date');
        if (value) { this.value = value; }
    }
}
export class ValueFilter extends Filter {
    value: number;
    constructor(key: string, field: string, value: number) {
        super(key, field, 'value');
        if (typeof value === 'number') { this.value = value; }
    }
}
export class CodeFilter extends Filter {
    value: string;
    constructor(key: string, field: string, value: string) {
        super(key, field, 'code');
        if (typeof value == 'string') { this.value = value; }
    }
}
