export class Aviso {
    public address: string;
    public description: string;
    public estimated_final_datetime?: Date;
    public estimated_start_datetime: Date;
    public lat: number;
    public long: number;
    public requested_datetime: Date;
    public service_name: string;
}
export class AvisoAPI {
    public address: string;
    public description: string;
    public estimated_final_datetime: Date;
    public estimated_start_datetime: Date;
    public lat: number;
    public long: number;
    public requested_datetime: Date;
    public service_name: string;
}
export class Page {
    public size:number;
    public index:number;
}
    /*constructor(
        address: string,
        description: string,
        estimated_final_datetime: Date,
        estimated_start_datetime: Date,
        lat: number,
        long: number,
        requested_datetime: Date,
        service_name: string,
    ) { 
        this.address = address;
        this.description = description;
        this.estimated_final_datetime = estimated_final_datetime;
        this.estimated_start_datetime = estimated_start_datetime;
        this.lat = lat;
        this.long = long;
        this.requested_datetime = requested_datetime;
        this.service_name = service_name;
    }
*/