import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IHotel } from '../hotels/hotel.interfaces';

const url: string = './api/hotels.json'; // 'http://hotels.api/hotels'; 

@Injectable()
export class DataService {

    hotels: IHotel[];

    constructor(private http: Http) { }

    getProjectName() {
        return 'Angular 2 Hotels';
    }

    // get Hotels API - will return an Observable
    getFlights(): Observable<IHotel[]> {
        if (!this.hotels) {
            return this.http.get(url).map(
                (res: Response) => {
                    this.hotels = res.json();
                    return this.hotels;
                })
                .catch(this.handleError);
        } else {
            //return cached data
            return this.createObservable(this.hotels);
        }
    }

    private createObservable(data: any): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next(data);
            observer.complete();
        });
    }

    private handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }


}