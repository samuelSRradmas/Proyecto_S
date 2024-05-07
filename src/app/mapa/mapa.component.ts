import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Feature, Map } from 'ol';
import View from 'ol/View.js';
import OSM from 'ol/source/OSM.js';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import { Icon, Style } from 'ol/style.js';
import { OGCMapTile, Vector as VectorSource } from 'ol/source.js';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer.js';
import { ModalService } from '../SERVICIOS/modal.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Aviso } from '../SERVICIOS/Aviso';

import { ZoomService } from '../SERVICIOS/zoom.service';
import { Observable } from 'rxjs';
import { AvisoDataService } from '../SERVICIOS/aviso.data.service';


@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.scss'
})
export class MapaComponent implements AfterViewInit {
  public mapa!: Map;
  public point!: Feature;
  public zoom!: number;
  public avisos: Aviso[];
  constructor(
    private _modalService: ModalService,
    private _avisosDataService: AvisoDataService,
    private _zoomService: ZoomService
  ) {

  }

  ngOnInit() {
    this._avisosDataService.avisosPObsservable.subscribe((avisos: Aviso[]) => {
      this.avisos = avisos;
      this.drawPoints(this.avisos);
    });
  }
  ngAfterViewInit(): void {
    this.createMap();
    this.getZoom();

  }
  createMap() {
    this.mapa = new Map({
      layers: [
        new TileLayer({ source: new OSM() }),
      ],
      view: new View({
        center: fromLonLat([-3.6467410996556, 40.536085123544]),
        zoom: this.zoom,
      }),
      target: 'map',
    });
    this.mapa.on('click',
      (event) => { this.mapa.forEachFeatureAtPixel(event.pixel, (feature) => { let data = feature.getProperties(); this.showModal(data['aviso']); }) }
    )
  }

  drawPoint(aviso: Aviso) {

    const iconStyle = new Style({
      image: new Icon({
        width: 30,
        height: 30,
        src: '../assets/img/icono.png'
      })
    });

    const iconFeature = new Feature({
      geometry: new Point(fromLonLat([aviso.long, aviso.lat])),
      aviso: aviso
    });

    iconFeature.setStyle(iconStyle);

    const vectorSource = new VectorSource({ features: [iconFeature] });

    const vectorLayer = new VectorLayer({ source: vectorSource });

    this.mapa.addLayer(vectorLayer);
  }


  showModal(aviso: Aviso) {
    this._modalService.showAviso(aviso);
  }
  deletePoints() {
    let points = this.mapa.getAllLayers();
    points.forEach(point => {
      if (point instanceof VectorLayer) {
        this.mapa.removeLayer(point);
      }
    });
  }
  drawPoints(avisos: Array<Aviso>) {
    if (this.mapa) {
      this.deletePoints()
    };
    for (let i = 0; i < avisos.length; i++) {
      var aviso = avisos[i];
      this.drawPoint(aviso);
    }
  }
  getZoom() {
    this._zoomService.getZoom().subscribe(
      response => {
        this.zoom = response;
        this.mapa.getView().setZoom(this.zoom);
      }, error => {
        console.log(error);
      }
    )
  }

}
