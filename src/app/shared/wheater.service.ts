import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WheaterService {

  private url = ''
  // private url = 'http://api.weatherbit.io/v2.0/current?&key=65c413809f7c4a2d886d3aa6aaff90e8&city_id=3652462&lang=es'
  constructor(private http: HttpClient) { }

  obtenerTemperatura(): Observable<any>{
    return this.http.get(this.url);
  }


}
