import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {CountrySearchService} from "./country-search-service";
import {ShippingCostService} from "./shipping-cost-service";
import {CountryService} from "./country-service";

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [CountrySearchService, ShippingCostService, CountryService]
})
export class AppModule {
}
