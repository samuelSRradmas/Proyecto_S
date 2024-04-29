import { Component, OnInit } from '@angular/core';
import { AvisoService } from '../SERVICIOS/aviso.service';
import {MatListModule} from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { Aviso } from '../SERVICIOS/Aviso';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatSelectionListChange } from '@angular/material/list';
import { AnyType } from 'ol/expr/expression';
import { ModalService } from '../SERVICIOS/modal.service';
import { PaginationService } from '../SERVICIOS/pagination.service';

@Component({
  selector: 'app-avisos',
  standalone: true,
  imports: [CommonModule,MatListModule,MatButtonModule,MatCardModule],
  templateUrl: './avisos.component.html',
  styleUrl: './avisos.component.scss'
})
export class AvisosComponent implements OnInit{
  public page: any;
  public limit :any;
  public avisos: any;
constructor(
  private _avisoService: AvisoService,
  private _modalService : ModalService,
  private _paginationService: PaginationService
){
  this.avisos=[];
}
ngOnInit(): void {
  this.getAvisos();
}
getAvisos(){
  this._paginationService.getPages().subscribe(
    response=>{
      this.limit=response.size;
      this.page=response.index;
       this._avisoService.getAvisos(this.limit, this.page).subscribe(
    response=>{
      this.avisos= response;
    },
    error=>{console.log(error)}
  )
    },error=>{
      console.log(error);
    }
  )
}
showDetail(aviso: any){
  this._modalService.showAviso(aviso);
}

}
