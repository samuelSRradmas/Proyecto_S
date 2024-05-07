import { Injectable, OnInit } from '@angular/core';
import { AvisoService } from './aviso.service';
import { PaginationService } from './pagination.service';
import { BehaviorSubject } from 'rxjs';
import { Aviso } from './Aviso';

@Injectable({
  providedIn: 'root'
})
export class AvisoDataService {
  public avisosPSubjet = new BehaviorSubject<Aviso[]>([]);
  public avisosPObsservable = this.avisosPSubjet.asObservable();
  public size: number;
  public index: number;

  constructor(
    private _avisoService: AvisoService,
    private _paginationService: PaginationService
  ) {
  }
  updateAvisos(): void{
    this._paginationService.getPages().subscribe((response)=>{
      this.size =response.size;
      this.index =response.index;
      this._avisoService.getAvisos(this.size,this.index).subscribe((avisos: Aviso[]) => {
        this.avisosPSubjet.next(avisos);
      });
    } )
  }

}

