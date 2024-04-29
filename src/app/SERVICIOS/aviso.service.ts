import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { global } from './global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvisoService {
  public url:string;
  public avisos_list: any;
  constructor (
  private http: HttpClient,

  ) { 
    this.url=global.url
  }
  getAvisos(limit:any,page:any): Observable <any>{
    return this.http.get(this.url+'requests?limit='+limit+'&page='+page);
  }
}
