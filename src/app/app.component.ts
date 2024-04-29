import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapaComponent } from './mapa/mapa.component';
import { AvisosComponent } from './avisos/avisos.component';
import { PaginatorComponent } from "./paginator/paginator.component";
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, MapaComponent, AvisosComponent, PaginatorComponent, CommonModule]
})
export class AppComponent {
  title = 'Proyecto_S';
  public visible: boolean;
  public screenWidth=window.innerWidth;
  constructor() {
    this.visible = true;
  }
  showListado() {
    this.visible = !this.visible;
  }
  @HostListener('window:resize',['$event'])
  onResize(event:any){
    this.screenWidth=window.innerWidth;
  }
}
