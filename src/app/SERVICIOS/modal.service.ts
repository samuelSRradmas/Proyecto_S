import { Component,Injectable} from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { ModalAvisoComponent } from '../modal-aviso/modal-aviso.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    public modalAviso: MatDialog,
  ) { 
  }

  showAviso(aviso:any){
    this.modalAviso.open(ModalAvisoComponent,{data:{aviso}})
  }
}

