import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { global } from './global';
import { Observable, map } from 'rxjs';
import { Aviso, AvisoAPI } from './Aviso';
import { AvisoDeserializeService } from './aviso.deserialize.service';

@Injectable({
  providedIn: 'root'
})
export class AvisoService {
  public url: string;
  public avisos_list: Aviso[];

  constructor(
    private http: HttpClient,
    private avisoDeserialize: AvisoDeserializeService
  ) {
    this.url = global.url
  }

  getAvisos(limit:number, page:number): Observable<Aviso[]> {
    return this.http.get<AvisoAPI[]>(this.url + 'requests?limit=' + limit + '&page=' + page).pipe(map(this.avisoDeserialize.deserilizeList));
  }

}


