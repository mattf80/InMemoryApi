<<<<<<< HEAD
=======
import { WineService } from './../../services/wine.service';
import { Grape } from './../../models/grape';
import { Country } from './../../models/country';
import { Wine } from './../../models/wine';
>>>>>>> 7972afc68a6edfa01e04b77a667a915b4752aaa7
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css']
})
<<<<<<< HEAD:src/app/wine/wine-list/wine-list.component.ts
export class WineListComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit() {
=======
  title = 'Wine form';

  public wine: Wine;

  wines: Wine[];
  selectedWine: Wine;
  countries: Country[];
  grapes: Grape[];

  constructor(private service: WineService) { }

  getWines() {
    return this.service.getWines()
      .subscribe(wines => this.wines = wines);
  }

  getCountries() {
    return this.service.getCountries()
      .subscribe(countries => this.countries = countries);
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
      .subscribe(wine => {
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
>>>>>>> 7972afc68a6edfa01e04b77a667a915b4752aaa7
  }
=======
export class AppComponent {

>>>>>>> 7972afc68a6edfa01e04b77a667a915b4752aaa7:src/app/app.component.ts

}
