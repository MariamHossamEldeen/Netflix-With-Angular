import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PortfolioApiService {

  constructor(private _HttpClient : HttpClient) { }
  getApi():Observable<any>{
    return this._HttpClient.get('https://955u06d6fa.execute-api.eu-west-1.amazonaws.com/latest/%7B%0A%20%20%22Portfolio%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22background-color%22%20%3A%20%22%23303e50%22%2C%0A%20%20%20%20%20%20%22image_url%22%3A%20%22https%3A%2F%2Frouteegypt.com%2Fstart-angular%2Fassets%2Fimg%2Fportfolio%2Fcabin.png%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22background-color%22%20%3A%20%22%23303e50%22%2C%0A%20%20%20%20%20%20%22image_url%22%3A%20%22https%3A%2F%2Frouteegypt.com%2Fstart-angular%2Fassets%2Fimg%2Fportfolio%2Fcake.png%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22background-color%22%20%3A%20%22%23303e50%22%2C%0A%20%20%20%20%20%20%22image_url%22%3A%20%22https%3A%2F%2Frouteegypt.com%2Fstart-angular%2Fassets%2Fimg%2Fportfolio%2Fcircus.png%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22background-color%22%20%3A%20%22%23303e50%22%2C%0A%20%20%20%20%20%20%22image_url%22%3A%20%22https%3A%2F%2Frouteegypt.com%2Fstart-angular%2Fassets%2Fimg%2Fportfolio%2Fgame.png%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22background-color%22%20%3A%20%22%23303e50%22%2C%0A%20%20%20%20%20%20%22image_url%22%3A%20%22https%3A%2F%2Frouteegypt.com%2Fstart-angular%2Fassets%2Fimg%2Fportfolio%2Fsafe.png%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22background-color%22%20%3A%20%22%23303e50%22%2C%0A%20%20%20%20%20%20%22image_url%22%3A%20%22https%3A%2F%2Frouteegypt.com%2Fstart-angular%2Fassets%2Fimg%2Fportfolio%2Fsubmarine.png%22%0A%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%5D%0A%7D%0A%0A')

  }
}
