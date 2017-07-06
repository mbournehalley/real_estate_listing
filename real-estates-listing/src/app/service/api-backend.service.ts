import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http'; 
import { Observable }     from 'rxjs/Observable';

import { forEach }        from 'lodash';  

import { RealEstate }     from '../model/real-estate';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

const BATMANREALTY_ENDPOINT = './mocks/batmanRealty.json';
const SUPERMANREALTY_ENDPOINT = './mocks/supermanRealty.json';

@Injectable()
export class ApiBackendService {

  constructor(private http: Http) { }

  getRealEstate () : Observable<RealEstate[]> {
    const batmanRealty = this.http.get(BATMANREALTY_ENDPOINT)
                          .map(this.extractData)
                          .catch(this.handleError);
    const supermanRealty = this.http.get(SUPERMANREALTY_ENDPOINT)
                            .map(this.extractData)
                            .catch(this.handleError);
    
    return Observable
            .forkJoin([batmanRealty, supermanRealty])
            .map(this.mapData);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }

  private mapData(res) {
    let batmanResponse;
    let supermanResponse;
    let result: RealEstate[];
    let batman = [];
    let superman = [];

    batmanResponse = res[0];
    supermanResponse = res[1];

    forEach(batmanResponse, function(value, key) {
      let realestate = new RealEstate(
        key,
        value['cost'],
        value['beds'],
        value['baths'],
        value['sq_ft'],
        "",
        value['img'],
        value['url']
      );

      batman.push(realestate);
    });

    forEach(supermanResponse.items, function(value, key) {
      let realestate = new RealEstate(
        value['address'],
        value['price'].replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        value['beds'],
        value['baths'],
        value['sqft'],
        value['built'],
        value['thumb'],
        value['url']
      );

      superman.push(realestate);
    });

    return [...batman, ...superman];
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }
}
