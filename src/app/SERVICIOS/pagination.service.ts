import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  private pagesSubjet = new BehaviorSubject<any> (null);
  private pagesObservable = this.pagesSubjet.asObservable();
  constructor() { }
  updatePages(pages: any) {
    this.pagesSubjet.next(pages) ;
  }
  getPages(): Observable <any>{
    return this.pagesObservable;
  }

  
}
