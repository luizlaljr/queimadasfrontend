import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapaService {

  private _url: string = 'https://queimadas.dgi.inpe.br/queimadas/dados-abertos/download/?utm_campaign=dados-abertos&outputFormat=json&utm_medium=landing-page&time=48h&utm_content=focos_brasil_48h&id=focos_brasil&utm_source=landing-page';

  constructor(private _httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getGeoJson():Observable<any> {
    return this._httpClient.get(this._url);
  }

}
