import { Grape } from './models/grape';
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
  title = 'Wine form';

  public wine: Wine;

  wines: Wine[];
  selectedWine: Wine;
  countries: Country[];
  grapes: Grape[];

  constructor(private service: WineService) { }

  getWines() {
    return this.service.getWines()
      .then(wines => this.wines = wines)
      .then(() => console.log(this.wines));
  }

  getCountries() {
    return this.service.getCountries()
      .then(countries => this.countries = countries)
      .then(() => console.log(this.countries));
  }

  getGrapes() {
    return this.service.getGrapes()
      .then(grapes => this.grapes = grapes)
      .then(() => console.log(this.grapes));
  }

  add(model: Wine, isValid: boolean): void {
    console.log(model);
    model.blend = [];
    if (!model) { return; }
    this.service.create(model)
      .then(wine => {
        this.wines.push(wine);
        this.selectedWine = null;
      });

  }

   addGrape(wine: Wine, grape: Grape, percentage:number): void {
     console.log(grape, percentage);
     wine.blend.push({grape, percentage});
     

   }

  ngOnInit(): void {

    this.wine = {
      id: null,
      name: '',
      country: { id: null, name: '' },
      blend: [{ grape: null, percentage: 0 }]
    }

    this.getWines();
    this.getCountries();
    this.getGrapes();
  }

}
