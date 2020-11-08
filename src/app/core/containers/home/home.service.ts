import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private _url: string;

  constructor(private _httpClient: HttpClient) {
    this._url = this._getUrl();
   }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'text/html' })
  }

  _getUrl(): string {
    let data = new Date();
    let dia = data.getDate() < 10 ? '0' + data.getDate() : data.getDate();
    let mes = (data.getMonth() + 1) < 10 ? '0' + data.getMonth() + 1: data.getMonth() + 1;
    let ano: number = data.getFullYear() - 2000;
    let url = `http://queimadas.dgi.inpe.br/queimadas/portal-static/grafico_comparativo_sazonal_pais_brasil.html?_=${mes}${dia}${ano}01#_ABSTRACT_RENDERER_ID_1`
    return url;
  }

  getGraffic():Observable<any> {
    return this._httpClient.get(this._url);
  }

}
