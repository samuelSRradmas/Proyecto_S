export class Aviso {
    public address: string;
    public address_string: string;
    public comments_count: number;
    public complaints_count: number;
    public current_node_estimated_final_datetime: Date;
    public current_node_estimated_start_datetime: Date;
    public description: string;
    public estimated_final_datetime: Date;
    public estimated_start_datetime: Date;
    public evaluation: number;
    public jurisdiction_element: any;
    public jurisdiction_id: string;
    public lat: number;
    public long: number;
    public reiterations_count: number;
    public requested_datetime: Date;
    public service_icon: string;
    public service_id: string;
    public service_name: string;
    public service_request_id: string;
    public status_node: any;
    public status_node_type: string;
    public tags: any;
    public token: string;
    public typology: any;
    public worknotes_count: number;
    constructor(
        address: string,
        address_string: string,
        comments_count: number,
        complaints_count: number,
        current_node_estimated_final_datetime: Date,
        current_node_estimated_start_datetime: Date,
        description: any,
        estimated_final_datetime: Date,
        estimated_start_datetime: Date,
        evaluation: number,
        jurisdiction_element: any,
        jurisdiction_id: string,
        lat: number,
        long: number,
        reiterations_count: number,
        requested_datetime: Date,
        service_icon: string,
        service_id: string,
        service_name: string,
        service_request_id: string,
        status_node: any,
        status_node_type: string,
        tags: any,
        token: string,
        typology: any,
        worknotes_count: number
    ) { 
        this.address = address;
        this.address_string = address_string;
        this.comments_count = comments_count;
        this.complaints_count = complaints_count;
        this.current_node_estimated_final_datetime = current_node_estimated_final_datetime;
        this.current_node_estimated_start_datetime = current_node_estimated_start_datetime;
        this.description = description;
        this.estimated_final_datetime = estimated_final_datetime;
        this.estimated_start_datetime = estimated_start_datetime;
        this.evaluation = evaluation;
        this.jurisdiction_element = jurisdiction_element;
        this.jurisdiction_id = jurisdiction_id;
        this.lat = lat;
        this.long = long;
        this.reiterations_count = reiterations_count;
        this.requested_datetime = requested_datetime;
        this.service_icon = service_icon;
        this.service_id = service_id;
        this.service_name = service_name;
        this.service_request_id = service_request_id;
        this.status_node = status_node;
        this.status_node_type = status_node_type;
        this.tags = tags;
        this.token = token;
        this.typology = typology;
        this.worknotes_count = worknotes_count;
    }

}
