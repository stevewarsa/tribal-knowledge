import { KnowledgebaseEntry } from './knowledgebase-entry';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private _url: string = "/api/v1/";

  constructor(private httpService: HttpClient) { }

  public saveKbEntry(entry: KnowledgebaseEntry): Observable<KnowledgebaseEntry> {
    return this.httpService.post<KnowledgebaseEntry>(`${this._url}addkbentry`, entry);
  }

  public getAllKbEntries(): Observable<KnowledgebaseEntry[]> {
    return this.httpService.get<KnowledgebaseEntry[]>(`${this._url}kbentries`);
  }
}
