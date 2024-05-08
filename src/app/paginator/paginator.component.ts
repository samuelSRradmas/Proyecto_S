import { Component, OnInit } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AvisoDataService } from '../SERVICIOS/aviso.data.service';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [MatPaginatorModule,CommonModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss'
})
export class PaginatorComponent {
  public limit=10;

  constructor(
    private _avisosDataService: AvisoDataService) {
  }
  change($e: any) {

   this._avisosDataService.updateAvisos($e.pageSize,$e.pageIndex);
   this.limit=$e.pageSize;
  }
}
