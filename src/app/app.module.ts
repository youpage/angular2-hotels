import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
// components
import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { HotelComponent } from './hotels/hotel/hotel.component';
import { HotelsComponent } from './hotels/hotels.component';
// data service
import { DataService } from './shared/data.service';
// pipes
import { PriceFilter } from './shared/pipes/priceFilter';

import { app_routing } from './app.routing';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, app_routing],
  declarations: [AppComponent, HomeComponent, HotelComponent, HotelsComponent, PriceFilter],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }