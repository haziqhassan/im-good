
import { Http,Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

//let apiUrl = 'http://mobilemaipk.af-thesis.com/PHP-Slim-Restful/api/';
let apiUrl = 'https://m3system.000webhostapp.com/mobilemaipk/PHP-Slim-Restful/api/';

@Injectable()
export class AuthServiceProvider {

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }

  postData(credentials, type) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(apiUrl + type, JSON.stringify(credentials),  {headers: headers})
        .subscribe(res => {
          resolve(res.json());
          console.log(res);


        }, (err) => {
          console.log(err);
          reject(err);
        });
    });

  }

}
