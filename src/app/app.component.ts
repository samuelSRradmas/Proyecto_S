import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapaComponent } from './mapa/mapa.component';
import { AvisosComponent } from './avisos/avisos.component';
import { PaginatorComponent } from "./paginator/paginator.component";
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';
import { ZoomService } from './SERVICIOS/zoom.service';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, MapaComponent, AvisosComponent, PaginatorComponent, CommonModule, MatButtonModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatSliderModule, MatMenuModule]
})
export class AppComponent {
  title = 'Proyecto_S';
  public visible: boolean;
  public screenWidth = window.innerWidth;
  constructor(
    private zoomservice: ZoomService
  ) {
    this.visible = true;
  }
  showListado() {
    this.visible = !this.visible;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }
  adjustZoom(level: any) {
    console.log(level)
  }
  onSliderChange(event: any) {
    const valorSlider = +event.target.value;
    this.zoomservice.selectZoom(valorSlider);
  }
}
