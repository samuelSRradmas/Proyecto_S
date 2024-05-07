import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs';
import { Page } from './Aviso';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  private pagesSubjet = new BehaviorSubject<Page> (new Page ());
  private pagesObservable = this.pagesSubjet.asObservable();
  constructor() { }
  updatePages(pages: Page) {
    this.pagesSubjet.next(pages) ;
  }
  getPages(): Observable <Page>{
    return this.pagesObservable;
  }

  /*updateAvisos(): void{
    this._paginationService.getPages().subscribe((response)=>{
      this.size =response.size;
      this.index =response.index;
      this._avisoService.getAvisos(this.size,this.index).subscribe((avisos: Aviso[]) => {
        this.avisosPSubjet.next(avisos);
      });
    } )*/

  
}
