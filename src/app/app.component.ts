import {Component} from '@angular/core';

import {CountrySearchService} from './CountrySearchService'
import {Country} from "./country";


@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    private loading: boolean = false;
    private countries: Country [];

    constructor(private searchService: CountrySearchService) {
        this.countries = [];
    }

    doSearch(searchString: string) {
        this.loading = true;
        this.searchService
            .searchCountriesByName(searchString)
            .subscribe((data) => {
              this.countries = data;
              this.loading = false;
            });
    }
}
