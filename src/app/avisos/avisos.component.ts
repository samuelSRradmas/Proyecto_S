import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { Aviso } from '../SERVICIOS/Aviso';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ModalService } from '../SERVICIOS/modal.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatRippleModule} from '@angular/material/core';
import { AvisoDataService } from '../SERVICIOS/aviso.data.service';

@Component({
  selector: 'app-avisos',
  standalone: true,
  imports: [CommonModule, MatListModule, MatButtonModule, MatCardModule, MatSidenavModule, MatProgressSpinnerModule,MatTooltipModule,MatIconModule,MatMenuModule, MatRippleModule],
  templateUrl: './avisos.component.html',
  styleUrl: './avisos.component.scss'
})
export class AvisosComponent implements OnInit {
  public page: number;
  public limit: number;
  public avisos: Array<Aviso>;
  public visible: boolean;
  constructor(
    private _modalService: ModalService,
    private _avisoDataService: AvisoDataService
  ) {
    this.avisos = [];
    this.visible = true;
    this.page=1;
    this.limit=20;
  }
  ngOnInit(): void {
    this.getAvisos();
  }
  getAvisos() {
    this._avisoDataService.getAvisosPaginados().subscribe(
      response => {
        this.avisos= response;
          },
          error => { console.log(error) }
        )
  }
  showDetail(aviso: Aviso) {
    this._modalService.showAviso(aviso);
  }

}
