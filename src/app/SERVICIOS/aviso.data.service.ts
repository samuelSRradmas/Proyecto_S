import { Injectable } from '@angular/core';
import { AvisoService } from './aviso.service';
import { BehaviorSubject} from 'rxjs';
import { Aviso } from './Aviso';

@Injectable({
  providedIn: 'root'
})
export class AvisoDataService {
  public avisosPSubject = new BehaviorSubject<Aviso[]>([]);
  public avisosPObsservable = this.avisosPSubject.asObservable();

  constructor(
    private _avisoService: AvisoService,
  ) {}

  updateAvisos(limit:number, page:number): void {
    this._avisoService.getAvisos(limit,page).subscribe(
      (avisos: Aviso[]) => {
        this.avisosPSubject.next(avisos);
      });
  }
}

