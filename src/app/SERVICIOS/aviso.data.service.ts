import { Injectable } from '@angular/core';
import { AvisoService } from './aviso.service';
import { PaginationService } from './pagination.service';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvisoDataService {

  constructor(
    private _avisoService: AvisoService,
    private _paginationService: PaginationService
  ) { }
  getAvisosPaginados(): Observable<any>{
    return this._paginationService.getPages().pipe(
      switchMap(response => {
        return this._avisoService.getAvisos(response.size, response.index);
      })
    );
  }
}
