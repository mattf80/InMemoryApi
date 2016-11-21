import { Grape } from './../models/grape';
import { Country } from './../models/country';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';


import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Wine } from './../models/wine';



@Injectable()
export class WineService {

  private baseUrl = 'app/';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getWines(): Observable<Wine[]> {
<<<<<<< HEAD
<<<<<<< HEAD
    return this.http.get(this.baseUrl + 'wines')      
=======
    return this.http.get(this.baseUrl + 'wines')
>>>>>>> 7972afc68a6edfa01e04b77a667a915b4752aaa7
=======
    return this.http.get(this.baseUrl + 'wines')
>>>>>>> 7972afc68a6edfa01e04b77a667a915b4752aaa7
      .map(response => response.json().data as Wine[])
      .catch(this.handleError);
  }

  getCountries(): Observable<Country[]> {
    return this.http.get(this.baseUrl + 'countries')
      .map(response => response.json().data as Country[])
      .catch(this.handleError);
  }

    getGrapes(): Promise<Grape[]> {
    return this.http.get(this.baseUrl + 'grapes')
      .toPromise()
      .then(response => response.json().data as Grape[])
      .catch(this.handleError);
  }

  create(model: Wine): Observable<Wine> {
    console.log(model);
  return this.http
    .post(this.baseUrl + 'wines', JSON.stringify({model}), {headers: this.headers})
    .map(res => res.json().data.model as Wine)
    .catch(this.handleError);
}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
