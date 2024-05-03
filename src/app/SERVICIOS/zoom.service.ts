import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZoomService {
  private zoomB = new BehaviorSubject<number> (12);
  private zoomObs= this.zoomB.asObservable();
  constructor() { }
  selectZoom(zoom:number){
    this.zoomB.next(zoom);
  }
  getZoom(): Observable <number>{
    return this.zoomObs;
  }
}