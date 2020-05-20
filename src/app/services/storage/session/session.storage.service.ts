import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }
  public save(key: string, value: any): void {
    try {
      sessionStorage.setItem(key, JSON.stringify(value));
    } catch {
      throw {error: 'Failed to set ${key} to the local storage'};
    }
  }
  public load(key: string): any {
    try {
      return JSON.parse(sessionStorage.getItem(key));
    } catch {
      throw {error: 'Failed to get ${key} from the local storage'};
    }
  }
}
