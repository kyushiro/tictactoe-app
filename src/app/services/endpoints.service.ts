import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ServiceNameService {
  constructor(private httpClient: HttpClient) { }

}
@Injectable({
  providedIn: 'root'
})
export class EndpointsService {
  // private DebugCORSproxyUrl = "https://ancient-hamlet-78673.herokuapp.com/";
  // private baseURL = this.DebugCORSproxyUrl + "https://er7ys4w8ch.execute-api.us-west-2.amazonaws.com/prod/web/";
  private baseURL = "http://localhost:3000";


  // private baseURL = "https://er7ys4w8ch.execute-api.us-west-2.amazonaws.com/dev";
  public endpoints = {
    "about": `${this.baseURL}/about`,
    "create-game": `${this.baseURL}/create-game`,
    "list-games": `${this.baseURL}/list-games`,
    "replay": `${this.baseURL}/replay`
  };

  constructor(
    private http: HttpClient
  ) { }



  // generic http request handler
  request(key: endpointType, method, payload?) {
    if (this.endpoints.hasOwnProperty(key))
      return this.http[method](this.endpoints[key], payload);
    return { error: true, reason: `${method} request to ${this.endpoints[key]} was not sent` };
  }

  requestWithParams(key, method, param) {
    let url = `${this.endpoints[key]}/${param}`;
    return this.http[method](url);
  }
}

export type endpointType = "about" | "create-game" | "list-games" | "replay";
