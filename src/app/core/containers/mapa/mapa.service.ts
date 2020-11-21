import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapaService {

  private _url: string = 'https://queimadas-app-backend.herokuapp.com/';

  constructor(private _httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getGeoJson():Observable<any> {
    return this._httpClient.get(this._url);
  }

}
