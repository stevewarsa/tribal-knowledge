import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private _url: string = "/api/v1/";

  constructor(private httpService: HttpClient) { }

  public getUsers(): Observable<any[]> {
    return this.httpService.get<any[]>(`${this._url}users`);
  }
}
