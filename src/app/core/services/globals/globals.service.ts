import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root'})
export class GlobalsService {
  private G: any;

  constructor() {
    this.G = environment;
  }

  public get(key: string): string {
    return this.G[key];
  }

  public set(key: string, value: string): void {
    this.G[key] = value;
  }
}
