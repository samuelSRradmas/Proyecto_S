import { Component, OnInit } from '@angular/core';
import { Feature, Map } from 'ol';
import View from 'ol/View.js';
import OSM from 'ol/source/OSM.js';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import { Icon, Style } from 'ol/style.js';
import { OGCMapTile, Vector as VectorSource } from 'ol/source.js';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer.js';
import { ModalService } from '../SERVICIOS/modal.service';
import { AvisoService } from '../SERVICIOS/aviso.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { PaginationService } from '../SERVICIOS/pagination.service';


@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.scss'
})
export class MapaComponent implements OnInit {
  public mapa!: Map;
  public point!: Feature;
  public page: any;
  public limit: any;
  constructor(
    private _modalService: ModalService,
    private _avisosService: AvisoService,
    private _paginationService: PaginationService
  ) {
    this.point = new Feature({
      geometry: new Point(fromLonLat([-3.683333, 40.4]))
    });
  }

  ngOnInit() {
    this.createMap();
    this.getPoints();
  }
  createMap() {
    this.mapa = new Map({
      layers: [
        new TileLayer({ source: new OSM() }),
      ],
      view: new View({
        center: fromLonLat([-3.6467410996556, 40.536085123544]),
        zoom: 11,
      }),
      target: 'map',
    });
    this.mapa.on('click',
      (event) => { this.mapa.forEachFeatureAtPixel(event.pixel, (feature) => { let data = feature.getProperties(); this.showModal(data['aviso']);}) }
    )
  }
  drawPoint(aviso: any) {

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

    const vectorSource = new VectorSource({features: [iconFeature]});

    const vectorLayer = new VectorLayer({source: vectorSource});

    this.mapa.addLayer(vectorLayer);
  }

  getPoints() {
    this._paginationService.getPages().subscribe(
      response=>{
        this.limit=response.size;
        this.page=response.index;
         this._avisosService.getAvisos(this.limit, this.page).subscribe(
      response=>{
        this.deletePoints();
        this.drawPoints(response);
      },
      error=>{console.log(error)}
    )
      },error=>{
        console.log(error);
      }
    )
  }

  showModal(aviso: any) {
    this._modalService.showAviso(aviso);
  }
  deletePoints(){
    let puntos=this.mapa.getAllLayers();
    puntos.forEach(punto => {
      if(punto instanceof VectorLayer) {
        this.mapa.removeLayer(punto);
      }  
    });
  }
  drawPoints(response:any){
    for (let i = 0; i < response.length; i++) {
      var aviso = response[i];
      this.drawPoint(aviso);
    }
  }

}
