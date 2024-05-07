import { Component,Injectable} from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { ModalAvisoComponent } from '../modal-aviso/modal-aviso.component';
import { Aviso } from './Aviso';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    public modalAviso: MatDialog,
  ) { 
  }

  showAviso(aviso:Aviso){
    this.modalAviso.open(ModalAvisoComponent,{data:{aviso}})
  }
}

