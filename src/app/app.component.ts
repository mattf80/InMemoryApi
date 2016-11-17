import { Country } from './models/country';
import { WineService } from './services/wine.service';
import { Wine } from './models/wine';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  public wine: Wine;

  wines: Wine[];
  selectedWine: Wine;
  countries: Country[];

  constructor(private service: WineService) { }

  getWines() {
    return this.service.getWines()
      .then(wines => this.wines = wines)
      .then(() => console.log(this.wines));
  }

  getCountries(){
        return this.service.getCountries()
      .then(countries => this.countries = countries)
      .then(() => console.log(this.countries));
  }

  add(model: Wine, isValid: boolean): void {
    console.log(model, isValid);
    if (!model) { return; }
    this.service.create(model)
      .then(wine => {
        this.wines.push(wine);
        this.selectedWine = null;
      });

  }

  ngOnInit(): void {

    this.wine = {
      id: null,
      name: '',
      country: { id: null, name: ''}
    }

    this.getWines();
    this.getCountries();
  }

}
