import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Stat } from '../model/stat';
import { Observable } from 'rxjs/Observable';
 
@Injectable()
export class StatService {
 
  private statUrl: string;
 
  constructor(private http: HttpClient) {
    this.statUrl = 'http://localhost:8081/stat';
  }
 
  public findAll(): Observable<Stat[]> {
    return this.http.get<Stat[]>(this.statUrl);
  }
 
}