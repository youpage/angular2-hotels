import { Component, OnInit, Input } from '@angular/core';

import { IHotel }  from '../hotel.interfaces';

@Component({
    moduleId: module.id,
    selector: 'hotel',
    templateUrl: 'hotel.template.html'
})
export class HotelComponent implements OnInit {
    @Input()
    item: IHotel = null;

    constructor() { }

    ngOnInit() { }
}