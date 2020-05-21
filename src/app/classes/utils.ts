import * as moment from 'moment';
export  class Utils {
    public static generateId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }
    public static getIonicFormatDate(date = undefined){
        return moment(date).format('YYYY-MM-DD')
    }
    static castDateToIonicDateTime(date: string) {
        if (date) {
          const [, year, month, day] = date.match(/([0-9]{4})-([0-9]{2})-([0-9]{2})/);
          return new Date(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10));
        } else {
          return null;
        }
      }
}
