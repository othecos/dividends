import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  public save(key: string, value: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      throw {error: 'Failed to set ${key} to the local storage'};
    }
  }
  public delete(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch {
      throw {error: 'Failed to delete ${key} from the local storage'};
    }
  }
  public getItem(key: string): any {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch {
      throw {error: 'Failed to get ${key} from the local storage'};
    }
  }
  public hasItem(key) {
    try {
      const item = this.getItem(key);
      return item != null ;
    } catch (error) {
      return null;
    }
  }
}
