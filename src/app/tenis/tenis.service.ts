import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { ITenis } from './interfaces/tenis';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TenisService {

  private _endpoint: string = environment.endPoint;
  private _apiUrl: string = `${this._endpoint}tenis/`;

  constructor(private http: HttpClient) { }

  // Método para obtener todos los videojuegos
  getTenis(): Observable<ITenis[]> {
    return this.http.get<ITenis[]>(`${this._apiUrl}GetTenis`);
  }

  // Método para obtener videojuegos por categoría
  getTenisCategoria(categoria: string): Observable<ITenis[]> {
    return this.http.get<ITenis[]>(`${this._apiUrl}GetTenis/${categoria}`);
  }
}
