import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { Aviso } from '../SERVICIOS/Aviso';

@Component({

  selector: 'app-modal-aviso',
  templateUrl: './modal-aviso.component.html',
  styleUrl: './modal-aviso.component.scss',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, DatePipe],

})
export class ModalAvisoComponent {
  public aviso: Aviso;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.aviso = data.aviso;
  }
}
