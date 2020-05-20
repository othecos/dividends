export class Page {
    title: string;
    route: string;
    iconName: string;
    constructor(title, route, iconName) {
        this.title = title;
        this.route = route;
        this.iconName = iconName;
    }
}
export const pages:Array<Page> = [
    new Page('Dividends','/dividends','cash'),
] 
