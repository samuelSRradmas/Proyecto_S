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
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatRippleModule } from '@angular/material/core';
import { AvisoDataService } from '../SERVICIOS/aviso.data.service';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-avisos',
  standalone: true,
  imports: [CommonModule, MatListModule, MatButtonModule, MatCardModule, MatSidenavModule, MatProgressSpinnerModule, MatTooltipModule, MatIconModule, MatMenuModule, MatRippleModule],
  templateUrl: './avisos.component.html',
  styleUrl: './avisos.component.scss'
})
export class AvisosComponent implements OnInit {
  public length: any;
  public avisosList: Observable<Aviso[]>;
  constructor(
    private _modalService: ModalService,
    private _avisosDataService: AvisoDataService
  ) {
  }
  ngOnInit(): void {
    this.avisosList = this._avisosDataService.avisosPObsservable;
  }
  showDetail(aviso: Aviso) {
    this._modalService.showAviso(aviso);
  }
}
