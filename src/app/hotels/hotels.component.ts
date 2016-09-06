import { Component, OnInit } from '@angular/core';

import { DataService } from '../shared/data.service';
import { IHotel }  from './hotel.interfaces';

declare var event:any; // trick to bybass TS validation

@Component({
    moduleId: module.id, 
    templateUrl: 'hotels.template.html'
})
export class HotelsComponent implements OnInit {

    public hotels:IHotel[];
    public hotels_error: Boolean = false;

    //dual binding fields
    public priceSearch: any = null; 
    public hotelName:string = '';
    public city:string = '';

    constructor(private dataService: DataService) {
        
    }

    ngOnInit() { 
        this.getHotels();
    }

    getHotels(){
        //subscribe to the data service
        this.dataService.getFlights().subscribe(
            data => {
                this.hotels = data;
            },
            err => { this.hotels_error = true }
        )
    }

    addHotel(){
        this.alertDemo(
            `You added the ${this.hotelName} Hotel from ${this.city}!
            But, this is not adding anythig :))`
        );
    }

    public alertDemo(message:string) {
        window.alert(message);
    }

    public onlyNumbers() {
        let key = event.keyCode || event.charCode;
        let target = event.target || event.srcElement || event.currentTarget;        
        if (key != 37 && key != 39)
            target.value = target.value.replace(/[^\d]/g, '');
    }

}
