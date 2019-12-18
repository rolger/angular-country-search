import {Component} from '@angular/core';

import {Country} from './country';
import {CountrySearchService} from './country-search-service';

@Component({
    selector: 'app-country-search',
    templateUrl: './country.component.html',
    styleUrls: ['./country.component.css']
})
export class CountryComponent {
    loading = false;
    countries: Country [];

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
