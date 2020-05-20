export class Utils {
    public static generateId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }
}
