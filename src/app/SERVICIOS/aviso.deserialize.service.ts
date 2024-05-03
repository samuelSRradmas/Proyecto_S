import { Injectable } from '@angular/core';
import { Aviso, AvisoAPI } from './Aviso';

@Injectable({
  providedIn: 'root'
})
export class AvisoDeserializeService {

  constructor() { }

  deserializeAviso= (avisoAPI : AvisoAPI): Aviso =>{

    let aviso = new Aviso();
    
    aviso.address = avisoAPI.address;
    aviso.description = avisoAPI.description;
    aviso.estimated_final_datetime = avisoAPI.estimated_final_datetime;
    aviso.estimated_start_datetime = avisoAPI.estimated_start_datetime;
    aviso.lat = avisoAPI.lat;
    aviso.long = avisoAPI.long;
    aviso.requested_datetime = avisoAPI.requested_datetime;
    aviso.service_name = avisoAPI.service_name;

    return aviso;
  }
  deserilizeList = (avisos:AvisoAPI[]): Aviso[] => {
    return avisos.map(this.deserializeAviso);
  }


}
