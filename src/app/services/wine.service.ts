import { Country } from './../models/country';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { Wine } from './../models/wine';

@Injectable()
export class WineService {

  private baseUrl = 'app/';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getWines(): Promise<Wine[]> {
    return this.http.get(this.baseUrl + 'wines')
      .toPromise()
      .then(response => response.json().data as Wine[])
      .catch(this.handleError);
  }

  getCountries(): Promise<Country[]> {
    return this.http.get(this.baseUrl + 'countries')
      .toPromise()
      .then(response => response.json().data as Country[])
      .catch(this.handleError);
  }

  create(model: Wine): Promise<Wine> {
    console.log(model);
  return this.http
    .post(this.baseUrl + 'wines', JSON.stringify({model}), {headers: this.headers})
    .toPromise()
    .then(res => res.json().data.model as Wine)
    .catch(this.handleError);
}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
